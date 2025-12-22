"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBasket, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/context/cart-context";
import { getProductBySlug } from "@/lib/data/products";
import { useState } from "react";

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
  slug: string;
}

export default function ProductCard({ title, price, imageUrl, slug }: ProductCardProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const product = getProductBySlug(slug);
    if (product) {
      addItem(product, quantity);
      // Reset quantity after adding
      setQuantity(1);
    }
  };

  const incrementQuantity = (e: React.MouseEvent) => {
    e.preventDefault();
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = (e: React.MouseEvent) => {
    e.preventDefault();
    setQuantity(prev => Math.max(1, prev - 1));
  };

  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2
  }).format(price);

  // Remove currency symbol for styling separately
  const priceWithoutSymbol = formattedPrice.replace('$', '');

  return (
    <div className="group relative overflow-hidden bg-[#1a513c] text-white border-2 border-black shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 rounded-sm flex flex-col h-full">
      {/* Product image */}
      <div className="relative h-64 w-full bg-primary/20 overflow-hidden shrink-0">
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
      </div>

      {/* Product info */}
      <div className="p-4 bg-gray-50 border-t-2 border-black flex flex-col flex-grow">
        <Link href={`/productos/${slug}`} className="block">
          <h3 className="text-base font-bold line-clamp-2 min-h-[3rem] text-black group-hover:text-[#1a513c] transition-colors duration-300 mb-2 leading-tight uppercase">
            {title}
          </h3>
        </Link>

        <div className="mt-auto flex items-center justify-between pt-2">
          {/* Price - Left */}
          <div className="flex flex-col">
            <span className="text-xl font-bold text-black leading-none">
              <span className="text-sm font-normal mr-0.5">$</span>{priceWithoutSymbol}
            </span>
          </div>

          {/* Controls - Bottom Right */}
          <div className="flex items-center gap-1.5">
            {/* Quantity Selector */}
            <div className="flex items-center bg-white border border-black rounded-sm overflow-hidden h-8 shadow-[1px_1px_0_0_rgba(0,0,0,1)]">
              <button
                onClick={decrementQuantity}
                className="w-7 h-full flex items-center justify-center hover:bg-gray-100 text-black border-r border-black/20"
                type="button"
                aria-label="Menos"
              >
                <Minus size={12} strokeWidth={3} />
              </button>
              <span className="w-6 text-center text-xs font-bold text-black bg-white">
                {quantity}
              </span>
              <button
                onClick={incrementQuantity}
                className="w-7 h-full flex items-center justify-center hover:bg-gray-100 text-black border-l border-black/20"
                type="button"
                aria-label="Más"
              >
                <Plus size={12} strokeWidth={3} />
              </button>
            </div>

            {/* Add Button */}
            <Button
              size="icon"
              className="w-8 h-8 bg-[#1a513c] hover:bg-[#10e35b] hover:text-black text-white border-2 border-black rounded-sm shadow-[1px_1px_0_0_rgba(0,0,0,1)] active:shadow-none active:translate-x-[0.5px] active:translate-y-[0.5px] transition-all"
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart();
              }}
              title="Agregar al carrito"
            >
              <ShoppingBasket className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
