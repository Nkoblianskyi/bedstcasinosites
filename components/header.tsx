"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Function to handle internal navigation and scroll to top
  const handleNavigation = () => {
    window.scrollTo(0, 0)
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "shadow-md bg-gray-900" : "bg-gray-900"
      }`}
    >
      {/* Top bar with license info and badges */}
      <div className="bg-gray-900 text-white py-2 px-4 flex justify-between items-center text-sm border-b border-gray-800">
        <div className="flex items-center transition-all duration-300 hover:scale-105">
          <Image src="/denmark.png" alt="Danmark Flag" width={20} height={15} className="mr-2" />
          <span className="hidden sm:inline">Licenseret af Spillemyndigheden</span>
          <span className="sm:hidden">Licenseret</span>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="badge badge-primary text-xs hover:scale-110 transition-transform duration-200">18+</div>
          <div className="badge badge-secondary text-xs hidden sm:inline-flex hover:scale-110 transition-transform duration-200">
            Opdateres månedligt
          </div>
        </div>
      </div>

      {/* Main header with logo and navigation */}
      <div className="bg-gray-800 py-3 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 group transition-all duration-300 hover:scale-105"
            onClick={handleNavigation}
          >
            <div className="relative w-10 h-10 flex items-center justify-center transition-all duration-300">
              <Image src={"/logo.png"} alt="Logo" width={40} height={40} />
            </div>
            <div className="text-white font-bold text-lg hidden sm:block group-hover:text-red-400 transition-colors duration-300">
              BedstCasinoSites
            </div>
          </Link>

          {/* Mobile menu button */}
          {isMobile && (
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none transition-all duration-300 hover:scale-110 hover:text-red-400"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          )}

          {/* Desktop navigation */}
          {!isMobile && (
            <nav className="flex items-center space-x-6">
              <Link href="/" className="nav-link text-white" onClick={handleNavigation}>
                Hjem
              </Link>
              <Link href="/om-os" className="nav-link text-white" onClick={handleNavigation}>
                Om Os
              </Link>
              <Link href="/cookie-policy" className="nav-link text-white" onClick={handleNavigation}>
                Cookie Policy
              </Link>
              <Link href="/privatlivspolitik" className="nav-link text-white" onClick={handleNavigation}>
                Privatlivspolitik
              </Link>
            </nav>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isMobileMenuOpen && (
        <div className="bg-gray-800 py-4 px-6 border-t border-gray-700 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white hover:text-red-400 transition-all duration-300 hover:translate-x-2"
              onClick={handleNavigation}
            >
              Hjem
            </Link>
            <Link
              href="/om-os"
              className="text-white hover:text-red-400 transition-all duration-300 hover:translate-x-2"
              onClick={handleNavigation}
            >
              Om Os
            </Link>
            <Link
              href="/cookie-policy"
              className="text-white hover:text-red-400 transition-all duration-300 hover:translate-x-2"
              onClick={handleNavigation}
            >
              Cookie Policy
            </Link>
            <Link
              href="/privatlivspolitik"
              className="text-white hover:text-red-400 transition-all duration-300 hover:translate-x-2"
              onClick={handleNavigation}
            >
              Privatlivspolitik
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
