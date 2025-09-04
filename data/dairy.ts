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
  rating: number // 1-5
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

export const dairyProducts: Product[] = [
  {
    id: 101,
    name: "Organic Milk",
    image: "https://tse1.mm.bing.net/th/id/OIP.tTnbbYoEkvNUB5ZI3dwO0QHaEK?pid=Api&P=0&h=180",
    gallery: [
      "https://tse1.mm.bing.net/th/id/OIP.1j0NvBWtam-NOUuas3PEAAHaE8?pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th/id/OIP.GOSUs2ZPzPrTYiNXD44hywHaGn?pid=Api&P=0&h=180"
    ],
    category: "Dairy",
    description: "Fresh organic milk from local farms. Rich in calcium and vitamins.",
    features: ["Organic", "High Calcium", "Freshly Pasteurized"],
    nutrition: { calories: 42, sugar: "5g", protein: "3.4g", fat: "1g" },
    specs: { Volume: "1L", FatContent: "Full Cream", ShelfLife: "7 days" },
    traceability: { origin: "Green Valley Farm", batchId: "MILK-2025-01", processedAt: "2025-09-01", certification: "Organic" },
    reviews: [
      { user: "Rama", rating: 5, comment: "Tastes very fresh and creamy!" },
      { user: "Anita", rating: 4, comment: "Good quality milk." }
    ],
    price: { currency: "USD", amount: 3.5 }
  },
  {
    id: 102,
    name: "Cheddar Cheese",
    image: "https://tse3.mm.bing.net/th/id/OIP.FPlNRsP9k6g_cTy--6LGSwHaFW?pid=Api&P=0&h=180",
    gallery: [
      "https://tse3.mm.bing.net/th/id/OIP.3_gcOIkhTiURroXcsROvegHaFj?pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th/id/OIP.GqChBVYrmn-kGcI-TVaObwHaE7?pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th/id/OIP.-C2x7-GpNeiG0TP8fJoGvQHaHa?pid=Api&P=0&h=180"
    ],
    category: "Dairy",
    description: "Aged cheddar cheese with rich flavor and creamy texture.",
    features: ["Aged", "Creamy", "High Protein"],
    nutrition: { calories: 402, sugar: "1g", protein: "25g", fat: "33g" },
    specs: { Weight: "200g", Origin: "Cow Milk", ShelfLife: "30 days" },
    traceability: { origin: "Happy Cows Farm", batchId: "CHEESE-2025-05", processedAt: "2025-08-25", certification: "Organic" },
    reviews: [
      { user: "Sanjay", rating: 5, comment: "Perfect for sandwiches and salads." }
    ],
    price: { currency: "USD", amount: 6.0 }
  }
]
