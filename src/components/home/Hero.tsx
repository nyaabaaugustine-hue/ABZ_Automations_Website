
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-water-automation");

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <Zap className="w-3 h-3 fill-primary" />
            Next-Gen Water Systems
          </div>
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-foreground">
            Automating Your <span className="text-primary">Water Future</span> Today
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
            Revolutionize how you manage water resources with our intelligent automation solutions. Efficiency, reliability, and precision at your fingertips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="h-14 px-8 text-lg font-bold group">
              <Link href="/quote" className="flex items-center gap-2">
                Start Your Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg font-bold">
              <Link href="#products">Explore Products</Link>
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 opacity-80">
            <div className="flex items-center gap-2 text-sm font-medium">
              <ShieldCheck className="text-accent w-5 h-5" />
              <span>Certified Installations</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <Droplets className="text-primary w-5 h-5" />
              <span>99% Efficiency</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-square lg:aspect-auto lg:h-[600px] group">
            <Image
              src={heroImage?.imageUrl || "https://picsum.photos/seed/abz-hero/1200/800"}
              alt="ABZ Automations Water Systems"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              data-ai-hint="water automation"
            />
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl z-0 animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl z-0"></div>
          
          {/* Floating Card UI Element */}
          <div className="absolute bottom-10 -left-6 md:-left-12 bg-white p-4 rounded-2xl shadow-xl z-20 hidden sm:flex items-center gap-4 animate-bounce">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-bold uppercase tracking-tighter">Real-time status</p>
              <p className="text-sm font-bold text-foreground">AutoX Optimized</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
