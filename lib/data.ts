export interface Casino {
  id: string
  name: string
  url: string
  bonus: string
  logo: string
  rating: number
  votes: number
}

export const casinos: Casino[] = [
  {
    id: "comeon",
    name: "ComeOn",
    url: "https://www.comeon.com/da",
    bonus: "100% op til 1.000 kr",
    logo: "/comeon.png",
    rating: 5,
    votes: 17534,
  },
  {
    id: "expekt",
    name: "Expekt",
    url: "https://www.expekt.dk/",
    bonus: "Få 50 gyldne freespins",
    logo: "/expekt.png",
    rating: 5,
    votes: 16421,
  },
  {
    id: "getlucky",
    name: "GetLucky",
    url: "https://www.getlucky.com/da",
    bonus: "100% op til 500 kr",
    logo: "/lucky.png",
    rating: 5,
    votes: 15389,
  },
  {
    id: "betsson",
    name: "Betsson",
    url: "https://www.betsson.dk/",
    bonus: "100% op til 500 kr",
    logo: "/betsson.png",
    rating: 4.8,
    votes: 14478,
  },
  {
    id: "leovegas",
    name: "LeoVegas",
    url: "https://www.leovegas.dk/",
    bonus: "100% op til 1.000 kr",
    logo: "/lasvegas.svg",
    rating: 4.8,
    votes: 11612,
  },
]
