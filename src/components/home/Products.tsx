
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Zap, ShoppingBag } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const productPreview = {
  id: "autox",
  name: "AutoX Pro Elite",
  tagline: "Ultimate Automation Architecture",
  description: "The heartbeat of your water management ecosystem. Smart AI-driven sensors, real-time telemetry, and secure cloud control for the most demanding environments.",
  features: ["Next-Gen Flow Analytics", "Industrial Grid Safety", "Real-time Telemetry", "Solar Energy Management"],
  image: PlaceHolderImages.find(img => img.id === "product-9")?.imageUrl || ""
};

export function Products() {
  return (
    <section id="products" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">Innovation Showcase</h2>
            <h3 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold">Engineered for <span className="text-accent">Ghana</span></h3>
          </div>
          <Button asChild variant="outline" className="rounded-[6%] border-primary text-primary hover:bg-primary hover:text-white font-bold h-12 px-8 transition-all">
            <Link href="/products" className="flex items-center gap-2">
              Explore Full Catalog <ShoppingBag className="w-5 h-5" />
            </Link>
          </Button>
        </div>

        <Card className="overflow-hidden border-none shadow-2xl rounded-[6%] bg-white/40 backdrop-blur-xl border border-white/20 group premium-shadow">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 items-stretch">
              <div className="p-8 md:p-12 lg:p-16 space-y-8 md:space-y-10">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[6%] bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-[0.2em] border border-accent/20">
                    <Zap className="w-3.5 h-3.5 fill-accent" /> Flagship Release
                  </div>
                  <h4 className="text-4xl md:text-5xl font-headline font-bold group-hover:text-primary transition-colors">{productPreview.name}</h4>
                  <p className="text-primary font-bold text-lg">{productPreview.tagline}</p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {productPreview.description}
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {productPreview.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-foreground/80">
                      <div className="w-6 h-6 rounded-[6%] bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 flex flex-wrap gap-4">
                  <Button asChild size="lg" className="rounded-[6%] px-8 font-bold h-14 shadow-xl shadow-primary/20 text-base">
                    <Link href="/quote">Request Custom Setup</Link>
                  </Button>
                  <Button asChild variant="ghost" className="rounded-[6%] px-6 font-bold group h-14 text-base hover:bg-primary/5">
                    <Link href="/products" className="flex items-center gap-2">
                      View Components
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative min-h-[400px] lg:min-h-full overflow-hidden bg-primary/5">
                <Image
                  src={productPreview.image}
                  alt={productPreview.name}
                  fill
                  className="object-cover transition-transform duration-[3000ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-l opacity-30"></div>
                
                <div className="absolute bottom-8 left-8 right-8 p-6 rounded-[6%] bg-white/10 backdrop-blur-2xl border border-white/20 text-white animate-in fade-in slide-in-from-bottom-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-1">Performance Architecture</p>
                  <p className="text-lg font-bold">Tested at KNUST Engineering Labs</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
