"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  title: string;
  imageUrl: string;
  slug: string;
}

interface CategorySectionProps {
  categories: Category[];
}

export default function CategorySection({ categories }: CategorySectionProps) {
  return (
    <section className="py-0">
      <div className="container mx-auto px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0.5">
          {categories.map((category) => (
            <div key={category.id} className="relative group aspect-[3/4]">
              <Link href={`/${category.slug.startsWith('productos/') ? category.slug : 'productos/' + category.slug}`} className="block w-full h-full">
                <div className="w-full h-full bg-[#1a513c] relative overflow-hidden">
                  <Image
                    src={category.imageUrl}
                    alt={category.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110 opacity-50 group-hover:opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/15 to-transparent flex flex-col justify-end items-center text-center p-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-white uppercase mb-3 leading-tight">{category.title}</h3>
                    <Button asChild className="w-fit bg-[#00FF86] hover:bg-[#00e676] text-black text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-sm font-bold drop-shadow-lg transition-colors duration-200">
                      <span>VER MAS</span>
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
