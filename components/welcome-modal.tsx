"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { casinos } from "@/lib/data"

export function WelcomeModal() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // Check if user has already seen the modal
    const modalSeen = sessionStorage.getItem("welcome-modal-seen")
    if (!modalSeen) {
      // Small delay to show modal after page load
      const timer = setTimeout(() => {
        setShowModal(true)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [])

  const closeModal = () => {
    sessionStorage.setItem("welcome-modal-seen", "true")
    setShowModal(false)
  }

  if (!showModal) return null

  // Get top 3 casinos
  const topCasinos = casinos.slice(0, 3)

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[85vh] sm:max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center p-3 sm:p-4 border-b">
          <h2 className="text-lg sm:text-xl font-bold">Top Bedømte Casinoer i Danmark</h2>
          <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="sr-only">Luk</span>
          </button>
        </div>

        <div className="p-3 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {topCasinos.map((casino, index) => (
              <div key={casino.id} className="casino-card p-3 sm:p-4 flex flex-col items-center">
                {/* Smaller logo height on mobile */}
                <div className="relative w-full h-16 sm:h-24 mb-3 sm:mb-4">
                  <Image
                    src={casino.logo || "/placeholder.svg?height=96&width=240&text=" + casino.name}
                    alt={casino.name}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="badge badge-primary mb-2 text-xs">#{index + 1}</div>
                <div className="font-bold text-center mb-2 text-sm sm:text-base">{casino.bonus}</div>
                <a
                  href={casino.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center text-sm sm:text-base py-1.5 sm:py-2"
                >
                  Hent Bonus
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
