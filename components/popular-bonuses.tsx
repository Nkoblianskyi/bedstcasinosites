"use client"

import { useState, useEffect } from "react"
import { TrendingUp } from "lucide-react"
import type { Casino } from "@/lib/data"

interface PopularBonusesProps {
  casinos: Casino[]
}

export function PopularBonuses({ casinos }: PopularBonusesProps) {
  const [userCount, setUserCount] = useState(0)

  useEffect(() => {
    // Generate a random number between 50 and 200
    const randomCount = Math.floor(Math.random() * (200 - 50 + 1)) + 50
    setUserCount(randomCount)

    // Update the count every 5-10 seconds
    const interval = setInterval(
      () => {
        setUserCount((prev) => {
          // Random fluctuation between -3 and +5
          const change = Math.floor(Math.random() * 9) - 3
          const newCount = prev + change
          return newCount < 30 ? 30 : newCount > 250 ? 250 : newCount
        })
      },
      Math.random() * 5000 + 5000,
    )

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <TrendingUp className="h-6 w-6 text-red-600 animate-bounce" />
          <h2 className="text-3xl font-bold text-center transition-all duration-300 hover:text-red-600">
            Mest Populære Bonusser i Denne Måned
          </h2>
        </div>

        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full transition-all duration-300 hover:bg-red-200 hover:scale-105">
            <span className="font-bold animate-pulse">{userCount}</span>
            <span className="ml-2">brugere har hentet bonus i dag</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {casinos.slice(0, 3).map((casino, index) => (
            <a
              key={casino.id}
              href={casino.url}
              target="_blank"
              rel="noopener noreferrer"
              className="info-card bg-white rounded-lg shadow-md p-6 flex flex-col items-center group"
            >
              {/* Increased height from h-16 to h-24 for larger logos */}
              <div className="relative w-full h-24 mb-4 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={casino.logo || "/placeholder.svg?height=96&width=240&text=" + casino.name}
                  alt={casino.name}
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="text-xl font-bold text-center mb-4 transition-colors duration-300 group-hover:text-red-600">
                {casino.bonus}
              </div>

              <div className="btn-primary w-full text-center">Hent Bonus</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
