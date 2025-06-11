import { Cookie, Settings, Info } from "lucide-react"

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Cookie className="h-16 w-16 text-red-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Forstå hvordan vi bruger cookies på vores hjemmeside
          </p>
        </div>

        {/* What are cookies */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Info className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Hvad er cookies?</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Cookies er små tekstfiler, der gemmes på din computer, tablet eller mobiltelefon, når du besøger en
            hjemmeside. Cookies hjælper hjemmesiden med at huske dine præferencer og giver os information om, hvordan du
            bruger vores hjemmeside.
          </p>
        </div>

        {/* Types of cookies */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Hvilke cookies bruger vi?</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Nødvendige cookies</h3>
              <p className="text-gray-600">
                Disse cookies er essentielle for, at du kan bruge hjemmesiden og dens funktioner. Uden disse cookies
                ville tjenester, du har bedt om, ikke kunne leveres.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Funktionelle cookies</h3>
              <p className="text-gray-600">
                Disse cookies giver hjemmesiden mulighed for at huske de valg, du har truffet, for at give dig en mere
                personlig oplevelse.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Analytiske cookies</h3>
              <p className="text-gray-600">
                Disse cookies hjælper os med at forstå, hvordan besøgende interagerer med hjemmesiden. De giver os
                information om områder som antal besøgende og hvilke sider, der er mest populære.
              </p>
            </div>
          </div>
        </div>

        {/* Managing cookies */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Settings className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Hvordan kan du administrere cookies?</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            De fleste webbrowsere giver dig mulighed for at administrere dine cookie-præferencer. Du kan indstille din
            browser til at afvise cookies eller slette bestemte cookies. Du kan generelt også finde ud af, hvordan du
            administrerer cookies i din browser, ved at bruge hjælpefunktionen i din browser.
          </p>
        </div>

        {/* Updates */}
        <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ændringer til vores cookie-politik</h2>
          <p className="text-gray-700 leading-relaxed">
            Vi kan opdatere vores cookie-politik fra tid til anden. Eventuelle ændringer vil blive offentliggjort på
            denne side med en opdateret dato.
          </p>
        </div>
      </div>
    </div>
  )
}
