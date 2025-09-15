"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { LoadingProvider, LoadingContext } from "@/context/LoadingContext";
import { LoadingProvider, LoadingContext } from "./context/LoadingContext";
import LoadingScreen from "@/components/loading-screen";
import { useContext } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function AppContent({ children }: { children: React.ReactNode }) {
  const { isLoading } = useContext(LoadingContext);

  return (
    <html lang="en">
      <head>
        <title>Transformation</title>
        <meta name="Pushkar Dutta" content="pushkardutta.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isLoading && <LoadingScreen />}

        <main
          className={`transition-opacity duration-700 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LoadingProvider>
      <AppContent>{children}</AppContent>
    </LoadingProvider>
  );
}
