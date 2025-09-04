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

export const seafoodProducts: Product[] = [
  {
    id: 301,
    name: "Atlantic Salmon Fillet",
    image: "https://tse4.mm.bing.net/th/id/OIP.RY8pJibMzxURR5RBzwipagHaE8?pid=Api&P=0&h=180",
    gallery: [
      "https://tse3.mm.bing.net/th/id/OIP.fJmWBaBGU6IteqrabO5_cgHaHa?pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th/id/OIP.Q1xOlY_jAw9gs4vh9ei8QgHaHa?pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th/id/OIP.WYQYk-l-rY1vjZujFFLMlgHaFv?pid=Api&P=0&h=180"
    ],
    category: "Seafood",
    description: "Fresh Atlantic salmon fillets, rich in omega-3 fatty acids.",
    features: ["Wild-Caught", "High Omega-3", "Fresh"],
    nutrition: { calories: 206, protein: "22g", fat: "12g", carbs: "0g" },
    specs: { Weight: "500g", Origin: "Atlantic Ocean", ShelfLife: "3 days" },
    traceability: { origin: "North Sea", batchId: "SALM-2025-01", processedAt: "2025-09-01" },
    reviews: [{ user: "Rama", rating: 5, comment: "Fresh and delicious!" }],
    price: { currency: "USD", amount: 15 }
  },
  {
    id: 302,
    name: "Tiger Prawns",
    image: "https://tse3.mm.bing.net/th/id/OIP.eOwKZ8FOvs49qEuoY9kLcwHaGL?pid=Api&P=0&h=180",
    gallery: [
      "https://tse4.mm.bing.net/th/id/OIP.nruZ3dUf4jDCfHWxq4ej8QHaL4?pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th/id/OIP.UTSYG-rATd8P_AbN2cRPYAHaFc?pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th/id/OIP.hfmKYaYYRx_-rGjZ0iIaxgHaLH?pid=Api&P=0&h=180"
    ],
    category: "Seafood",
    description: "Large tiger prawns, perfect for grilling or stir-fry.",
    features: ["Fresh", "High Protein", "Sustainably Sourced"],
    nutrition: { calories: 99, protein: "20g", fat: "0.3g", carbs: "0g" },
    specs: { Weight: "400g", Origin: "Indian Ocean", ShelfLife: "2 days" },
    traceability: { origin: "Ocean Harvest", batchId: "PRAWN-2025-02", processedAt: "2025-08-30" },
    reviews: [{ user: "Anita", rating: 5, comment: "Perfect size and taste!" }],
    price: { currency: "USD", amount: 12 }
  },
  {
    id: 303,
    name: "Lobster",
    image: "https://tse4.mm.bing.net/th/id/OIP.qULxfb8_7aR-qXUYFZHXPAHaE7?pid=Api&P=0&h=180",
    gallery: [
      "https://tse3.mm.bing.net/th/id/OIP.hcGQmRdOkXhAFWlVWm1GoAHaE6?pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th/id/OIP.AF-d8dyUUoSBo1Rg7ICABAHaEJ?pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th/id/OIP.R0RvImWXdnSX66f8RZuttAHaE8?pid=Api&P=0&h=180"
    ],
    category: "Seafood",
    description: "Fresh live lobster, ideal for steaming or boiling.",
    features: ["Live", "Premium Quality", "Sustainable"],
    nutrition: { calories: 90, protein: "19g", fat: "1g", carbs: "0g" },
    specs: { Weight: "1kg", Origin: "Atlantic Ocean", ShelfLife: "1 day" },
    traceability: { origin: "Sea Harvest", batchId: "LOB-2025-03", processedAt: "2025-09-01" },
    reviews: [{ user: "Sanjay", rating: 5, comment: "Super fresh, very tasty!" }],
    price: { currency: "USD", amount: 30 }
  },
  {
    id: 304,
    name: "Cod Fish",
    image: "https://tse2.mm.bing.net/th/id/OIP.hQvmbe5dK3UyZ6gWxI404QHaFj?pid=Api&P=0&h=180",
    gallery: [
      "https://tse2.mm.bing.net/th?id=OIF.Awlvt%2fJlKPRpM49KhyyZCQ&pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th/id/OIP.G-Lru0ogJo0HBAmt9_pL0wHaE7?pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th?id=OIF.1dVZ11HYyM8%2b249rfU2yyA&pid=Api&P=0&h=180"
    ],
    category: "Seafood",
    description: "Fresh cod fish fillets, low fat and high protein.",
    features: ["Fresh", "Low Fat", "High Protein"],
    nutrition: { calories: 105, protein: "23g", fat: "0.9g", carbs: "0g" },
    specs: { Weight: "500g", Origin: "Atlantic Ocean", ShelfLife: "3 days" },
    traceability: { origin: "North Sea", batchId: "COD-2025-04", processedAt: "2025-08-31" },
    reviews: [{ user: "Neha", rating: 4, comment: "Fresh and tasty." }],
    price: { currency: "USD", amount: 14 }
  },
  {
    id: 305,
    name: "Sea Scallops",
    image: "https://tse2.mm.bing.net/th/id/OIP.o43WTxmv0TX1Fw3sFomFqwHaE7?pid=Api&P=0&h=180",
    gallery: [
      "https://tse4.mm.bing.net/th/id/OIP.dV4z_AY3mLqV7Nv-ZOBrfAHaFj?pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th/id/OIP.GGY-69shE2Pxk2uocsfhyAHaHa?pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th/id/OIP.zCfOVk3zRBk-oWSr8sma-QHaLH?pid=Api&P=0&h=180"
    ],
    category: "Seafood",
    description: "Fresh sea scallops, tender and juicy for sautéing or grilling.",
    features: ["Fresh", "Premium", "Sustainably Sourced"],
    nutrition: { calories: 88, protein: "16g", fat: "1g", carbs: "3g" },
    specs: { Weight: "400g", Origin: "Atlantic Ocean", ShelfLife: "2 days" },
    traceability: { origin: "Ocean Harvest", batchId: "SCAL-2025-05", processedAt: "2025-09-01" },
    reviews: [{ user: "Rama", rating: 5, comment: "Delicious and fresh!" }],
    price: { currency: "USD", amount: 22 }
  }
]
