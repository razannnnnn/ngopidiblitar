export default function sitemap() {
  // Ganti dengan domain asli jika sudah menggunakan custom domain (misal: https://ngopidiblitar.com)
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL; 
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1, // Prioritas tinggi untuk Homepage
    },
    // Jika web Anda memiliki daftar rute halaman yang banyak (misal detail setiap cafe), 
    // Anda bisa meloop datanya di sini dan me-return format yang sama.
  ]
}
