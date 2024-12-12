import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.URL_BASE!,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: process.env.URL_BASE + "/en",
          zh: process.env.URL_BASE + "/zh",
          ar: process.env.URL_BASE + "/ar",
          de: process.env.URL_BASE + "/de",
          es: process.env.URL_BASE + "/es",
          fr: process.env.URL_BASE + "/fr",
          it: process.env.URL_BASE + "/it",
          kr: process.env.URL_BASE + "/kr",
          pt: process.env.URL_BASE + "/pt",
        },
      },
    },
  ]
}