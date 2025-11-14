"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface HeroSlide {
  id: string;
  imageUrl: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
}

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const renderSlide = useCallback((slide: HeroSlide) => (
    <CarouselItem key={slide.id}>
      <div className="relative h-[500px] w-full shadow-none">
        <Image
          src={slide.imageUrl}
          alt={slide.title}
          fill
          priority={slide.id === slides[0].id}
          sizes="100vw"
          className="object-cover shadow-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent flex flex-col justify-center p-10 md:p-20">
          <div className="max-w-xl">
            {slide.title && (
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {slide.title}
              </h2>
            )}
            {slide.subtitle && (
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                {slide.subtitle}
              </p>
            )}
            {slide.buttonText && slide.buttonLink && (
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-[#f9f6f1] font-bold">
                <Link href={slide.buttonLink}>
                  {slide.buttonText}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </CarouselItem>
  ), [slides]);

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {slides.map(renderSlide)}
      </CarouselContent>
      <CarouselPrevious className="left-4 bg-[#1a513c]/50 text-white hover:bg-[#1a513c]" />
      <CarouselNext className="right-4 bg-[#1a513c]/50 text-white hover:bg-[#1a513c]" />
    </Carousel>
  );
}
