"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartLink() {
  const { totalItems } = useCart();

  return (
    <Link href="/carrito" className="relative text-lg">
      🛒
      {totalItems > 0 && (
        <span className="absolute -right-3 -top-2 rounded-full bg-red-600 px-1.5 text-xs text-white">
          {totalItems}
        </span>
      )}
    </Link>
  );
}