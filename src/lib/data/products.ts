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
    price: 12000,
    imageUrl: "/Truchon/DSC09398.jpg",
    slug: "truchon-salsa-agridulce",
    featured: true,
    description: "Truchón fresco en salsa agridulce con puré artesanal de zanahoria. Un plato mediano, equilibrado y gourmet: pescado tierno con salsa brillante y costra dorada, junto a un puré suave y cremoso, terminado con sésamo blanco y negro para un toque especial.",
    images: ["/Truchon/DSC09398.jpg", "/Truchon/DSC09393.jpg", "/Truchon/DSC09394.jpg", "/Truchon/DSC09396.jpg"]
  },
  {
    id: "2",
    title: "Pescado con vegetales",
    price: 10000,
    imageUrl: "/Pescado con vegetales/DSC09501.jpg",
    slug: "pescado-con-vegetales",
    featured: true,
    description: "Pescado blanco fresco con vegetales grillados. Un plato ligero y saludable: pescado tierno y jugoso acompañado de una selección de vegetales asados con un toque de aceite de oliva y hierbas frescas, creando una combinación perfecta de sabores naturales y texturas crujientes.",
    images: ["/Pescado con vegetales/DSC09501.jpg", "/Pescado con vegetales/DSC09502.jpg", "/Pescado con vegetales/DSC09503.jpg", "/Pescado con vegetales/DSC09504.jpg", "/Pescado con vegetales/DSC09505.jpg", "/Pescado con vegetales/DSC09510.jpg"]
  },
  {
    id: "3",
    title: "Carne al horno",
    price: 10000,
    imageUrl: "/Carne al horno con papas/DSC09277.jpg",
    slug: "carne-al-horno",
    featured: true,
    description: "Carne al horno con papas y demi glace. Un plato contundente y sabroso: carne tierna cocida lentamente al horno hasta lograr una textura perfecta, acompañada de papas doradas y una salsa demi glace rica y aromática que realza todos los sabores.",
    images: ["/Carne al horno con papas/DSC09277.jpg", "/Carne al horno con papas/DSC09279.jpg", "/Carne al horno con papas/DSC09280.jpg", "/Carne al horno con papas/DSC09281.jpg", "/Carne al horno con papas/DSC09284.jpg", "/Carne al horno con papas/DSC09285.jpg", "/Carne al horno con papas/DSC09290.jpg", "/Carne al horno con papas/DSC09296.jpg", "/Carne al horno con papas/DSC09298.jpg", "/Carne al horno con papas/DSC09303.jpg", "/Carne al horno con papas/DSC09305.jpg"]
  },
  {
    id: "4",
    title: "Bondiola a la mostaza",
    price: 10000,
    imageUrl: "/Bondiola a la mostaza/DSC09340.jpg",
    slug: "bondiola-a-la-mostaza",
    featured: true,
    description: "Bondiola a la mostaza con miel y puré de batatas. Un plato gourmet y equilibrado: bondiola tierna cocida a fuego lento con una salsa de mostaza y miel que combina lo dulce y lo picante, acompañada de un puré cremoso de batatas que aporta suavidad y sabor único.",
    images: ["/Bondiola a la mostaza/DSC09340.jpg", "/Bondiola a la mostaza/DSC09342.jpg", "/Bondiola a la mostaza/DSC09343.jpg", "/Bondiola a la mostaza/DSC09344.jpg", "/Bondiola a la mostaza/DSC09346.jpg", "/Bondiola a la mostaza/DSC09348.jpg", "/Bondiola a la mostaza/DSC09352.jpg"]
  },
  {
    id: "5",
    title: "Albóndigas de pollo",
    price: 10000,
    imageUrl: "/Albondigas de pollo/DSC09326.jpg",
    slug: "albondigas-de-pollo",
    featured: true,
    description: "Albóndigas de pollo con cous cous y vegetales. Un plato mediterráneo y nutritivo: albóndigas jugosas de pollo preparadas con hierbas frescas, servidas sobre un lecho de cous cous esponjoso y acompañadas de vegetales salteados que aportan color, textura y sabor.",
    images: ["/Albondigas de pollo/DSC09326.jpg", "/Albondigas de pollo/DSC09327.jpg", "/Albondigas de pollo/DSC09328.jpg", "/Albondigas de pollo/DSC09331.jpg", "/Albondigas de pollo/DSC09334.jpg", "/Albondigas de pollo/DSC09336.jpg", "/Albondigas de pollo/DSC09337.jpg"]
  },
  {
    id: "6",
    title: "Gnocchis",
    price: 9000,
    imageUrl: "/Gnocchis/DSC09260.jpg",
    slug: "gnocchis",
    featured: true,
    description: "Gnocchis con crema de hongos y puerro. Un plato italiano reconfortante: gnocchis caseros suaves y delicados, bañados en una crema sedosa de hongos y puerro que aporta profundidad y sabor umami, creando una experiencia culinaria auténtica y deliciosa.",
    images: ["/Gnocchis/DSC09260.jpg", "/Gnocchis/DSC09263.jpg", "/Gnocchis/DSC09264.jpg", "/Gnocchis/DSC09266.jpg", "/Gnocchis/DSC09267.jpg", "/Gnocchis/DSC09269.jpg", "/Gnocchis/DSC09270.jpg", "/Gnocchis/DSC09271.jpg", "/Gnocchis/DSC09272.jpg"]
  },
  {
    id: "7",
    title: "Arroz con pollo spicy",
    price: 9000,
    imageUrl: "/Arroz con pollo spicy/DSC09496.jpg",
    slug: "arroz-con-pollo-spicy",
    featured: true,
    description: "Arroz con pollo picante. Un plato con carácter y sabor: pollo tierno marinado con especias picantes, cocido junto con arroz aromático que absorbe todos los sabores, creando una combinación equilibrada entre el picante y los sabores profundos del pollo y las especias.",
    images: ["/Arroz con pollo spicy/DSC09496.jpg", "/Arroz con pollo spicy/DSC09498.jpg", "/Arroz con pollo spicy/DSC09499.jpg", "/Arroz con pollo spicy/DSC09500 2.jpg", "/Arroz con pollo spicy/DSC09500.jpg"]
  },
  {
    id: "8",
    title: "Wok de carne",
    price: 8000,
    imageUrl: "/Wok de carne/DSC09455.jpg",
    slug: "wok-de-carne",
    featured: true,
    description: "Wok de carne con verduras salteadas y arroz. Un plato asiático vibrante: tiras de carne jugosa salteadas al wok con una mezcla de verduras crujientes que mantienen su textura y color, servido sobre arroz aromático. La cocción rápida preserva los sabores naturales y crea una experiencia fresca y deliciosa.",
    images: ["/Wok de carne/DSC09455.jpg", "/Wok de carne/DSC09460.jpg", "/Wok de carne/DSC09461.jpg", "/Wok de carne/DSC09467 2.jpg", "/Wok de carne/DSC09475.jpg", "/Wok de carne/DSC09482.jpg"]
  },
  {
    id: "9",
    title: "Milanesa con puré",
    price: 8000,
    imageUrl: "/Milanesa con pure/DSC09353.jpg",
    slug: "milanesa-con-pure",
    featured: true,
    description: "Milanesa con puré de papa. Un clásico argentino reconfortante: milanesa dorada y crujiente, empanada con pan rallado fino que crea una textura perfecta, acompañada de un puré de papas cremoso y suave que equilibra la crocancia de la milanesa con suavidad.",
    images: ["/Milanesa con pure/DSC09353.jpg", "/Milanesa con pure/DSC09355.jpg", "/Milanesa con pure/DSC09363.jpg", "/Milanesa con pure/DSC09364.jpg", "/Milanesa con pure/DSC09365.jpg", "/Milanesa con pure/DSC09367.jpg", "/Milanesa con pure/DSC09369.jpg", "/Milanesa con pure/DSC09376.jpg"]
  },
  {
    id: "10",
    title: "Rissoto de hongos",
    price: 8000,
    imageUrl: "/Rissoto de hongos/DSC09382.jpg",
    slug: "rissoto-de-hongos",
    featured: true,
    description: "Rissoto de hongos con arroz blanco y hongos de pino. Un plato italiano sofisticado: arroz cremoso cocido al estilo risotto, donde cada grano mantiene su textura mientras libera su almidón, combinado con hongos de pino que aportan su sabor terroso y único, creando una experiencia gourmet auténtica.",
    images: ["/Rissoto de hongos/DSC09382.jpg", "/Rissoto de hongos/DSC09384.jpg", "/Rissoto de hongos/DSC09385.jpg", "/Rissoto de hongos/DSC09388.jpg", "/Rissoto de hongos/DSC09389.jpg", "/Rissoto de hongos/DSC09390.jpg", "/Rissoto de hongos/DSC09391.jpg", "/Rissoto de hongos/DSC09392.jpg"]
  },
  {
    id: "11",
    title: "Pastel de papa",
    price: 8000,
    imageUrl: "/Pastel de papa/DSC09484.jpg",
    slug: "pastel-de-papa",
    featured: true,
    description: "Pastel de carne picada y papa. Un plato casero y reconfortante: capas de carne picada sazonada con especias, cubierta con puré de papas dorado al horno que forma una costra crujiente. Un clásico que combina la suavidad del puré con el sabor profundo de la carne.",
    images: ["/Pastel de papa/DSC09484.jpg", "/Pastel de papa/DSC09489.jpg", "/Pastel de papa/DSC09492.jpg", "/Pastel de papa/DSC09494.jpg"]
  },
  {
    id: "12",
    title: "Berenjenas a la parmesana",
    price: 7000,
    imageUrl: "/placeholder.jpg",
    slug: "berenjenas-a-la-parmesana",
    featured: true,
    description: "Berenjenas a la parmesana dominó con queso y tomate. Un plato vegetariano gourmet: láminas de berenjena tierna dispuestas en capas alternadas con queso derretido y salsa de tomate casera, horneadas hasta lograr una textura perfecta donde los sabores se fusionan armoniosamente."
  },
  {
    id: "13",
    title: "Tortilla de papa",
    price: 7000,
    imageUrl: "/Tortilla de papa/DSC09206.jpg",
    slug: "tortilla-de-papa",
    featured: true,
    description: "Tortilla de papa clásica española. Un plato tradicional y delicioso: tortilla esponjosa preparada con papas tiernas y huevos frescos, cocida a la perfección para lograr una textura cremosa por dentro y dorada por fuera. Un clásico que nunca pasa de moda.",
    images: ["/Tortilla de papa/DSC09206.jpg", "/Tortilla de papa/DSC09211.jpg", "/Tortilla de papa/DSC09214.jpg", "/Tortilla de papa/DSC09215.jpg", "/Tortilla de papa/DSC09221.jpg", "/Tortilla de papa/DSC09223.jpg", "/Tortilla de papa/DSC09226.jpg", "/Tortilla de papa/DSC09227.jpg", "/Tortilla de papa/DSC09231.jpg", "/Tortilla de papa/DSC09232.jpg", "/Tortilla de papa/DSC09234.jpg", "/Tortilla de papa/DSC09236.jpg", "/Tortilla de papa/DSC09238.jpg", "/Tortilla de papa/DSC09240.jpg", "/Tortilla de papa/DSC09241.jpg", "/Tortilla de papa/DSC09242.jpg"]
  },
  {
    id: "14",
    title: "Tortilla de espinaca",
    price: 7000,
    imageUrl: "/Tortilla de espinaca/DSC09180.jpg",
    slug: "tortilla-de-espinaca",
    featured: true,
    description: "Tortilla de espinaca preparada con queso y cebolla. Un plato nutritivo y sabroso: tortilla esponjosa con espinacas frescas que aportan color y sabor, combinada con queso derretido y cebolla caramelizada que añaden profundidad y cremosidad, creando una experiencia deliciosa y saludable.",
    images: ["/Tortilla de espinaca/DSC09180.jpg", "/Tortilla de espinaca/DSC09182.jpg", "/Tortilla de espinaca/DSC09184.jpg", "/Tortilla de espinaca/DSC09192.jpg", "/Tortilla de espinaca/DSC09195.jpg", "/Tortilla de espinaca/DSC09197.jpg"]
  },
  {
    id: "15",
    title: "Wrap de pollo BBQ",
    price: 7000,
    imageUrl: "/Wrap de pollo bbq/DSC09406.jpg",
    slug: "wrap-de-pollo-bbq",
    featured: true,
    description: "Wrap de pollo BBQ con barbacoa casera. Un plato práctico y lleno de sabor: pollo tierno marinado en salsa barbacoa casera con un equilibrio perfecto entre lo dulce y lo ahumado, envuelto en una tortilla suave junto con vegetales frescos que aportan crujiente y frescura.",
    images: ["/Wrap de pollo bbq/DSC09406.jpg", "/Wrap de pollo bbq/DSC09407.jpg", "/Wrap de pollo bbq/DSC09408.jpg", "/Wrap de pollo bbq/DSC09411.jpg"]
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  // Buscar el producto cuyo slug coincida exactamente
  return products.find(product => product.slug === slug);
};
