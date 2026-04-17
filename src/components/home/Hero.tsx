
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Droplets, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: PlaceHolderImages.find(img => img.id === "hero-water-1")?.imageUrl || "https://picsum.photos/seed/abz-hero1/1200/800",
    title: "Automating Your <span class='text-primary'>Water Future</span> Today",
    description: "Revolutionize how you manage water resources with our intelligent automation solutions. Efficiency, reliability, and precision at your fingertips.",
    badge: "Next-Gen Water Systems"
  },
  {
    image: PlaceHolderImages.find(img => img.id === "hero-water-2")?.imageUrl || "https://picsum.photos/seed/abz-hero2/1200/800",
    title: "Smart <span class='text-accent'>Irrigation</span> for Modern Agriculture",
    description: "Maximize crop yield while minimizing water waste. Our sensor-driven systems adapt to real-time weather and soil data automatically.",
    badge: "Sustainable Farming"
  },
  {
    image: PlaceHolderImages.find(img => img.id === "hero-water-3")?.imageUrl || "https://picsum.photos/seed/abz-hero3/1200/800",
    title: "Industrial Grade <span class='text-primary'>Water Control</span>",
    description: "Reliable, scalable, and powerful solutions for factories and multi-story buildings. Monitor flow and prevent leaks remotely from anywhere.",
    badge: "Enterprise Solutions"
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Background Slides - All containerized to identical dimensions via absolute positioning and object-cover */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={slide.image}
              alt="Hero background"
              fill
              className="object-cover brightness-[0.35] md:brightness-50"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full pt-20">
        <div className="text-white text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
            <Zap className="w-3 h-3 text-accent fill-accent" />
            {slides[currentSlide].badge}
          </div>
          
          <h1 
            className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-in fade-in slide-in-from-left-8 duration-700"
            dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
          />
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed animate-in fade-in slide-in-from-left-12 duration-1000 delay-200">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
            <Button asChild size="lg" className="h-14 px-8 text-lg font-bold group bg-primary hover:bg-primary/90 rounded-xl">
              <Link href="/quote" className="flex items-center gap-2">
                Start Your Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg font-bold bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 rounded-xl">
              <Link href="/products">Explore Shop</Link>
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 opacity-80">
            <div className="flex items-center gap-2 text-sm font-medium">
              <ShieldCheck className="text-accent w-5 h-5" />
              <span>Certified Installations</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <Droplets className="text-primary-foreground w-5 h-5" />
              <span>99% Efficiency Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 right-10 z-20 flex gap-3">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={prevSlide}
          className="rounded-full bg-white/5 border-white/10 text-white hover:bg-white/20 h-12 w-12"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={nextSlide}
          className="rounded-full bg-white/5 border-white/10 text-white hover:bg-white/20 h-12 w-12"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-10 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === currentSlide ? "w-12 bg-primary" : "w-6 bg-white/20"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
