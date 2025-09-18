import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/Layouts/LayoutWrapper";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "@/context/AuthContext";
import { NotificationProvider } from "@/context/NotificationContext";
import { ToastProvider } from "@/context/ToastContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sufi-pulse.vercel.app"), // Set base URL for deployment
  title: "SufiPulse | Soulful Kalams & Spiritual Poetry",
  description:
    "SufiPulse is your gateway to soulful Kalams, Qawwalis, and timeless Sufi poetry. Discover mystical words, spiritual devotion, and divine inspiration.",
  keywords: [
    "SufiPulse",
    "Kalams",
    "Qawwalis",
    "Sufi Poetry",
    "Spiritual Music",
    "Mystic Songs",
    "Devotional Kalams",
    "Nusrat Fateh Ali Khan",
    "Sufism",
  ],
  authors: [{ name: "SufiPulse" }],
  creator: "SufiPulse",
  publisher: "SufiPulse",
  icons: {
    icon: "/favicon.ico", // Use .ico for broader compatibility
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png", // 180x180 for Apple devices
  },
  openGraph: {
    title: "SufiPulse | Soulful Kalams & Spiritual Poetry",
    description:
      "Immerse yourself in the world of Kalams, Qawwalis, and mystical Sufi expressions with SufiPulse.",
    url: "https://sufi-pulse.vercel.app", // Matches deployment URL
    siteName: "SufiPulse",
    images: [
      {
        url: "/og-image.png", // Optimized for social media (1200x630)
        width: 1200,
        height: 630,
        alt: "SufiPulse Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SufiPulse | Soulful Kalams & Spiritual Poetry",
    description:
      "A soulful collection of Kalams, Qawwalis, and spiritual poetry brought to life through SufiPulse.",
    images: ["/og-image.png"], // Optimized for Twitter
    creator: "@sufipulse",
  },
  category: "Spirituality",
  alternates: {
    canonical: "https://sufi-pulse.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ToastProvider>
          <NotificationProvider>
            <AuthProvider>
              <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}>
                <LayoutWrapper>
                  {children}
                </LayoutWrapper>
              </GoogleOAuthProvider>
            </AuthProvider>
          </NotificationProvider>
        </ToastProvider>
      </body>
    </html>
  );
}