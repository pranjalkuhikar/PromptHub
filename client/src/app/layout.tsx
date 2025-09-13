import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "../components/Footer";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PromptHub",
  description: "Share and discover creative prompts",
  icons: {
    icon: "/Images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#EEEDEB] min-h-screen flex flex-col`}
        suppressHydrationWarning={true}
      >
        <Header />
        <div className="flex-grow">
          <Providers>{children}</Providers>
        </div>
        <Footer />
      </body>
    </html>
  );
}
