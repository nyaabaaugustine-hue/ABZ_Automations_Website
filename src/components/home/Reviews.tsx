"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote, CheckCircle2, TrendingDown, Droplets, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    id: 1,
    name: "Kwabena Appiah-Mensah",
    role: "General Manager",
    company: "Ashanti Agro Farms Ltd",
    region: "Ashanti Region",
    companyLogo: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422217/ng_v7gyhr.png",
    avatar: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776230143/1_4_sbjq8z.jpg",
    text: "The AutoX Pro has completely transformed irrigation management across our 50-acre plantation. We documented a 38% drop in monthly water bills and eliminated all manual pump checks. Truly world-class engineering, and it's built right here in Ghana.",
    rating: 5,
    stat: { icon: TrendingDown, label: "Water Bill Reduction", value: "38%" },
    verified: true,
  },
  {
    id: 2,
    name: "Ama Edusei-Boateng",
    role: "Property Developer",
    company: "Legon Heights Estate",
    region: "Greater Accra",
    companyLogo: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422217/tyy_mgv3ds.png",
    avatar: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776230139/1_3_cwsqrr.jpg",
    text: "Professional, clean, and efficient. The tank sanitisation service was thorough and the smart pump controller means our 24-unit estate never has overflows or dry-run incidents. Every new unit we build now has AutoX as standard.",
    rating: 5,
    stat: { icon: Droplets, label: "Overflow Incidents", value: "Zero" },
    verified: true,
  },
  {
    id: 3,
    name: "Isaac Tetteh-Quarshie",
    role: "Operations Director",
    company: "Kumasi Food Processing Co.",
    region: "Kumasi, Ashanti",
    companyLogo: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422216/k7k_wvwvgq.png",
    avatar: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776230139/1_1_mkjpox.jpg",
    text: "We integrated ABZ's VFD controllers across our entire factory floor. The energy savings alone paid back the installation cost within 7 months. Their support team is incredibly knowledgeable and responds within the hour.",
    rating: 5,
    stat: { icon: Zap, label: "ROI Payback Period", value: "7 Mo." },
    verified: true,
  },
  {
    id: 4,
    name: "Yaw Boateng",
    role: "Chief Engineer",
    company: "GoldFields Ghana",
    region: "Western Region",
    companyLogo: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422216/fh_vaeadd.png",
    avatar: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776230139/1_2_jjlnjh.jpg",
    text: "Deploying ABZ's borehole automation at our mining support facility was seamless. The 4G telemetry system lets us monitor water usage remotely from Accra, and the surge protection has survived every power fluctuation in our area.",
    rating: 5,
    stat: { icon: TrendingDown, label: "Energy Saved", value: "42%" },
    verified: true,
  },
];

const partners = [
  { name: "Partner 1", logo: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422217/ng_v7gyhr.png" },
  { name: "Partner 2", logo: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422217/tyyt_lx0pok.jpg" },
  { name: "Partner 3", logo: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422217/tyy_mgv3ds.png" },
  { name: "Partner 4", logo: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422216/fh_vaeadd.png" },
  { name: "Partner 5", logo: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422216/ff_mn8fpt.png" },
  { name: "Partner 6", logo: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422216/k7k_wvwvgq.png" },
  { name: "Partner 7", logo: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422216/ju_ot7atb.png" },
  { name: "Partner 8", logo: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422216/aaa_xidnvf.jpg" },
  { name: "Partner 9", logo: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422216/c22_l8hcmz.png" },
];
const scrollingPartners = [...partners, ...partners, ...partners];

export function Reviews() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <ScrollReveal variant="fadeUp" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-primary/10 text-primary border-none px-5 py-2 font-bold uppercase tracking-[0.3em] text-[10px] rounded-[6%]">
            Client Voices
          </Badge>
          <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Trusted Across <span className="text-primary">Ghana</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
            Real results from real Ghanaian businesses — farms, estates, factories, and beyond.
          </p>
        </ScrollReveal>

        {/* Carousel */}
        <ScrollReveal variant="fadeUp" delay={150}>
          <div className="relative px-4 md:px-12">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {reviews.map((review, idx) => (
                  <CarouselItem key={review.id} className="pl-4 md:basis-1/2 xl:basis-1/3">
                    <Card className="h-full border-none shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] rounded-3xl overflow-hidden bg-white dark:bg-card group hover:-translate-y-2 transition-all duration-700 flex flex-col">
                      <CardContent className="p-8 flex flex-col h-full gap-6">

                        {/* Stars + verified */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                            ))}
                          </div>
                          {review.verified && (
                            <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/15">
                              <CheckCircle2 className="w-2.5 h-2.5" /> Verified
                            </span>
                          )}
                        </div>

                        {/* Quote */}
                        <div className="relative flex-grow">
                          <Quote className="absolute -top-3 -left-2 w-10 h-10 text-primary/6" />
                          <p className="text-foreground/80 text-sm md:text-base leading-relaxed italic relative z-10">
                            "{review.text}"
                          </p>
                        </div>

                        {/* Stat pill */}
                        <div className="flex items-center gap-3 bg-primary/5 dark:bg-primary/10 rounded-2xl px-4 py-3 border border-primary/10">
                          <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                            <review.stat.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">{review.stat.label}</p>
                            <p className="text-lg font-headline font-extrabold text-primary leading-none">{review.stat.value}</p>
                          </div>
                        </div>

                        {/* Author + company */}
                        <div className="pt-5 border-t border-border/50 flex items-center gap-4">
                          {/* Avatar */}
                          <div className="relative w-12 h-12 shrink-0 rounded-2xl overflow-hidden ring-2 ring-primary/15">
                            <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                          </div>
                          {/* Text */}
                          <div className="flex-grow min-w-0">
                            <h4 className="font-bold text-sm text-foreground truncate">{review.name}</h4>
                            <p className="text-[10px] font-bold text-primary truncate">{review.role}</p>
                            <p className="text-[9px] text-muted-foreground font-medium truncate">{review.company} · {review.region}</p>
                          </div>
                          {/* Company logo */}
                          <div className="relative w-10 h-10 shrink-0 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                            <Image src={review.companyLogo} alt={review.company} fill className="object-contain" />
                          </div>
                        </div>

                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="flex justify-center md:block mt-8 md:mt-0">
                <CarouselPrevious className="static md:absolute h-12 w-12 rounded-[6%] border-primary/20 text-primary hover:bg-primary hover:text-white transition-all md:-left-12 shadow-lg" />
                <CarouselNext className="static md:absolute h-12 w-12 rounded-[6%] border-primary/20 text-primary hover:bg-primary hover:text-white transition-all md:-right-12 ml-4 md:ml-0 shadow-lg" />
              </div>
            </Carousel>
          </div>
        </ScrollReveal>

        {/* Partners ticker */}
        <ScrollReveal variant="fadeUp" delay={200} className="mt-24 md:mt-32">
          <div className="flex items-center gap-6 mb-12 overflow-hidden">
            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-border/50" />
            <p className="text-center text-[9px] font-bold uppercase tracking-[0.4em] text-muted-foreground/60 whitespace-nowrap">
              Institutional Partners
            </p>
            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-border/50" />
          </div>
          <div className="relative overflow-hidden w-full">
            <div className="flex animate-ticker-ltr hover:[animation-play-state:paused] items-center gap-16 py-4">
              {scrollingPartners.map((partner, idx) => (
                <div key={`${partner.name}-${idx}`} className="group flex items-center justify-center min-w-[140px]">
                  <div className="relative w-28 h-16 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                    <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
