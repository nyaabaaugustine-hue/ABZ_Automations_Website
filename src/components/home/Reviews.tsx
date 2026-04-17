
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
import { PlaceHolderImages } from "@/lib/placeholder-images";

const reviews = [
  {
    id: 1,
    name: "Kwabena Appiah",
    role: "Agricultural Manager, Ashanti Farms",
    text: "The AutoX Pro has completely transformed how we manage irrigation. We've seen a documented 30% reduction in water waste and our crop yield has never been better. Truly world-class engineering from Ghana.",
    rating: 5,
    avatar: PlaceHolderImages.find(img => img.id === "reviewer-1")?.imageUrl || "https://picsum.photos/seed/rev1/200/200",
  },
  {
    id: 2,
    name: "Sarah Edusei",
    role: "Homeowner, East Legon",
    text: "Professional, clean, and efficient. The tank cleaning service was thorough, and the smart pump controller means I never have to worry about overflows or dry runs again. It's a game changer for my household.",
    rating: 5,
    avatar: PlaceHolderImages.find(img => img.id === "reviewer-2")?.imageUrl || "https://picsum.photos/seed/rev2/200/200",
  },
  {
    id: 3,
    name: "Isaac Tetteh",
    role: "Operations Director, Kumasi Industrial",
    text: "We integrated ABZ's VFD controllers across our facility. The energy savings alone paid for the installation within 6 months. Their technical support team is incredibly responsive and knowledgeable.",
    rating: 5,
    avatar: PlaceHolderImages.find(img => img.id === "reviewer-3")?.imageUrl || "https://picsum.photos/seed/rev3/200/200",
  }
];

export function Reviews() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-white/50 -skew-y-3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <Badge className="bg-accent/10 text-accent border-none px-4 py-1 font-bold uppercase tracking-widest text-[10px]">
            Social Proof
          </Badge>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Don't just take our word for it. See how ABZ Automations is making a real difference for farms, homes, and businesses across the country.
          </p>
        </div>

        <div className="px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3 p-4">
                  <Card className="h-full border-none shadow-xl rounded-[32px] overflow-hidden bg-white group hover:-translate-y-2 transition-all duration-500">
                    <CardContent className="p-10 flex flex-col h-full">
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>

                      <div className="relative mb-8">
                        <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/10 -z-10" />
                        <p className="text-foreground/80 leading-relaxed italic relative z-10">
                          "{review.text}"
                        </p>
                      </div>

                      <div className="mt-auto pt-8 border-t border-border/50 flex items-center gap-4">
                        <div className="relative w-14 h-14 shrink-0">
                          <Image
                            src={review.avatar}
                            alt={review.name}
                            fill
                            className="object-cover rounded-2xl"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg flex items-center gap-2">
                            {review.name}
                            <CheckCircle2 className="w-4 h-4 text-accent" />
                          </h4>
                          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                            {review.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="h-12 w-12 rounded-2xl border-primary/20 text-primary hover:bg-primary hover:text-white transition-all -left-16" />
              <CarouselNext className="h-12 w-12 rounded-2xl border-primary/20 text-primary hover:bg-primary hover:text-white transition-all -right-16" />
            </div>
          </Carousel>
        </div>

        {/* Trust Logos */}
        <div className="mt-32 pt-20 border-t border-border/50">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-12">
            In Partnership With & Trusted By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all">
            <div className="text-2xl font-black tracking-tighter">KNUST</div>
            <div className="text-2xl font-black tracking-tighter">GWCL</div>
            <div className="text-2xl font-black tracking-tighter">MOFA</div>
            <div className="text-2xl font-black tracking-tighter">GSA</div>
            <div className="text-2xl font-black tracking-tighter">TIDD</div>
          </div>
        </div>
      </div>
    </section>
  );
}
