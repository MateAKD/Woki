"use client";

import { useCart } from "@/lib/context/cart-context";
import { Toast } from "@/components/ui/toast";

export function ToastNotification() {
  const { toastMessage, showToast } = useCart();
  
  return (
    <Toast 
      message={toastMessage || ""} 
      isVisible={!!toastMessage} 
      onClose={() => showToast("")} 
    />
  );
}

