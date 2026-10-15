"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleHashChange = () => {
      router.refresh();
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [router]);

  return (
    <header className="border-b border-border bg-[#E8C5C8] backdrop-blur-sm sticky top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold">Fruty Fantasty</span>
          </div>
          <nav className="hidden sm:flex items-center gap-8">
            <Link
              href="/"
              className={pathname === "/" ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"}
            >
              Inicio
            </Link>
            <Link
              href="/productos"
              className={pathname === "/productos" ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"}
            >
              Productos
            </Link>
            <Link
              href="/carrito"
              className={pathname === "/carrito" ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"}
            >
              Carrito
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}