
"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const products = [
  {
    id: "autox",
    name: "AutoX Pro",
    tagline: "Ultimate Automation Controller",
    description: "The heartbeat of your water management. Smart sensors, remote control, and AI-driven efficiency for any system.",
    features: ["Remote Smartphone Control", "Leak Detection Alerts", "Flow Analytics", "Solar Ready"],
    image: PlaceHolderImages.find(img => img.id === "product-autox")?.imageUrl || "https://picsum.photos/seed/autox/600/400"
  }
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Hardware</h2>
          <h3 className="font-headline text-4xl md:text-5xl font-bold mb-6">Innovative Products</h3>
          <p className="text-muted-foreground text-lg">
            Built with cutting-edge technology to provide unmatched control and reliability in water resource management.
          </p>
        </div>

        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden border-none shadow-2xl rounded-3xl bg-white">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 items-center">
                <div className="p-8 md:p-12 lg:p-16 space-y-8">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase mb-4">Flagship Product</span>
                    <h4 className="text-4xl font-headline font-bold mb-2">{product.name}</h4>
                    <p className="text-primary font-medium">{product.tagline}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {product.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-semibold">
                        <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white">
                          <Check className="w-3 h-3" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 flex gap-4">
                    <Button size="lg" className="rounded-xl px-8 font-bold">Buy Now</Button>
                    <Button variant="ghost" size="lg" className="rounded-xl px-8 font-bold group">
                      Technical Specs
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
                <div className="relative h-[400px] lg:h-full min-h-[400px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    data-ai-hint="tech device"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
