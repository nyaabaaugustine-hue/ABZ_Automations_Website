
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  Globe,
  Calculator,
  TrendingDown
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
  }
];

export default function ServicesPage() {
  const [tankSize, setTankSize] = useState(2000); // Gallons
  const [dailyPumps, setDailyPumps] = useState(3);
  
  // Basic ROI Logic
  const overflowWaste = (tankSize * 0.05) * dailyPumps * 30; // 5% overflow waste monthly
  const annualSavings = (overflowWaste * 12) * 0.015; // GH₵ calculation per gallon saved (est)

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

        {/* ROI CALCULATOR SECTION */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <Card className="rounded-[40px] overflow-hidden border-none premium-shadow bg-white">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-16 bg-[#020817] text-white space-y-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-headline font-bold">ABZ Savings <span className="text-primary">Estimator</span></h2>
                  <p className="text-white/60 text-sm md:text-base">Calculate the environmental and financial impact of switching to ABZ Automation hardware.</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <Label className="text-white/80 font-bold uppercase tracking-widest text-[10px]">Tank Capacity (Gallons)</Label>
                    <Input 
                      type="number" 
                      value={tankSize} 
                      onChange={(e) => setTankSize(Number(e.target.value))}
                      className="bg-white/5 border-white/10 h-14 rounded-2xl text-xl text-primary font-bold focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-white/80 font-bold uppercase tracking-widest text-[10px]">Daily Pump Cycles</Label>
                    <Input 
                      type="number" 
                      value={dailyPumps} 
                      onChange={(e) => setDailyPumps(Number(e.target.value))}
                      className="bg-white/5 border-white/10 h-14 rounded-2xl text-xl text-primary font-bold focus:ring-primary"
                    />
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-16 flex flex-col justify-center space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">Monthly Water Saved</p>
                    <div className="flex items-end gap-2">
                       <span className="text-4xl font-headline font-extrabold text-primary">{Math.round(overflowWaste).toLocaleString()}</span>
                       <span className="text-sm font-bold pb-1">Gallons</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">Est. Annual ROI</p>
                    <div className="flex items-end gap-2">
                       <span className="text-4xl font-headline font-extrabold text-accent">₵{Math.round(annualSavings).toLocaleString()}</span>
                       <span className="text-sm font-bold pb-1">GH₵</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 p-6 rounded-3xl flex items-center gap-4 border border-primary/10">
                  <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shrink-0">
                    <TrendingDown className="w-6 h-6" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-primary">Engineering Insight:</strong> By eliminating overflow and optimizing pump intervals, an average Ghanaian residential unit recovers installation costs in under <span className="text-foreground font-bold">14 months</span>.
                  </p>
                </div>

                <Button className="w-full h-16 rounded-2xl font-bold text-lg shadow-2xl shadow-primary/20" asChild>
                  <Link href="/quote">Get This Solution Now</Link>
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Services List */}
        <section className="max-w-7xl mx-auto px-6 space-y-12 md:space-y-20">
          {services.map((service, idx) => (
            <div key={service.id} className={`grid lg:grid-cols-2 gap-10 md:gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`relative h-[350px] md:h-[500px] rounded-[40px] overflow-hidden shadow-2xl group ${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
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
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
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

                <Button asChild className="rounded-2xl h-14 px-8 font-bold gap-2 text-base">
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
          <div className="bg-[#020817] rounded-[40px] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10 grid md:grid-cols-3 gap-12 text-center md:text-left">
              {[
                { icon: ShieldCheck, title: "Verified Safety", desc: "All installations are lab-tested and certified by KNUST Engineering experts." },
                { icon: Zap, title: "Smart Response", desc: "Our telemetry systems provide 24/7 monitoring and instant leak alerts." },
                { icon: Globe, title: "Eco Conscious", desc: "We help you reduce water waste by up to 45% through precision logic." }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-accent mx-auto md:mx-0">
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
            <Button asChild size="lg" className="h-16 px-12 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20">
              <Link href="/quote">Start Your Quote</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
