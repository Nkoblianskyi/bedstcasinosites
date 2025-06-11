"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cookie } from "lucide-react"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-gray-900 text-white p-4 md:p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-3">
            <Cookie className="h-8 w-8 text-yellow-400" />
            <h3 className="text-lg font-bold">Cookie Samtykke</h3>
          </div>
          <div className="flex-1">
            <p className="text-sm">
              Vi bruger cookies for at forbedre din oplevelse på vores hjemmeside og for at vise dig relevante annoncer.
            </p>
            <p className="text-sm mt-1">
              Ved at klikke "Acceptér" samtykker du til vores brug af cookies. Du kan læse mere i vores{" "}
              <Link href="/cookie-policy" className="text-yellow-400 hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={acceptCookies}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
            >
              Acceptér
            </button>
            <Link
              href="/cookie-policy"
              className="bg-transparent border border-gray-600 hover:border-gray-500 text-white px-6 py-2 rounded-md font-medium transition-colors"
            >
              Afvis
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
