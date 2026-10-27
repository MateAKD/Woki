"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Category } from "@/lib/data/categories";

interface CategorySectionProps {
  categories: Category[];
}

export default function CategorySection({ categories }: CategorySectionProps) {
  const boxKeto = categories.find((c) => c.slug === "box-keto");
  const regularDishes = categories.filter((c) => c.slug !== "box-keto");

  return (
    <section className="py-0 w-full bg-[#1a513c]">
      <div className="w-full px-0">
        {/* Box Keto Destacado como Oferta Especial - Ocupa ancho completo sin bordes vacíos */}
        {boxKeto && (
          <div className="relative group w-full border-b-2 border-black overflow-hidden bg-[#133d2c]">
            <Link href={`/productos/${boxKeto.slug}`} className="block w-full">
              <div className="grid grid-cols-1 md:grid-cols-12 items-stretch min-h-[400px] md:min-h-[500px]">
                {/* Imagen del Box (banner/flyer ocupando el espacio completo) */}
                <div className="md:col-span-7 relative h-[380px] sm:h-[450px] md:h-[540px] w-full bg-black/40 overflow-hidden">
                  <Image
                    src={boxKeto.imageUrl}
                    alt={boxKeto.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {boxKeto.discountBadge && (
                    <div className="absolute top-3 left-3 bg-[#10e35b] text-black font-extrabold text-xs sm:text-sm px-3 py-1 rounded-sm border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] uppercase tracking-wider">
                      {boxKeto.discountBadge}
                    </div>
                  )}
                </div>

                {/* Info y llamada a la acción */}
                <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-center items-start text-left bg-gradient-to-br from-[#1a513c] to-[#123829] border-t-2 md:border-t-0 md:border-l-2 border-black">
                  <span className="text-[#10e35b] font-extrabold text-xs tracking-widest uppercase mb-1 drop-shadow-sm">
                    ★ OFERTA ESPECIAL DESTACADA
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight mb-2">
                    NUEVO BOX KETO
                  </h2>
                  <p className="text-gray-200 text-sm sm:text-base leading-snug mb-3">
                    <strong className="text-white">5 platos</strong> con más proteína y menos carbohidratos. ¡Cubre automáticamente la compra mínima!
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4 text-xs text-gray-200">
                    <span className="bg-white/10 px-2 py-0.5 rounded border border-white/15">Colita asada</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded border border-white/15">Pescado con vegetales</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded border border-white/15">Berenjena parmesana</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded border border-white/15">Wok pollo</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded border border-white/15">Wok carne</span>
                  </div>

                  <div className="flex items-baseline gap-3 mb-4">
                    {boxKeto.originalPrice && (
                      <span className="text-base text-gray-400 line-through font-bold">
                        ${boxKeto.originalPrice.toLocaleString('es-AR')}
                      </span>
                    )}
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#10e35b] tracking-tight">
                      ${boxKeto.price?.toLocaleString('es-AR')}
                    </span>
                    <span className="bg-[#10e35b] text-black font-extrabold text-[11px] px-2 py-0.5 rounded-sm uppercase tracking-wide">
                      10% OFF
                    </span>
                  </div>

                  <Button className="w-full sm:w-auto bg-[#10e35b] hover:bg-[#05c14a] text-black text-sm sm:text-base px-6 py-3 rounded-sm font-extrabold border-2 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200">
                    <span>QUIERO MI BOX KETO</span>
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Los 3 platos abajo */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0.5 border-t border-black/40">
          {regularDishes.map((category) => (
            <div key={category.id} className="relative group aspect-[4/5] sm:aspect-[3/4] border-b sm:border-b-0 sm:border-r border-black last:border-r-0">
              <Link href={`/productos/${category.slug}`} className="block w-full h-full">
                <div className="w-full h-full bg-[#1a513c] relative overflow-hidden">
                  <Image
                    src={category.imageUrl}
                    alt={category.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {category.discountBadge && (
                    <div className="absolute top-3 left-3 bg-[#10e35b] text-black font-extrabold text-xs px-2.5 py-1 rounded-sm border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] uppercase">
                      {category.discountBadge}
                    </div>
                  )}

                  <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-5">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white uppercase mb-2 leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                      {category.title}
                    </h3>
                    
                    {category.price && (
                      <div className="flex items-center gap-2 mb-3">
                        {category.originalPrice && (
                          <span className="text-xs sm:text-sm text-gray-400 line-through font-bold">
                            ${category.originalPrice.toLocaleString('es-AR')}
                          </span>
                        )}
                        <span className="text-lg sm:text-xl font-extrabold text-[#10e35b] drop-shadow-md">
                          ${category.price.toLocaleString('es-AR')}
                        </span>
                      </div>
                    )}

                    <Button asChild className="w-fit bg-[#10e35b] hover:bg-[#05c14a] text-black text-xs sm:text-sm px-4 py-2 rounded-sm font-bold border border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-colors duration-200">
                      <span>VER PLATO</span>
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
