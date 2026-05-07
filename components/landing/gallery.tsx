"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type GalleryImage = {
  src: string;
  tag: string;
};

type GalleryProps = {
  images: readonly GalleryImage[];
};

export function Gallery({ images }: GalleryProps) {
  return (
    <>
      {/* desktop / tablet — grid intacto */}
      <div className="hidden md:block">
        <div className="gallery-grid reveal-stagger">
          {images.map((img, i) => (
            <div key={`${img.src}-${i}`} className="gallery-cell">
              <Image src={img.src} alt={img.tag} width={800} height={800} />
              <span className="gallery-tag">{img.tag}</span>
            </div>
          ))}
        </div>
      </div>

      {/* mobile — carousel */}
      <div className="md:hidden reveal">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-3">
            {images.map((img, i) => (
              <CarouselItem
                key={`${img.src}-${i}`}
                className="pl-3 basis-[85%]"
              >
                <div className="gallery-cell relative">
                  <Image
                    src={img.src}
                    alt={img.tag}
                    width={800}
                    height={800}
                  />
                  <span className="gallery-tag">{img.tag}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-between mt-5">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
              Desliza →
            </span>
            <div className="flex gap-2">
              <CarouselPrevious className="static translate-y-0 size-12 border border-[var(--brand)] bg-[var(--brand)] text-white hover:bg-transparent hover:text-[var(--brand)] rounded-none disabled:opacity-40" />
              <CarouselNext className="static translate-y-0 size-12 border border-[var(--brand)] bg-[var(--brand)] text-white hover:bg-transparent hover:text-[var(--brand)] rounded-none disabled:opacity-40" />
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}
