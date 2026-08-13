import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://imageorbits.com',
      lastModified: new Date('2026-08-10T02:26:16.740Z'),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://imageorbits.com/tools',
      lastModified: new Date('2026-08-10T02:26:16.740Z'),
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: 'https://imageorbits.com/about',
      lastModified: new Date('2026-08-10T02:26:16.740Z'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://imageorbits.com/contact',
      lastModified: new Date('2026-08-10T02:26:16.740Z'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://imageorbits.com/privacy-policy',
      lastModified: new Date('2026-08-10T02:26:16.740Z'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: 'https://imageorbits.com/terms',
      lastModified: new Date('2026-08-10T02:26:16.740Z'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: 'https://imageorbits.com/tools/png-to-jpg',
      lastModified: new Date('2026-08-10T02:26:16.740Z'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://imageorbits.com/tools/jpg-to-png',
      lastModified: new Date('2026-08-10T02:26:16.740Z'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://imageorbits.com/tools/png-to-webp',
      lastModified: new Date('2026-08-10T02:26:16.740Z'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://imageorbits.com/tools/webp-to-png',
      lastModified: new Date('2026-08-10T02:26:16.740Z'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://imageorbits.com/tools/compress',
      lastModified: new Date('2026-08-10T02:26:16.740Z'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://imageorbits.com/tools/resize',
      lastModified: new Date('2026-08-10T02:26:16.740Z'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://imageorbits.com/tools/crop',
      lastModified: new Date('2026-08-10T02:26:16.740Z'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://imageorbits.com/tools/rotate',
      lastModified: new Date('2026-08-10T02:26:16.740Z'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://imageorbits.com/tools/watermark',
      lastModified: new Date('2026-08-10T02:26:16.740Z'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}