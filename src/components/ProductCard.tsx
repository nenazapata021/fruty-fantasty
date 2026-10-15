"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import type { Product } from "../lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="rounded-2xl border p-5 text-center shadow-sm">
      <div className="text-6xl">{product.emoji}</div>
      <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>
      <p className="text-green-800">
        {product.price.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
          maximumFractionDigits: 0,
        })}
      </p>

      <button
        onClick={handleAdd}
        className={`mt-4 w-full rounded-lg px-4 py-2 font-medium text-white transition ${
          added ? "bg-green-600" : "bg-green-800 hover:bg-green-700"
        }`}
      >
        {added ? "¡Agregado! ✓" : "Agregar al carrito"}
      </button>
    </div>
  );
}