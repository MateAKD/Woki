export interface Product {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  slug: string;
  category: string;
  featured?: boolean;
  description?: string;
  images?: string[]; // Array de imágenes adicionales para galería
}

export const products: Product[] = [
  {
    id: "1",
    title: "Wok de Lomo",
    price: 10000,
    imageUrl: "/wok-lomo.jpg",
    slug: "carne/wok-lomo",
    category: "carne",
    featured: true
  },
  {
    id: "2",
    title: "Wok de Pollo",
    price: 10000,
    imageUrl: "/wok-pollo.jpg",
    slug: "carne/pollo",
    category: "carne",
    featured: true
  },
  {
    id: "3",
    title: "Wok de Pollo Spicy",
    price: 10000,
    imageUrl: "/wok-pollo-spicy.jpg",
    slug: "carne/pollo-spicy",
    category: "carne",
    featured: true
  },
  {
    id: "4",
    title: "Wok de Langostinos",
    price: 10000,
    imageUrl: "/wok-langostinos.jpg",
    slug: "carne/langostinos",
    category: "carne",
    featured: true
  },
  {
    id: "5",
    title: "Wok Veggie",
    price: 10000,
    imageUrl: "/wok-veggie.jpg",
    slug: "veggie/wok-veggie",
    category: "veggie",
    featured: true
  },
  {
    id: "6",
    title: "Truchon con pure de zanahoria",
    price: 12000,
    imageUrl: "/Truchon 1.jpg",
    slug: "carne/truchon-salsa-agridulce",
    category: "carne",
    featured: true,
    description: "Truchón fresco en salsa agridulce con puré artesanal de zanahoria. Un plato mediano, equilibrado y gourmet: pescado tierno con salsa brillante y costra dorada, junto a un puré suave y cremoso, terminado con sésamo blanco y negro para un toque especial.",
    images: ["/Truchon 1.jpg", "/Truchon 2.jpg", "/Truchon 3.jpg", "/Truchon 4.jpg"]
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  // Buscar el producto cuyo slug coincida exactamente
  return products.find(product => product.slug === slug);
};
