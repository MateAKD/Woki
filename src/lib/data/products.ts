export interface Product {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  slug: string;
  featured?: boolean;
  description?: string;
  images?: string[]; // Array de imágenes adicionales para galería
}

export const products: Product[] = [
  {
    id: "1",
    title: "Truchón con salsa agridulce",
    price: 14000,
    imageUrl: "/Truchon/DSC09398.jpg",
    slug: "truchon-salsa-agridulce",
    featured: true,
    description: "250 gramos de Truchon al horno con salsa agridulce de la casa acompañado con 250 gramos de cremoso de zanahoria. El preferido de todos!",
    images: ["/Truchon/DSC09398.jpg", "/Truchon/DSC09393.jpg", "/Truchon/DSC09394.jpg", "/Truchon/DSC09396.jpg"]
  },
  {
    id: "2",
    title: "Pescado con vegetales",
    price: 10000,
    imageUrl: "/Pescado con vegetales/DSC09501.jpg",
    slug: "pescado-con-vegetales",
    featured: true,
    description: "250 gramos de pesca blanca del día acompañado de 250 gramos de vegetales grillados y condimentados. Definitivamente el plato más sano de la carta.",
    images: ["/Pescado con vegetales/DSC09501.jpg", "/Pescado con vegetales/DSC09502.jpg", "/Pescado con vegetales/DSC09503.jpg", "/Pescado con vegetales/DSC09504.jpg", "/Pescado con vegetales/DSC09505.jpg", "/Pescado con vegetales/DSC09510.jpg"]
  },
  {
    id: "3",
    title: "Carne al horno",
    price: 12000,
    imageUrl: "/Carne al horno con papas/DSC09277.jpg",
    slug: "carne-al-horno",
    featured: true,
    description: "250 gramos de ojo de bife con una salsa demi glace a base de huesos y 250 gramos de papas al horno. Fuerte al medio. No falla…",
    images: ["/Carne al horno con papas/DSC09277.jpg", "/Carne al horno con papas/DSC09279.jpg", "/Carne al horno con papas/DSC09280.jpg", "/Carne al horno con papas/DSC09281.jpg", "/Carne al horno con papas/DSC09284.jpg", "/Carne al horno con papas/DSC09285.jpg", "/Carne al horno con papas/DSC09290.jpg", "/Carne al horno con papas/DSC09296.jpg", "/Carne al horno con papas/DSC09298.jpg", "/Carne al horno con papas/DSC09303.jpg", "/Carne al horno con papas/DSC09305.jpg"]
  },
  {
    id: "4",
    title: "Bondiola a la mostaza",
    price: 10000,
    imageUrl: "/Bondiola a la mostaza/DSC09340.jpg",
    slug: "bondiola-a-la-mostaza",
    featured: true,
    description: "250 gramos de bondiola de cerdo pintada con mostaza y miel y acompañado de 250 gramos de puré de batata criollo. Una combinación dulce que te explota en la boca!",
    images: ["/Bondiola a la mostaza/DSC09340.jpg", "/Bondiola a la mostaza/DSC09342.jpg", "/Bondiola a la mostaza/DSC09343.jpg", "/Bondiola a la mostaza/DSC09344.jpg", "/Bondiola a la mostaza/DSC09346.jpg", "/Bondiola a la mostaza/DSC09348.jpg", "/Bondiola a la mostaza/DSC09352.jpg"]
  },
  {
    id: "5",
    title: "Albóndigas de pollo",
    price: 10000,
    imageUrl: "/Albondigas de pollo/DSC09326.jpg",
    slug: "albondigas-de-pollo",
    featured: true,
    description: "5 albóndigas de pollo (50g c/u) acompañado de cous cous condimentado con vegetales grillados y frescos. Original, rico y sano. Probalo y decinos.",
    images: ["/Albondigas de pollo/DSC09326.jpg", "/Albondigas de pollo/DSC09327.jpg", "/Albondigas de pollo/DSC09328.jpg", "/Albondigas de pollo/DSC09331.jpg", "/Albondigas de pollo/DSC09334.jpg", "/Albondigas de pollo/DSC09336.jpg", "/Albondigas de pollo/DSC09337.jpg"]
  },
  {
    id: "6",
    title: "Gnocchis",
    price: 9000,
    imageUrl: "/Gnocchis/DSC09260.jpg",
    slug: "gnocchis",
    featured: true,
    description: "250 gramos de Gnocchis de papa con salsa de hongos de pino y puerro asado. Infravalorado. Pero para nosotros es de los mejores.",
    images: ["/Gnocchis/DSC09260.jpg", "/Gnocchis/DSC09263.jpg", "/Gnocchis/DSC09264.jpg", "/Gnocchis/DSC09266.jpg", "/Gnocchis/DSC09267.jpg", "/Gnocchis/DSC09269.jpg", "/Gnocchis/DSC09270.jpg", "/Gnocchis/DSC09271.jpg", "/Gnocchis/DSC09272.jpg"]
  },
  {
    id: "7",
    title: "Arroz con pollo spicy",
    price: 9000,
    imageUrl: "/Arroz con pollo spicy/DSC09496.jpg",
    slug: "arroz-con-pollo-spicy",
    featured: true,
    description: "350 gramos de wok de pollo spicy estilo asiático acompañado de 150 gramos de arroz blanco. Tranqui. Es apto para todo público che.",
    images: ["/Arroz con pollo spicy/DSC09496.jpg", "/Arroz con pollo spicy/DSC09498.jpg", "/Arroz con pollo spicy/DSC09499.jpg", "/Arroz con pollo spicy/DSC09500 2.jpg", "/Arroz con pollo spicy/DSC09500.jpg"]
  },
  {
    id: "8",
    title: "Wok de carne",
    price: 8000,
    imageUrl: "/Wok de carne/DSC09482.jpg",
    slug: "wok-de-carne",
    featured: true,
    description: "350 gramos de Wok de carne estilo asiático acompañado de 150 gramos de arroz blanco. Pedilo. Después nos agradeces….",
    images: ["/Wok de carne/DSC09482.jpg", "/Wok de carne/DSC09455.jpg", "/Wok de carne/DSC09460.jpg", "/Wok de carne/DSC09461.jpg", "/Wok de carne/DSC09467 2.jpg", "/Wok de carne/DSC09475.jpg"]
  },
  {
    id: "9",
    title: "Milanesa con puré",
    price: 8000,
    imageUrl: "/Milanesa con pure/DSC09353.jpg",
    slug: "milanesa-con-pure",
    featured: true,
    description: "250 gramos de milanesa de ternera hecha a mano con 250 gramos de puré de papa. SÚPER CLÁSICO.",
    images: ["/Milanesa con pure/DSC09353.jpg", "/Milanesa con pure/DSC09355.jpg", "/Milanesa con pure/DSC09363.jpg", "/Milanesa con pure/DSC09364.jpg", "/Milanesa con pure/DSC09365.jpg", "/Milanesa con pure/DSC09367.jpg", "/Milanesa con pure/DSC09369.jpg", "/Milanesa con pure/DSC09376.jpg"]
  },
  {
    id: "10",
    title: "Rissoto de hongos",
    price: 8000,
    imageUrl: "/Rissoto de hongos/DSC09382.jpg",
    slug: "rissoto-de-hongos",
    featured: true,
    description: "400 gramos de risotto de hongos de pino. Platos cremosos si los hay…",
    images: ["/Rissoto de hongos/DSC09382.jpg", "/Rissoto de hongos/DSC09384.jpg", "/Rissoto de hongos/DSC09385.jpg", "/Rissoto de hongos/DSC09388.jpg", "/Rissoto de hongos/DSC09389.jpg", "/Rissoto de hongos/DSC09390.jpg", "/Rissoto de hongos/DSC09391.jpg", "/Rissoto de hongos/DSC09392.jpg"]
  },
  {
    id: "11",
    title: "Pastel de papa",
    price: 8000,
    imageUrl: "/Pastel de papa/DSC09484.jpg",
    slug: "pastel-de-papa",
    featured: true,
    description: "400 gramos de un pastel de papa clásico. Una bomba de sabor.",
    images: ["/Pastel de papa/DSC09484.jpg", "/Pastel de papa/DSC09489.jpg", "/Pastel de papa/DSC09492.jpg", "/Pastel de papa/DSC09494.jpg"]
  },
  {
    id: "12",
    title: "Berenjenas a la parmesana",
    price: 7000,
    imageUrl: "/Bernejenas a la parmesana/WhatsApp Image 2025-12-10 at 12.07.15.jpeg",
    slug: "berenjenas-a-la-parmesana",
    featured: true,
    description: "Un milhojas de berenjena con salsa de tomate, parmesano, orégano, albahaca y un toque de oliva. Uno de nuestros preferidos de los vegetarianos.",
    images: ["/Bernejenas a la parmesana/WhatsApp Image 2025-12-10 at 12.07.15.jpeg", "/Bernejenas a la parmesana/WhatsApp Image 2025-12-10 at 12.07.15 (1).jpeg"]
  },
  {
    id: "13",
    title: "Tortilla de papa",
    price: 7000,
    imageUrl: "/Tortilla de papa/DSC09214.jpg",
    slug: "tortilla-de-papa",
    featured: true,
    description: "400 gramos de una clásica tortilla de papa. Nada raro. Cebolla, huevo y papa. Que más queres?",
    images: ["/Tortilla de papa/DSC09214.jpg", "/Tortilla de papa/DSC09206.jpg", "/Tortilla de papa/DSC09211.jpg", "/Tortilla de papa/DSC09215.jpg", "/Tortilla de papa/DSC09221.jpg", "/Tortilla de papa/DSC09223.jpg", "/Tortilla de papa/DSC09226.jpg", "/Tortilla de papa/DSC09227.jpg", "/Tortilla de papa/DSC09231.jpg", "/Tortilla de papa/DSC09232.jpg", "/Tortilla de papa/DSC09234.jpg", "/Tortilla de papa/DSC09236.jpg", "/Tortilla de papa/DSC09238.jpg", "/Tortilla de papa/DSC09240.jpg", "/Tortilla de papa/DSC09241.jpg", "/Tortilla de papa/DSC09242.jpg"]
  },
  {
    id: "14",
    title: "Tortilla de espinaca",
    price: 7000,
    imageUrl: "/Tortilla de espinaca/DSC09180.jpg",
    slug: "tortilla-de-espinaca",
    featured: true,
    description: "400 gramos de tortilla de espinaca con queso y cebolla. Doy fe. La mejor.",
    images: ["/Tortilla de espinaca/DSC09180.jpg", "/Tortilla de espinaca/DSC09182.jpg", "/Tortilla de espinaca/DSC09184.jpg", "/Tortilla de espinaca/DSC09192.jpg", "/Tortilla de espinaca/DSC09195.jpg", "/Tortilla de espinaca/DSC09197.jpg"]
  },
  {
    id: "15",
    title: "Wrap de pollo BBQ",
    price: 7000,
    imageUrl: "/Wrap de pollo bbq/DSC09407.jpg",
    slug: "wrap-de-pollo-bbq",
    featured: true,
    description: "2 unidades de wrap de pollo con barbacoa casera. Nuestro plato yankee. Simplemente adictivo.",
    images: ["/Wrap de pollo bbq/DSC09407.jpg", "/Wrap de pollo bbq/DSC09406.jpg", "/Wrap de pollo bbq/DSC09408.jpg", "/Wrap de pollo bbq/DSC09411.jpg"]
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  // Buscar el producto cuyo slug coincida exactamente
  return products.find(product => product.slug === slug);
};
