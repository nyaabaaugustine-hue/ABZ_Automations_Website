"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const products = [
  {
    id: "autox-pro-ticker",
    name: "AutoX Pro",
    image: PlaceHolderImages.find(img => img.id === "product-autox-pro")?.imageUrl || "https://picsum.photos/seed/autoxpro/600/600",
  },
  {
    id: "flow-master-ticker",
    name: "Flow Master 3000",
    image: PlaceHolderImages.find(img => img.id === "product-flow-sensor")?.imageUrl || "https://picsum.photos/seed/flow-sensor/600/600",
  },
  {
    id: "vfd-ticker",
    name: "VFD Pump Controller",
    image: PlaceHolderImages.find(img => img.id === "product-pump-controller")?.imageUrl || "https://picsum.photos/seed/pump-ctrl/600/600",
  },
  {
    id: "leak-sentinel-ticker",
    name: "Leak Sentinel Node",
    image: PlaceHolderImages.find(img => img.id === "product-leak-detector")?.imageUrl || "https://picsum.photos/seed/leak/600/600",
  },
];

// Duplicate list for seamless loop
const tickerProducts = [...products, ...products, ...products, ...products];

export function ProductTicker() {
  return (
    <section className="py-12 bg-white overflow-hidden border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between">
         <h2 className="font-headline text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">Featured Hardware</h2>
         <div className="h-px flex-grow mx-8 bg-border/50 hidden md:block"></div>
      </div>
      
      <div className="relative flex w-full">
        <div className="flex animate-ticker-ltr hover:[animation-play-state:paused] gap-6 px-3">
          {tickerProducts.map((product, idx) => (
            <div 
              key={`${product.id}-${idx}`}
              className="group relative w-72 h-[380px] bg-background border border-border/50 rounded-[6%] overflow-hidden flex flex-col shrink-0 transition-all hover:shadow-xl hover:border-primary/20"
            >
              <div className="relative h-2/3 w-full overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
              </div>
              
              <div className="p-6 flex flex-col justify-between flex-grow">
                <h4 className="font-headline font-bold text-lg line-clamp-1">{product.name}</h4>
                <Button asChild size="sm" className="w-full rounded-xl font-bold bg-primary hover:bg-primary/90 mt-4 group/btn">
                  <Link href={`/quote?product=${product.id.replace('-ticker', '')}`}>
                    Order Now 
                    <ShoppingCart className="ml-2 w-4 h-4 transition-transform group-hover/btn:scale-110" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}