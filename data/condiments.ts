export type Nutrition = {
  calories: number
  sugar: string
  carbs?: string
  protein?: string
  fat?: string
}

export type Traceability = {
  origin: string
  batchId: string
  harvestedAt?: string
  processedAt?: string
  certification?: string
}

export type Review = {
  user: string
  rating: number
  comment: string
}

export type Product = {
  id: number
  name: string
  image: string
  gallery?: string[]
  category: string
  description: string
  features: string[]
  nutrition?: Nutrition
  specs?: Record<string, string | number>
  traceability?: Traceability
  reviews?: Review[]
  price?: { currency: string; amount: number }
}

export const condimentsProducts: Product[] = [
  {
    id: 401,
    name: "Organic Ketchup",
    image: "https://tse3.mm.bing.net/th/id/OIP.1tvKTUiHrBLAYt1plJOfdwHaE7?pid=Api&P=0&h=180",
    gallery: [
      "https://tse4.mm.bing.net/th/id/OIP.aT_AkNoVtUfxc4wKWzl1cAHaHa?pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th/id/OIP.spSIT5pwDO0yo9LgvEyCMgHaKX?pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th/id/OIP.5sVOXb_BHg7YPl5mKN0A3wHaHa?pid=Api&P=0&h=180"
    ],
    category: "Condiments",
    description: "Rich and tangy organic tomato ketchup with natural ingredients.",
    features: ["Organic", "No Preservatives", "Gluten-Free"],
    nutrition: { calories: 80, sugar: "20g", fat: "0g", carbs: "21g", protein: "0g" },
    specs: { Volume: "500ml", ShelfLife: "12 months" },
    traceability: { origin: "Green Valley Farm", batchId: "KETCH-2025-01", processedAt: "2025-08-25" },
    reviews: [{ user: "Rama", rating: 5, comment: "Sweet and flavorful!" }],
    price: { currency: "USD", amount: 4.5 }
  },
  {
    id: 402,
    name: "Dijon Mustard",
    image: "https://tse2.mm.bing.net/th/id/OIP.unEc4MrFMZsRE6OQyDszEAHaE8?pid=Api&P=0&h=180",
    gallery: ["https://tse3.mm.bing.net/th/id/OIP.jlo74ReCWz-wDb3h-DV5EQHaE8?pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th/id/OIP.w8RyijTv0DWGoVYb8Z9UiAHaEK?pid=Api&P=0&h=180"
    ],
    category: "Condiments",
    description: "Classic Dijon mustard, perfect for sandwiches and dressings.",
    features: ["Spicy", "Gluten-Free", "All-Natural"],
    nutrition: { calories: 60, sugar: "1g", fat: "3g", carbs: "5g", protein: "1g" },
    specs: { Volume: "250g", ShelfLife: "12 months" },
    traceability: { origin: "France", batchId: "MUST-2025-02", processedAt: "2025-08-20" },
    reviews: [{ user: "Anita", rating: 5, comment: "Sharp and flavorful!" }],
    price: { currency: "USD", amount: 5 }
  },
  {
    id: 403,
    name: "Soy Sauce",
    image: "https://tse2.mm.bing.net/th/id/OIP.13o-5wKJ3fK1w4cPa6KEAAHaJM?pid=Api&P=0&h=180",
    gallery: ["https://tse4.mm.bing.net/th/id/OIP.klE9FNgWSZcjKMrKrp3cAwHaE7?pid=Api&P=0&h=180"],
    category: "Condiments",
    description: "Traditional soy sauce made with fermented soybeans.",
    features: ["Gluten-Free", "Fermented", "Rich Flavor"],
    nutrition: { calories: 53, sugar: "1g", fat: "0g", carbs: "6g", protein: "8g" },
    specs: { Volume: "500ml", ShelfLife: "18 months" },
    traceability: { origin: "Japan", batchId: "SOY-2025-03", processedAt: "2025-08-22" },
    reviews: [{ user: "Sanjay", rating: 5, comment: "Authentic taste!" }],
    price: { currency: "USD", amount: 6 }
  },
  {
    id: 404,
    name: "Hot Chili Sauce",
    image: "https://tse2.mm.bing.net/th/id/OIP.BFhvD7Azov96Isj4-WqacgHaEK?pid=Api&P=0&h=180",
    gallery: ["https://tse4.mm.bing.net/th/id/OIP._SMd6MAYJXDHY1ytBTenswHaLH?pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th/id/OIP.LQfsn96CqFRNS_cxMSkaegHaFV?pid=Api&P=0&h=180"
    ],
    category: "Condiments",
    description: "Spicy chili sauce with natural ingredients and bold flavor.",
    features: ["Spicy", "Natural Ingredients", "Gluten-Free"],
    nutrition: { calories: 50, sugar: "5g", fat: "0g", carbs: "12g", protein: "0g" },
    specs: { Volume: "200ml", ShelfLife: "12 months" },
    traceability: { origin: "Mexico", batchId: "CHILI-2025-04", processedAt: "2025-08-28" },
    reviews: [{ user: "Neha", rating: 4, comment: "Perfect for spicy dishes." }],
    price: { currency: "USD", amount: 4 }
  },
  {
    id: 405,
    name: "BBQ Sauce",
    image: "https://tse4.mm.bing.net/th/id/OIP.tz2PY_mJBCBYH0a9p0gCFgHaLH?pid=Api&P=0&h=180",
    gallery: ["https://tse1.mm.bing.net/th/id/OIP.1xM7171LlaBUeRvt0L1LKgHaD-?pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th/id/OIP.mwrB4VQ9O_FmBwh3e9bbygHaHa?pid=Api&P=0&h=180"
    ],
    category: "Condiments",
    description: "Rich and smoky BBQ sauce, ideal for grilling meats.",
    features: ["Smoky", "Gluten-Free", "Natural Ingredients"],
    nutrition: { calories: 70, sugar: "15g", fat: "0g", carbs: "17g", protein: "0g" },
    specs: { Volume: "300ml", ShelfLife: "12 months" },
    traceability: { origin: "USA", batchId: "BBQ-2025-05", processedAt: "2025-08-30" },
    reviews: [{ user: "Rama", rating: 5, comment: "Perfect for BBQ!" }],
    price: { currency: "USD", amount: 5 }
  }
]
