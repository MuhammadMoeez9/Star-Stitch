import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast"; // ← Add this import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star Stitch - Professional Embroidery Digitizing Services",
  description:
    "Expert embroidery digitizing services with 24-hour turnaround. High-quality, professional results for logos, designs, and custom artwork.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Toaster position="top-right" reverseOrder={false} />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
