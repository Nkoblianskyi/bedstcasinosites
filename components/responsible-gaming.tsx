import { Shield, AlertCircle, Phone } from "lucide-react"

export function ResponsibleGaming() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 transition-all duration-300 hover:text-red-600">
          Sikker Spil
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="info-card bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center group">
            <Shield className="h-12 w-12 text-red-600 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-red-700" />
            <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors duration-300">
              Licenserede Casinoer
            </h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              Vi anbefaler kun casinoer med licens fra Spillemyndigheden, som sikrer fair spil og beskyttelse af
              spillere.
            </p>
          </div>

          <div className="info-card bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center group">
            <AlertCircle className="h-12 w-12 text-red-600 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-red-700" />
            <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors duration-300">
              Spil Ansvarligt
            </h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              Sæt grænser for dit spil, og husk at gambling skal være underholdning, ikke en måde at tjene penge på.
            </p>
          </div>

          <div className="info-card bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center group">
            <Phone className="h-12 w-12 text-red-600 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-red-700" />
            <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors duration-300">Få Hjælp</h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              Brug værktøjer som ROFUS og StopSpillet hvis du oplever problemer med gambling.
            </p>
            <a
              href="https://www.stopspillet.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 font-bold mt-2 hover:underline transition-all duration-300 hover:text-red-700 hover:scale-105"
            >
              StopSpillet: 70 22 28 25
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
