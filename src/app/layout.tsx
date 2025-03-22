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
  description:
    "Medical Oxygen Gas, Concentrators, Hospital Furniture & More - Rental & Ownership | Bharat Pharma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <FABLocation />
        <FABWhatsApp />
        <Footer />
        {/* <Footer year={new Date().getFullYear()} /> */}
      </body>
    </html>
  );
}
