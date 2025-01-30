"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import useUserStore from "@/store/userStore";
import Final from "@/components/Final";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const { user } = useUserStore();


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        {!user && <NavBar />}
        
        {children}
        {user && (
          <Final />
        )}
        
      </body>
    </html>
  );
}