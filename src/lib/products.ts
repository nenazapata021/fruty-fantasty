export type Product = {
    id: number;
    name: string;
    price: number;
    emoji: string;
};

export const products: Product[] = [
  { id: 1, name: "Fresas", price: 8000, emoji: "🍓" },
  { id: 2, name: "Mango", price: 5000, emoji: "🥭" },
  { id: 3, name: "Piña", price: 6500, emoji: "🍍" },
  { id: 4, name: "Uvas", price: 9000, emoji: "🍇" },
  { id: 5, name: "Sandía", price: 12000, emoji: "🍉" },
  { id: 6, name: "Banano", price: 3000, emoji: "🍌" },
];