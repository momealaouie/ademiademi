export type Product = {
  name: string;
  brand: "Frutti" | "Vipa" | "Bora Agro";
  category: "Dryck" | "Chips" | "Inlagt";
  image: string;
};

export const products: Product[] = [
  { name: "Persika", brand: "Frutti", category: "Dryck", image: "/images/product-frutti-peach.jpg" },
  { name: "Blåbär", brand: "Frutti", category: "Dryck", image: "/images/product-frutti-blueberry.jpg" },
  { name: "Jordgubb", brand: "Frutti", category: "Dryck", image: "/images/product-frutti-strawberry.jpg" },
  { name: "Apelsin", brand: "Frutti", category: "Dryck", image: "/images/product-frutti-orange.jpg" },
  { name: "Körsbär", brand: "Frutti", category: "Dryck", image: "/images/product-frutti-cherry.jpg" },
  { name: "Päron", brand: "Frutti", category: "Dryck", image: "/images/product-frutti-pear.jpg" },
  { name: "Äpple", brand: "Frutti", category: "Dryck", image: "/images/product-frutti-apple.jpg" },
  { name: "Multifrukt A+C+E", brand: "Frutti", category: "Dryck", image: "/images/product-frutti-multifruit.jpg" },
  { name: "Ketchup", brand: "Vipa", category: "Chips", image: "/images/product-vipa-ketchup.jpg" },
  { name: "Sour cream & onion", brand: "Vipa", category: "Chips", image: "/images/product-vipa-sourcream.jpg" },
  { name: "Chili", brand: "Vipa", category: "Chips", image: "/images/product-vipa-chili.jpg" },
  { name: "Classic saltade", brand: "Vipa", category: "Chips", image: "/images/product-vipa-classic.jpg" },
  { name: "Ost", brand: "Vipa", category: "Chips", image: "/images/product-vipa-cheese.jpg" },
  { name: "Grill", brand: "Vipa", category: "Chips", image: "/images/product-vipa-grill.jpg" },
  { name: "Pizza", brand: "Vipa", category: "Chips", image: "/images/product-vipa-pizza.jpg" },
  { name: "Paprika", brand: "Vipa", category: "Chips", image: "/images/product-vipa-sweetpepper.jpg" },
  { name: "Somborka med kål", brand: "Bora Agro", category: "Inlagt", image: "/images/product-bora-cabbage.jpg" },
  { name: "Öppen Somborka", brand: "Bora Agro", category: "Inlagt", image: "/images/product-bora-mixed.jpg" },
  { name: "Somborka med kål", brand: "Bora Agro", category: "Inlagt", image: "/images/product-bora-garlic.jpg" },
  { name: "Somborka i olja", brand: "Bora Agro", category: "Inlagt", image: "/images/product-bora-oil.jpg" },
  { name: "Gröna tomater", brand: "Bora Agro", category: "Inlagt", image: "/images/product-bora-green-tomato.jpg" },
];
