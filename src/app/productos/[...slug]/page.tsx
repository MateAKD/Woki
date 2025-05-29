"use client";

import PageLayout from "@/components/layout/page-layout";
import { getProductBySlug } from "@/lib/data/products";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingBasket, Minus, Plus, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { useState, use } from "react";
import { useCart } from "@/lib/context/cart-context";

interface ProductPageProps {
  params: Promise<{ slug: string[] }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const joinedSlug = Array.isArray(slug) ? slug.join("/") : slug;
  const product = getProductBySlug(joinedSlug);

  if (!product) {
    notFound();
  }

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2
  }).format(product.price);

  return (
    <PageLayout>
      {/* Breadcrumbs */}
      <div className="bg-black pt-6 pb-2">
        <div className="container mx-auto">
          <div className="text-sm text-gray-400">
            <Link href="/" className="hover:text-primary">
              Inicio
            </Link>{" "}
            |{" "}
            <Link href="/productos" className="hover:text-primary">
              Productos
            </Link>{" "}
            | {product.title}
          </div>
        </div>
      </div>

      {/* Product Detail Section */}
      <section className="py-8 bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="bg-primary/20 rounded-lg overflow-hidden">
              <div className="relative h-80 md:h-[500px] w-full">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                <p className="text-3xl font-bold mb-6">{formattedPrice}</p>

                <div className="mb-8">
                  <p className="text-gray-300">
                    Descripción del producto... La descripción detallada del producto iría aquí,
                    incluyendo información sobre ingredientes, preparación y más.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Quantity Selector */}
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">Cantidad:</span>
                  <div className="flex items-center border border-gray-700 rounded-md">
                    <button
                      className="px-3 py-1 hover:bg-gray-800 rounded-l-md"
                      onClick={decrementQuantity}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-1">{quantity}</span>
                    <button
                      className="px-3 py-1 hover:bg-gray-800 rounded-r-md"
                      onClick={incrementQuantity}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button
                  className="w-full bg-primary hover:bg-primary/90 flex items-center justify-center gap-2"
                  onClick={handleAddToCart}
                >
                  <ShoppingBasket className="h-5 w-5" />
                  Agregar al carrito
                </Button>

                {/* Continue Shopping */}
                <Link href="/productos" className="flex items-center text-primary hover:underline">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Ver más productos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Information */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold mb-4">Información de Envío</h2>
          <div className="border border-gray-700 rounded-md p-4">
            <p className="mb-4">
              Entregamos en toda la Ciudad de Buenos Aires y Gran Buenos Aires. El costo del envío depende de la zona de entrega.
            </p>
            <div className="space-y-2 text-yellow-500">
              <div>• Zona Norte → martes y jueves</div>
              <div>• Capital y otros → domingos</div>
            </div>
            <p className="mt-4">
              Para recibir tu pedido, hacelo antes de las 18:00hs del día previo a la entrega.<br/>
              🛵 Envíos a domicilio: mínimo de compra de $15.000<br/>
              📍 Si retirás por pick-up, no hay mínimo de compra
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 