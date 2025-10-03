import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FarcasterProvider from "@/provider/farcaster.provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    other: {
      "fc:miniapp": JSON.stringify({
        version: "next",
        imageUrl: "https://split-safe-three.vercel.app/icon.png",
        button: {
          title: `Launch Split Safe App`,
          action: {
            type: "launch_miniapp",
            name: "Split Safe App",
            url: "https://split-safe-three.vercel.app",
            splashImageUrl:
              "https://split-safe-three.vercel.app/splash-image.png",
            splashBackgroundColor: "#FFFFFF",
          },
        },
      }),
    },
  };
}

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
        <FarcasterProvider>{children}</FarcasterProvider>
      </body>
    </html>
  );
}
