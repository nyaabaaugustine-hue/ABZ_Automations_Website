
"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export function About() {
  const aboutImg = "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776424323/mn1_toifu3.jpg";

  return (
    <section id="about" className="py-16 md:py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl border-[12px] border-background">
               <Image 
                src={aboutImg} 
                alt="Water Automation Technology" 
                fill
                className="object-cover"
                data-ai-hint="water technology"
               />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-[40px] shadow-2xl hidden md:block max-w-[240px]">
              <p className="text-white text-3xl font-headline font-bold mb-1">10+</p>
              <p className="text-white/70 text-[10px] uppercase tracking-widest font-bold">Years of Innovation</p>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-primary font-bold uppercase tracking-widest text-xs">Who We Are</h2>
              <h3 className="font-headline text-3xl md:text-5xl font-bold leading-tight">Dedicated to Water <span className="text-accent">Excellence</span></h3>
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              ABZ Automations is a pioneering technology firm based in Kumasi, Ghana. We specialize in developing and deploying advanced water automation systems that help businesses and homeowners manage their most precious resource efficiently.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              From our humble beginnings at the KNUST Business Incubator, we've grown into a national leader, known for our flagship AutoX product and a comprehensive suite of professional water services.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {[
                "Commitment to Sustainability",
                "Innovation in Every Controller",
                "Quality Ghanaian Craftsmanship",
                "Customer-Centric Solutions"
              ].map((value, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-sm text-foreground/80">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
