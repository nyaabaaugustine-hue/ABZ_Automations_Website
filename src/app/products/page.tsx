
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Search, ArrowRight, Zap, Droplets, ShieldCheck, Info, Cpu, Gauge, Globe, FileText, Download, Printer } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";

function openDataSheet(product: typeof products[0]) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${product.name} — ABZ Automations Data Sheet</title>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; color: #020817; background: #fff; }
    .header { display:flex; justify-content:space-between; align-items:flex-start; padding-bottom:24px; border-bottom:3px solid #2563eb; margin-bottom:32px; }
    .logo { font-size:22px; font-weight:900; letter-spacing:-0.5px; }
    .logo span { color:#2563eb; }
    .badge { background:#2563eb; color:#fff; font-size:10px; font-weight:700; letter-spacing:2px; text-transform:uppercase; padding:4px 12px; border-radius:20px; }
    h1 { font-size:32px; font-weight:900; margin-bottom:6px; }
    .subtitle { color:#64748b; font-size:14px; font-weight:600; text-transform:uppercase; letter-spacing:2px; }
    .grid { display:grid; grid-template-columns:1fr 1fr; gap:32px; margin-top:32px; }
    .section-title { font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:2px; color:#2563eb; margin-bottom:12px; padding-bottom:6px; border-bottom:1px solid #e2e8f0; }
    .spec-row { display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #f1f5f9; font-size:13px; }
    .spec-key { color:#64748b; font-weight:600; }
    .spec-val { font-weight:700; }
    .features { display:flex; flex-wrap:wrap; gap:8px; margin-top:8px; }
    .feature-tag { background:#eff6ff; color:#2563eb; font-size:11px; font-weight:700; padding:4px 12px; border-radius:20px; border:1px solid #bfdbfe; }
    .description { line-height:1.7; color:#475569; font-size:14px; margin-top:8px; }
    .footer { margin-top:48px; padding-top:20px; border-top:1px solid #e2e8f0; display:flex; justify-content:space-between; font-size:11px; color:#94a3b8; font-weight:600; text-transform:uppercase; letter-spacing:1px; }
    @media print { body { padding:20px; } }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <div class="logo">ABZ<span>Automations</span></div>
      <div style="font-size:11px;color:#94a3b8;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin-top:4px">Precision Water Solutions · Kumasi, Ghana</div>
    </div>
    <div class="badge">Technical Data Sheet</div>
  </div>
  <h1>${product.name}</h1>
  <div class="subtitle">${product.category.toUpperCase()} · ABZ-${product.id.toUpperCase().replace(/-/g, '')}</div>
  <div class="grid">
    <div>
      <p class="section-title">Product Description</p>
      <p class="description">${product.description}</p>
      <p class="section-title" style="margin-top:24px">Key Features</p>
      <div class="features">${product.features.map((f: string) => `<span class="feature-tag">${f}</span>`).join('')}</div>
    </div>
    <div>
      <p class="section-title">Technical Specifications</p>
      ${Object.entries(product.specs).map(([k, v]) => `<div class="spec-row"><span class="spec-key">${k.charAt(0).toUpperCase()+k.slice(1)}</span><span class="spec-val">${v}</span></div>`).join('')}
      <div class="spec-row"><span class="spec-key">Price</span><span class="spec-val">${product.price} (Custom Quote)</span></div>
    </div>
  </div>
  <div class="footer">
    <span>info@abzautomations.com</span>
    <span>+233 (0) 54 619 8838</span>
    <span>abzautomations.com</span>
    <span>Rev. 2026 · KNUST Certified</span>
  </div>
  <script>window.onload = () => window.print();<\/script>
</body>
</html>`;
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
}

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
    image: PlaceHolderImages.find(img => img.id === "product-9")?.imageUrl ?? "https://placehold.co/600x750/020817/ffffff?text=ABZ",
    isNew: true,
    features: ["WiFi/GSM", "Solar Ready", "AI Flow Logic"],
    specs: {
      voltage: "220V / 12V DC Support",
      protection: "IP67 Waterproof",
      connectivity: "4G / LTE / LoRaWAN",
      warranty: "24 Months Replacement"
    }
  },
  {
    id: "flow-master-3000",
    name: "Flow Master Ultra",
    category: "sensors",
    price: "Custom",
    description: "Ultrasonic precision flow meter for real-time tracking and deep leak detection analytics.",
    image: PlaceHolderImages.find(img => img.id === "product-2")?.imageUrl ?? "https://placehold.co/600x750/020817/ffffff?text=ABZ",
    isNew: false,
    features: ["Digital Display", "Remote Sync", "±0.5% Accuracy"],
    specs: {
      voltage: "Battery Powered (5yr Life)",
      protection: "Corrosion Resistant",
      connectivity: "Bluetooth / Mesh",
      warranty: "18 Months"
    }
  },
  {
    id: "vfd-pump-logic",
    name: "VFD Pump Logic X1",
    category: "hardware",
    price: "Custom",
    description: "Industrial variable frequency drive optimized for African power grid stability.",
    image: PlaceHolderImages.find(img => img.id === "product-3")?.imageUrl ?? "https://placehold.co/600x750/020817/ffffff?text=ABZ",
    isNew: true,
    features: ["Grid Protection", "Soft Start", "45% Energy Saving"],
    specs: {
      voltage: "Phase-loss Protection",
      protection: "Heat-sync Cooling",
      connectivity: "RS485 Modbus",
      warranty: "36 Months"
    }
  },
  {
    id: "tank-sentinel",
    name: "Tank Sentinel Pro",
    category: "sensors",
    price: "Custom",
    description: "Multi-parameter tank monitoring system for level, temperature, and quality control.",
    image: PlaceHolderImages.find(img => img.id === "product-7")?.imageUrl ?? "https://placehold.co/600x750/020817/ffffff?text=ABZ",
    isNew: false,
    features: ["Battery Powered", "IP68 Rated", "Instant Alerts"],
    specs: {
      voltage: "Solar Self-charging",
      protection: "Anti-Algae Coated",
      connectivity: "Ultrasonic / Laser",
      warranty: "24 Months"
    }
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
              <Badge className="mb-3 bg-primary/10 text-primary border-none px-4 py-1 text-[10px] font-bold">Innovation Shop</Badge>
              <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4">Industrial <span className="text-primary">Precision</span></h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Explore our range of hardware designed and tested for the most demanding Ghanaian environments.
              </p>
            </div>
            
            <div className="flex gap-3">
               <div className="relative w-full md:w-64">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search engineering specs..." 
                    className="pl-12 h-14 rounded-2xl transition-all focus:border-primary border-border/50"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
               </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="max-w-7xl mx-auto px-6">
          <Tabs defaultValue="all" onValueChange={setActiveCategory} className="mb-10">
            <TabsList className="bg-white p-1 rounded-2xl h-14 shadow-sm border border-border/50">
              {productCategories.map(cat => (
                <TabsTrigger 
                  key={cat.id} 
                  value={cat.id} 
                  className="rounded-xl px-4 md:px-8 font-bold text-xs data-[state=active]:bg-primary data-[state=active]:text-white h-full transition-all"
                >
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group border-none shadow-xl rounded-[40px] overflow-hidden bg-white transition-all hover:shadow-2xl hover:-translate-y-2">
                <CardHeader className="p-0 relative">
                  <div className="aspect-[4/5] relative overflow-hidden bg-muted">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {product.isNew && (
                      <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground border-none px-3 py-1 font-bold rounded-xl text-[10px]">NEW RELEASE</Badge>
                    )}
                    
                    {/* Detail Trigger */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all border border-white/30">
                          <Info className="w-5 h-5" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl rounded-[40px] border-none p-0 overflow-hidden shadow-2xl">
                        <div className="grid md:grid-cols-2">
                          <div className="relative h-[300px] md:h-full">
                            <Image src={product.image} alt={product.name} fill className="object-cover" />
                          </div>
                          <div className="p-8 md:p-12 space-y-8 bg-white">
                            <div className="space-y-4">
                              <Badge className="bg-primary/10 text-primary border-none">{product.category.toUpperCase()}</Badge>
                              <DialogTitle className="text-3xl font-headline font-bold">{product.name}</DialogTitle>
                              <DialogDescription className="text-base">{product.description}</DialogDescription>
                            </div>
                            
                            <div className="grid gap-4">
                              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground border-b pb-2">Technical Specifications</p>
                              {Object.entries(product.specs).map(([key, val]) => (
                                <div key={key} className="flex justify-between items-center gap-4">
                                  <span className="text-xs font-bold text-muted-foreground capitalize">{key}</span>
                                  <span className="text-xs font-extrabold text-foreground">{val}</span>
                                </div>
                              ))}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                               <Button variant="outline" className="h-14 rounded-2xl font-bold gap-2 text-xs" onClick={() => openDataSheet(product)}>
                                  <Download className="w-4 h-4" /> PDF Specs
                               </Button>
                               <Button className="h-14 rounded-2xl font-bold gap-3" asChild>
                                  <Link href={`/quote?product=${product.id}`}>
                                    Quote <ArrowRight className="w-4 h-4" />
                                  </Link>
                               </Button>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <CardTitle className="font-headline text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{product.name}</CardTitle>
                  <CardDescription className="line-clamp-2 text-sm mb-6 leading-relaxed">{product.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((f, i) => (
                      <span key={i} className="text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-lg border border-primary/10">
                        {f}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-8 pt-0 flex flex-col items-stretch border-t border-border/50 mt-2 pt-6 gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-headline font-bold text-lg text-primary">{product.price}</span>
                    <Button asChild className="rounded-2xl font-bold gap-2 h-12 px-6 shadow-lg shadow-primary/10">
                      <Link href={`/quote?product=${product.id}`}>
                        Order <ShoppingCart className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                  <button className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors" onClick={() => openDataSheet(product)}>
                    <FileText className="w-3 h-3" /> View Data Sheet
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Features Section */}
        <section className="max-w-7xl mx-auto px-6 mt-24">
          <div className="bg-[#020817] rounded-[40px] p-8 md:p-16 text-white grid md:grid-cols-3 gap-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
            
            {[
              { icon: Cpu, title: "ARM Architecture", desc: "Built with high-frequency industrial processors for complex automation tasks." },
              { icon: Gauge, title: "Precision Sensing", desc: "Advanced ultrasonic sensors with +/- 0.1% accuracy for tank monitoring." },
              { icon: Globe, title: "GSM Connectivity", desc: "Independent LTE/4G modules ensure your system stays online everywhere in Ghana." }
            ].map((tech, i) => (
              <div key={i} className="space-y-5 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-accent">
                  <tech.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-headline font-bold">{tech.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-7xl mx-auto px-6 mt-24 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-headline text-4xl md:text-6xl font-bold">Ready for a <span className="text-primary">Custom Architecture?</span></h2>
            <p className="text-base md:text-xl text-muted-foreground leading-relaxed">Our certified engineering team can design and build a bespoke hardware ecosystem for your specific industrial challenge.</p>
            <Button asChild size="lg" className="h-16 px-12 text-lg font-bold rounded-2xl shadow-2xl shadow-primary/20">
              <Link href="/quote">Request Technical Consultation <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
