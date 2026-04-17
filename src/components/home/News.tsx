
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const newsItems = [
  {
    id: 1,
    title: "Revolutionizing Water Access in Kumasi",
    excerpt: "How ABZ Automations is partnering with local communities to provide smarter, sensor-driven water solutions for everyday life.",
    date: "May 15, 2024",
    author: "Samuel Amankwah",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422281/abz_76_eu0uyp.jpg",
    category: "Community"
  },
  {
    id: 2,
    title: "ABZ Automations Wins 2024 Tech Innovation Award",
    excerpt: "Recognized for excellence in sustainable engineering and resource management at the annual Ghana Tech Summit held in Accra.",
    date: "June 02, 2024",
    author: "Operations Team",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422279/abz_68_i0ndl4.jpg",
    category: "Award"
  },
  {
    id: 3,
    title: "5 Tips for Maintaining Your Smart Pump Controller",
    excerpt: "Ensure your water system lasts for decades with these simple maintenance steps for your AutoX Pro unit and sensors.",
    date: "July 12, 2024",
    author: "Akua Owusu",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776422275/abz_26_lvvz7f.jpg",
    category: "Guide"
  }
];

export function News() {
  return (
    <section id="news" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-left">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our News</h2>
            <h3 className="font-headline text-4xl md:text-5xl font-bold mb-0">Insights & <span className="text-accent">Updates</span></h3>
          </div>
          <Button variant="outline" className="rounded-[6%] border-primary text-primary hover:bg-primary/5 font-bold h-12">
            View All Articles
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {newsItems.map((item) => (
            <Card key={item.id} className="group border-none shadow-lg rounded-[6%] overflow-hidden bg-background transition-all hover:shadow-2xl hover:-translate-y-1">
              <CardHeader className="p-0 relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <Badge className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-primary hover:bg-white border-none font-bold px-4 py-1.5 rounded-[6%] shadow-sm">
                  {item.category}
                </Badge>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {item.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-accent" />
                    {item.author}
                  </div>
                </div>
                <h4 className="text-2xl font-headline font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button variant="link" className="p-0 text-primary font-bold group/btn flex items-center gap-2 hover:no-underline">
                  Read Full Story <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
