import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

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
    <html lang="eng">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#EEEDEB]`}
        suppressHydrationWarning={true}
      >
        <Providers>
          <Header />
          <div className="w-full">{children}</div>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
