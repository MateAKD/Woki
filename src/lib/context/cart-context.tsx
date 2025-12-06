"use client";

import { Product } from "@/lib/data/products";
import { createContext, useContext, useEffect, useState, useRef } from "react";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (product: Product, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  toastMessage: string | null;
  showToast: (message: string) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const pendingAddsRef = useRef<Map<string, number>>(new Map());

  // Initialize cart from localStorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(items));

      // Calculate totals
      const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
      const price = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

      setTotalItems(itemCount);
      setTotalPrice(price);
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [items]);

  // Show toast notification
  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Add a product to the cart
  const addItem = (product: Product, quantity: number = 1) => {
    // Asegurarse de que quantity sea un número válido
    const quantityToAdd = Math.max(1, Math.floor(quantity));
    
    // Verificar si ya hay una llamada pendiente para este producto
    const pendingKey = product.id;
    if (pendingAddsRef.current.has(pendingKey)) {
      // Ya hay una llamada en proceso, ignorar esta
      console.log('Bloqueado: llamada duplicada para', product.id);
      return;
    }
    
    // Marcar que hay una llamada pendiente INMEDIATAMENTE (síncrono)
    pendingAddsRef.current.set(pendingKey, quantityToAdd);
    console.log('Agregando:', product.title, 'Cantidad:', quantityToAdd);
    
    // Usar una función de actualización para asegurar que trabajamos con el estado más reciente
    setItems(prevItems => {
      // Verificar nuevamente dentro de setItems (por si acaso)
      if (pendingAddsRef.current.get(pendingKey) !== quantityToAdd) {
        console.log('Bloqueado dentro de setItems');
        return prevItems; // No hacer nada si ya se procesó
      }
      
      const existingItemIndex = prevItems.findIndex(item => item.product.id === product.id);

      if (existingItemIndex >= 0) {
        // Sum quantity if product already in cart
        const newItems = [...prevItems];
        const previousQuantity = newItems[existingItemIndex].quantity;
        console.log('Cantidad anterior:', previousQuantity, 'Agregando:', quantityToAdd);
        newItems[existingItemIndex].quantity = previousQuantity + quantityToAdd;
        const totalQuantity = newItems[existingItemIndex].quantity;
        console.log('Nueva cantidad total:', totalQuantity);
        
        // Limpiar el lock INMEDIATAMENTE después de calcular
        pendingAddsRef.current.delete(pendingKey);
        
        // Mostrar toast después de actualizar el estado
        setTimeout(() => {
          showToast(`Agregaste ${quantityToAdd} ${quantityToAdd === 1 ? 'unidad' : 'unidades'} de ${product.title} al carrito (Total: ${totalQuantity} ${totalQuantity === 1 ? 'unidad' : 'unidades'})`);
        }, 0);
        
        return newItems;
      } else {
        // Add new item
        console.log('Producto nuevo, cantidad:', quantityToAdd);
        
        // Limpiar el lock INMEDIATAMENTE
        pendingAddsRef.current.delete(pendingKey);
        
        // Mostrar toast después de actualizar el estado
        setTimeout(() => {
          showToast(`Agregaste ${quantityToAdd} ${quantityToAdd === 1 ? 'unidad' : 'unidades'} de ${product.title} al carrito`);
        }, 0);
        
        return [...prevItems, { product, quantity: quantityToAdd }];
      }
    });
  };

  // Update quantity of a cart item
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Remove an item from the cart
  const removeItem = (productId: string) => {
    setItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };

  // Clear the entire cart
  const clearCart = () => {
    setItems([]);
  };

  const value = {
    items,
    totalItems,
    totalPrice,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    isCartOpen,
    setIsCartOpen,
    toastMessage,
    showToast,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
