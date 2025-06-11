import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CookieConsent } from "@/components/cookie-consent"
import { WelcomeModal } from "@/components/welcome-modal"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bedste Online Casinoer i Danmark | Bedst Casino Sites",
  description:
    "Find de bedste online casinoer i Danmark - vores Top-liste er baseret på grundige tests og opdateres hver måned!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="da" className="scroll-smooth">
      <body className={inter.className}>
        <ScrollToTop />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieConsent />
        <WelcomeModal />
        <ScrollToTopButton />
      </body>
    </html>
  )
}
