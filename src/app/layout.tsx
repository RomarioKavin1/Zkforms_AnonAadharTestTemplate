"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import crypto from "crypto";
import { AnonAadhaarProvider } from "anon-aadhaar-react";
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const app_id = BigInt(parseInt(crypto.randomBytes(20).toString("hex"), 16)).toString(); 
  return (
    <html lang="en">
      <AnonAadhaarProvider _appId={app_id}>
      <body className={inter.className}>{children}</body>
      </AnonAadhaarProvider>
    </html>
  )
}
