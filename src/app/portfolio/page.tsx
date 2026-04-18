"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { MapPin, Calendar, TrendingDown, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Residential", "Agricultural", "Industrial", "Commercial"];

const projects = [
  {
    id: 1,
    title: "Kumasi Luxury Estate",
    category: "Residential",
    location: "Nhyiaeso, Kumasi",
    date: "March 2025",
    result: "42% water saved",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422281/abz_76_eu0uyp.jpg",
    description: "AutoX Pro mesh network deployed across 20 units. Automated tank switching, overflow prevention, and GSM remote monitoring for the estate manager.",
    tags: ["AutoX Pro", "Tank Automation", "GSM"],
    size: "large",
  },
  {
    id: 2,
    title: "Teak Plantation Irrigation",
    category: "Agricultural",
    location: "Ashanti Region",
    date: "Sept 2024",
    result: "Zero manual ops",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422279/abz_68_i0ndl4.jpg",
    description: "Solar-powered smart irrigation across 50 acres. Soil moisture sensors trigger pump cycles automatically — no human intervention required.",
    tags: ["Solar", "Soil Sensors", "VFD"],
    size: "small",
  },
  {
    id: 3,
    title: "Food Processing Retrofit",
    category: "Industrial",
    location: "Kaase, Kumasi",
    date: "Oct 2024",
    result: "25% energy drop",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422275/abz_26_lvvz7f.jpg",
    description: "Replaced legacy motor starters with ABZ VFD controllers at a major food processing facility. Surge protection and soft-start logic eliminated pump burnout.",
    tags: ["VFD", "Surge Protection", "Industrial"],
    size: "small",
  },
  {
    id: 4,
    title: "Hospital Water System",
    category: "Commercial",
    location: "Bantama, Kumasi",
    date: "Jan 2025",
    result: "100% uptime",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422275/abz_42_v8oxdy.jpg",
    description: "Mission-critical dual-pump failover system for a 120-bed private hospital. 4G telemetry alerts the facilities team before any supply interruption occurs.",
    tags: ["Failover", "4G Telemetry", "Critical"],
    size: "large",
  },
  {
    id: 5,
    title: "Borehole Automation — Obuasi",
    category: "Industrial",
    location: "Obuasi, Ashanti",
    date: "Feb 2025",
    result: "38% cost saving",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776256939/abz_64_jw9ixn.jpg",
    description: "Deep borehole pump automation with variable speed control, dry-run protection, and ultrasonic level sensing for a mining support facility.",
    tags: ["Borehole", "Ultrasonic", "Remote"],
    size: "small",
  },
  {
    id: 6,
    title: "Residential Smart Pump",
    category: "Residential",
    location: "East Legon, Accra",
    date: "Dec 2024",
    result: "No overflows ever",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422275/abz_35_fxfkg4.jpg",
    description: "Single-family home AutoX installation with app-connected monitoring. Homeowner gets WhatsApp alerts when tank drops below 30%.",
    tags: ["AutoX", "WhatsApp Alerts", "App"],
    size: "small",
  },
  {
    id: 7,
    title: "R/O Plant Automation",
    category: "Commercial",
    location: "Suame, Kumasi",
    date: "Nov 2024",
    result: "Membrane life +2yr",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776425339/erq_ksrxax.jpg",
    description: "Reverse osmosis plant with automated backwash cycles, TDS monitoring, and pressure differential alerts to extend membrane lifespan significantly.",
    tags: ["R/O", "TDS", "Auto-Backwash"],
    size: "large",
  },
  {
    id: 8,
    title: "Multi-Storey Pressure Logic",
    category: "Commercial",
    location: "Airport Residential, Accra",
    date: "Aug 2024",
    result: "Constant flow, all floors",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776424323/mn1_toifu3.jpg",
    description: "VFD booster pump system maintaining steady pressure from basement to penthouse across a 9-storey apartment building, eliminating low-pressure complaints.",
    tags: ["Booster", "VFD", "Multi-Storey"],
    size: "small",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<typeof projects[0] | null>(null);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow pt-24 md:pt-32 pb-16">

        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 mb-14">
          <ScrollReveal variant="fadeUp">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                {/* Ghana flag stripe */}
                <div className="flex gap-1 mb-5">
                  <span className="h-1 w-8 rounded-full bg-[#006B3F]" />
                  <span className="h-1 w-8 rounded-full bg-[#FCD116]" />
                  <span className="h-1 w-8 rounded-full bg-[#CE1126]" />
                </div>
                <Badge className="mb-3 bg-primary/10 text-primary border-none px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
                  Project Portfolio
                </Badge>
                <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4">
                  Built for <span className="text-primary">Ghana</span>
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Every installation engineered for local conditions — Kumasi power grids, borehole depths, Polytank systems, and Ghanaian building standards.
                </p>
              </div>
              <Button asChild className="rounded-2xl h-12 px-8 font-bold shadow-xl shadow-primary/20 shrink-0">
                <Link href="/quote">Start Your Project <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </ScrollReveal>
        </section>

        {/* Filter tabs */}
        <section className="max-w-7xl mx-auto px-6 mb-10">
          <ScrollReveal variant="fadeUp" delay={100}>
            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all duration-300",
                    activeCategory === cat
                      ? "bg-primary text-white shadow-xl shadow-primary/25"
                      : "bg-white dark:bg-card border border-border/60 text-muted-foreground hover:border-primary/40 hover:text-primary"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Masonry grid */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((project, idx) => (
              <ScrollReveal key={project.id} variant="fadeUp" delay={idx * 80} className="break-inside-avoid">
                <div
                  className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white dark:bg-card shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-1"
                  onClick={() => setLightbox(project)}
                >
                  {/* Image */}
                  <div className={cn("relative overflow-hidden", project.size === "large" ? "h-72 md:h-80" : "h-52 md:h-60")}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Category badge */}
                    <Badge className="absolute top-4 left-4 bg-primary text-white border-none text-[9px] font-bold uppercase tracking-widest px-3 py-1">
                      {project.category}
                    </Badge>

                    {/* Result badge */}
                    <div className="absolute top-4 right-4 bg-accent/90 text-accent-foreground text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-xl">
                      {project.result}
                    </div>

                    {/* Bottom info */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-headline font-bold text-lg leading-tight mb-1">{project.title}</h3>
                      <div className="flex items-center gap-3 text-white/70 text-[10px] font-bold uppercase tracking-widest">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{project.location}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{project.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="p-5 flex flex-wrap gap-2">
                    {project.tags.map(t => (
                      <span key={t} className="text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-lg border border-primary/10">
                        {t}
                      </span>
                    ))}
                    <span className="ml-auto text-[10px] font-bold text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                      View Details <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <ScrollReveal variant="fadeUp" className="max-w-7xl mx-auto px-6 mt-24 text-center">
          <div className="bg-[#020817] rounded-[40px] p-10 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-white">
                Ready to Join the <span className="text-primary">Portfolio?</span>
              </h2>
              <p className="text-white/60 text-lg">Let our engineers design a system built precisely for your site conditions.</p>
              <Button asChild size="lg" className="h-16 px-12 rounded-2xl font-bold text-lg shadow-2xl shadow-primary/30">
                <Link href="/quote">Request Site Assessment</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </main>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={() => setLightbox(null)}
        >
          <div
            className="bg-white dark:bg-card rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl grid md:grid-cols-2"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-full min-h-[300px]">
              <Image src={lightbox.image} alt={lightbox.title} fill className="object-cover" />
            </div>
            <div className="p-8 md:p-10 space-y-6 flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Badge className="mb-2 bg-primary/10 text-primary border-none text-[9px] font-bold">{lightbox.category}</Badge>
                  <h3 className="font-headline text-2xl md:text-3xl font-bold">{lightbox.title}</h3>
                </div>
                <button onClick={() => setLightbox(null)} className="w-8 h-8 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-border transition-colors shrink-0">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-primary" />{lightbox.location}</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-primary" />{lightbox.date}</span>
              </div>

              <p className="text-muted-foreground leading-relaxed">{lightbox.description}</p>

              <div className="bg-primary/5 rounded-2xl px-5 py-4 flex items-center gap-3 border border-primary/10">
                <TrendingDown className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Key Result</p>
                  <p className="font-headline font-extrabold text-primary text-lg">{lightbox.result}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {lightbox.tags.map(t => (
                  <span key={t} className="text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-lg border border-primary/10">{t}</span>
                ))}
              </div>

              <Button asChild className="w-full h-12 rounded-2xl font-bold mt-auto">
                <Link href={`/quote?ref=${lightbox.id}`}>Get This Solution</Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
