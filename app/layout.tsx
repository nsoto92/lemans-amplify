import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ConfigureAmplifyClientSide from "@/components/ConfigureAmplify";
import '@aws-amplify/ui-react/styles.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leman's Auto Detailing",
  description: "Leman's Auto Detailing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ConfigureAmplifyClientSide />
        {children}
      </body>
    </html>
  );
}
