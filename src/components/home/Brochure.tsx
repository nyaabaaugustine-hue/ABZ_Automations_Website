
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FileDown, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Brochure() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-secondary/30 rounded-[3rem] p-10 md:p-20 border border-border/50 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 group">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="max-w-2xl space-y-8 text-center lg:text-left relative z-10">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-none px-5 py-1.5 font-bold uppercase tracking-[0.2em] text-[10px] rounded-full">
                Technical Documentation
              </Badge>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
                Master Your Water With Our <span className="text-primary">2026 Catalog</span>
              </h2>
            </div>
            
            <p className="text-muted-foreground text-xl leading-relaxed font-medium">
              Explore 40+ pages of detailed engineering specifications, installation guides, and the full AutoX smart hardware roadmap. Everything you need to plan your next automation project.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-70">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-accent" />
                Updated Weekly
              </div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-primary" />
                HD Schematics
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 shrink-0 relative z-10">
            <Button size="lg" className="h-20 px-12 rounded-[2rem] font-bold text-xl gap-4 shadow-2xl shadow-primary/30 group/btn bg-primary hover:bg-primary/90 transition-all hover:-translate-y-1">
              Download Brochure 
              <FileDown className="w-6 h-6 transition-transform group-hover/btn:translate-y-1" />
            </Button>
            <Button variant="outline" size="lg" className="h-20 px-10 rounded-[2rem] font-bold text-lg border-primary/20 text-primary bg-white/50 backdrop-blur-sm hover:bg-white transition-all hover:-translate-y-1">
              Request Print Copy
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
