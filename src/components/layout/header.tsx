"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback, useMemo } from "react";
import { ShoppingBasket, Search, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
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
    <header className="bg-black text-white sticky top-0 z-50">
      {/* Top promotion banner - MOVED TO PAGE.TSX */}
      {/* <div className="bg-yellow-400 py-2 px-4 text-black text-center overflow-hidden whitespace-nowrap">
        <div className="animate-marquee-infinite">
          <span className="inline-block font-bold text-lg">Woki Experience ! Woki Experience ! Woki Experience ! Woki Experience ! Woki Experience ! Woki Experience !</span>
        </div>
      </div> */}

      {/* Main header */}
      <div className="container mx-auto py-4 flex items-center justify-between">
        {/* Mobile menu trigger */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Logo (centered on mobile, left on desktop) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none md:left-0">
          <Link href="/">
            <Image
              src="/woki-logo.png"
              alt="WOKI"
              width={100}
              height={100}
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation - hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className="text-white hover:text-yellow-400">
                  Inicio
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-yellow-400 bg-black">
                  Productos
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-4 p-4 w-[400px]">
                    {products.map((product) => (
                      <NavigationMenuLink
                        key={product.id}
                        asChild
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <Link href={`/productos/${product.slug}`}>
                          <div className="text-sm font-medium leading-none">{product.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            ${product.price}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/#contactanos" className="text-white hover:text-yellow-400">
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
              <div className="absolute top-12 left-0 w-full bg-black border border-gray-700 rounded shadow-lg z-50 max-h-60 overflow-auto">
                {filteredProducts.map(product => (
                  <button
                    key={product.id}
                    className="w-full text-left px-4 py-2 hover:bg-yellow-400 hover:text-black transition-colors"
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
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBasket className="h-6 w-6" />
              {totalItems > 0 && (
                <div className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </div>
              )}
            </Button>
            <CartDrawer />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-black fixed inset-0 z-50 transition-transform transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/woki-logo.png"
              alt="WOKI"
              width={100}
              height={100}
              className="h-16 w-auto"
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
              className="w-full bg-black border-gray-700 text-white placeholder:text-gray-400"
            />
            {showSuggestions && filteredProducts.length > 0 && (
              <div className="absolute top-12 left-0 w-full bg-black border border-gray-700 rounded shadow-lg z-50 max-h-60 overflow-auto">
                {filteredProducts.map(product => (
                  <button
                    key={product.id}
                    className="w-full text-left px-4 py-2 hover:bg-yellow-400 hover:text-black transition-colors"
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
              className="text-white hover:text-yellow-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            {/* Mobile Products Menu */}
            <div className="text-white">
              <button
                className="flex items-center justify-between w-full hover:text-yellow-400"
                onClick={(e) => {
                  const nextEl = e.currentTarget.nextElementSibling;
                  if (nextEl && nextEl.tagName === 'UL') {
                    (nextEl as HTMLElement).classList.toggle("hidden");
                  }
                }}
              >
                Productos <ChevronDown className="h-4 w-4" />
              </button>
              <ul className="ml-4 mt-2 space-y-2 hidden">
                <li>
                  <button
                    className="flex items-center justify-between w-full hover:text-yellow-400"
                    onClick={(e) => {
                      const nextEl = e.currentTarget.nextElementSibling;
                      if (nextEl && nextEl.tagName === 'UL') {
                        (nextEl as HTMLElement).classList.toggle("hidden");
                      }
                    }}
                  >
                    Carne <ChevronDown className="h-4 w-4" />
                  </button>
                  <ul className="ml-4 mt-2 space-y-2 hidden">
                    <li><Link href="/productos/carne/wok-lomo" className="text-white hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>Lomo</Link></li>
                    <li>
                      <button
                        className="flex items-center justify-between w-full hover:text-yellow-400"
                        onClick={(e) => {
                          const nextEl = e.currentTarget.nextElementSibling;
                          if (nextEl && nextEl.tagName === 'UL') {
                            (nextEl as HTMLElement).classList.toggle("hidden");
                          }
                        }}
                      >
                        Pollo <ChevronDown className="h-4 w-4" />
                      </button>
                      <ul className="ml-4 mt-2 space-y-2 hidden">
                        <li><Link href="/productos/carne/pollo" className="text-white hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>Pollo</Link></li>
                        <li><Link href="/productos/carne/pollo-spicy" className="text-white hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>Spicy</Link></li>
                      </ul>
                    </li>
                    <li><Link href="/productos/carne/langostinos" className="text-white hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>Langostinos</Link></li>
                  </ul>
                </li>
                <li><Link href="/productos/veggie/wok-veggie" className="text-white hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>Veggie</Link></li>
              </ul>
            </div>
            <Link
              href="/#contactanos"
              className="text-white hover:text-yellow-400"
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

// ListItem component for NavigationMenu
const ListItem = ({ href, title, children }: { href: string; title: string; children?: React.ReactNode }) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        {children && <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</div>}
      </Link>
    </NavigationMenuLink>
  </li>
);
