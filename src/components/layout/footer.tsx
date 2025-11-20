"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-white border-2 border-black text-black pt-8 pb-4" id="contactanos">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-6">
          {/* Social Media Section - ELIMINADA */}
          {/*
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-sm font-semibold uppercase mb-4 text-center">Seguinos en</h3>
            <Link
              href="https://www.instagram.com/zurdo_delivery/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image src="/instagram-icon.png" alt="Instagram" width={32} height={32} className="inline-block" />
            </Link>
          </div>
          */}

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold uppercase mb-4">Contactanos</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Link
                  href="https://wa.me/5491134100409?text=QUIERO%20ZURDO%20en%20mi%20freezer%20YA!!"
                  className="flex items-center text-gray-700 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/whatsapp-icon.png"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="mr-2 inline-block"
                  />
                  +54 9 11 3410-0409
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="flex items-center text-gray-700">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>Echeverria 1200, Tigre, Buenos Aires 1617</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-black my-4" />

        {/* Copyright Information */}
        <div className="text-xs text-gray-600 text-center md:text-left">
          <p className="mb-2">
            Copyright Zurdo - 2025. Todos los derechos reservados. Defensa de las y los consumidores.
          </p>

          {/* Attribution */}
          <div className="text-left text-xs text-gray-600 mt-4">
            <span>
              Desarrollado por{" "}
              <a
                href="https://akdmiastudio.io"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-black"
              >
                AKDMIA Studio
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
