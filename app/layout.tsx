import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/portfolio/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://aqsan.dev"),
  title: {
    default: "Aqsan.dev - Full Stack Web Developer",
    template: "%s | Aqsan.dev",
  },
  description:
    "Aqsan.dev is a personal portfolio website showcasing my work as a Full Stack Web Developer. Specializing in modern web technologies like Next.js, React, and TypeScript.",
  keywords: [
    "Aqsan",
    "Full Stack Developer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
    "Freelance",
    "Indonesia",
  ],
  authors: [
    {
      name: "Muhammad Raffi Aqsan",
      url: process.env.NEXT_PUBLIC_BASE_URL || "https://aqsan.dev",
    },
  ],
  creator: "Muhammad Raffi Aqsan",
  publisher: "Muhammad Raffi Aqsan",
  openGraph: {
    title: "Aqsan.dev - Full Stack Web Developer",
    description:
      "Aqsan.dev is a personal portfolio website showcasing my work as a Full Stack Web Developer. Specializing in modern web technologies like Next.js, React, and TypeScript.",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://aqsan.dev",
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || "Aqsan.dev",
    images: [
      {
        url: "/og-image.png", // Pastikan gambar ini ada di folder public Anda
        width: 1200,
        height: 630,
        alt: "Aqsan.dev - Full Stack Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqsan.dev - Full Stack Web Developer",
    description:
      "Aqsan.dev is a personal portfolio website showcasing my work as a Full Stack Web Developer. Specializing in modern web technologies like Next.js, React, and TypeScript.",
    images: ["/og-image.png"], // Pastikan gambar ini ada di folder public Anda
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@yourtwitterhandle",
  },
  icons: {
    icon: "/images/icon.svg", // Menggunakan logo-1.svg sebagai favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="h-16" />
          <main role="main" aria-label="Main content of the website">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
