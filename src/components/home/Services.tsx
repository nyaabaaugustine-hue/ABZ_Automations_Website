
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
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <Badge className="bg-primary/10 text-primary border-none px-4 py-1 font-bold uppercase tracking-widest text-[10px]">
            Suite of Excellence
          </Badge>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold">
            Discover Our <span className="text-primary">Expert Services</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Designed to support and enhance the reliability of your residential, commercial, and industrial plumbing and water management systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-6 left-6 w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <service.icon className={`w-7 h-7 ${service.accent}`} />
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h4 className="text-2xl font-headline font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-muted-foreground mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                  <Button asChild variant="ghost" className="p-0 h-auto font-bold text-primary hover:bg-transparent group/btn">
                    <Link href="/quote" className="flex items-center gap-2">
                      Get a Quote 
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Zap className="w-4 h-4 text-accent fill-accent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-20 bg-primary rounded-[48px] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-headline font-bold">Looking for something custom?</h3>
              <p className="text-white/70 text-lg max-w-lg">
                Our engineers are ready to tackle your most complex water automation challenges. Let's build a sustainable future together.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Button asChild size="lg" className="h-16 px-10 text-xl font-bold bg-white text-primary hover:bg-accent hover:text-white rounded-2xl shadow-xl transition-all">
                <Link href="/quote">Start Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
