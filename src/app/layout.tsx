import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/react"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: "Sueldos dev AI",
  description: "App para calcular el sueldo de un programador",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-gradient-to-r from-[#D5DEE7] via-[#E8EBF2] to-[#E2E7ED]",
          fontSans.variable
        )}
      >
        {children}
        <Toaster richColors />
        <Analytics />
      </body>
    </html>
  )
}
