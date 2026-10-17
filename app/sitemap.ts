import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://ajujosephjohn.com', lastModified: new Date('2026-10-17') },
    { url: 'https://ajujosephjohn.com/about', lastModified: new Date('2026-10-17') },
    { url: 'https://ajujosephjohn.com/case-studies', lastModified: new Date('2026-10-17') },
    {
      url: 'https://ajujosephjohn.com/case-studies/canadahelps-turnaround',
      lastModified: new Date('2026-10-15'),
    },
    {
      url: 'https://ajujosephjohn.com/case-studies/fiserv-portfolio',
      lastModified: new Date('2026-10-15'),
    },
    {
      url: 'https://ajujosephjohn.com/case-studies/hpcc-platform',
      lastModified: new Date('2026-10-15'),
    },
    {
      url: 'https://ajujosephjohn.com/case-studies/redline',
      lastModified: new Date('2026-10-15'),
    },
  ]
}
