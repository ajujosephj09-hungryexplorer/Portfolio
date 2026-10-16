import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://ajujosephjohn.com', lastModified: new Date() },
    { url: 'https://ajujosephjohn.com/about', lastModified: new Date() },
    { url: 'https://ajujosephjohn.com/contact', lastModified: new Date() },
    {
      url: 'https://ajujosephjohn.com/case-studies/canadahelps-turnaround',
      lastModified: new Date(),
    },
    {
      url: 'https://ajujosephjohn.com/case-studies/fiserv-portfolio',
      lastModified: new Date(),
    },
    {
      url: 'https://ajujosephjohn.com/case-studies/hpcc-platform',
      lastModified: new Date(),
    },
    {
      url: 'https://ajujosephjohn.com/case-studies/redline',
      lastModified: new Date(),
    },
  ]
}
