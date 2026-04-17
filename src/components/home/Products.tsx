
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
  name: "AutoX Pro",
  tagline: "Ultimate Automation Controller",
  description: "The heartbeat of your water management. Smart sensors, remote control, and AI-driven efficiency for any system. Designed for both residential and industrial applications.",
  features: ["Remote Smartphone Control", "Leak Detection Alerts", "Flow Analytics", "Solar Ready"],
  image: PlaceHolderImages.find(img => img.id === "product-autox-pro")?.imageUrl || "https://picsum.photos/seed/autoxpro/600/600"
};

export function Products() {
  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Innovation Showcase</h2>
            <h3 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-0">Engineered for <span className="text-accent">Precision</span></h3>
          </div>
          <Button asChild variant="outline" size="lg" className="rounded-xl border-primary text-primary hover:bg-primary/5 font-bold h-14">
            <Link href="/products" className="flex items-center gap-2">
              Browse Full Shop <ShoppingBag className="w-5 h-5" />
            </Link>
          </Button>
        </div>

        <Card className="overflow-hidden border-none shadow-2xl rounded-[48px] bg-background group">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 items-stretch">
              <div className="p-8 md:p-12 lg:p-20 space-y-10">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest">
                    <Zap className="w-3 h-3 fill-accent" /> Flagship Release
                  </div>
                  <h4 className="text-4xl md:text-5xl font-headline font-bold mb-2">{productPreview.name}</h4>
                  <p className="text-primary font-bold text-lg">{productPreview.tagline}</p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {productPreview.description}
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {productPreview.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-foreground/80">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <Check className="w-4 h-4" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-6 flex flex-wrap gap-4">
                  <Button asChild size="lg" className="rounded-2xl px-10 font-bold h-14 shadow-xl shadow-primary/20">
                    <Link href="/quote">Request Custom Quote</Link>
                  </Button>
                  <Button asChild variant="ghost" size="lg" className="rounded-2xl px-8 font-bold group h-14">
                    <Link href="/products" className="flex items-center gap-2">
                      Technical Specs
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative min-h-[400px] lg:min-h-full overflow-hidden">
                <Image
                  src={productPreview.image}
                  alt={productPreview.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-l opacity-60"></div>
                
                {/* Floating Tech Stat */}
                <div className="absolute bottom-10 left-10 right-10 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 text-white animate-in fade-in slide-in-from-bottom-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">Performance</p>
                  <p className="text-lg font-bold">Optimized for 99.9% Sensor Accuracy</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
