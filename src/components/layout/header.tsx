"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback, useMemo } from "react";
import { ShoppingBasket, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import CartDrawer from "@/components/ui/cart/cart-drawer";
import { useCart } from "@/lib/context/cart-context";
import { products } from "@/lib/data/products";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();
  const { totalItems, setIsCartOpen } = useCart();

  const filteredProducts = useMemo(() =>
    search.length > 0
      ? products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
      : [],
    [search]
  );

  const handleSelectProduct = useCallback((slug: string) => {
    router.push(`/productos/${slug}`);
    setSearch('');
    setShowSuggestions(false);
    setIsMobileMenuOpen(false);
  }, [router]);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  }, []);

  return (
    <header className="bg-[#1a513c] text-white sticky top-0 z-50 border-b border-black">
      {/* Top promotion banner - MOVED TO PAGE.TSX */}
      {/* <div className="bg-yellow-400 py-2 px-4 text-black text-center overflow-hidden whitespace-nowrap">
        <div className="animate-marquee-infinite">
          <span className="inline-block font-bold text-lg">Zurdo Experience ! Zurdo Experience ! Zurdo Experience ! Zurdo Experience ! Zurdo Experience ! Zurdo Experience !</span>
        </div>
      </div> */}

      {/* Main header */}
      <div className="container mx-auto py-2 sm:py-3 md:py-4 flex items-center justify-between">
        {/* Mobile menu trigger */}
        <button
          className="md:hidden text-white p-3 hover:bg-white/10 rounded-md transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-10 w-10" />
        </button>

        {/* Logo (centered on mobile, left on desktop) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none md:left-0">
          <Link href="/">
            <Image
              src="/COMPLETO.CREMA.png"
              alt="ZURDO"
              width={150}
              height={150}
              className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation - hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-10">
          <NavigationMenu>
            <NavigationMenuList className="space-x-4">
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className="text-white hover:text-[#f9f6f1]">
                  Inicio
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/productos" className="text-white hover:text-[#f9f6f1]">
                  Productos
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/nosotros" className="text-white hover:text-[#f9f6f1]">
                  Nosotros
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/#contactanos" className="text-white hover:text-[#f9f6f1]">
                  Contacto
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Search and Cart */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden md:flex items-center relative">
            <Input
              type="text"
              placeholder="Buscar productos..."
              value={search}
              onChange={handleSearchChange}
              className="w-[200px] bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            {showSuggestions && filteredProducts.length > 0 && (
              <div className="absolute top-12 left-0 w-full bg-[#1a513c] border border-gray-700 rounded shadow-lg z-50 max-h-60 overflow-auto">
                {filteredProducts.map(product => (
                  <button
                    key={product.id}
                    className="w-full text-left px-4 py-2 hover:bg-[#1a513c] hover:text-[#f9f6f1] transition-colors"
                    onMouseDown={() => handleSelectProduct(product.slug)}
                  >
                    {product.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Cart */}
          <div className="relative">
            <button
              className="text-white p-3 hover:bg-white/10 rounded-md transition-colors relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBasket className="h-10 w-10 md:h-12 md:w-12" />
              {totalItems > 0 && (
                <div className="absolute -top-1 -right-1 bg-[#1a513c] text-[#f9f6f1] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </div>
              )}
            </button>
            <CartDrawer />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[#1a513c] fixed inset-0 z-50 transition-transform transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/COMPLETO.CREMA.png"
              alt="ZURDO"
              width={150}
              height={150}
              className="h-12 sm:h-16 w-auto"
            />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex items-center relative mb-6">
            <Input
              type="text"
              placeholder="Buscar productos..."
              value={search}
              onChange={handleSearchChange}
              className="w-full bg-[#1a513c] border-gray-700 text-white placeholder:text-gray-400"
            />
            {showSuggestions && filteredProducts.length > 0 && (
              <div className="absolute top-12 left-0 w-full bg-[#1a513c] border border-gray-700 rounded shadow-lg z-50 max-h-60 overflow-auto">
                {filteredProducts.map(product => (
                  <button
                    key={product.id}
                    className="w-full text-left px-4 py-2 hover:bg-[#1a513c] hover:text-[#f9f6f1] transition-colors"
                    onMouseDown={() => handleSelectProduct(product.slug)}
                  >
                    {product.title}
                  </button>
                ))}
              </div>
            )}
          </div>
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              className="text-white hover:text-[#f9f6f1]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/productos"
              className="text-white hover:text-[#f9f6f1]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Productos
            </Link>
            <Link
              href="/nosotros"
              className="text-white hover:text-[#f9f6f1]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="/#contactanos"
              className="text-white hover:text-[#f9f6f1]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
