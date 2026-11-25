import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

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

export const metadata: Metadata = {
  title: {
    default: "AurTho Clinic - Premium Orthopedic Care & Joint Specialists",
    template: "%s | AurTho Clinic",
  },
  description:
    "Expert orthopedic care and treatment for joint replacement, sports medicine, spine care, and more. Schedule a consultation with our board-certified specialists today.",
  keywords:
    "orthopedic clinic, orthopedic surgeon, joint replacement, sports medicine, spine care, bone health, orthopedic treatment, knee replacement, hip replacement, shoulder surgery",
  authors: [{ name: "AurTho Clinic" }],
  creator: "AurTho Clinic",
  publisher: "AurTho Clinic",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aurtho-clinic.com",
    siteName: "AurTho Clinic",
    title: "AurTho Clinic - Premium Orthopedic Care & Joint Specialists",
    description:
      "Expert orthopedic care and treatment for joint replacement, sports medicine, spine care, and more. Schedule a consultation with our board-certified specialists today.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AurTho Clinic - Premium Orthopedic Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AurTho Clinic - Premium Orthopedic Care",
    description:
      "Expert orthopedic care for joint replacement, sports medicine, spine care, and more.",
    images: ["/og-image.jpg"],
    creator: "@aurthoclinic",
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "Healthcare",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1419" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        <main className="flex-1 pt-16 sm:pt-20" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
