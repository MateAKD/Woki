export interface Category {
  id: string;
  title: string;
  imageUrl: string;
  slug: string;
  price?: number;
  originalPrice?: number;
  discountBadge?: string;
  isSpecialOffer?: boolean;
}

export const categories: Category[] = [
  {
    id: "box-keto",
    title: "BOX KETO - 5 PLATOS",
    imageUrl: "/viandas/box-keto-square.jpg",
    slug: "box-keto",
    price: 67000,
    originalPrice: 74000,
    discountBadge: "10% OFF",
    isSpecialOffer: true
  },
  {
    id: "1",
    title: "TRUCHÓN CON PURÉ DE ZANAHORIA",
    imageUrl: "/viandas/truchon.png",
    slug: "truchon-con-pure-de-zanahoria",
    price: 19500
  },
  {
    id: "2",
    title: "COLITA DE CUADRIL CON VERDURAS ASADAS",
    imageUrl: "/viandas/colita-de-cuadril.png",
    slug: "colita-de-cuadril-con-verduras-asadas",
    price: 18000
  },
  {
    id: "3",
    title: "WOK DE CARNE",
    imageUrl: "/viandas/wok-de-carne.png",
    slug: "wok-de-carne",
    price: 16500
  },
  {
    id: "4",
    title: "PESCADO CON VEGETALES Y ARROZ YAMANÍ",
    imageUrl: "/viandas/pescado-con-vegetales.jpg",
    slug: "pescado-con-vegetales-y-arroz-yamani",
    price: 16000
  },
  {
    id: "5",
    title: "WOK DE POLLO",
    imageUrl: "/viandas/wok-pollo.png",
    slug: "wok-de-pollo",
    price: 14500
  },
  {
    id: "6",
    title: "ALBÓNDIGAS DE POLLO CON COUS COUS",
    imageUrl: "/viandas/albondigas-con-cous-cous.png",
    slug: "albondigas-de-pollo-con-cous-cous-y-vegetales",
    price: 14000
  },
  {
    id: "7",
    title: "BONDIOLA A LA MOSTAZA",
    imageUrl: "/viandas/bondiola-con-pure-de-batata.png",
    slug: "bondiola-a-la-mostaza-con-pure-de-batata",
    price: 14000
  },
  {
    id: "8",
    title: "CARNE CON PAPAS Y DEMI GLACE",
    imageUrl: "/viandas/carne-con-papas.jpg",
    slug: "carne-con-papas-y-demi-glace",
    price: 13000,
    originalPrice: 18000,
    discountBadge: "28% OFF"
  },
  {
    id: "9",
    title: "TORTILLA DE ESPINACA",
    imageUrl: "/viandas/tortilla-de-espinaca.png",
    slug: "tortilla-de-espinaca",
    price: 13000
  },
  {
    id: "10",
    title: "PASTEL DE PAPA",
    imageUrl: "/viandas/pastel-de-papa.png",
    slug: "pastel-de-papa",
    price: 12000
  },
  {
    id: "11",
    title: "WRAP DE POLLO BBQ",
    imageUrl: "/viandas/wrap-de-pollo-bbq.png",
    slug: "wrap-de-pollo-bbq",
    price: 12000
  },
  {
    id: "12",
    title: "BERENJENA A LA PARMESANA",
    imageUrl: "/viandas/berenjena.png",
    slug: "berenjena-a-la-parmesana",
    price: 9800
  },
  {
    id: "13",
    title: "TORTILLA DE PAPA",
    imageUrl: "/viandas/tortilla-de-papa.png",
    slug: "tortilla-de-papa",
    price: 9500
  },
  {
    id: "14",
    title: "RISOTTO DE HONGOS",
    imageUrl: "/viandas/risotto-de-hongos.png",
    slug: "risotto-de-hongos",
    price: 9500
  }
];
