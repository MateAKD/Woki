export interface Product {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  slug: string;
  category: string;
  featured?: boolean;
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
