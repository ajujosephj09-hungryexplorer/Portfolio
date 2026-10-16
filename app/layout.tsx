import type { Metadata } from 'next'
import { Libre_Baskerville, Source_Sans_3 } from 'next/font/google'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import './globals.css'

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-source-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ajujosephjohn.com'),
  title: {
    default: 'Aju Joseph John | Product & Commercial Leader',
    template: '%s | Aju Joseph John',
  },
  description:
    'Product and commercial leader with 20 years building products from zero and running the P&L to scale them. B2B SaaS, fintech, payments, data platforms.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Aju Joseph John',
    title: 'Aju Joseph John | Product & Commercial Leader',
    description:
      'Product and commercial leader with 20 years building products from zero and running the P&L to scale them. B2B SaaS, fintech, payments, data platforms.',
    url: 'https://ajujosephjohn.com',
  },
  alternates: {
    canonical: 'https://ajujosephjohn.com',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${sourceSans.variable}`}
    >
      <body className="font-sans min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:no-underline"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
