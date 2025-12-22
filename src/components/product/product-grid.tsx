"use client";

import ProductCard from "./product-card";

interface Product {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  slug: string;
}

interface ProductGridProps {
  products: Product[];
  title?: string;
}

export default function ProductGrid({ products, title }: ProductGridProps) {
  return (
    <div>
      {title && (
        <h2 className="text-2xl font-bold mb-6 uppercase">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            slug={product.slug}
          />
        ))}
      </div>
    </div>
  );
}
