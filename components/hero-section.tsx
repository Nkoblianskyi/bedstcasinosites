"use client"

import { useState, useEffect } from "react"
import type { Casino } from "@/lib/data"
import { CasinoCard } from "./casino-card"

interface HeroSectionProps {
  casinos: Casino[]
}

export function HeroSection({ casinos }: HeroSectionProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [currentDate, setCurrentDate] = useState("")

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Get current month and year in Danish
    const getCurrentDate = () => {
      const now = new Date()
      const months = [
        "januar",
        "februar",
        "marts",
        "april",
        "maj",
        "juni",
        "juli",
        "august",
        "september",
        "oktober",
        "november",
        "december",
      ]
      const month = months[now.getMonth()]
      const year = now.getFullYear()
      return `${month} ${year}`
    }

    setCurrentDate(getCurrentDate())
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Get top 3 casinos
  const topCasinos = casinos.slice(0, 3)

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find de bedste online casinoer i Danmark</h1>
          <p className="text-xl max-w-3xl mx-auto mb-4">
            Vores Top-liste er baseret på grundige tests og opdateres hver måned!
          </p>
          <div className="inline-flex items-center bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium">Rating opdateret {currentDate}</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-8">Top Bedømte Casinoer i Danmark</h2>

        {isMobile ? (
          <div className="space-y-6">
            {topCasinos.map((casino, index) => (
              <div key={casino.id} className="w-full">
                <CasinoCard casino={casino} rank={index + 1} featured={index === 0} />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
            {topCasinos.map((casino, index) => (
              <div key={casino.id} className={index === 0 ? "col-span-1 transform scale-110 z-10" : "col-span-1"}>
                <CasinoCard casino={casino} rank={index + 1} featured={index === 0} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
