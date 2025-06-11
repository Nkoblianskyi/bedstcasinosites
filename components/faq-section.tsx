"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    question: "Er online casino lovligt i Danmark?",
    answer:
      "Ja, online casino er lovligt i Danmark, så længe operatøren har en licens fra Spillemyndigheden. Alle casinoer på vores liste er licenserede og lovlige at spille på i Danmark.",
  },
  {
    question: "Hvordan vælger jeg et sikkert casino?",
    answer:
      "Et sikkert casino har en dansk licens fra Spillemyndigheden, bruger sikker kryptering til at beskytte dine data, har klare vilkår og betingelser, og tilbyder ansvarligt spil-værktøjer. Alle casinoer på vores liste opfylder disse kriterier.",
  },
  {
    question: "Hvad er ROFUS?",
    answer:
      "ROFUS (Register Over Frivilligt Udelukkede Spillere) er et register, hvor du kan udelukke dig selv fra alle danske online casinoer midlertidigt eller permanent. Det er et værktøj til at hjælpe personer med spilleproblemer.",
  },
  {
    question: "Hvorfor stole på jeres liste?",
    answer:
      "Vores eksperter tester og anmelder grundigt hvert casino baseret på strenge kriterier som sikkerhed, bonusser, spilsortiment, kundeservice og brugervenlighed. Vi opdaterer vores liste månedligt for at sikre, at informationen altid er aktuel.",
  },
  {
    question: "Skal jeg betale skat af mine gevinster?",
    answer:
      "Nej, som dansk spiller skal du ikke betale skat af gevinster fra licenserede online casinoer. Skatten betales af casinooperatørerne gennem deres licensafgift til den danske stat.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Ofte Stillede Spørgsmål</h2>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-bold text-left">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-red-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-red-600" />
                )}
              </button>

              {openIndex === index && (
                <div className="bg-white p-4 rounded-b-lg shadow-sm border-t">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
