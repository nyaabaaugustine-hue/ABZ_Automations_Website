
"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

const reviews = [
  {
    id: 1,
    name: "Kwabena Appiah",
    role: "Agricultural Manager, Ashanti Farms",
    text: "The AutoX Pro has completely transformed how we manage irrigation. We've seen a documented 30% reduction in water waste and our crop yield has never been better. Truly world-class engineering from Ghana.",
    rating: 5,
    avatar: "https://picsum.photos/seed/rev1/200/200",
  },
  {
    id: 2,
    name: "Sarah Edusei",
    role: "Homeowner, East Legon",
    text: "Professional, clean, and efficient. The tank cleaning service was thorough, and the smart pump controller means I never have to worry about overflows or dry runs again. It's a game changer for my household.",
    rating: 5,
    avatar: "https://picsum.photos/seed/rev2/200/200",
  },
  {
    id: 3,
    name: "Isaac Tetteh",
    role: "Operations Director, Kumasi Industrial",
    text: "We integrated ABZ's VFD controllers across our facility. The energy savings alone paid for the installation within 6 months. Their technical support team is incredibly responsive and knowledgeable.",
    rating: 5,
    avatar: "https://picsum.photos/seed/rev3/200/200",
  }
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
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-primary/10 text-primary border-none px-5 py-2 font-bold uppercase tracking-[0.3em] text-[10px] rounded-[6%]">
            Social Proof
          </Badge>
          <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
            See how ABZ Automations is making a real difference for farms, homes, and businesses across the country.
          </p>
        </div>

        <div className="relative px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-none shadow-[0_32px_64px_-12px_rgba(0,0,0,0.06)] rounded-[6%] overflow-hidden bg-white group hover:-translate-y-2 transition-all duration-700">
                    <CardContent className="p-8 md:p-10 flex flex-col h-full">
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>

                      <div className="relative mb-8 flex-grow">
                        <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/5 -z-10" />
                        <p className="text-foreground/80 text-base md:text-lg leading-relaxed italic relative z-10">
                          "{review.text}"
                        </p>
                      </div>

                      <div className="mt-auto pt-8 border-t border-border/50 flex items-center gap-4">
                        <div className="relative w-14 h-14 shrink-0">
                          <Image
                            src={review.avatar}
                            alt={review.name}
                            fill
                            className="object-cover rounded-[6%]"
                          />
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-[6%] border-2 border-white flex items-center justify-center text-white shadow-lg">
                            <CheckCircle2 className="w-3 h-3" />
                          </div>
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="font-bold text-lg text-foreground">
                            {review.name}
                          </h4>
                          <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">
                            {review.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center md:block mt-8 md:mt-0">
              <CarouselPrevious className="static md:absolute h-12 w-12 rounded-[6%] border-primary/20 text-primary hover:bg-primary hover:text-white transition-all md:-left-12 shadow-lg shadow-primary/5" />
              <CarouselNext className="static md:absolute h-12 w-12 rounded-[6%] border-primary/20 text-primary hover:bg-primary hover:text-white transition-all md:-right-12 ml-4 md:ml-0 shadow-lg shadow-primary/5" />
            </div>
          </Carousel>
        </div>

        {/* Scrolling Partners */}
        <div className="mt-24 md:mt-32">
          <div className="flex items-center gap-6 mb-12 overflow-hidden whitespace-nowrap">
            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-border/50"></div>
            <p className="text-center text-[9px] font-bold uppercase tracking-[0.4em] text-muted-foreground/60">
              Institutional Partners
            </p>
            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-border/50"></div>
          </div>
          
          <div className="relative overflow-hidden w-full">
             <div className="flex animate-ticker-ltr hover:[animation-play-state:paused] items-center gap-16 py-4">
               {scrollingPartners.map((partner, idx) => (
                 <div 
                  key={`${partner.name}-${idx}`}
                  className="group flex flex-col items-center justify-center min-w-[140px]"
                 >
                   <div className="relative w-28 h-16 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                     <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                     />
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
