export type Product = {
  name: string;
  brand: "Frutti" | "Vipa" | "Bora Agro";
  category: "Dryck" | "Chips" | "Inlagt";
  image: string;
};

export const products: Product[] = [
  { name: "Persika", brand: "Frutti", category: "Dryck", image: "/images/product-frutti-peach-studio.webp" },
  { name: "Blåbär", brand: "Frutti", category: "Dryck", image: "/images/product-frutti-blueberry-studio.webp" },
  { name: "Jordgubb", brand: "Frutti", category: "Dryck", image: "/images/product-frutti-strawberry-studio.webp" },
  { name: "Apelsin", brand: "Frutti", category: "Dryck", image: "/images/product-frutti-orange-studio.webp" },
  { name: "Körsbär", brand: "Frutti", category: "Dryck", image: "/images/product-frutti-cherry-studio.webp" },
  { name: "Päron", brand: "Frutti", category: "Dryck", image: "/images/product-frutti-pear-studio.webp" },
  { name: "Äpple", brand: "Frutti", category: "Dryck", image: "/images/product-frutti-apple-studio.webp" },
  { name: "Multifrukt A+C+E", brand: "Frutti", category: "Dryck", image: "/images/product-frutti-multifruit-studio.webp" },
  { name: "Ketchup", brand: "Vipa", category: "Chips", image: "/images/product-vipa-ketchup-studio.webp" },
  { name: "Sour cream & onion", brand: "Vipa", category: "Chips", image: "/images/product-vipa-sourcream-studio.webp" },
  { name: "Chili", brand: "Vipa", category: "Chips", image: "/images/product-vipa-chili-studio.webp" },
  { name: "Classic saltade", brand: "Vipa", category: "Chips", image: "/images/product-vipa-classic-studio.webp" },
  { name: "Ost", brand: "Vipa", category: "Chips", image: "/images/product-vipa-cheese-studio.webp" },
  { name: "Grill", brand: "Vipa", category: "Chips", image: "/images/product-vipa-grill-studio.webp" },
  { name: "Pizza", brand: "Vipa", category: "Chips", image: "/images/product-vipa-pizza-studio.webp" },
  { name: "Paprika", brand: "Vipa", category: "Chips", image: "/images/product-vipa-sweetpepper-studio.webp" },
  { name: "Sumborka / Paprika", brand: "Bora Agro", category: "Inlagt", image: "/images/product-bora-cabbage-studio.webp" },
  { name: "Sumborka / Paprika med olja", brand: "Bora Agro", category: "Inlagt", image: "/images/product-bora-mixed-studio.webp" },
  { name: "Sumborka / Paprika och vitkål", brand: "Bora Agro", category: "Inlagt", image: "/images/product-bora-garlic-studio.webp" },
  { name: "Röd paprika", brand: "Bora Agro", category: "Inlagt", image: "/images/product-bora-oil-studio.webp" },
  { name: "Tomater", brand: "Bora Agro", category: "Inlagt", image: "/images/product-bora-green-tomato-studio.webp" },
];
