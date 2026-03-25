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
  title: "NgopiDiBlitar | Rekomendasi Kopian Di Blitar",
  description: "Daftar cafe terbaik dan hits di Blitar. Temukan tempat nongkrong asik dengan gaya notion.",
  icons: {
    icon: '/favicon.svg',
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
