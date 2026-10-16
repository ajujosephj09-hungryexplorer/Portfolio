import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://portfolio-git-main-aju-joseph-johns-projects.vercel.app', lastModified: new Date() },
    { url: 'https://portfolio-git-main-aju-joseph-johns-projects.vercel.app/about', lastModified: new Date() },
    { url: 'https://portfolio-git-main-aju-joseph-johns-projects.vercel.app/contact', lastModified: new Date() },
    {
      url: 'https://portfolio-git-main-aju-joseph-johns-projects.vercel.app/case-studies/canadahelps-turnaround',
      lastModified: new Date(),
    },
    {
      url: 'https://portfolio-git-main-aju-joseph-johns-projects.vercel.app/case-studies/fiserv-portfolio',
      lastModified: new Date(),
    },
    {
      url: 'https://portfolio-git-main-aju-joseph-johns-projects.vercel.app/case-studies/hpcc-platform',
      lastModified: new Date(),
    },
    {
      url: 'https://portfolio-git-main-aju-joseph-johns-projects.vercel.app/case-studies/redline',
      lastModified: new Date(),
    },
  ]
}
