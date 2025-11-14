"use client";

import PageLayout from "@/components/layout/page-layout";
import ProductGrid from "@/components/product/product-grid";
import { products } from "@/lib/data/products";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sort, setSort] = useState<string>("");

  // Filtrar productos por categoría
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  // Ordenar productos
  const sortedProducts = [...filteredProducts].sort((a, b) => {
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
            <Link href="/" className="hover:text-primary">
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
          <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row gap-4">
            {/* Filter Dropdown */}
            <div className="w-full md:w-auto">
              <select
                className="w-full text-white bg-[#1a513c] border border-gray-700 rounded px-4 py-2"
                value={selectedCategory || ""}
                onChange={e => setSelectedCategory(e.target.value || null)}
              >
                <option value="">Todas las categorías</option>
                <option value="carne">Carne</option>
                <option value="veggie">Veggie</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="w-full md:w-auto md:ml-4">
              <select
                className="w-full text-white bg-[#1a513c] border border-gray-700 rounded px-4 py-2"
                value={sort}
                onChange={e => setSort(e.target.value)}
              >
                <option value="">Ordenar</option>
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
