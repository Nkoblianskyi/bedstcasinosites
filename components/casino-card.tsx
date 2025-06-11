import Image from "next/image"
import { Star, Crown } from "lucide-react"
import type { Casino } from "@/lib/data"

interface CasinoCardProps {
  casino: Casino
  rank?: number
  featured?: boolean
}

export function CasinoCard({ casino, rank, featured = false }: CasinoCardProps) {
  const isTopThree = rank && rank <= 3

  return (
    <a
      href={casino.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block group ${featured || isTopThree ? "casino-card-featured top-casino-glow" : "casino-card"}`}
    >
      <div className="p-6 relative">
        {rank && (
          <div
            className={`absolute top-2 left-2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 group-hover:scale-110 z-20 ${rank === 1
                ? "bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg top-badge"
                : rank === 2
                  ? "bg-gradient-to-r from-gray-400 to-gray-600 shadow-lg"
                  : rank === 3
                    ? "bg-gradient-to-r from-orange-400 to-orange-600 shadow-lg"
                    : "bg-gray-600"
              }`}
          >
            {rank === 1 && <Crown className="h-5 w-5" />}
            {rank !== 1 && `#${rank}`}
          </div>
        )}

        {isTopThree && (
          <div className="absolute top-2 right-2 z-20">
            <div className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold animate-bounce">
              TOP {rank}
            </div>
          </div>
        )}

        <div className="flex flex-col items-center">
          {/* Increased height from h-20 to h-32 for larger logos */}
          <div className="relative w-full h-32 mb-6 transition-transform duration-300 group-hover:scale-110">
            <Image
              src={casino.logo || "/placeholder.svg?height=128&width=256&text=" + casino.name}
              alt={casino.name}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="rating-stars mb-2 transition-transform duration-300 group-hover:scale-105">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 transition-all duration-200 ${i < Math.floor(casino.rating)
                    ? "fill-yellow-400 text-yellow-400 group-hover:scale-110"
                    : "fill-gray-200 text-gray-200"
                  }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
              {casino.votes} stemmer
            </span>
          </div>

          <div className="text-xl font-bold text-center mb-4 transition-all duration-300 group-hover:text-red-600">
            {casino.bonus}
          </div>

          <div className="btn-primary w-full text-center transition-all duration-300 group-hover:bg-red-700 group-hover:shadow-xl">
            Hent Bonus
          </div>

          <div className="mt-4 text-xs text-gray-500 text-center transition-colors duration-300 group-hover:text-gray-700">
            18+ | Regler og vilkår gælder | GambleAware.org
          </div>
        </div>
      </div>
    </a>
  )
}
