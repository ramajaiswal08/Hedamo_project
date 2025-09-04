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

export const meatProducts: Product[] = [
  {
    id: 201,
    name: "Organic Chicken Breast",
    image: "https://static.vecteezy.com/system/resources/thumbnails/028/051/454/small_2x/meat-slice-isolated-on-white-background-full-depth-photo.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1617196039043-f75d7d2a4e60?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620166742360-3738a71f3dfb?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "Meat-Poultry",
    description: "Lean, organic chicken breast—perfect for grilling, baking, or stir-fry.",
    features: ["Organic", "High Protein", "No Hormones"],
    nutrition: { calories: 165, protein: "31g", fat: "3.6g", carbs: "0g" },
    specs: { Weight: "500g", Cut: "Breast", ShelfLife: "5 days" },
    traceability: { origin: "Green Farm", batchId: "CHICK-2025-01", processedAt: "2025-09-01", certification: "Organic" },
    reviews: [{ user: "Ramesh", rating: 5, comment: "Very fresh and tender!" }],
    price: { currency: "USD", amount: 7.5 }
  },
  {
    id: 202,
    name: "Grass-Fed Beef Steak",
    image: "https://tse1.mm.bing.net/th/id/OIP.v9WLytJy6OW7WvTaqRlUXQHaE8?pid=Api&P=0&h=180",
    gallery: [
      "https://tse1.mm.bing.net/th/id/OIP.YnLwgu1aSMrnDisGY_VKdwHaEc?pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th/id/OIP._rHSuA8sCpTeUWFe8SucMgHaEt?pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th/id/OIP.WreIUbKw-_Ay4_ZKJ1SWCQHaE7?pid=Api&P=0&h=180"
    ],
    category: "Meat-Poultry",
    description: "Premium grass-fed beef steak with rich flavor and marbling.",
    features: ["Grass-Fed", "High Protein", "Juicy"],
    nutrition: { calories: 271, protein: "25g", fat: "19g", carbs: "0g" },
    specs: { Weight: "400g", Cut: "Ribeye", ShelfLife: "7 days" },
    traceability: { origin: "Happy Cows Farm", batchId: "BEEF-2025-02", processedAt: "2025-08-28", certification: "Organic" },
    reviews: [{ user: "Anita", rating: 5, comment: "Cooked perfectly, very tender." }],
    price: { currency: "USD", amount: 12.0 }
  },
  {
    id: 203,
    name: "Pork Chops",
    image: "https://tse3.mm.bing.net/th/id/OIP.eLsK9d-tjIrEqeGc-gq7EQHaEK?pid=Api&P=0&h=180",
    gallery: [
      "https://tse4.mm.bing.net/th/id/OIP.ELTE_H1A7Y_KbM7D1T1PfgHaLH?pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th/id/OIP.kxOtlk1KRO7VHEWziIsrTQHaHa?pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th/id/OIP.DnoPQMJli5OCcNc94AHV6wHaLG?pid=Api&P=0&h=180"
    ],
    category: "Meat-Poultry",
    description: "Fresh, tender pork chops—great for frying, grilling, or baking.",
    features: ["Fresh", "Juicy", "High Protein"],
    nutrition: { calories: 231, protein: "22g", fat: "15g", carbs: "0g" },
    specs: { Weight: "400g", Cut: "Chop", ShelfLife: "5 days" },
    traceability: { origin: "Valley Farm", batchId: "PORK-2025-03", processedAt: "2025-08-30" },
    reviews: [{ user: "Sanjay", rating: 4, comment: "Good quality pork, tasty!" }],
    price: { currency: "USD", amount: 8.0 }
  },
  {
    id: 204,
    name: "Whole Chicken",
    image: "https://tse3.mm.bing.net/th/id/OIP.6sPM8uCpDDRZ3VIMUMVwGgHaE8?pid=Api&P=0&h=180",
    gallery: [
      "https://tse2.mm.bing.net/th/id/OIP.e_ov2RoE3r3jUFLFm1WKhAHaE8?pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th/id/OIP.rrt5MZChBMay8CwOq4Jc8gHaFj?pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th/id/OIP.EmMYh8bpdzu_TgqNKfXWlQHaLH?pid=Api&P=0&h=180"
    ],
    category: "Meat-Poultry",
    description: "Whole fresh chicken, ideal for roasting or slow cooking.",
    features: ["Fresh", "Organic Feed", "No Hormones"],
    nutrition: { calories: 239, protein: "27g", fat: "14g", carbs: "0g" },
    specs: { Weight: "1.5kg", Cut: "Whole", ShelfLife: "5 days" },
    traceability: { origin: "Green Farm", batchId: "CHICK-2025-04", processedAt: "2025-08-29" },
    reviews: [{ user: "Neha", rating: 5, comment: "Perfect for Sunday roast!" }],
    price: { currency: "USD", amount: 10.0 }
  },
  {
    id: 205,
    name: "Turkey Breast",
    image: "https://tse2.mm.bing.net/th/id/OIP.J2LwWphLZVnb7xpMRWZjjAHaEK?pid=Api&P=0&h=180",
    gallery: [
      "https://tse2.mm.bing.net/th/id/OIP.0GdTSfr1tFAY1xVoraAX6wHaF6?pid=Api&P=0&h=180"
    ],
    category: "Meat-Poultry",
    description: "Lean turkey breast—high in protein, perfect for healthy meals.",
    features: ["Lean", "High Protein", "Fresh"],
    nutrition: { calories: 135, protein: "30g", fat: "1g", carbs: "0g" },
    specs: { Weight: "500g", Cut: "Breast", ShelfLife: "7 days" },
    traceability: { origin: "Happy Farms", batchId: "TUR-2025-05", processedAt: "2025-09-01" },
    reviews: [{ user: "Rama", rating: 5, comment: "Very healthy and fresh!" }],
    price: { currency: "USD", amount: 9.0 }
  }
]
