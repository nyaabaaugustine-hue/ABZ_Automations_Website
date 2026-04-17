"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Droplets, 
  Settings, 
  Zap, 
  Wrench, 
  FlaskConical, 
  ArrowRight,
  Activity,
  Waves
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    id: "pump",
    title: "Water Pump Installation",
    description: "Experience a trouble-free operation with our flagship programmable controllers. Never worry about overflowing tanks or running dry in the middle of a task again.",
    icon: Settings,
    image: PlaceHolderImages.find(img => img.id === "service-pump")?.imageUrl || "https://picsum.photos/seed/pump/600/400",
    accent: "text-primary"
  },
  {
    id: "tank",
    title: "Professional Tank Cleaning",
    description: "Hygienic water is the lifeblood of your home. We use advanced techniques to flush sediment, algae, and contaminants, ensuring your water remains safe and healthy.",
    icon: Droplets,
    image: PlaceHolderImages.find(img => img.id === "service-tank")?.imageUrl || "https://picsum.photos/seed/tank/600/400",
    accent: "text-accent"
  },
  {
    id: "ro",
    title: "R/O System Automation",
    description: "Improve efficiency and reduce downtime. Our automation prevents tank ruptures and ensures fresh water is always available without manual operation.",
    icon: FlaskConical,
    image: PlaceHolderImages.find(img => img.id === "service-ro")?.imageUrl || "https://picsum.photos/seed/ro-auto/600/400",
    accent: "text-primary"
  },
  {
    id: "booster",
    title: "Pressure Booster Systems",
    description: "Enjoy consistent and optimal water pressure throughout your property. Our boosters increase flow precisely where it is needed, when it is needed.",
    icon: Activity,
    image: PlaceHolderImages.find(img => img.id === "service-booster")?.imageUrl || "https://picsum.photos/seed/booster/600/400",
    accent: "text-accent"
  },
  {
    id: "plumbing",
    title: "General Plumbing Services",
    description: "From regular maintenance to complex industrial installations. Our certified plumbers provide high-quality service that promises efficiency and reliability.",
    icon: Wrench,
    image: PlaceHolderImages.find(img => img.id === "service-plumbing")?.imageUrl || "https://picsum.photos/seed/plumbing/600/400",
    accent: "text-primary"
  },
  {
    id: "custom",
    title: "Custom Water Solutions",
    description: "Bespoke engineering for unique challenges. We design and implement tailored automation architectures for residential, agricultural, and industrial needs.",
    icon: Waves,
    image: PlaceHolderImages.find(img => img.id === "service-custom")?.imageUrl || "https://picsum.photos/seed/custom-water/600/400",
    accent: "text-accent"
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
          <Badge className="bg-primary/10 text-primary border-none px-6 py-2 font-bold uppercase tracking-[0.3em] text-[11px] rounded-[6%]">
            Technical Excellence
          </Badge>
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold">
            Expert <span className="text-primary">Water Services</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Engineered solutions for residential, commercial, and industrial plumbing systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-[6%] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_50px_80px_-20px_rgba(31,114,173,0.15)] transition-all duration-700 border border-white flex flex-col h-full hover:-translate-y-3"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-8 left-8 w-16 h-16 bg-white/95 backdrop-blur-xl rounded-[6%] flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <service.icon className="w-8 h-8" />
                </div>
              </div>
              
              <div className="p-10 flex-grow flex flex-col">
                <h4 className="text-3xl font-headline font-bold mb-6 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-muted-foreground mb-10 text-lg leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <div className="pt-8 border-t border-secondary flex items-center justify-between">
                  <Button asChild variant="ghost" className="p-0 h-auto font-bold text-primary hover:bg-transparent group/btn text-lg">
                    <Link href="/quote" className="flex items-center gap-3">
                      Get a Quote 
                      <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-3 transition-transform duration-300" />
                    </Link>
                  </Button>
                  <div className="w-10 h-10 rounded-[6%] bg-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Zap className="w-5 h-5 text-accent fill-accent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-32 bg-primary rounded-[6%] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl shadow-primary/30 group">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3 group-hover:scale-125 transition-transform duration-[3000ms]"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold leading-tight">Looking for something custom?</h3>
              <p className="text-white/70 text-xl max-w-xl leading-relaxed">
                Our engineers tackle your most complex water automation challenges. Let's build a sustainable future together.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Button asChild size="lg" className="h-20 px-16 text-2xl font-bold bg-white text-primary hover:bg-accent hover:text-white rounded-[6%] shadow-2xl transition-all duration-500">
                <Link href="/quote">Start Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}