import { Shield, Eye, Lock, FileText } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Shield className="h-16 w-16 text-red-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Privatlivspolitik
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hvordan vi beskytter og håndterer dine personlige oplysninger
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <p className="text-lg text-gray-600 leading-relaxed">
            Denne privatlivspolitik forklarer, hvordan bedstcasinosites.com indsamler, bruger og beskytter dine
            personlige oplysninger, når du besøger vores hjemmeside.
          </p>
        </div>

        {/* Information we collect */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Eye className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Hvilke oplysninger indsamler vi?</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-600">Information om din browser, IP-adresse og enhed</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-600">
                Cookies og lignende teknologier (se vores Cookie Policy for mere information)
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-600">Oplysninger om, hvordan du interagerer med vores hjemmeside</p>
            </div>
          </div>
        </div>

        {/* How we use information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <FileText className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Hvordan bruger vi dine oplysninger?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600">Forbedre vores hjemmeside og brugeroplevelse</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600">Analysere, hvordan vores hjemmeside bruges</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600">Personliggøre indhold og annoncer</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600">Levere tjenester, du har anmodet om</p>
              </div>
            </div>
          </div>
        </div>

        {/* Data sharing */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Deling af oplysninger</h2>
          <p className="text-gray-600 mb-4">
            Vi deler ikke dine personlige oplysninger med tredjeparter, undtagen i følgende tilfælde:
          </p>
          <div className="space-y-3">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">Når det er nødvendigt for at levere tjenester, du har anmodet om</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">Når vi er forpligtet ved lov</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">Med analytiske tjenester, der hjælper os med at forbedre vores hjemmeside</p>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Lock className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Sikkerhed</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Vi tager rimelige foranstaltninger for at beskytte dine personlige oplysninger mod uautoriseret adgang,
            ændring, offentliggørelse eller ødelæggelse gennem moderne kryptering og sikkerhedsprotokoller.
          </p>
        </div>

        {/* Your rights */}
        <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Dine rettigheder</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700">Få adgang til de personlige oplysninger, vi har om dig</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700">Anmode om rettelse af unøjagtige oplysninger</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700">Anmode om sletning af dine oplysninger</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700">Gøre indsigelse mod vores behandling af dine oplysninger</p>
            </div>
          </div>
        </div>

        {/* Updates */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ændringer til vores privatlivspolitik</h2>
          <p className="text-gray-600 leading-relaxed">
            Vi kan opdatere vores privatlivspolitik fra tid til anden. Eventuelle ændringer vil blive offentliggjort på
            denne side med en opdateret dato for at sikre gennemsigtighed.
          </p>
        </div>
      </div>
    </div>
  )
}
