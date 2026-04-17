
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ShoppingCart, Heart, Search, Filter, ArrowRight, Zap, Droplets, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const productCategories = [
  { id: "all", name: "All Products" },
  { id: "controllers", name: "Smart Controllers" },
  { id: "sensors", name: "Sensors & Meters" },
  { id: "hardware", name: "Hardware & Pumps" },
];

const products = [
  {
    id: "autox-pro",
    name: "AutoX Pro Elite",
    category: "controllers",
    price: "Custom",
    description: "Our flagship industrial-grade smart controller with AI-driven tank management and multi-source switching.",
    image: PlaceHolderImages.find(img => img.id === "product-9")?.imageUrl || "",
    isNew: true,
    features: ["WiFi/GSM", "Solar Ready", "AI Flow Logic"]
  },
  {
    id: "flow-master-3000",
    name: "Flow Master Ultra",
    category: "sensors",
    price: "Custom",
    description: "Ultrasonic precision flow meter for real-time tracking and deep leak detection analytics.",
    image: PlaceHolderImages.find(img => img.id === "product-2")?.imageUrl || "",
    isNew: false,
    features: ["Digital Display", "Remote Sync", "±0.5% Accuracy"]
  },
  {
    id: "vfd-pump-logic",
    name: "VFD Pump Logic X1",
    category: "hardware",
    price: "Custom",
    description: "Industrial variable frequency drive optimized for African power grid stability.",
    image: PlaceHolderImages.find(img => img.id === "product-3")?.imageUrl || "",
    isNew: true,
    features: ["Grid Protection", "Soft Start", "45% Energy Saving"]
  },
  {
    id: "tank-sentinel",
    name: "Tank Sentinel Pro",
    category: "sensors",
    price: "Custom",
    description: "Multi-parameter tank monitoring system for level, temperature, and quality control.",
    image: PlaceHolderImages.find(img => img.id === "product-7")?.imageUrl || "",
    isNew: false,
    features: ["Battery Powered", "IP68 Rated", "Instant Alerts"]
  },
  {
    id: "smart-hub-alpha",
    name: "Smart Hub Alpha",
    category: "controllers",
    price: "Custom",
    description: "The gateway to your water automation ecosystem, connecting up to 50 sensors.",
    image: PlaceHolderImages.find(img => img.id === "product-1")?.imageUrl || "",
    isNew: true,
    features: ["Mesh Network", "Cloud Sync", "Local Backup"]
  },
  {
    id: "solar-module",
    name: "Solar Integration Module",
    category: "hardware",
    price: "Custom",
    description: "Plug-and-play solar power manager for remote agricultural water installations.",
    image: PlaceHolderImages.find(img => img.id === "product-4")?.imageUrl || "",
    isNew: false,
    features: ["MPPT Logic", "High Efficiency", "Weather Proof"]
  },
  {
    id: "telemetry-unit",
    name: "Wireless Telemetry Unit",
    category: "sensors",
    price: "Custom",
    description: "Long-range wireless transmitter for monitoring distant reservoirs and boreholes.",
    image: PlaceHolderImages.find(img => img.id === "product-5")?.imageUrl || "",
    isNew: false,
    features: ["5km Range", "Ultra Low Power", "Secure Encrypted"]
  },
  {
    id: "valve-actuator",
    name: "Smart Valve Actuator",
    category: "hardware",
    price: "Custom",
    description: "Precision motorized valve control for complex zone-based irrigation systems.",
    image: PlaceHolderImages.find(img => img.id === "product-6")?.imageUrl || "",
    isNew: false,
    features: ["High Torque", "Feedback Loop", "Emergency Override"]
  }
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-32 pb-16">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Badge className="mb-3 bg-primary/10 text-primary border-none px-4 py-1 text-[10px]">Innovative Shop</Badge>
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Cutting-Edge <span className="text-primary">Technology</span></h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Explore our range of hardware designed and tested for efficiency. From household controllers to industrial-grade automation.
              </p>
            </div>
            
            <div className="flex gap-3">
               <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search..." 
                    className="pl-10 h-11 rounded-[6%] transition-all focus:border-primary"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
               </div>
               <Button variant="outline" size="icon" className="h-11 w-11 rounded-[6%] shrink-0">
                  <Filter className="w-4 h-4" />
               </Button>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="max-w-7xl mx-auto px-6">
          <Tabs defaultValue="all" onValueChange={setActiveCategory} className="mb-10">
            <TabsList className="bg-white p-1 rounded-[6%] h-12 shadow-sm border border-border">
              {productCategories.map(cat => (
                <TabsTrigger 
                  key={cat.id} 
                  value={cat.id} 
                  className="rounded-[6%] px-4 md:px-6 font-bold text-xs data-[state=active]:bg-primary data-[state=active]:text-white h-full"
                >
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group border-none shadow-lg rounded-[6%] overflow-hidden bg-white transition-all hover:shadow-2xl hover:-translate-y-1">
                <CardHeader className="p-0 relative">
                  <div className="aspect-square relative overflow-hidden bg-muted">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {product.isNew && (
                      <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground border-none px-2 py-0.5 font-bold rounded-[6%] text-[9px]">NEW</Badge>
                    )}
                    <button className="absolute top-3 right-3 w-8 h-8 rounded-[6%] bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </CardHeader>
                <CardContent className="p-5 md:p-6">
                  <CardTitle className="font-headline text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{product.name}</CardTitle>
                  <CardDescription className="line-clamp-2 text-xs md:text-sm mb-4">{product.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((f, i) => (
                      <span key={i} className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground bg-muted px-2 py-0.5 rounded-[6%]">
                        {f}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-5 md:p-6 pt-0 flex items-center justify-between border-t border-border mt-2 pt-4">
                  <span className="font-headline font-bold text-base text-primary">{product.price}</span>
                  <Button asChild className="rounded-[6%] font-bold gap-2 h-10 px-4 text-xs">
                    <Link href={`/quote?product=${product.id}`}>
                      Add to Quote <ShoppingCart className="w-3.5 h-3.5" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-16 text-center">
              <div className="w-16 h-16 rounded-[6%] bg-muted flex items-center justify-center mx-auto mb-4 text-muted-foreground">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-1">No products found</h3>
              <p className="text-muted-foreground text-sm">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto px-6 mt-16 md:mt-24">
          <div className="bg-primary rounded-[6%] p-8 md:p-12 text-white grid md:grid-cols-3 gap-8 relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>
            
            {[
              { icon: Zap, color: "text-accent", title: "Fast Installation", desc: "Most systems can be installed and commissioned in under 48 hours by our certified engineers." },
              { icon: ShieldCheck, color: "text-primary-foreground", title: "2-Year Warranty", desc: "Every hardware piece comes with a comprehensive 24-month replacement warranty and remote support." },
              { icon: Droplets, color: "text-accent", title: "Certified Efficiency", desc: "Our products are tested at KNUST Engineering labs to ensure maximum water and energy conservation." }
            ].map((benefit, i) => (
              <div key={i} className="space-y-4 relative z-10">
                <div className={`w-12 h-12 rounded-[6%] bg-white/10 flex items-center justify-center ${benefit.color}`}>
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-headline font-bold">{benefit.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-7xl mx-auto px-6 mt-16 md:mt-24 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-headline text-3xl md:text-5xl font-bold">Ready for a Custom Setup?</h2>
            <p className="text-base md:text-lg text-muted-foreground">If you have specific requirements or an industrial project, our experts can design a custom automation architecture just for you.</p>
            <Button asChild size="lg" className="h-14 px-10 text-lg font-bold rounded-[6%] shadow-xl shadow-primary/10">
              <Link href="/quote">Request a Consultation <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
