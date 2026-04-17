
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
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776257017/vvv_jxssbr.jpg",
    title: "Automating Your <span class='text-primary'>Water Future</span> Today",
    description: "Revolutionize how you manage water resources with our intelligent automation solutions. Efficiency, reliability, and precision at your fingertips.",
    badge: "Next-Gen Water Systems",
    alt: "Smart water management system visualization"
  },
  {
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776230139/1_2_l2sh9g.jpg",
    title: "Smart <span class='text-accent'>Irrigation</span> for Modern Agriculture",
    description: "Maximize crop yield while minimizing water waste. Our sensor-driven systems adapt to real-time weather and soil data automatically.",
    badge: "Sustainable Farming",
    alt: "Advanced irrigation controller in a farm"
  },
  {
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776230139/1_1_trzrxy.jpg",
    title: "Industrial Grade <span class='text-primary'>Water Control</span>",
    description: "Reliable, scalable, and powerful solutions for factories and multi-story buildings. Monitor flow and prevent leaks remotely from anywhere.",
    badge: "Enterprise Solutions",
    alt: "Industrial water purification plant"
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-background">
      {/* Background Slides */}
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
              alt={slide.alt}
              fill
              className={cn(
                "object-cover brightness-[0.4] transition-transform duration-[20000ms] ease-out",
                index === currentSlide ? "scale-110" : "scale-100"
              )}
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-32 md:pt-40">
        <div className="text-white text-center md:text-left max-w-4xl">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-white/10 backdrop-blur-xl text-white text-xs font-bold uppercase tracking-[0.3em] mb-10 border border-white/20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Zap className="w-4 h-4 text-accent fill-accent" />
            {slides[currentSlide].badge}
          </div>
          
          <h1 
            key={`title-${currentSlide}`}
            className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-10 animate-in fade-in slide-in-from-left-12 duration-1000 drop-shadow-2xl"
            dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
          />
          
          <p 
            key={`desc-${currentSlide}`}
            className="text-lg md:text-2xl text-white/80 mb-14 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-left-16 duration-1000 delay-300 font-medium"
          >
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            <Button asChild size="lg" className="h-20 px-14 text-xl font-bold group bg-primary hover:bg-primary/90 rounded-[2.5rem] shadow-2xl shadow-primary/40 transition-all hover:-translate-y-1">
              <Link href="/quote" className="flex items-center gap-4">
                Start Your Quote
                <ArrowRight className="w-7 h-7 group-hover:translate-x-3 transition-transform duration-300" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-20 px-14 text-xl font-bold bg-white/5 backdrop-blur-md text-white border-white/30 hover:bg-white hover:text-primary rounded-[2.5rem] transition-all duration-300 hover:-translate-y-1">
              <Link href="/products">Explore Shop</Link>
            </Button>
          </div>
          
          <div className="mt-20 flex flex-wrap justify-center md:justify-start gap-12 opacity-80">
            <div className="flex items-center gap-4 text-xs font-bold tracking-[0.3em] uppercase">
              <ShieldCheck className="text-accent w-7 h-7" />
              <span>Certified Installations</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold tracking-[0.3em] uppercase">
              <Droplets className="text-primary w-7 h-7" />
              <span>99% Efficiency Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-20 right-12 z-20 hidden md:flex gap-5">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={prevSlide}
          className="rounded-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-primary h-16 w-16 transition-all duration-300 shadow-xl"
        >
          <ChevronLeft className="w-9 h-9" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={nextSlide}
          className="rounded-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-primary h-16 w-16 transition-all duration-300 shadow-xl"
        >
          <ChevronRight className="w-9 h-9" />
        </Button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-20 left-12 z-20 flex gap-5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={cn(
              "h-2 rounded-full transition-all duration-500",
              i === currentSlide ? "w-20 bg-primary shadow-lg shadow-primary/50" : "w-10 bg-white/20 hover:bg-white/40"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
