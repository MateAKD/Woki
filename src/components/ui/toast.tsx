"use client";

import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({ message, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto-close after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-in slide-in-from-top-5 fade-in-0">
      <div className="bg-[#10e35b] text-black px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px] max-w-[90vw]">
        <CheckCircle className="h-5 w-5 flex-shrink-0" />
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
}

