
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
    <section id="products" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6">Innovation Showcase</h2>
            <h3 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold mb-0">Engineered for <span className="text-accent">Ghana</span></h3>
          </div>
          <Button asChild variant="outline" size="lg" className="rounded-[6%] border-primary text-primary hover:bg-primary hover:text-white font-bold h-16 px-10 transition-all duration-300">
            <Link href="/products" className="flex items-center gap-3">
              Explore Full Catalog <ShoppingBag className="w-6 h-6" />
            </Link>
          </Button>
        </div>

        <Card className="overflow-hidden border-none shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] rounded-[6%] bg-background group">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 items-stretch">
              <div className="p-10 md:p-16 lg:p-24 space-y-12">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-[6%] bg-accent/10 text-accent text-xs font-bold uppercase tracking-[0.2em] border border-accent/20">
                    <Zap className="w-4 h-4 fill-accent" /> Flagship Release
                  </div>
                  <h4 className="text-5xl md:text-6xl font-headline font-bold mb-2 group-hover:text-primary transition-colors duration-300">{productPreview.name}</h4>
                  <p className="text-primary font-bold text-xl">{productPreview.tagline}</p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-xl">
                  {productPreview.description}
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {productPreview.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-4 text-base font-bold text-foreground/80">
                      <div className="w-8 h-8 rounded-[6%] bg-accent/10 flex items-center justify-center text-accent shrink-0">
                        <Check className="w-5 h-5" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-8 flex flex-wrap gap-6">
                  <Button asChild size="lg" className="rounded-[6%] px-12 font-bold h-16 shadow-2xl shadow-primary/30 text-lg">
                    <Link href="/quote">Request Custom Setup</Link>
                  </Button>
                  <Button asChild variant="ghost" size="lg" className="rounded-[6%] px-10 font-bold group h-16 text-lg hover:bg-primary/5 transition-all">
                    <Link href="/products" className="flex items-center gap-3">
                      View Components
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative min-h-[500px] lg:min-h-full overflow-hidden">
                <Image
                  src={productPreview.image}
                  alt={productPreview.name}
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-l opacity-40"></div>
                
                {/* Floating Tech Stat */}
                <div className="absolute bottom-12 left-12 right-12 p-8 rounded-[6%] bg-white/10 backdrop-blur-2xl border border-white/30 text-white animate-in fade-in slide-in-from-bottom-8">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-2">Performance Architecture</p>
                  <p className="text-2xl font-bold">Tested at KNUST Engineering Labs</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
