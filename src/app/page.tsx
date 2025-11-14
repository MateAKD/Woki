import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/layout/page-layout";
import CategorySection from "@/components/home/category-section";
import { categories } from "@/lib/data/categories";
import { AlertTriangle } from 'lucide-react';

export default function Home() {
  // Only use the first 5 categories for the homepage
  const homeCategories = categories.slice(0, 5);

  return (
    <PageLayout>
      {/* Top promotion banner */}
      <div
        className="bg-white py-2 px-0 text-black text-center overflow-hidden border-y-2 border-black"
        style={{ boxSizing: 'border-box' }}
      >
        <div className="marquee-infinite-row items-center">
          {Array.from({ length: 24 }).map((_, i) => (
            <span 
              key={`zurdo-experience-${i}`} 
              className="flex items-center mx-2"
            >
              <span className="inline-block font-bold text-base tracking-tight mr-2">
                ZURDO EXPERIENCE
              </span>
              <AlertTriangle className="h-5 w-5 inline-block ml-3 text-black" />
            </span>
          ))}
        </div>
      </div>

      {/* Categories Section - Now at the top */}
      <CategorySection categories={homeCategories} />

      {/* Línea divisoria antes de Seguinos en */}
      <div className="w-full flex justify-center my-8">
        <div className="h-px w-2/3 bg-white/20" />
      </div>

      {/* Featured Products - REMOVED */}
      {/*
      <section className="py-12 bg-[#1a513c]">
        <div className="container mx-auto">
          <ProductGrid products={featuredProducts} title="PRODUCTOS DESTACADOS" />
        </div>
      </section>
      */}

      {/* About/Illustrations Section - REMOVED */}
      {/*
      <section className="py-16 bg-[#1a513c]">
        <div className="container mx-auto flex flex-col items-center text-center">
          <Image
            src="https://ext.same-assets.com/513008999/3160495444.svg"
            alt="Mad Pasta Illustration"
            width={300}
            height={200}
            className="mb-8"
          />

          <div className="max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl font-bold mb-4">MAD PASTA COMPANY</h2>
            <p className="text-lg mb-6">
              Descubre nuestras pastas artesanales elaboradas con ingredientes de la más alta calidad.
              Un producto único, con sabor casero y el toque especial de Mad Pasta.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/80">
              <Link href="/productos">
                VER TODOS LOS PRODUCTOS
              </Link>
            </Button>
          </div>
        </div>
      </section>
      */}

      {/* Instagram Banner */}
      <section className="bg-[#1a513c] py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="text-white text-center md:text-left">
            <h3 className="text-base font-semibold mb-1 uppercase">Seguinos en</h3>
          </div>
          <Link
            href="https://www.instagram.com/zurdo_gourmet/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image 
              src="/instagram-icon.png"
              alt="Instagram Zurdo gourmet"
              width={28}
              height={28}
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
