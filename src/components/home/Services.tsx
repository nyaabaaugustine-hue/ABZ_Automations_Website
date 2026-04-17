
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Droplets, 
  Settings, 
  Wrench, 
  FlaskConical, 
  ArrowRight,
  Activity,
  Waves
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const services = [
  {
    id: "pump",
    title: "Pump Installation",
    description: "Industrial-grade programmable controllers that eliminate tank overflow and dry-run hazards.",
    icon: Settings,
    image: PlaceHolderImages.find(img => img.id === "service-pump")?.imageUrl || "",
    stat: "99% Efficiency"
  },
  {
    id: "tank",
    title: "Sanitization",
    description: "Advanced chemical-free filtration and cleaning to ensure hospital-grade water quality.",
    icon: Droplets,
    image: PlaceHolderImages.find(img => img.id === "service-tank")?.imageUrl || "",
    stat: "Zero Algae"
  },
  {
    id: "ro",
    title: "R/O Automation",
    description: "Smart feedback loops for reverse osmosis systems to prevent membrane rupture.",
    icon: FlaskConical,
    image: PlaceHolderImages.find(img => img.id === "service-ro")?.imageUrl || "",
    stat: "Smart Monitoring"
  },
  {
    id: "booster",
    title: "Pressure Logic",
    description: "VFD-driven booster systems that maintain precise pressure across multi-story buildings.",
    icon: Activity,
    image: PlaceHolderImages.find(img => img.id === "service-pressure")?.imageUrl || "",
    stat: "Constant Flow"
  },
  {
    id: "plumbing",
    title: "Technical Support",
    description: "Certified engineering support for complex residential and industrial plumbing architectures.",
    icon: Wrench,
    image: PlaceHolderImages.find(img => img.id === "service-support")?.imageUrl || "",
    stat: "24/7 Response"
  },
  {
    id: "custom",
    title: "Bespoke R&D",
    description: "Custom hardware and software development for unique agricultural or industrial challenges.",
    icon: Waves,
    image: PlaceHolderImages.find(img => img.id === "service-rd")?.imageUrl || "",
    stat: "Custom Logic"
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px] translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-primary/10 text-primary border-none px-6 py-2 font-bold uppercase tracking-[0.3em] text-[10px] rounded-[6%]">
            Technical Excellence
          </Badge>
          <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold">
            Engineering <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
            Professional water services backed by advanced Ghanaian automation hardware.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-background rounded-[6%] overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-700 flex flex-col h-full hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <Badge className="bg-accent text-accent-foreground border-none px-2 py-0.5 font-bold text-[9px] rounded-[6%]">
                    {service.stat}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-xl rounded-[6%] flex items-center justify-center shadow-2xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <service.icon className="w-5 h-5" />
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <h4 className="text-xl md:text-2xl font-headline font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                  <Button asChild variant="ghost" className="p-0 h-auto font-bold text-primary hover:bg-transparent group/btn text-sm">
                    <Link href="/services" className="flex items-center gap-2">
                      Request Design 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
