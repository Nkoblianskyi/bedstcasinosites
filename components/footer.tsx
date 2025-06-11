"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  // Function to handle internal navigation and scroll to top
  const handleNavigation = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ansvarligt Spil</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="bg-white p-2 rounded-md">
                <Image src="/plus18.svg" alt="18+" width={40} height={40} />
              </div>
              <div className="bg-white p-2 rounded-md">
                <Image src="/images/spillemyndigheden.png" alt="Spillemyndigheden" width={80} height={30} />
              </div>
              <div className="bg-white p-2 rounded-md">
                <Image src="/images/rofus.png" alt="ROFUS" width={80} height={30} />
              </div>
              <div className="bg-white p-2 rounded-md">
                <Image src="/images/stopspillet.png" alt="StopSpillet" width={80} height={30} />
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Gambling kan være vanedannende. Spil ansvarligt og kontakt StopSpillet, hvis du har problemer.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Om Os</h3>
            <p className="text-sm text-gray-400 mb-4">
              bedstcasinosites.com kan modtage kompensation når du klikker på links og tilmelder dig hos vores partnere.
              Vores vurderinger er dog uafhængige og baseret på grundige tests og research.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Hurtige Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/om-os"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={handleNavigation}
                >
                  Om Os
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={handleNavigation}
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/privatlivspolitik"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={handleNavigation}
                >
                  Privatlivspolitik
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} bedstcasinosites.com - Alle rettigheder forbeholdes</p>
        </div>
      </div>
    </footer>
  )
}
