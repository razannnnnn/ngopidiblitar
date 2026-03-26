export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ngopidiblitar.vercel.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
