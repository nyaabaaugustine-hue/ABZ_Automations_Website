
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
  Waves,
  Zap
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    id: "pump",
    title: "Pump Installation",
    description: "Industrial-grade programmable controllers that eliminate tank overflow and dry-run hazards.",
    icon: Settings,
    image: PlaceHolderImages.find(img => img.id === "service-pump")?.imageUrl || "https://picsum.photos/seed/pump/600/400",
    stat: "99% Efficiency"
  },
  {
    id: "tank",
    title: "Sanitization",
    description: "Advanced chemical-free filtration and cleaning to ensure hospital-grade water quality.",
    icon: Droplets,
    image: PlaceHolderImages.find(img => img.id === "service-tank")?.imageUrl || "https://picsum.photos/seed/tank/600/400",
    stat: "Zero Algae"
  },
  {
    id: "ro",
    title: "R/O Automation",
    description: "Smart feedback loops for reverse osmosis systems to prevent membrane rupture.",
    icon: FlaskConical,
    image: PlaceHolderImages.find(img => img.id === "service-ro")?.imageUrl || "https://picsum.photos/seed/ro-auto/600/400",
    stat: "Smart Monitoring"
  },
  {
    id: "booster",
    title: "Pressure Logic",
    description: "VFD-driven booster systems that maintain precise pressure across multi-story buildings.",
    icon: Activity,
    image: PlaceHolderImages.find(img => img.id === "service-booster")?.imageUrl || "https://picsum.photos/seed/booster/600/400",
    stat: "Constant Flow"
  },
  {
    id: "plumbing",
    title: "Technical Support",
    description: "Certified engineering support for complex residential and industrial plumbing architectures.",
    icon: Wrench,
    image: PlaceHolderImages.find(img => img.id === "service-plumbing")?.imageUrl || "https://picsum.photos/seed/plumbing/600/400",
    stat: "24/7 Response"
  },
  {
    id: "custom",
    title: "Bespoke R&D",
    description: "Custom hardware and software development for unique agricultural or industrial challenges.",
    icon: Waves,
    image: PlaceHolderImages.find(img => img.id === "service-custom")?.imageUrl || "https://picsum.photos/seed/custom-water/600/400",
    stat: "Custom Logic"
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
          <Badge className="bg-primary/10 text-primary border-none px-6 py-2 font-bold uppercase tracking-[0.3em] text-[11px] rounded-[6%]">
            Technical Excellence
          </Badge>
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold">
            Engineering <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Professional water services backed by advanced Ghanaian automation hardware.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-background rounded-[6%] overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-700 flex flex-col h-full hover:-translate-y-3"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <Badge className="bg-accent text-accent-foreground border-none px-3 py-1 font-bold text-[10px] rounded-[6%]">
                    {service.stat}
                  </Badge>
                </div>
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-xl rounded-[6%] flex items-center justify-center shadow-2xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <service.icon className="w-6 h-6" />
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h4 className="text-2xl font-headline font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-muted-foreground mb-8 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <div className="pt-6 border-t border-border/50 flex items-center justify-between">
                  <Button asChild variant="ghost" className="p-0 h-auto font-bold text-primary hover:bg-transparent group/btn text-base">
                    <Link href="/quote" className="flex items-center gap-2">
                      Request Design 
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 glass rounded-[6%] p-12 md:p-20 relative overflow-hidden shadow-2xl group border border-white/20">
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <Image 
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422246/abz_3_hp78qi.jpg"
            alt="Technical Background"
            fill
            className="object-cover -z-10 group-hover:scale-105 transition-transform duration-[10000ms]"
          />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10 text-white">
            <div className="space-y-8">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold leading-tight">Complex Project?</h3>
              <p className="text-white/80 text-xl max-w-xl leading-relaxed">
                Our R&D team develops custom hardware and software integrations for the most demanding water challenges.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Button asChild size="lg" className="h-20 px-16 text-2xl font-bold bg-white text-primary hover:bg-accent hover:text-white rounded-[6%] shadow-2xl transition-all duration-500">
                <Link href="/quote">Consult Engineers</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
