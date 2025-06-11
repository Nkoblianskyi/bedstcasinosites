"use client"

import { useState, useEffect } from "react"

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    const pathname = window.location.pathname

    if (pathname === "/") {
      // If on home page, scroll to casino list
      const casinoListElement = document.getElementById("casino-list")
      if (casinoListElement) {
        casinoListElement.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If on another page, navigate to home page with hash
      window.location.href = "/#casino-list"
    }
  }

  return (
    <button
      onClick={scrollToTop}
      className={`floating-btn fixed right-4 bottom-20 z-50 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-100 translate-y-2"
      } hover:shadow-2xl active:scale-90`}
      aria-label="Scroll to top casino list"
    >
      <span className="font-bold text-xs animate-pulse">TOP</span>
    </button>
  )
}
