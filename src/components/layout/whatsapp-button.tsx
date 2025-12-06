"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function WhatsappButton() {
  const [isOverFooter, setIsOverFooter] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const checkPosition = () => {
      if (!buttonRef.current) return;
      
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const footer = document.querySelector('footer');
      
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        // Verificar si el botón está sobre o cerca del footer (con un margen de 20px)
        const isOver = buttonRect.bottom >= footerRect.top - 20;
        setIsOverFooter(isOver);
      }
    };

    // Verificar posición al cargar y al hacer scroll
    checkPosition();
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);

    return () => {
      window.removeEventListener('scroll', checkPosition);
      window.removeEventListener('resize', checkPosition);
    };
  }, []);

  return (
    <Link
      ref={buttonRef}
      href="https://wa.me/5491134100409?text=Necesito%20zurdo%20en%20mi%20freezer%20YA!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-transparent p-0 m-0 hover:opacity-80 transition-opacity inline-block"
      style={{ lineHeight: 0 }}
    >
      <Image
        src={isOverFooter ? "/Whatsapp negro.png" : "/whatsapp blanco.png"}
        alt="WhatsApp"
        width={56}
        height={56}
        className="transition-opacity duration-300 block"
        style={{ display: 'block', margin: 0, padding: 0 }}
      />
    </Link>
  );
}
