import { MetadataRoute } from 'next';
import { questions } from '@/lib/questions';

// Helper to create a slug from a task name
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '');

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: Replace with your actual domain
  const baseUrl = 'https://ccse.leinaro.com/';

  // Get unique tasks and create slugs for the quiz pages
  const tasks = [...new Set(questions.map((q) => q.task))];
  const taskUrls = tasks.map((task) => {
    return {
      url: `${baseUrl}/quiz/${slugify(task)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    };
  });

  const staticUrls = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/politica-privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/v2`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  return [...staticUrls, ...taskUrls];
}
