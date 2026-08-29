import { MetadataRoute } from 'next'
import { tools } from '@/data/tools'

// 1. الحصول على التاريخ الحالي للتحديث التلقائي
const currentDate = new Date()

// 2. الصفحات الثابتة الرئيسية
const staticPages = [
  {
    url: 'https://pngjpgconvert.com',
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 1.0,
  },
  {
    url: 'https://pngjpgconvert.com/tools',
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.95,
  },
  {
    url: 'https://pngjpgconvert.com/about',
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: 'https://pngjpgconvert.com/contact',
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  },
  {
    url: 'https://pngjpgconvert.com/privacy-policy',
    lastModified: currentDate,
    changeFrequency: 'yearly' as const,
    priority: 0.4,
  },
  {
    url: 'https://pngjpgconvert.com/terms',
    lastModified: currentDate,
    changeFrequency: 'yearly' as const,
    priority: 0.4,
  },
  {
    url: 'https://pngjpgconvert.com/blog',
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  },
]

// 3. إنشاء روابط الأدوات الديناميكية
const toolPages = tools.map((tool) => ({
  url: `https://pngjpgconvert.com/tools/${tool.slug}`,
  lastModified: currentDate,
  changeFrequency: 'weekly' as const,
  priority: tool.featured ? 0.9 : 0.8,
}))

// 4. إضافة روابط إضافية للفئات
const categoryPages = [
  {
    url: 'https://pngjpgconvert.com/tools/convert',
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  },
  {
    url: 'https://pngjpgconvert.com/tools/compress',
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  },
  {
    url: 'https://pngjpgconvert.com/tools/resize',
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  },
  {
    url: 'https://pngjpgconvert.com/tools/edit',
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  },
]

// 5. دمج جميع الصفحات
export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticPages, ...toolPages, ...categoryPages]
}