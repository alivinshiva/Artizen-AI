import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable : '--font-ibm_Plex'
 });

export const metadata: Metadata = {
  title: "Artizen AI",
  description: "Transform your photos into stuning masterpieces with Artizen AI, the cutting-edge AI powered image manipulation tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>{children}</body>
    </html>
  );
}
