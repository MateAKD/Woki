import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/layout/page-layout";
// import HeroCarousel from "@/components/home/hero-carousel"; // Removed HeroCarousel
import CategorySection from "@/components/home/category-section";
import ProductGrid from "@/components/product/product-grid";
import { Button } from "@/components/ui/button";
// import { heroSlides } from "@/lib/data/hero-slides"; // Removed heroSlides import
import { categories } from "@/lib/data/categories";
import { getFeaturedProducts } from "@/lib/data/products";
import { AlertTriangle } from 'lucide-react'; // Import AlertTriangle

export default function Home() {
  // Only use the first 5 categories for the homepage
  const homeCategories = categories.slice(0, 5);
  const featuredProducts = getFeaturedProducts();

  return (
    <PageLayout>
      {/* Top promotion banner */}
      <div className="bg-yellow-400 py-2 px-0 text-black text-center overflow-hidden">
        <div className="marquee-infinite-row items-center">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className="flex items-center mx-2">
              <span className="inline-block font-bold text-base tracking-tight mr-2">WOKI EXPERIENCE</span>
              <AlertTriangle className="h-5 w-5 inline-block ml-3" />
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
      <section className="py-12 bg-black">
        <div className="container mx-auto">
          <ProductGrid products={featuredProducts} title="PRODUCTOS DESTACADOS" />
        </div>
      </section>
      */}

      {/* About/Illustrations Section - REMOVED */}
      {/*
      <section className="py-16 bg-black">
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
      <section className="bg-black py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="text-white text-center md:text-left">
            <h3 className="text-base font-semibold mb-1 uppercase">Seguinos en</h3>
          </div>
          <Link href="https://www.instagram.com/woki_delivery/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Image 
              src="/instagram-icon.png"
              alt="Instagram Woki Delivery"
              width={28}
              height={28}
            />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
