import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://ajujosephjohn.vercel.app', lastModified: new Date() },
    { url: 'https://ajujosephjohn.vercel.app/about', lastModified: new Date() },
    { url: 'https://ajujosephjohn.vercel.app/contact', lastModified: new Date() },
    {
      url: 'https://ajujosephjohn.vercel.app/case-studies/canadahelps-turnaround',
      lastModified: new Date(),
    },
    {
      url: 'https://ajujosephjohn.vercel.app/case-studies/ensemble',
      lastModified: new Date(),
    },
    {
      url: 'https://ajujosephjohn.vercel.app/case-studies/hpcc-platform',
      lastModified: new Date(),
    },
    {
      url: 'https://ajujosephjohn.vercel.app/case-studies/redline',
      lastModified: new Date(),
    },
  ]
}
