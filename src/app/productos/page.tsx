import ProductCard from "../../components/ProductCard";
import { products } from "../../lib/products";

export default function ProductosPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-8 text-3xl font-bold">Nuestras frutas</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}