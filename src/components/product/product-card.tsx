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
    <div className="group relative overflow-hidden bg-black text-white">
      {/* Product image - full height/width container with mint green background */}
      <div className="relative h-64 w-full bg-primary/20 overflow-hidden">
        <Link href={`/productos/${slug}`}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        {/* Quick action buttons - solo el carrito, sin corazón */}
        <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="icon"
            className="bg-black/70 text-white hover:bg-black hover:text-primary rounded-full"
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
      <div className="p-4">
        <Link href={`/productos/${slug}`} className="block">
          <h3 className="text-md font-medium line-clamp-2 min-h-[3rem] group-hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        <div className="mt-2 flex items-baseline">
          <span className="text-xl font-bold">
            <span className="text-sm font-normal">$</span>{priceWithoutSymbol}
          </span>
        </div>
      </div>
    </div>
  );
}
