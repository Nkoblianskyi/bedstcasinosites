import { ShieldCheck, Gift, Smile, CreditCard, HeadphonesIcon, Smartphone } from "lucide-react"

export function SelectionCriteria() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Sådan Vælger Vi Top Casinoer</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Vores eksperter gennemgår og tester grundigt hvert casino for at sikre, at vi kun anbefaler de bedste til dig.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex gap-4">
            <ShieldCheck className="h-8 w-8 text-red-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Sikkerhed & Licens</h3>
              <p className="text-gray-600">
                Vi verificerer, at casinoet har en gyldig licens fra Spillemyndigheden og bruger sikker kryptering.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Gift className="h-8 w-8 text-red-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Bonusser & Tilbud</h3>
              <p className="text-gray-600">
                Vi vurderer velkomstbonusser, free spins og løbende kampagner for at finde de mest værdifulde tilbud.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Smile className="h-8 w-8 text-red-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Brugeroplevelse</h3>
              <p className="text-gray-600">
                Vi tester hjemmesidens brugervenlighed, spilsortiment og overordnede kvalitet.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <CreditCard className="h-8 w-8 text-red-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Udbetalinger & Betalingsmetoder</h3>
              <p className="text-gray-600">
                Vi undersøger udbetalingshastighed, tilgængelige betalingsmetoder og eventuelle gebyrer.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <HeadphonesIcon className="h-8 w-8 text-red-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Kundeservice</h3>
              <p className="text-gray-600">
                Vi evaluerer kvaliteten og tilgængeligheden af kundeservice, herunder live chat og dansk support.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Smartphone className="h-8 w-8 text-red-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Mobilvenlighed</h3>
              <p className="text-gray-600">
                Vi tester casinoets mobile version eller app for at sikre en god oplevelse på alle enheder.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
