// Simple Next.js (app router) sitemap generator
// Adjust SITE_URL if your domain changes.
export const dynamic = 'force-static';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://morrisutilitysolutions.com';

export default async function sitemap() {
  const routes = [
    '',            // home
    '/about',
    '/services',
    '/contact',
  ];

  const now = new Date().toISOString();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.7,
  }));
}