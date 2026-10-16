#!/usr/bin/env node

/**
 * Cross-page HTML validation for the static export.
 * Runs against the out/ directory after `next build`.
 * Zero external dependencies — Node.js built-ins only.
 */

import { readFileSync, existsSync } from 'fs'
import { join, resolve } from 'path'

const OUT_DIR = resolve(process.cwd(), 'out')
const BASE_URL = 'https://ajujosephjohn.vercel.app'

const ROUTES = [
  { path: '/', file: 'index.html' },
  { path: '/about', file: 'about.html' },
  { path: '/contact', file: 'contact.html' },
  {
    path: '/case-studies/canadahelps-turnaround',
    file: 'case-studies/canadahelps-turnaround.html',
  },
  {
    path: '/case-studies/ensemble',
    file: 'case-studies/ensemble.html',
  },
  {
    path: '/case-studies/hpcc-platform',
    file: 'case-studies/hpcc-platform.html',
  },
  {
    path: '/case-studies/redline',
    file: 'case-studies/redline.html',
  },
]

const CASE_STUDY_ROUTES = ROUTES.filter((r) =>
  r.path.startsWith('/case-studies/')
)

let failures = []
let passCount = 0

function pass(msg) {
  console.log(`  ✓ ${msg}`)
  passCount++
}

function fail(msg) {
  console.log(`  ✗ ${msg}`)
  failures.push(msg)
}

function readHtml(file) {
  const fullPath = join(OUT_DIR, file)
  return readFileSync(fullPath, 'utf-8')
}

// ---------------------------------------------------------------------------
// 1. Route completeness
// ---------------------------------------------------------------------------
console.log('\n── Route completeness ──')

for (const route of ROUTES) {
  const fullPath = join(OUT_DIR, route.file)
  if (existsSync(fullPath)) {
    pass(`${route.file} exists`)
  } else {
    fail(`${route.file} missing from out/`)
  }
}

// ---------------------------------------------------------------------------
// 2. SEO per page
// ---------------------------------------------------------------------------
console.log('\n── SEO per page ──')

for (const route of ROUTES) {
  const fullPath = join(OUT_DIR, route.file)
  if (!existsSync(fullPath)) continue

  const html = readHtml(route.file)
  const label = route.file

  // <title>
  if (/<title[^>]*>.+<\/title>/is.test(html)) {
    pass(`${label} has <title>`)
  } else {
    fail(`${label} missing <title>`)
  }

  // <meta name="description">
  if (/<meta\s[^>]*name=["']description["'][^>]*>/i.test(html)) {
    pass(`${label} has meta description`)
  } else {
    fail(`${label} missing meta description`)
  }

  // og:title
  if (/<meta\s[^>]*property=["']og:title["'][^>]*>/i.test(html)) {
    pass(`${label} has og:title`)
  } else {
    fail(`${label} missing og:title`)
  }

  // og:description
  if (/<meta\s[^>]*property=["']og:description["'][^>]*>/i.test(html)) {
    pass(`${label} has og:description`)
  } else {
    fail(`${label} missing og:description`)
  }

  // og:url
  if (/<meta\s[^>]*property=["']og:url["'][^>]*>/i.test(html)) {
    pass(`${label} has og:url`)
  } else {
    fail(`${label} missing og:url`)
  }

  // canonical
  if (/<link\s[^>]*rel=["']canonical["'][^>]*>/i.test(html)) {
    pass(`${label} has canonical link`)
  } else {
    fail(`${label} missing canonical link`)
  }

  // Exactly one <h1>
  const h1Matches = html.match(/<h1[\s>]/gi)
  const h1Count = h1Matches ? h1Matches.length : 0
  if (h1Count === 1) {
    pass(`${label} has exactly one <h1>`)
  } else {
    fail(`${label} has ${h1Count} <h1> elements (expected 1)`)
  }

  // No skipped heading levels
  const headingTags = [...html.matchAll(/<h([1-6])[\s>]/gi)].map((m) =>
    parseInt(m[1], 10)
  )
  let headingSkipped = false
  for (let i = 1; i < headingTags.length; i++) {
    const current = headingTags[i]
    const prev = headingTags[i - 1]
    // A heading can go deeper by at most one level, or go back up any amount
    if (current > prev + 1) {
      headingSkipped = true
      fail(
        `${label} skips heading level: h${prev} → h${current} (position ${i})`
      )
      break
    }
  }
  if (!headingSkipped) {
    pass(`${label} heading hierarchy is valid`)
  }
}

// ---------------------------------------------------------------------------
// 3. Navigation integrity — internal links resolve
// ---------------------------------------------------------------------------
console.log('\n── Navigation integrity ──')

const knownPaths = new Set(ROUTES.map((r) => r.path))
// Also allow hash-only links and the root
knownPaths.add('/')

for (const route of ROUTES) {
  const fullPath = join(OUT_DIR, route.file)
  if (!existsSync(fullPath)) continue

  const html = readHtml(route.file)
  const hrefPattern = /<a\s[^>]*href=["']([^"']+)["'][^>]*>/gi
  let match
  const broken = []

  while ((match = hrefPattern.exec(html)) !== null) {
    const href = match[1]

    // Skip external links, anchors, mailto, tel, javascript
    if (
      href.startsWith('http') ||
      href.startsWith('#') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('javascript:')
    ) {
      continue
    }

    // Strip hash and query
    const cleanHref = href.split('#')[0].split('?')[0]
    if (!cleanHref) continue // was just "#something"

    // Normalize: remove trailing slash
    const normalized = cleanHref.endsWith('/')
      ? cleanHref.slice(0, -1) || '/'
      : cleanHref

    if (!knownPaths.has(normalized)) {
      broken.push(href)
    }
  }

  if (broken.length === 0) {
    pass(`${route.file} — all internal links resolve`)
  } else {
    fail(`${route.file} — broken internal links: ${broken.join(', ')}`)
  }
}

// ---------------------------------------------------------------------------
// 4. Schema markup (JSON-LD)
// ---------------------------------------------------------------------------
console.log('\n── Schema markup ──')

function getJsonLdBlocks(html) {
  const blocks = []
  const pattern =
    /<script\s[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  let m
  while ((m = pattern.exec(html)) !== null) {
    try {
      blocks.push(JSON.parse(m[1]))
    } catch {
      // ignore parse errors
    }
  }
  return blocks
}

function flattenJsonLd(blocks) {
  const flat = []
  for (const block of blocks) {
    if (Array.isArray(block)) {
      flat.push(...block)
    } else if (block['@graph']) {
      flat.push(...block['@graph'])
    } else {
      flat.push(block)
    }
  }
  return flat
}

function hasType(items, typeName) {
  return items.some((item) => {
    const t = item['@type']
    if (Array.isArray(t)) return t.includes(typeName)
    return t === typeName
  })
}

// Landing page: Person + BreadcrumbList
{
  const html = readHtml('index.html')
  const items = flattenJsonLd(getJsonLdBlocks(html))
  if (hasType(items, 'Person')) {
    pass('index.html has JSON-LD Person')
  } else {
    fail('index.html missing JSON-LD Person')
  }
  if (hasType(items, 'BreadcrumbList')) {
    pass('index.html has JSON-LD BreadcrumbList')
  } else {
    fail('index.html missing JSON-LD BreadcrumbList')
  }
}

// About page: Person
{
  const html = readHtml('about.html')
  const items = flattenJsonLd(getJsonLdBlocks(html))
  if (hasType(items, 'Person')) {
    pass('about.html has JSON-LD Person')
  } else {
    fail('about.html missing JSON-LD Person')
  }
}

// Case study pages: CreativeWork + BreadcrumbList
for (const route of CASE_STUDY_ROUTES) {
  const fullPath = join(OUT_DIR, route.file)
  if (!existsSync(fullPath)) continue

  const html = readHtml(route.file)
  const items = flattenJsonLd(getJsonLdBlocks(html))

  if (hasType(items, 'CreativeWork')) {
    pass(`${route.file} has JSON-LD CreativeWork`)
  } else {
    fail(`${route.file} missing JSON-LD CreativeWork`)
  }

  if (hasType(items, 'BreadcrumbList')) {
    pass(`${route.file} has JSON-LD BreadcrumbList`)
  } else {
    fail(`${route.file} missing JSON-LD BreadcrumbList`)
  }
}

// ---------------------------------------------------------------------------
// 5. Sitemap
// ---------------------------------------------------------------------------
console.log('\n── Sitemap ──')

const sitemapPath = join(OUT_DIR, 'sitemap.xml')
if (existsSync(sitemapPath)) {
  pass('sitemap.xml exists in out/')

  const sitemapContent = readFileSync(sitemapPath, 'utf-8')
  const expectedUrls = ROUTES.map((r) =>
    r.path === '/' ? BASE_URL : `${BASE_URL}${r.path}`
  )

  for (const url of expectedUrls) {
    if (sitemapContent.includes(url)) {
      pass(`sitemap.xml contains ${url}`)
    } else {
      fail(`sitemap.xml missing ${url}`)
    }
  }
} else {
  fail('sitemap.xml missing from out/')
}

// ---------------------------------------------------------------------------
// 6. Content checks
// ---------------------------------------------------------------------------
console.log('\n── Content checks ──')

// CanadaHelps framing on canadahelps-turnaround and ensemble
for (const file of [
  'case-studies/canadahelps-turnaround.html',
  'case-studies/ensemble.html',
]) {
  const fullPath = join(OUT_DIR, file)
  if (!existsSync(fullPath)) continue

  const html = readHtml(file)
  if (/\$260M\+/i.test(html) || /processing volume/i.test(html)) {
    pass(`${file} contains CanadaHelps framing text`)
  } else {
    fail(
      `${file} missing CanadaHelps framing text ("$260M+" or "processing volume")`
    )
  }
}

// Redline proof link
{
  const file = 'case-studies/redline.html'
  const fullPath = join(OUT_DIR, file)
  if (existsSync(fullPath)) {
    const html = readHtml(file)
    if (html.includes('redline-kappa-umber.vercel.app')) {
      pass(`${file} contains Redline proof link URL`)
    } else {
      fail(`${file} missing proof link URL (redline-kappa-umber.vercel.app)`)
    }
  }
}

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------
console.log('\n══════════════════════════════════════')
console.log(`  ${passCount} passed, ${failures.length} failed`)
console.log('══════════════════════════════════════\n')

if (failures.length > 0) {
  console.log('Failures:')
  for (const f of failures) {
    console.log(`  • ${f}`)
  }
  console.log()
  process.exit(1)
} else {
  console.log('All checks passed.\n')
  process.exit(0)
}
