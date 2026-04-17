
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const products = [
  {
    id: "product-1",
    name: "Smart Hub Alpha",
    image: PlaceHolderImages.find(img => img.id === "product-1")?.imageUrl || "",
  },
  {
    id: "product-2",
    name: "Flow Node Ultra",
    image: PlaceHolderImages.find(img => img.id === "product-2")?.imageUrl || "",
  },
  {
    id: "product-3",
    name: "Industrial Logic",
    image: PlaceHolderImages.find(img => img.id === "product-3")?.imageUrl || "",
  },
  {
    id: "product-4",
    name: "Solar Module",
    image: PlaceHolderImages.find(img => img.id === "product-4")?.imageUrl || "",
  },
  {
    id: "product-5",
    name: "Telemetry Unit",
    image: PlaceHolderImages.find(img => img.id === "product-5")?.imageUrl || "",
  },
  {
    id: "product-6",
    name: "Smart Valve",
    image: PlaceHolderImages.find(img => img.id === "product-6")?.imageUrl || "",
  },
  {
    id: "product-7",
    name: "Sentinel Pro",
    image: PlaceHolderImages.find(img => img.id === "product-7")?.imageUrl || "",
  },
  {
    id: "product-8",
    name: "Filter Control",
    image: PlaceHolderImages.find(img => img.id === "product-8")?.imageUrl || "",
  },
  {
    id: "product-9",
    name: "AutoX Pro",
    image: PlaceHolderImages.find(img => img.id === "product-9")?.imageUrl || "",
  },
];

// Duplicate list for seamless loop
const tickerProducts = [...products, ...products, ...products];

export function ProductTicker() {
  return (
    <section className="py-12 bg-white overflow-hidden border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between">
         <h2 className="font-headline text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">Flagship Hardware Lineup</h2>
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
                <Button asChild size="sm" className="w-full rounded-[6%] font-bold bg-primary hover:bg-primary/90 mt-4 group/btn">
                  <Link href={`/quote?product=${product.id}`}>
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
