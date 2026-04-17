
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Zap, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    id: 1,
    title: "Kumasi Residential Grid Optimization",
    excerpt: "Implementation of a centralized AutoX mesh network across a 20-unit luxury apartment complex, reducing total water usage by 42%.",
    date: "Aug 2024",
    result: "42% Water Saved",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422281/abz_76_eu0uyp.jpg",
    category: "Case Study"
  },
  {
    id: 2,
    title: "Agricultural Precision Deployment",
    excerpt: "Integrating soil moisture sensors with solar-powered pump logic for a 50-acre teak plantation in the Ashanti region.",
    date: "Sept 2024",
    result: "Zero Manual Ops",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422279/abz_68_i0ndl4.jpg",
    category: "Agriculture"
  },
  {
    id: 3,
    title: "Industrial VFD Pump Retrofit",
    excerpt: "Replacing traditional motor starters with ABZ Variable Frequency Drives at a major food processing facility to protect against grid surges.",
    date: "Oct 2024",
    result: "25% Energy Drop",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422275/abz_26_lvvz7f.jpg",
    category: "Industrial"
  }
];

export function News() {
  return (
    <section id="news" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-left">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Success Stories</h2>
            <h3 className="font-headline text-4xl md:text-5xl font-bold mb-0">Project <span className="text-accent">Spotlight</span></h3>
          </div>
          <Button variant="outline" className="rounded-[6%] border-primary text-primary hover:bg-primary/5 font-bold h-12">
            View Technical Portfolio
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.id} className="group border-none shadow-lg rounded-[6%] overflow-hidden bg-white transition-all hover:shadow-2xl hover:-translate-y-2">
              <CardHeader className="p-0 relative h-72 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Badge className="absolute top-6 left-6 bg-primary text-white border-none font-bold px-4 py-1.5 rounded-[6%] shadow-sm">
                  {study.category}
                </Badge>
                <div className="absolute bottom-6 left-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-2">
                  <Target className="w-5 h-5 text-accent" />
                  <span className="font-bold text-sm">{study.result}</span>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {study.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-accent fill-accent" />
                    Verified Deployment
                  </div>
                </div>
                <h4 className="text-2xl font-headline font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {study.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {study.excerpt}
                </p>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button variant="link" className="p-0 text-primary font-bold group/btn flex items-center gap-2 hover:no-underline">
                  Technical Details <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
