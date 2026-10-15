"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const updateYear = () => {
      setYear(new Date().getFullYear());
    };
    updateYear();
    const interval = setInterval(updateYear, 60 * 60 * 24 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#E8C5C8] text-blcak">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
        {/* Marca */}
        <div>
          <h3 className="text-2xl font-bold">🍓 Fruty Fantasy</h3>
          <p className="mt-2 text-sm text-black">
            Un gustico al año no hace daño
          </p>
        </div>

        {/* Enlaces */}
        <nav aria-label="Enlaces del pie de página">
          <h4 className="mb-3 font-semibold">Navegación</h4>
          <ul className="space-y-2 text-sm text-black">
            <li>
              <Link href="/" className="hover:text-black">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/productos" className="hover:text-black">
                Productos
              </Link>
            </li>
            <li>
              <Link href="/carrito" className="hover:text-black">
                Carrito
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contacto */}
        <div>
          <h4 className="mb-3 font-semibold">Contacto</h4>
          <ul className="space-y-2 text-sm text-black">
            <li>📍 Medellín, Colombia</li>
            <li>📞 +57 301 557 9794</li>
            <li>✉️ ednacastaneda021@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#E8C5C8] py-4 text-center text-xs text-black">
        © {year} Fruty Fantasty. Todos los derechos reservados.
      </div>
    </footer>
  );
}