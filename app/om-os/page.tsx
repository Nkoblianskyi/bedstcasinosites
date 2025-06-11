import { Shield, Users, Award, TrendingUp } from "lucide-react"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Om Os
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Din pålidelige guide til de bedste online casinoer i Danmark
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <TrendingUp className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Vores Mission</h2>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            På bedstcasinosites.com er vores mission at give danske spillere pålidelig og objektiv information om online
            casinoer. Vi ønsker at hjælpe dig med at finde de bedste og mest sikre casinooplevelser, der passer til dine
            præferencer.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-red-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Vores Ekspertise</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Vores team består af erfarne brancheeksperter, der grundigt tester og anmelder hvert casino. Vi har mange
              års erfaring inden for online gambling og forstår, hvad der er vigtigt for danske spillere.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 text-red-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Vores Vurderingsproces</h3>
            </div>
            <ul className="text-gray-600 space-y-2">
              <li>• Sikkerhed og licens</li>
              <li>• Bonusser og kampagner</li>
              <li>• Spilsortiment</li>
              <li>• Brugervenlighed</li>
              <li>• Betalingsmetoder og udbetalingshastighed</li>
              <li>• Kundeservice</li>
              <li>• Mobilvenlighed</li>
            </ul>
          </div>
        </div>

        {/* Partnership Section */}
        <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Vores Partnerskaber</h3>
          <p className="text-gray-700 leading-relaxed">
            bedstcasinosites.com kan modtage kompensation, når du klikker på links og tilmelder dig hos vores partnere.
            Dette påvirker dog ikke vores vurderinger, som altid er uafhængige og baseret på grundige tests og research.
            Vores mål er at give dig ærlig og nøjagtig information, så du kan træffe informerede beslutninger.
          </p>
        </div>

        {/* Responsible Gaming Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Shield className="h-8 w-8 text-red-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-800">Ansvarligt Spil</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Vi tager ansvarligt spil meget alvorligt og opfordrer alle vores besøgende til at spille ansvarligt. Vi
            anbefaler kun licenserede casinoer, der tilbyder værktøjer til ansvarligt spil, og vi giver information om,
            hvor du kan få hjælp, hvis du oplever problemer med gambling.
          </p>
        </div>
      </div>
    </div>
  )
}
