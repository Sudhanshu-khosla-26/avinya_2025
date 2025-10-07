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
  title: "Avinya 2025 | Annual Tech Fest of GTB4CEC",
  description:
    "Join Avinya 2025 — the flagship annual tech fest of Guru Tegh Bahadur 4th Centenary Engineering College. Celebrate innovation, creativity, and technology through 10 electrifying sub-events including AI Creative Clash, Bug Smash, Think Tank, and more!",
  keywords:
    "Avinya 2025, GTB4CEC, The Empirical Society, tech fest, innovation, AI event, coding competition, robotics, engineering college, technology festival, creativity, startup ideas, hackathon",
  authors: [{ name: "The Empirical Society" }],
  creator: "The Empirical Society, GTB4CEC",
  publisher: "Guru Tegh Bahadur 4th Centenary Engineering College",
  openGraph: {
    title: "Avinya 2025 | GTB4CEC’s Flagship Tech Fest",
    description:
      "Experience innovation, AI, coding, creativity, and collaboration at Avinya 2025 — the premier tech festival of GTB4CEC. Compete, create, and celebrate technology with The Empirical Society.",
    url: "https://avinya-2025-nu.vercel.app/",
    siteName: "Avinya 2025",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/mainPoster.webp", // replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Avinya 2025 - GTB4CEC Tech Fest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avinya 2025 | GTB4CEC’s Flagship Tech Fest",
    description:
      "Celebrate innovation, creativity, and technology at Avinya 2025. Explore 10 dynamic sub-events and shape the future with The Empirical Society.",
    creator: "@theempiricalsociety", // optional if you have a handle
    images: ["/mainPoster.webp"], // same OG image
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
    icon: [{ url: "/favicon.ico", sizes: "any" }],
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
        <SmoothScrolling>
          <Header />
          {children}
        </SmoothScrolling>
        <Analytics />
      </body>
    </html>
  );
}
