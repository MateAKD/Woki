export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number; // Para mostrar precio tachado en oferta
  discountBadge?: string; // Etiqueta como "10% OFF" u "OFERTA"
  imageUrl: string;
  slug: string;
  featured?: boolean;
  description?: string;
  ingredients?: string[];
  nutritionalInfo?: {
    kcal: number;
    proteinas: number; // en gramos
    carbohidratos: number; // en gramos
    grasasTotales: number; // en gramos
  };
  dishesIncluded?: string[]; // Para boxes/combos
  images?: string[]; // Array de imágenes adicionales para galería
}

export const products: Product[] = [
  {
    id: "box-keto",
    title: "Box Keto - 5 Platos",
    price: 67000,
    originalPrice: 74000,
    discountBadge: "10% OFF",
    imageUrl: "/viandas/Gemini_Generated_Image_86xa4l86xa4l86xa.jpg",
    slug: "box-keto",
    featured: true,
    description: "Los platos que más pidieron, ahora en un solo box. 5 platos con más proteína y menos carbohidratos. 10% de descuento incluido en este box. Comida real, rápida, casera y de máxima calidad. ¡Incluye 5 viandas y cubre automáticamente el mínimo de compra!",
    ingredients: [
      "Colita de cuadril a la parrilla con verduras asadas",
      "Pescado blanco con verduras y arroz yamaní",
      "Berenjena a la parmesana",
      "Wok de pollo estilo asiático",
      "Wok de carne estilo asiático"
    ],
    dishesIncluded: [
      "Colita a la parrilla con verduras asadas",
      "Pescado con verduras y arroz yamaní",
      "Berenjena a la parmesana",
      "Wok de pollo spicy",
      "Wok de carne"
    ],
    nutritionalInfo: {
      kcal: 2972,
      proteinas: 298,
      carbohidratos: 217,
      grasasTotales: 97
    },
    images: [
      "/viandas/box-keto-square.jpg",
      "/viandas/colita-de-cuadril.png",
      "/viandas/pescado-con-vegetales-principal.jpg",
      "/viandas/berenjena.png",
      "/viandas/wok-pollo.png",
      "/viandas/wok-de-carne.png"
    ]
  },
  {
    id: "1",
    title: "Truchón con puré de zanahoria",
    price: 19500,
    imageUrl: "/viandas/truchon.png",
    slug: "truchon-con-pure-de-zanahoria",
    featured: true,
    description: "250 g de truchón con 200 g de puré de zanahoria y salsa teriyaki casera.",
    ingredients: [
      "Truchón",
      "Zanahoria",
      "Aceite de oliva",
      "Sal",
      "Salsa teriyaki"
    ],
    nutritionalInfo: {
      kcal: 621,
      proteinas: 51,
      carbohidratos: 34,
      grasasTotales: 30
    },
    images: [
      "/viandas/truchon.png",
      "/Truchon/DSC09398.jpg",
      "/Truchon/DSC09393.jpg",
      "/Truchon/DSC09394.jpg",
      "/Truchon/DSC09396.jpg"
    ]
  },
  {
    id: "2",
    title: "Colita de cuadril con verduras asadas",
    price: 18000,
    imageUrl: "/viandas/colita-de-cuadril.png",
    slug: "colita-de-cuadril-con-verduras-asadas",
    featured: true,
    description: "200 g de colita de cuadril a la parrilla con 250 g de mix de vegetales asados.",
    ingredients: [
      "Colita de cuadril",
      "Morrón",
      "Cebolla",
      "Cherries",
      "Calabaza",
      "Tomillo",
      "Sal",
      "Pimienta",
      "Aceite de oliva"
    ],
    nutritionalInfo: {
      kcal: 520,
      proteinas: 56,
      carbohidratos: 32,
      grasasTotales: 17
    },
    images: ["/viandas/colita-de-cuadril.png"]
  },
  {
    id: "3",
    title: "Wok de carne",
    price: 16500,
    imageUrl: "/viandas/wok-de-carne.png",
    slug: "wok-de-carne",
    featured: true,
    description: "350 g de wok de carne estilo asiático con 150 g de arroz blanco.",
    ingredients: [
      "Bola de lomo",
      "Cebolla",
      "Cebolla de verdeo",
      "Salsa de soja",
      "Salsa de ostras",
      "Azúcar",
      "Maicena",
      "Sal",
      "Pimienta",
      "Jengibre",
      "Ajo",
      "Arroz blanco",
      "Semillas de sésamo negras"
    ],
    nutritionalInfo: {
      kcal: 518,
      proteinas: 59,
      carbohidratos: 44,
      grasasTotales: 10
    },
    images: [
      "/viandas/wok-de-carne.png",
      "/Wok de carne/DSC09482.jpg",
      "/Wok de carne/DSC09455.jpg",
      "/Wok de carne/DSC09460.jpg",
      "/Wok de carne/DSC09461.jpg",
      "/Wok de carne/DSC09475.jpg"
    ]
  },
  {
    id: "4",
    title: "Pescado con vegetales y arroz yamaní",
    price: 16000,
    imageUrl: "/viandas/pescado-con-vegetales-principal.jpg",
    slug: "pescado-con-vegetales-y-arroz-yamani",
    featured: true,
    description: "250 g de pescado blanco con 150 g de vegetales asados y 100 g de arroz yamaní.",
    ingredients: [
      "Pescado blanco",
      "Morrón",
      "Cebolla",
      "Cherries",
      "Arroz yamaní",
      "Tomillo",
      "Aceite de oliva",
      "Sal",
      "Pimienta"
    ],
    nutritionalInfo: {
      kcal: 665,
      proteinas: 61,
      carbohidratos: 69,
      grasasTotales: 17
    },
    images: [
      "/viandas/pescado-con-vegetales-principal.jpg",
      "/viandas/pescado-con-vegetales.jpg",
      "/Pescado con vegetales/DSC09501.jpg",
      "/Pescado con vegetales/DSC09502.jpg",
      "/Pescado con vegetales/DSC09503.jpg",
      "/Pescado con vegetales/DSC09504.jpg",
      "/Pescado con vegetales/DSC09505.jpg",
      "/Pescado con vegetales/DSC09510.jpg"
    ]
  },
  {
    id: "5",
    title: "Wok de pollo",
    price: 14500,
    imageUrl: "/viandas/wok-pollo.png",
    slug: "wok-de-pollo",
    featured: true,
    description: "350 g de wok de pollo estilo asiático con 150 g de arroz blanco.",
    ingredients: [
      "Pechuga de pollo",
      "Cebolla",
      "Cebolla de verdeo",
      "Ajo",
      "Jengibre",
      "Salsa de soja",
      "Salsa de ostras",
      "Sal",
      "Pimienta",
      "Azúcar",
      "Maicena",
      "Arroz blanco",
      "Semillas de sésamo negras"
    ],
    nutritionalInfo: {
      kcal: 607,
      proteinas: 81,
      carbohidratos: 44,
      grasasTotales: 9
    },
    images: [
      "/viandas/wok-pollo.png",
      "/Arroz con pollo spicy/DSC09496.jpg",
      "/Arroz con pollo spicy/DSC09498.jpg",
      "/Arroz con pollo spicy/DSC09499.jpg"
    ]
  },
  {
    id: "6",
    title: "Albóndigas de pollo con cous cous y vegetales",
    price: 14000,
    imageUrl: "/viandas/albondigas-con-cous-cous.png",
    slug: "albondigas-de-pollo-con-cous-cous-y-vegetales",
    featured: true,
    description: "250 g de albóndigas de pollo con 250 g de cous cous con vegetales.",
    ingredients: [
      "Pechuga de pollo",
      "Cous cous",
      "Cebolla morada",
      "Zucchini",
      "Pepino",
      "Aceite de oliva",
      "Sal",
      "Pimienta",
      "Ajo en polvo"
    ],
    nutritionalInfo: {
      kcal: 695,
      proteinas: 82,
      carbohidratos: 35,
      grasasTotales: 22
    },
    images: [
      "/viandas/albondigas-con-cous-cous.png",
      "/Albondigas de pollo/DSC09326.jpg",
      "/Albondigas de pollo/DSC09327.jpg",
      "/Albondigas de pollo/DSC09328.jpg",
      "/Albondigas de pollo/DSC09331.jpg",
      "/Albondigas de pollo/DSC09334.jpg",
      "/Albondigas de pollo/DSC09336.jpg",
      "/Albondigas de pollo/DSC09337.jpg"
    ]
  },
  {
    id: "7",
    title: "Bondiola a la mostaza con puré de batata",
    price: 14000,
    imageUrl: "/viandas/bondiola-con-pure-de-batata.png",
    slug: "bondiola-a-la-mostaza-con-pure-de-batata",
    featured: true,
    description: "250 g de bondiola de cerdo con salsa de mostaza y miel con 250 g de puré de batata.",
    ingredients: [
      "Bondiola",
      "Batata",
      "Aceite de girasol",
      "Sal",
      "Pimienta",
      "Leche",
      "Mostaza",
      "Miel"
    ],
    nutritionalInfo: {
      kcal: 983,
      proteinas: 52,
      carbohidratos: 79,
      grasasTotales: 60
    },
    images: [
      "/viandas/bondiola-con-pure-de-batata.png",
      "/Bondiola a la mostaza/DSC09340.jpg",
      "/Bondiola a la mostaza/DSC09342.jpg",
      "/Bondiola a la mostaza/DSC09343.jpg",
      "/Bondiola a la mostaza/DSC09344.jpg",
      "/Bondiola a la mostaza/DSC09346.jpg",
      "/Bondiola a la mostaza/DSC09348.jpg",
      "/Bondiola a la mostaza/DSC09352.jpg"
    ]
  },
  {
    id: "8",
    title: "Carne con papas y demi glace",
    price: 13000,
    originalPrice: 18000,
    discountBadge: "28% OFF",
    imageUrl: "/viandas/carne-con-papas.jpg",
    slug: "carne-con-papas-y-demi-glace",
    featured: true,
    description: "250 g de ojo de bife y 200 g de papas al horno con salsa demi glace casera.",
    ingredients: [
      "Ojo de bife",
      "Papa",
      "Salsa demi glace",
      "Aceite de girasol",
      "Sal"
    ],
    nutritionalInfo: {
      kcal: 797,
      proteinas: 80,
      carbohidratos: 37,
      grasasTotales: 35
    },
    images: [
      "/viandas/carne-con-papas.jpg",
      "/Carne al horno con papas/DSC09277.jpg",
      "/Carne al horno con papas/DSC09279.jpg",
      "/Carne al horno con papas/DSC09280.jpg",
      "/Carne al horno con papas/DSC09281.jpg",
      "/Carne al horno con papas/DSC09284.jpg",
      "/Carne al horno con papas/DSC09285.jpg",
      "/Carne al horno con papas/DSC09290.jpg",
      "/Carne al horno con papas/DSC09296.jpg",
      "/Carne al horno con papas/DSC09298.jpg",
      "/Carne al horno con papas/DSC09303.jpg",
      "/Carne al horno con papas/DSC09305.jpg"
    ]
  },
  {
    id: "9",
    title: "Tortilla de espinaca",
    price: 13000,
    imageUrl: "/viandas/tortilla-de-espinaca.png",
    slug: "tortilla-de-espinaca",
    featured: true,
    description: "400 g de tortilla de espinaca clásica.",
    ingredients: [
      "Espinaca",
      "Cebolla",
      "Queso mozzarella",
      "Huevo",
      "Sal",
      "Pimienta"
    ],
    nutritionalInfo: {
      kcal: 545,
      proteinas: 44,
      carbohidratos: 19,
      grasasTotales: 31
    },
    images: [
      "/viandas/tortilla-de-espinaca.png",
      "/Tortilla de espinaca/DSC09180.jpg",
      "/Tortilla de espinaca/DSC09182.jpg",
      "/Tortilla de espinaca/DSC09184.jpg",
      "/Tortilla de espinaca/DSC09192.jpg",
      "/Tortilla de espinaca/DSC09195.jpg",
      "/Tortilla de espinaca/DSC09197.jpg"
    ]
  },
  {
    id: "10",
    title: "Pastel de papa",
    price: 12000,
    imageUrl: "/viandas/pastel-de-papa.png",
    slug: "pastel-de-papa",
    featured: true,
    description: "400 g de pastel de papa clásico.",
    ingredients: [
      "Papa",
      "Carne picada",
      "Morrón",
      "Cebolla",
      "Pimentón",
      "Ajo en polvo",
      "Tomillo",
      "Comino",
      "Sal",
      "Pimienta",
      "Leche",
      "Nuez moscada"
    ],
    nutritionalInfo: {
      kcal: 612,
      proteinas: 39,
      carbohidratos: 60,
      grasasTotales: 23
    },
    images: [
      "/viandas/pastel-de-papa.png",
      "/Pastel de papa/DSC09484.jpg",
      "/Pastel de papa/DSC09489.jpg",
      "/Pastel de papa/DSC09492.jpg",
      "/Pastel de papa/DSC09494.jpg"
    ]
  },
  {
    id: "11",
    title: "Wrap de pollo BBQ",
    price: 12000,
    imageUrl: "/viandas/wrap-de-pollo-bbq.png",
    slug: "wrap-de-pollo-bbq",
    featured: true,
    description: "2 unidades de wrap de pollo BBQ con masa casera.",
    ingredients: [
      "Pechuga de pollo",
      "Morrón",
      "Cebolla",
      "Tomillo",
      "Barbacoa casera",
      "Harina",
      "Aceite de girasol",
      "Grasa",
      "Agua"
    ],
    nutritionalInfo: {
      kcal: 558,
      proteinas: 51,
      carbohidratos: 55,
      grasasTotales: 13
    },
    images: [
      "/viandas/wrap-de-pollo-bbq.png",
      "/Wrap de pollo bbq/DSC09407.jpg",
      "/Wrap de pollo bbq/DSC09406.jpg",
      "/Wrap de pollo bbq/DSC09408.jpg",
      "/Wrap de pollo bbq/DSC09411.jpg"
    ]
  },
  {
    id: "12",
    title: "Berenjena a la parmesana",
    price: 9800,
    imageUrl: "/viandas/berenjena.png",
    slug: "berenjena-a-la-parmesana",
    featured: true,
    description: "1 berenjena laminada a la parmesana.",
    ingredients: [
      "Berenjena",
      "Salsa de tomate",
      "Albahaca",
      "Orégano",
      "Queso parmesano",
      "Sal",
      "Pimienta"
    ],
    nutritionalInfo: {
      kcal: 662,
      proteinas: 41,
      carbohidratos: 28,
      grasasTotales: 44
    },
    images: [
      "/viandas/berenjena.png",
      "/Bernejenas a la parmesana/WhatsApp Image 2025-12-10 at 12.07.15.jpeg",
      "/Bernejenas a la parmesana/WhatsApp Image 2025-12-10 at 12.07.15 (1).jpeg"
    ]
  },
  {
    id: "13",
    title: "Tortilla de papa",
    price: 9500,
    imageUrl: "/viandas/tortilla-de-papa.png",
    slug: "tortilla-de-papa",
    featured: true,
    description: "400 g de tortilla de papa clásica.",
    ingredients: [
      "Papa",
      "Cebolla",
      "Huevo",
      "Sal",
      "Pimienta"
    ],
    nutritionalInfo: {
      kcal: 588,
      proteinas: 28,
      carbohidratos: 80,
      grasasTotales: 17
    },
    images: [
      "/viandas/tortilla-de-papa.png",
      "/Tortilla de papa/DSC09214.jpg",
      "/Tortilla de papa/DSC09206.jpg",
      "/Tortilla de papa/DSC09211.jpg",
      "/Tortilla de papa/DSC09215.jpg",
      "/Tortilla de papa/DSC09221.jpg",
      "/Tortilla de papa/DSC09223.jpg",
      "/Tortilla de papa/DSC09226.jpg",
      "/Tortilla de papa/DSC09227.jpg",
      "/Tortilla de papa/DSC09231.jpg",
      "/Tortilla de papa/DSC09232.jpg",
      "/Tortilla de papa/DSC09234.jpg",
      "/Tortilla de papa/DSC09236.jpg",
      "/Tortilla de papa/DSC09238.jpg",
      "/Tortilla de papa/DSC09240.jpg",
      "/Tortilla de papa/DSC09241.jpg",
      "/Tortilla de papa/DSC09242.jpg"
    ]
  },
  {
    id: "14",
    title: "Risotto de hongos",
    price: 9500,
    imageUrl: "/viandas/risotto-de-hongos.png",
    slug: "risotto-de-hongos",
    featured: true,
    description: "400 g de risotto de hongos de pino bien cremoso y sano.",
    ingredients: [
      "Arroz doble Carolina",
      "Hongos de pino",
      "Aceite de oliva",
      "Cebolla",
      "Sal",
      "Pimienta",
      "Caldo de verduras"
    ],
    nutritionalInfo: {
      kcal: 613,
      proteinas: 9,
      carbohidratos: 101,
      grasasTotales: 16
    },
    images: [
      "/viandas/risotto-de-hongos.png",
      "/Rissoto de hongos/DSC09382.jpg",
      "/Rissoto de hongos/DSC09384.jpg",
      "/Rissoto de hongos/DSC09385.jpg",
      "/Rissoto de hongos/DSC09388.jpg",
      "/Rissoto de hongos/DSC09389.jpg",
      "/Rissoto de hongos/DSC09390.jpg",
      "/Rissoto de hongos/DSC09391.jpg",
      "/Rissoto de hongos/DSC09392.jpg"
    ]
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};
