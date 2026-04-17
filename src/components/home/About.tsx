
"use client";

import React from "react";
import { Check } from "lucide-react";

const values = [
  "Commitment to Sustainability",
  "Innovation in Every Controller",
  "Quality Ghanaian Craftsmanship",
  "Customer-Centric Solutions",
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl border-[12px] border-background">
               <img 
                src="https://picsum.photos/seed/about-img/800/1000" 
                alt="Water Automation" 
                className="w-full h-full object-cover"
                data-ai-hint="water automation"
               />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-primary p-10 rounded-[40px] shadow-2xl hidden md:block max-w-[280px]">
              <p className="text-white text-3xl font-headline font-bold mb-2">10+</p>
              <p className="text-white/70 text-sm uppercase tracking-widest font-bold">Years of Innovation</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Who We Are</h2>
              <h3 className="font-headline text-4xl md:text-5xl font-bold">Dedicated to Water <span className="text-accent">Excellence</span></h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              ABZ Automations is a pioneering technology firm based in Kumasi, Ghana. We specialize in developing and deploying advanced water automation systems that help businesses and homeowners manage their most precious resource efficiently.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              From our humble beginnings at the KNUST Business Incubator, we've grown into a national leader, known for our flagship AutoX product and a comprehensive suite of professional water services.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {values.map((value, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-foreground/80">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
