import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://suburbanshadows.com'
  
  const episodes = [
    { slug: 'applegate-jane-doe', date: '2026-02-14' },
    { slug: 'love-slave-killers', date: '2026-02-14' },
    { slug: 'family-next-door', date: '2026-02-12' },
    { slug: 'ballroom-bodies', date: '2026-02-12' },
  ]
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/episodes`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...episodes.map(ep => ({
      url: `${baseUrl}/episodes/${ep.slug}`,
      lastModified: new Date(ep.date),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/listen`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
