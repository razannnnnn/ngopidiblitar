import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WelcomeModal } from "@/components/welcome-modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL), // Ganti URL ini saat sudah punya domain asli (atau biarkan default Vercel)
  title: {
    default: "NgopiDiBlitar | Rekomendasi Cafe & Tempat Nongkrong Hits di Blitar",
    template: "%s | NgopiDiBlitar"
  },
  description: "Daftar rekomendasi cafe terbaik, hits, instagramable, dan estetik di Blitar. Temukan tempat nongkrong asik, WiFi cepat, dan kopi enak hanya di NgopiDiBlitar.",
  keywords: ["cafe blitar", "tempat nongkrong blitar", "kopi blitar", "ngopi di blitar", "cafe aesthetic blitar", "cafe hits blitar", "rekomendasi cafe blitar", "coffee shop blitar", "blitar"],
  authors: [{ name: 'NgopiDiBlitar' }],
  creator: 'NgopiDiBlitar',
  publisher: 'NgopiDiBlitar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'NgopiDiBlitar | Rekomendasi Cafe & Tempat Nongkrong Hits di Blitar',
    description: 'Daftar rekomendasi cafe terbaik, hits, instagramable, dan estetik di Blitar. Temukan tempat nongkrong asik, WiFi cepat, dan kopi enak hanya di NgopiDiBlitar.',
    url: process.env.NEXT_PUBLIC_APP_URL, 
    siteName: 'NgopiDiBlitar',
    images: [
      {
        url: '/og-image.png', // Pastikan nanti membuat gambar og-image.jpg di folder public untuk link sharing WhatsApp/FB/dll
        width: 1200,
        height: 630,
        alt: 'NgopiDiBlitar Preview Image',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NgopiDiBlitar | Rekomendasi Cafe & Tempat Nongkrong Hits di Blitar',
    description: 'Daftar rekomendasi cafe terbaik, hits, instagramable, dan estetik di Blitar. Temukan tempat nongkrong asik, WiFi cepat, dan kopi enak hanya di NgopiDiBlitar.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  verification: {
    google: 'KODE_VERIFIKASI_GOOGLE_SEARCH_CONSOLE', // Ganti dengan kode Tag HTML dari Google Search Console
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col antialiased bg-dot-pattern selection:bg-foreground selection:text-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 w-full mx-auto max-w-4xl px-4 pt-4 pb-8 sm:pt-6 sm:pb-12">
            {children}
          </main>
          <Footer />
          <WelcomeModal />
        </ThemeProvider>
      </body>
    </html>
  );
}
