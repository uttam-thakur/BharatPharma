// REMOVE "use client"; here 👇 (server component by default)
"use Client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FABLocation from "./components/fabComponents/FABLocation";
import FABWhatsApp from "./components/fabComponents/FABWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bharat Pharma",
  description: "Your description",
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
        <Navbar /> {/* make sure Navbar itself has "use client" if needed */}
        {children}
        <FABLocation />
        <FABWhatsApp />
        <Footer year={new Date().getFullYear()} />
      </body>
    </html>
  );
}
