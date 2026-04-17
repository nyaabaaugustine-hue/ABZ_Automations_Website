
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Droplets, 
  Settings, 
  Wrench, 
  FlaskConical, 
  ArrowRight,
  Activity,
  Waves,
  ShieldCheck,
  Zap,
  Globe
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const services = [
  {
    id: "pump",
    title: "Smart Pump Installation",
    fullDescription: "Our industrial-grade programmable controllers eliminate tank overflow and dry-run hazards by using advanced ultrasonic sensors and real-time telemetry. We ensure your pumps operate at peak efficiency, protecting your hardware and reducing energy costs.",
    icon: Settings,
    image: PlaceHolderImages.find(img => img.id === "service-pump")?.imageUrl || "https://picsum.photos/seed/service-pump/800/600",
    features: ["WiFi/GSM Monitoring", "Auto-Shutoff Logic", "Surge Protection"]
  },
  {
    id: "tank",
    title: "Sanitization & Cleaning",
    fullDescription: "We provide hospital-grade water quality through advanced chemical-free filtration and high-pressure sanitization. Our automated tank sentinel keeps track of algae growth and sediment levels, alerting you before quality drops.",
    icon: Droplets,
    image: PlaceHolderImages.find(img => img.id === "service-tank")?.imageUrl || "https://picsum.photos/seed/service-tank/800/600",
    features: ["UV Sterilization", "Sediment Removal", "Quality Reports"]
  },
  {
    id: "ro",
    title: "R/O System Automation",
    fullDescription: "Reverse Osmosis systems are sensitive. Our automation layer adds smart feedback loops that monitor pressure differentials and TDS levels in real-time to prevent membrane rupture and ensure consistent purity.",
    icon: FlaskConical,
    image: PlaceHolderImages.find(img => img.id === "service-ro")?.imageUrl || "https://picsum.photos/seed/service-ro/800/600",
    features: ["TDS Tracking", "Auto-Backwash", "Leak Detection"]
  },
  {
    id: "booster",
    title: "Pressure Management",
    fullDescription: "Maintain precise water pressure across multi-story buildings or large agricultural plots with our VFD (Variable Frequency Drive) solutions. We eliminate the 'hammer effect' and ensure constant flow regardless of demand.",
    icon: Activity,
    image: PlaceHolderImages.find(img => img.id === "service-pressure")?.imageUrl || "https://picsum.photos/seed/service-pressure/800/600",
    features: ["VFD Integration", "Energy Savings", "Soft-Start Tech"]
  },
  {
    id: "plumbing",
    title: "Engineering Support",
    fullDescription: "Get access to certified technical support for complex residential, commercial, and industrial plumbing architectures. We provide detailed schematics, stress-testing, and 24/7 remote diagnostic support.",
    icon: Wrench,
    image: PlaceHolderImages.find(img => img.id === "service-support")?.imageUrl || "https://picsum.photos/seed/service-support/800/600",
    features: ["Technical Audit", "Remote Diagnostics", "CAD Schematics"]
  },
  {
    id: "custom",
    title: "Bespoke R&D",
    fullDescription: "When off-the-shelf solutions fail, our KNUST-incubated engineering team develops custom hardware and software integrations for the most demanding water challenges in agriculture and industry.",
    icon: Waves,
    image: PlaceHolderImages.find(img => img.id === "service-rd")?.imageUrl || "https://picsum.photos/seed/service-rd/800/600",
    features: ["Prototyping", "Custom Firmware", "Lab Testing"]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-32 pb-16">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary/10 text-primary border-none px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
              Capabilities
            </Badge>
            <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6">
              Precision <span className="text-primary">Water Services</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
              We combine world-class engineering with advanced Ghanaian automation hardware to solve your most complex water management challenges.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="max-w-7xl mx-auto px-6 space-y-12 md:space-y-20">
          {services.map((service, idx) => (
            <div key={service.id} className={`grid lg:grid-cols-2 gap-10 md:gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`relative h-[350px] md:h-[500px] rounded-[6%] overflow-hidden shadow-2xl group ${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>

              <div className="space-y-6 md:space-y-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-[6%] bg-primary/10 flex items-center justify-center text-primary">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h2 className="font-headline text-3xl md:text-4xl font-bold">{service.title}</h2>
                  <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
                    {service.fullDescription}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="text-xs md:text-sm font-bold text-foreground/80">{feat}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="rounded-[6%] h-12 px-8 font-bold gap-2">
                  <Link href={`/quote?service=${service.id}`}>
                    Request Estimate <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </section>

        {/* Why Choose Us */}
        <section className="max-w-7xl mx-auto px-6 mt-24 md:mt-32">
          <div className="bg-[#020817] rounded-[6%] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10 grid md:grid-cols-3 gap-12 text-center md:text-left">
              {[
                { icon: ShieldCheck, title: "Verified Safety", desc: "All installations are lab-tested and certified by KNUST Engineering experts." },
                { icon: Zap, title: "Smart Response", desc: "Our telemetry systems provide 24/7 monitoring and instant leak alerts." },
                { icon: Globe, title: "Eco Conscious", desc: "We help you reduce water waste by up to 45% through precision logic." }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-12 h-12 rounded-[6%] bg-white/10 flex items-center justify-center text-accent mx-auto md:mx-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-headline font-bold">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 mt-24 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-headline text-3xl md:text-5xl font-bold">Ready to Automate?</h2>
            <p className="text-muted-foreground">Join 500+ businesses and homeowners who have optimized their water future.</p>
            <Button asChild size="lg" className="h-14 px-10 rounded-[6%] font-bold text-lg shadow-xl shadow-primary/20">
              <Link href="/quote">Start Your Quote</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
