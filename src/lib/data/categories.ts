import { use } from "react";

export interface Category {
  id: string;
  title: string;
  imageUrl: string;
  slug: string;
}

export const categories: Category[] = [
  {
    id: "6",
    title: "",
    imageUrl: "/Truchon 1.jpg",
    slug: "carne/truchon-salsa-agridulce"
  },
  {
    id: "1",
    title: "WOK DE LOMO",
    imageUrl: "/wok-lomo.jpg",
    slug: "carne/wok-lomo"
  },
  {
    id: "2",
    title: "WOK DE POLLO",
    imageUrl: "/wok-pollo.jpg",
    slug: "carne/pollo"
  },
  {
    id: "3",
    title: "WOK DE POLLO SPICY",
    imageUrl: "/wok-pollo-spicy.jpg",
    slug: "carne/pollo-spicy"
  },
  {
    id: "4",
    title: "WOK DE LANGOSTINOS",
    imageUrl: "/wok-langostinos.jpg",
    slug: "carne/langostinos"
  },
  {
    id: "5",
    title: "WOK VEGGIE",
    imageUrl: "/wok-veggie.jpg",
    slug: "veggie/wok-veggie"
  }
];
