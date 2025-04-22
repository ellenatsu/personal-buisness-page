"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PhotoGallery = () => {
  const photoCaptions: Record<string, string> = {
    "tool-wrench": "Wrench set used for fixture installs",
    "piping-site": "Underground piping at an apartment site",
    "tools-bag": "My everyday plumbing tools",
    "copper-solder": "Soldering copper pipes during a rough-in",
    "toilet-install": "New toilet install in progress",
  };

  const imageList = Object.keys(photoCaptions);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {imageList.map((filename) => (
          <CarouselItem key={filename} className="basis-1/2 md:basis-1/5">
            <div className="p-1">
              <Card>
                <div className="group relative aspect-square overflow-hidden rounded-md w-full h-full">
                  <Image
                    src={`/image/gallery/${filename}.png`}
                    alt={photoCaptions[filename]}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-sm font-medium px-3 py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {photoCaptions[filename]}
                  </div>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default PhotoGallery;
