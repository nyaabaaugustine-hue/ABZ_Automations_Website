
"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Droplet, Hammer, Shield, Wind, Sparkles, Settings } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const services = [
  {
    title: "Water Pump Installation",
    description: "Expert installation of residential and industrial pump systems for optimal pressure.",
    icon: Settings,
    image: PlaceHolderImages.find(img => img.id === "service-pump")?.imageUrl || "https://picsum.photos/seed/pump/600/400"
  },
  {
    title: "Tank Cleaning & Sanitization",
    description: "Professional cleaning using industrial-grade eco-friendly sanitizers.",
    icon: Sparkles,
    image: PlaceHolderImages.find(img => img.id === "service-tank")?.imageUrl || "https://picsum.photos/seed/tank/600/400"
  },
  {
    title: "Irrigation Automation",
    description: "Smart irrigation systems that save up to 40% water through sensor tech.",
    icon: Droplet,
    image: "https://picsum.photos/seed/irrigation/600/400"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Expert Support</h2>
            <h3 className="font-headline text-4xl md:text-5xl font-bold mb-0">Professional Services</h3>
          </div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 font-bold">View All Services</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-accent/20">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-headline font-bold mb-4">{service.title}</h4>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Button variant="link" className="p-0 text-primary font-bold group-hover:gap-4 transition-all">
                  Learn More <span className="ml-2">→</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
