export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  fabric: string;
  theme: string;
  occasion: string;
  color: string;
  description: string;
  image: string;
}

export interface Category {
  name: string;
  slug: string;
  subcategories: { name: string; slug: string }[];
}

export const genderCategories = [
  { name: "Women", slug: "women", icon: "👗", description: "Elegant hand-painted sarees, kurtis & more" },
  { name: "Men", slug: "men", icon: "👔", description: "Sophisticated painted shirts & kurtas" },
  { name: "Girls", slug: "girls", icon: "🎀", description: "Adorable painted frocks & lehengas" },
  { name: "Boys", slug: "boys", icon: "🧥", description: "Smart painted shirts & kurta sets" },
  { name: "Kids", slug: "kids", icon: "🌈", description: "Fun & colorful designs for little ones" },
  { name: "Custom Orders", slug: "custom", icon: "🎨", description: "Your imagination, our canvas" },
];

export const categories: Category[] = [
  {
    name: "Women",
    slug: "women",
    subcategories: [
      { name: "Sarees", slug: "sarees" },
      { name: "Kurtis", slug: "kurtis" },
      { name: "Dupattas", slug: "dupattas" },
      { name: "Half Sarees", slug: "half-sarees" },
      { name: "Blouses", slug: "blouses" },
    ],
  },
  {
    name: "Men",
    slug: "men",
    subcategories: [
      { name: "Shirts", slug: "shirts" },
      { name: "Kurtas", slug: "kurtas" },
      { name: "Jackets", slug: "jackets" },
    ],
  },
  {
    name: "Girls",
    slug: "girls",
    subcategories: [
      { name: "Frocks", slug: "frocks" },
      { name: "Lehengas", slug: "lehengas" },
    ],
  },
  {
    name: "Boys",
    slug: "boys",
    subcategories: [
      { name: "Shirts", slug: "shirts" },
      { name: "Kurta Sets", slug: "kurta-sets" },
    ],
  },
];

export const fabricTypes = ["Silk", "Cotton", "Linen", "Chiffon", "Georgette", "Chanderi"];
export const colorOptions = ["Red", "Blue", "Green", "Gold", "Pink", "White", "Black", "Multicolor"];
export const designThemes = ["Peacock", "Floral", "Mythological", "Name Custom", "Festival", "Geometric", "Abstract"];
export const occasions = ["Wedding", "Festive", "Casual", "Party", "Traditional", "Office"];

export const sampleProducts: Product[] = [
  { id: "1", name: "Peacock Paradise Saree", category: "women", subcategory: "sarees", fabric: "Silk", theme: "Peacock", occasion: "Wedding", color: "Blue", description: "Exquisite hand-painted peacock motifs on pure silk, perfect for grand celebrations.", image: "" },
  { id: "2", name: "Floral Dream Kurti", category: "women", subcategory: "kurtis", fabric: "Cotton", theme: "Floral", occasion: "Casual", color: "Pink", description: "Delicate floral patterns hand-painted on breathable cotton for everyday elegance.", image: "" },
  { id: "3", name: "Mythological Marvel Dupatta", category: "women", subcategory: "dupattas", fabric: "Chanderi", theme: "Mythological", occasion: "Festive", color: "Gold", description: "Ancient mythological tales brought to life with intricate hand-painting.", image: "" },
  { id: "4", name: "Royal Peacock Shirt", category: "men", subcategory: "shirts", fabric: "Linen", theme: "Peacock", occasion: "Party", color: "Green", description: "Sophisticated peacock artistry on premium linen for the modern gentleman.", image: "" },
  { id: "5", name: "Heritage Kurta", category: "men", subcategory: "kurtas", fabric: "Cotton", theme: "Geometric", occasion: "Traditional", color: "White", description: "Geometric hand-painted patterns on pure cotton kurta with timeless appeal.", image: "" },
  { id: "6", name: "Blossom Frock", category: "girls", subcategory: "frocks", fabric: "Cotton", theme: "Floral", occasion: "Casual", color: "Multicolor", description: "Playful floral hand-painting on a comfortable cotton frock for little princesses.", image: "" },
  { id: "7", name: "Festival Lehenga", category: "girls", subcategory: "lehengas", fabric: "Silk", theme: "Festival", occasion: "Festive", color: "Red", description: "Vibrant festival-themed hand-painted silk lehenga for celebrations.", image: "" },
  { id: "8", name: "Artisan Boy's Shirt", category: "boys", subcategory: "shirts", fabric: "Cotton", theme: "Abstract", occasion: "Casual", color: "Blue", description: "Cool abstract hand-painted design on a comfy cotton shirt.", image: "" },
  { id: "9", name: "Golden Bloom Saree", category: "women", subcategory: "sarees", fabric: "Georgette", theme: "Floral", occasion: "Party", color: "Gold", description: "Shimmering golden floral motifs hand-painted on flowing georgette.", image: "" },
  { id: "10", name: "Custom Name Blouse", category: "women", subcategory: "blouses", fabric: "Silk", theme: "Name Custom", occasion: "Wedding", color: "Red", description: "Personalized name art beautifully hand-painted on a silk blouse.", image: "" },
  { id: "11", name: "Peacock Feather Half Saree", category: "women", subcategory: "half-sarees", fabric: "Chiffon", theme: "Peacock", occasion: "Festive", color: "Green", description: "Graceful peacock feather designs on lightweight chiffon half saree.", image: "" },
  { id: "12", name: "Celebration Kurta Set", category: "boys", subcategory: "kurta-sets", fabric: "Cotton", theme: "Festival", occasion: "Festive", color: "Gold", description: "Festive hand-painted kurta set for little gentlemen.", image: "" },
];

export const WHATSAPP_NUMBER = "919876543210";
export const INSTAGRAM_HANDLE = "sravcolors";
export const EMAIL = "hello@sravcolors.com";
export const PHONE = "+91 98765 43210";
