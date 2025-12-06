"use client";

import { CartProvider } from "@/lib/context/cart-context";
import { ToastNotification } from "@/components/ui/toast-notification";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <ToastNotification />
    </CartProvider>
  );
}
