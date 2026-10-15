import "./globals.css";
import Link from "next/link";
import Footer from "../components/footer";
import CartLink from "../components/CartLink";
import { CartProvider } from "../context/CartContext";

export const metadata = {
  title: "Fruty Fantasy",
  description: "Un gustico al año no hace daño",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex min-h-screen flex-col">
        <CartProvider>
          <header className="flex items-center justify-between bg-[#E8C5C8] px-6 py-4 text-black">
            <Link href="/" className="text-xl font-bold">
              🍓 Fruty Fantasy
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/">Inicio</Link>
              <Link href="/productos">Productos</Link>
              <CartLink />
            </nav>
          </header>

          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}