"use client";

import PageLayout from "@/components/layout/page-layout";
import { getProductBySlug } from "@/lib/data/products";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingBasket, Minus, Plus, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { useState, use, useEffect } from "react";
import { useCart } from "@/lib/context/cart-context";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const { addItem } = useCart();
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  
  const images = product?.images && product.images.length > 0 ? product.images : [product?.imageUrl || ''];

  // Sincronizar el carousel con el índice seleccionado
  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setSelectedImageIndex(api.selectedScrollSnap());
    });
  }, [api]);

  // Sincronizar cuando cambia selectedImageIndex manualmente
  useEffect(() => {
    if (!api) return;
    if (api.selectedScrollSnap() !== selectedImageIndex) {
      api.scrollTo(selectedImageIndex);
    }
  }, [selectedImageIndex, api]);

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
      <div className="bg-[#1a513c] pt-0 pb-0 md:pt-6 md:pb-2">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-xs md:text-sm text-gray-400">
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
      <section className="pt-0 pb-0 md:py-8 bg-[#1a513c]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image / Gallery */}
            <div className="flex flex-col md:flex-row gap-0 md:gap-4">
              {/* Miniaturas - Desktop: izquierda, Mobile: arriba (ocultas) */}
              {images.length > 1 && (
                <div className="hidden md:flex flex-col gap-0.5 order-1 py-1">
                  {images.map((image, index) => (
                    <div key={index} className="p-0.5">
                      <button
                        onClick={() => setSelectedImageIndex(index)}
                        className={`relative w-20 h-20 rounded-md overflow-visible border-2 transition-all ${
                          selectedImageIndex === index 
                            ? 'border-white shadow-lg scale-105' 
                            : 'border-gray-700 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <div className="absolute inset-0 rounded-md overflow-hidden">
                          <Image
                            src={image}
                            alt={`${product.title} - Miniatura ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Imagen principal */}
              <div className="bg-primary/20 rounded-lg overflow-hidden flex-1 order-2 md:order-2 flex items-center justify-center">
                {images.length > 1 ? (
                  <>
                    {/* Mobile: Carousel con swipe */}
                    <div className="md:hidden w-full">
                      <Carousel setApi={setApi} className="w-full">
                        <CarouselContent>
                          {images.map((image, index) => (
                            <CarouselItem key={index}>
                              <div className="relative w-full h-[600px] overflow-hidden flex items-center justify-center mb-0">
                                <Image
                                  src={image}
                                  alt={`${product.title} - Imagen ${index + 1}`}
                                  fill
                                  className="object-contain scale-100 object-center"
                                  priority={index === 0}
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                      </Carousel>
                    </div>
                    {/* Desktop: Imagen estática */}
                    <div className="hidden md:flex w-full">
                      <div className="relative w-full h-auto min-h-[500px] aspect-square overflow-hidden flex items-center justify-center">
                        <Image
                          src={images[selectedImageIndex]}
                          alt={`${product.title} - Imagen ${selectedImageIndex + 1}`}
                          fill
                          className="object-contain scale-100 object-center"
                          priority={selectedImageIndex === 0}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="relative w-full h-[600px] md:h-auto md:min-h-[500px] md:aspect-square overflow-hidden flex items-center justify-center">
                    <Image
                      src={images[0]}
                      alt={product.title}
                      fill
                      className="object-contain scale-100 object-center"
                      priority
                    />
                  </div>
                )}
              </div>
              
              {/* Miniaturas - Mobile: abajo */}
              {images.length > 1 && (
                <div className="flex md:hidden gap-0.5 order-3 overflow-x-auto pt-0 pb-2 scrollbar-hide">
                  {images.map((image, index) => (
                    <div key={index} className="p-0.5 flex-shrink-0">
                      <button
                        onClick={() => setSelectedImageIndex(index)}
                        className={`relative w-20 h-20 rounded-md overflow-visible border-2 transition-all ${
                          selectedImageIndex === index 
                            ? 'border-white shadow-lg scale-105' 
                            : 'border-gray-700 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <div className="absolute inset-0 rounded-md overflow-hidden">
                          <Image
                            src={image}
                            alt={`${product.title} - Miniatura ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-between px-2 md:px-4">
              <div>
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                <p className="text-3xl font-bold mb-6">{formattedPrice}</p>

                <div className="mb-8">
                  <p className="text-gray-300 leading-relaxed">
                    {product.description || "Descripción del producto... La descripción detallada del producto iría aquí, incluyendo información sobre ingredientes, preparación y más."}
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
            <div className="space-y-2 text-[#f9f6f1]">
              <div>• Zona Norte → martes y jueves</div>
              <div>• Capital y otros → domingos</div>
            </div>
            <p className="mt-4">
              Para recibir tu pedido, hacelo antes de las 18:00hs del día previo a la entrega.<br/>
              🛵 Envíos a domicilio: compra mínima de 5 productos<br/>
              📍 Si retirás por pick-up, no hay mínimo de compra
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
