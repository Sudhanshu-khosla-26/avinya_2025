import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Avinya 2025 | Premier Tech & Robotics Event",
  description:
    "Join Avinya 2025 - A groundbreaking technology and robotics symposium featuring cutting-edge innovations, AI demonstrations, and expert workshops. Experience the future of technology.",
  keywords:
    "Avinya 2025, robotics event, technology symposium, AI conference, tech fest, innovation, engineering, robotics competition",
  authors: [{ name: "Avinya Team" }],
  creator: "Avinya 2025",
  publisher: "Avinya",
  openGraph: {
    title: "Avinya 2025 | Premier Tech & Robotics Event",
    description:
      "Experience the future of technology at Avinya 2025. Cutting-edge robotics, AI innovations, and expert-led workshops.",
    type: "website",
    locale: "en_US",
    siteName: "Avinya 2025",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avinya 2025 | Premier Tech & Robotics Event",
    description:
      "Experience the future of technology at Avinya 2025. Cutting-edge robotics, AI innovations, and expert-led workshops.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and Touch Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Google Fonts for Allura, Kalam, Rokkitt */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&family=Kalam:wght@300;400;700&family=Rokkitt:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Analytics />
        <SmoothScrolling>
          <Header />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
