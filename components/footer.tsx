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

            {/* Red 18+ Badge */}
            <div className="mb-4">
              <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-md font-bold text-lg">
                18+
              </div>
            </div>

            {/* Organization logos with links */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <a
                href="https://www.spillemyndigheden.dk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
              >
                <Image
                  src="/spillemynd.svg"
                  alt="Spillemyndigheden"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </a>

              <a
                href="https://www.stopspillet.dk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
              >
                <Image
                  src="/stopspillet.png"
                  alt="StopSpillet"
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </a>

              <a
                href="https://www.rofus.nu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/50 p-3 rounded-md hover:bg-gray-400 transition-colors duration-300 flex items-center justify-center"
              >
                <Image src="/rofus.png" alt="ROFUS" width={100} height={40} className="object-contain" />
              </a>

              <a
                href="https://www.gambleaware.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
              >
                <Image
                  src="/gamble.webp"
                  alt="GambleAware"
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </a>

              <a
                href="https://www.gamcare.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center col-span-2"
              >
                <Image src="/gamecare.svg" alt="GameCare" width={100} height={40} className="object-contain" />
              </a>
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
