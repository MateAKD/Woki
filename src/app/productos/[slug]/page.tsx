"use client";

import PageLayout from "@/components/layout/page-layout";
import { getProductBySlug } from "@/lib/data/products";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingBasket, Minus, Plus, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { useState, use, useEffect, useCallback } from "react";
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

  const handleAddToCart = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!product) return;
    // Asegurarse de usar el valor actual de quantity
    const currentQuantity = quantity;
    if (currentQuantity > 0) {
      addItem(product, currentQuantity);
    }
  }, [product, quantity, addItem]);

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
          <div className="text-sm md:text-base text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>{" "}
            |{" "}
            <Link href="/productos" className="hover:text-white transition-colors">
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
                <div className={`hidden md:flex flex-col gap-0.5 order-1 py-1 max-h-[600px] ${
                  images.length > 6 
                    ? 'overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent' 
                    : ''
                }`}>
                  {images.map((image, index) => (
                    <div 
                      key={index} 
                      className="p-0.5 flex-shrink-0"
                      style={images.length <= 6 ? { 
                        height: `calc((600px - ${(images.length - 1) * 2}px) / ${images.length})` 
                      } : { height: '80px' }}
                    >
                      <button
                        onClick={() => setSelectedImageIndex(index)}
                        className={`relative w-20 rounded-md overflow-visible border-2 transition-all ${
                          images.length <= 6 ? 'h-full' : 'h-20'
                        } ${
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
                            className="object-cover rounded-md"
                          />
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Imagen principal */}
              <div className="bg-primary/20 rounded-lg overflow-hidden flex-1 order-2 md:order-2 flex items-center justify-center mt-6  md:mt-8 max-h-[600px]">
                {images.length > 1 ? (
                  <>
                    {/* Mobile: Carousel con swipe */}
                    <div className="md:hidden w-full rounded-lg overflow-hidden">
                      <Carousel setApi={setApi} className="w-full">
                        <CarouselContent>
                          {images.map((image, index) => (
                            <CarouselItem key={index} className="pl-0">
                              <div className="relative w-full h-[600px] overflow-hidden flex items-center justify-center mb-0 bg-[#1a513c] rounded-lg">
                                <img
                                  src={image}
                                  alt={`${product.title} - Imagen ${index + 1}`}
                                  className="w-full h-full object-contain"
                                  style={{ borderRadius: '0.5rem' }}
                                  loading={index === 0 ? "eager" : "lazy"}
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                      </Carousel>
                    </div>
                    {/* Desktop: Imagen estática */}
                    <div className="hidden md:flex w-full h-full max-h-[600px]">
                      <div className="relative w-full h-full max-h-[600px] aspect-square overflow-hidden flex items-center justify-center rounded-lg">
                        <Image
                          src={images[selectedImageIndex]}
                          alt={`${product.title} - Imagen ${selectedImageIndex + 1}`}
                          fill
                          quality={95}
                          sizes="(max-width: 768px) 900px, 50vw"
                          unoptimized
                          className="object-contain md:object-cover scale-100 object-center rounded-lg"
                          priority={selectedImageIndex === 0}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Mobile: imagen sin optimizar */}
                    <div className="md:hidden relative w-full h-[600px] overflow-hidden flex items-center justify-center bg-[#1a513c] rounded-lg">
                      <img
                        src={images[0]}
                        alt={product.title}
                        className="w-full h-full object-contain"
                        style={{ borderRadius: '0.5rem' }}
                        loading="eager"
                      />
                    </div>
                    {/* Desktop: imagen optimizada */}
                    <div className="hidden md:flex relative w-full h-full max-h-[600px] aspect-square overflow-hidden flex items-center justify-center rounded-lg">
                      <Image
                        src={images[0]}
                        alt={product.title}
                        fill
                        quality={95}
                        sizes="50vw"
                        className="object-contain md:object-cover scale-100 object-center rounded-lg"
                        priority
                      />
                    </div>
                  </>
                )}
              </div>
              
              {/* Miniaturas - Mobile: abajo con desplazamiento horizontal fluido */}
              {images.length > 1 && (
                <div className="flex md:hidden gap-2 order-3 overflow-x-auto py-3 px-1 scrollbar-hide touch-pan-x -mx-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden border-2 transition-all duration-200 active:scale-95 ${
                        selectedImageIndex === index 
                          ? 'border-[#10e35b] ring-2 ring-[#10e35b]/50 shadow-md scale-105' 
                          : 'border-white/20 opacity-70 hover:opacity-100'
                      }`}
                      aria-label={`Ver imagen ${index + 1}`}
                    >
                      <Image
                        src={image}
                        alt={`${product.title} - Miniatura ${index + 1}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-between px-2 md:px-4">
              <div>
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <p className="text-3xl font-bold text-white">{formattedPrice}</p>
                  {product.originalPrice && (
                    <p className="text-xl text-gray-400 line-through font-semibold">
                      {new Intl.NumberFormat('es-AR', {
                        style: 'currency',
                        currency: 'ARS',
                        minimumFractionDigits: 2
                      }).format(product.originalPrice)}
                    </p>
                  )}
                  {product.discountBadge && (
                    <span className="bg-[#10e35b] text-black font-extrabold text-xs px-2.5 py-1 rounded-sm uppercase tracking-wide">
                      {product.discountBadge}
                    </span>
                  )}
                </div>

                <div className="mb-6 space-y-4">
                  <p className="text-gray-200 leading-relaxed text-base">
                    {product.description}
                  </p>

                  {product.ingredients && product.ingredients.length > 0 && (
                    <div className="pt-2 border-t border-gray-800">
                      <h3 className="text-sm font-semibold tracking-wide uppercase text-[#10e35b] mb-2">
                        Ingredientes
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {product.ingredients.join(" · ")}
                      </p>
                    </div>
                  )}

                  {product.nutritionalInfo && (
                    <div className="pt-2 border-t border-gray-800">
                      <h3 className="text-sm font-semibold tracking-wide uppercase text-[#10e35b] mb-2">
                        Información nutricional
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 text-center">
                          <span className="block text-xs text-gray-400">Calorías</span>
                          <span className="text-base font-bold text-white">{product.nutritionalInfo.kcal}</span>
                          <span className="text-[10px] text-gray-400 block">kcal</span>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 text-center">
                          <span className="block text-xs text-gray-400">Proteínas</span>
                          <span className="text-base font-bold text-white">{product.nutritionalInfo.proteinas}</span>
                          <span className="text-[10px] text-gray-400 block">g</span>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 text-center">
                          <span className="block text-xs text-gray-400">Carbohidratos</span>
                          <span className="text-base font-bold text-white">{product.nutritionalInfo.carbohidratos}</span>
                          <span className="text-[10px] text-gray-400 block">g</span>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 text-center">
                          <span className="block text-xs text-gray-400">Grasas totales</span>
                          <span className="text-base font-bold text-white">{product.nutritionalInfo.grasasTotales}</span>
                          <span className="text-[10px] text-gray-400 block">g</span>
                        </div>
                      </div>
                    </div>
                  )}
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
                  type="button"
                  className="w-full bg-[#10e35b] hover:bg-[#05c14a] flex items-center justify-center gap-2 text-white font-bold shadow-lg transition-all duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleAddToCart(e);
                  }}
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
              Entregamos en toda la Ciudad de Buenos Aires y Gran Buenos Aires con envío sin costo.
            </p>
            <div className="space-y-2 text-[#f9f6f1]">
              <div>• Zona Norte</div>
              <div>• Capital y otros</div>
            </div>
            <p className="mt-4">
                            🛵 Envío mínimo de compra de 5 productos
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
