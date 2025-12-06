"use client";

import PageLayout from "@/components/layout/page-layout";
import ProductGrid from "@/components/product/product-grid";
import { products } from "@/lib/data/products";
import Link from "next/link";
import { useState } from "react";

export default function ProductsPage() {
  const [sort, setSort] = useState<string>("");

  // Ordenar productos
  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "az") return a.title.localeCompare(b.title);
    if (sort === "za") return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <PageLayout>
      {/* Breadcrumbs */}
      <div className="bg-[#1a513c] pt-6 pb-2">
        <div className="container mx-auto">
          <div className="text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>{" "}
            | Productos
          </div>
        </div>
      </div>

      {/* Page Title */}
      <div className="bg-[#1a513c] py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold uppercase">Productos</h1>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-[#1a513c] py-6 border-y border-gray-800">
        <div className="container mx-auto">
          <div className="flex justify-end">
            {/* Sort Dropdown */}
            <div className="w-full md:w-auto">
              <select
                className="w-full text-white bg-[#1a513c] border border-gray-700 rounded px-4 py-2"
                value={sort}
                onChange={e => setSort(e.target.value)}
              >
                <option value="">Ordenar por</option>
                <option value="price-asc">Precio: Menor a Mayor</option>
                <option value="price-desc">Precio: Mayor a Menor</option>
                <option value="az">A - Z</option>
                <option value="za">Z - A</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-8 bg-[#1a513c]">
        <div className="container mx-auto">
          <ProductGrid products={sortedProducts} />
        </div>
      </section>
    </PageLayout>
  );
}
