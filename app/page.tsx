import { casinos } from "@/lib/data"
import { HeroSection } from "@/components/hero-section"
import { CasinoCard } from "@/components/casino-card"
import { ResponsibleGaming } from "@/components/responsible-gaming"
import { SelectionCriteria } from "@/components/selection-criteria"
import { FaqSection } from "@/components/faq-section"
import { PopularBonuses } from "@/components/popular-bonuses"

export default function Home() {
  return (
    <>
      <HeroSection casinos={casinos} />

      <section
        id="casino-list"
        className="py-16 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/bg3.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-white text-3xl font-bold text-center mb-12">Bedste Online Casinoer i Danmark</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {casinos.map((casino, index) => (
              <CasinoCard key={casino.id} casino={casino} rank={index + 1} />
            ))}
          </div>
        </div>
      </section>

      <ResponsibleGaming />
      <SelectionCriteria />
      <PopularBonuses casinos={casinos} />
      <FaqSection />
    </>
  )
}
