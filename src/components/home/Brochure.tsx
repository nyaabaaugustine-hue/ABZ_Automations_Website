
"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileDown, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Brochure() {
  const brochureBg = PlaceHolderImages.find(img => img.id === "brochure-bg")?.imageUrl || "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422246/abz_3_hp78qi.jpg";

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[6%] p-8 md:p-20 border border-border/50 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 group shadow-2xl">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image 
              src={brochureBg} 
              alt="Technical Documentation Background"
              fill
              className="object-cover transition-transform duration-[10000ms] group-hover:scale-110"
              data-ai-hint="technical documentation"
            />
            <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px] mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          </div>
          
          <div className="max-w-2xl space-y-6 md:space-y-8 text-center lg:text-left relative z-10 text-white">
            <div className="space-y-3 md:space-y-4">
              <Badge className="bg-accent text-accent-foreground border-none px-4 md:px-5 py-1 md:py-1.5 font-bold uppercase tracking-[0.2em] text-[8px] md:text-[10px] rounded-[6%]">
                Technical Documentation
              </Badge>
              <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.2] md:leading-[1.1]">
                Master Your Water With Our <span className="text-accent">2026 Catalog</span>
              </h2>
            </div>
            
            <p className="text-white/80 text-base md:text-xl leading-relaxed font-medium">
              Explore 40+ pages of detailed engineering specifications, installation guides, and the full AutoX smart hardware roadmap.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 opacity-90">
              <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs font-bold uppercase tracking-widest text-accent">
                <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4" />
                Updated Weekly
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white">
                <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4" />
                HD Schematics
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 w-full sm:w-auto shrink-0 relative z-10">
            <Button size="lg" className="h-16 md:h-20 px-8 md:px-12 rounded-[6%] font-bold text-lg md:text-xl gap-3 md:gap-4 shadow-2xl shadow-black/40 group/btn bg-white text-primary hover:bg-accent hover:text-accent-foreground transition-all hover:-translate-y-1 border-none w-full sm:w-auto">
              Download Catalog
              <FileDown className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover/btn:translate-y-1" />
            </Button>
            <Button variant="outline" size="lg" className="h-16 md:h-20 px-6 md:px-10 rounded-[6%] font-bold text-base md:text-lg border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-primary transition-all hover:-translate-y-1 w-full sm:w-auto">
              Request Print
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
