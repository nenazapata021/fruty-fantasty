"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";

const formatCOP = (value: number) =>
  value.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });

export default function CarritoPage() {
  const { items, increase, decrease, removeFromCart, clearCart, totalPrice } =
    useCart();

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h1 className="text-3xl font-bold">Tu carrito está vacío 🛒</h1>
        <Link
          href="/productos"
          className="mt-6 inline-block rounded-lg bg-green-800 px-5 py-2 text-white hover:bg-green-700"
        >
          Ver productos
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="mb-6 text-3xl font-bold">Tu carrito</h1>

      <ul className="divide-y rounded-2xl border">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-4 p-4">
            <span className="text-4xl">{item.emoji}</span>

            <div className="flex-1">
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-600">{formatCOP(item.price)}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => decrease(item.id)}
                className="h-8 w-8 rounded-full border hover:bg-gray-100"
              >
                −
              </button>
              <span className="w-6 text-center">{item.quantity}</span>
              <button
                onClick={() => increase(item.id)}
                className="h-8 w-8 rounded-full border hover:bg-gray-100"
              >
                +
              </button>
            </div>

            <p className="w-24 text-right font-medium">
              {formatCOP(item.price * item.quantity)}
            </p>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 hover:text-red-800"
              aria-label={`Eliminar ${item.name}`}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between">
        <button onClick={clearCart} className="text-sm text-red-600 underline">
          Vaciar carrito
        </button>
        <p className="text-xl font-bold">Total: {formatCOP(totalPrice)}</p>
      </div>
    </section>
  );
}