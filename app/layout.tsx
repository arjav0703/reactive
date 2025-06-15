import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MusicPlayer from "@/components/Music";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reactive",
  description: "A react YSWS",
  authors: [{name: "Arjav", url: "https://arjav.dino.icu"}],
  icons: "/favicon.png",
  openGraph:{
    type: "website",
    title: "Reactive",
    images: [{ url: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/b57fa5895a5c035fe5f3de22e7099d2da0efb560_image.png" }],
    url: "https://reactive.hackclub.com",
    siteName: "Reactive - Hackclub YSWS"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <MusicPlayer/>
      </body>
    </html>
  );
}
