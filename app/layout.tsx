// app/layout.tsx
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
    icon: "/Untitled (250 x 250 px) (1).png",
    shortcut: "/Untitled (250 x 250 px) (1).png",
    apple: "/Untitled (250 x 250 px) (1).png",
  },
  openGraph: {
    title: "SufiPulse | Soulful Kalams & Spiritual Poetry",
    description:
      "Immerse yourself in the world of Kalams, Qawwalis, and mystical Sufi expressions with SufiPulse.",
    url: "https://sufipulse.com", // replace with your live domain
    siteName: "SufiPulse",
    images: [
      {
        url: "/Untitled (250 x 250 px) (1).png",
        width: 800,
        height: 800,
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
    images: ["/Untitled (250 x 250 px) (1).png"],
    creator: "@sufipulse", // optional
  },
  category: "Spirituality",
  alternates: {
    canonical: "https://sufipulse.com",
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
