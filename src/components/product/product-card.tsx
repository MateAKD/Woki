"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBasket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/context/cart-context";
import { getProductBySlug } from "@/lib/data/products";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  slug: string;
}

export default function ProductCard({ id, title, price, imageUrl, slug }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    const product = getProductBySlug(slug);
    if (product) {
      addItem(product, 1);
    }
  };
  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2
  }).format(price);

  // Remove currency symbol for styling separately
  const priceWithoutSymbol = formattedPrice.replace('$', '');

  return (
    <div className="group relative overflow-hidden bg-[#1a513c] text-white border-2 border-black shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1">
      {/* Product image - full height/width container with mint green background */}
      <div className="relative h-72 w-full bg-primary/20 overflow-hidden">
        <Link href={`/productos/${slug}`} className="block h-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </Link>

        {/* Quick action buttons - solo el carrito, sin corazón */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/50 to-transparent">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/90 text-black hover:bg-white hover:scale-110 rounded-full shadow-lg transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart();
            }}
          >
            <ShoppingBasket className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Product info */}
      <div className="p-5 bg-gray-100 border-t-2 border-black">
        <Link href={`/productos/${slug}`} className="block">
          <h3 className="text-lg font-semibold line-clamp-2 min-h-[3.5rem] text-black group-hover:text-black transition-colors duration-300 mb-3">
            {title}
          </h3>
        </Link>
        <div className="flex items-baseline justify-between">
          <span className="text-2xl font-bold text-black">
            <span className="text-base font-normal">$</span>{priceWithoutSymbol}
          </span>
        </div>
      </div>
    </div>
  );
}
