"use client";

import Link from "next/link";
import Image from "next/image";

export default function WhatsappButton() {
  return (
    <Link
      href="https://wa.me/5491136029807?text=Necesito%20woki%20en%20mi%20freezer%20YA"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-transparent p-0 shadow-lg hover:opacity-80 transition-opacity"
    >
      <Image
        src="/whatsapp-icon.png"
        alt="WhatsApp"
        width={56}
        height={56}
      />
    </Link>
  );
}
