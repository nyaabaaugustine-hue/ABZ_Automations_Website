
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Droplets, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <section className="relative min-h-[700px] h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Ghana flag stripe — fixed top of section */}
      <div className="absolute top-0 left-0 right-0 z-20 flex h-1">
        <div className="flex-1 bg-[#006B3F]" />
        <div className="flex-1 bg-[#FCD116]" />
        <div className="flex-1 bg-[#CE1126]" />
      </div>

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
                "object-cover brightness-[0.45] transition-transform duration-[20000ms] ease-out",
                index === currentSlide ? "scale-110" : "scale-100"
              )}
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-28 md:pt-36">
        <div className="text-white text-center md:text-left max-w-4xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-[6%] bg-white/10 backdrop-blur-xl text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 md:mb-8 border border-white/20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Zap className="w-3 h-3 md:w-4 md:h-4 text-accent fill-accent" />
            {slides[currentSlide].badge}
          </div>
          
          <h1 
            key={`title-${currentSlide}`}
            className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4 md:mb-6 animate-in fade-in slide-in-from-left-12 duration-1000 drop-shadow-2xl"
            dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
          />
          
          <p 
            key={`desc-${currentSlide}`}
            className="text-base md:text-lg lg:text-xl text-white/80 mb-8 md:mb-10 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-left-16 duration-1000 delay-300 font-medium"
          >
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center md:justify-start animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            <Button asChild className="h-12 px-8 font-bold group bg-primary hover:bg-primary/90 rounded-[6%] shadow-2xl shadow-primary/40 transition-all hover:-translate-y-1">
              <Link href="/quote" className="flex items-center gap-3">
                Start Your Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-12 px-8 font-bold bg-white/5 backdrop-blur-md text-white border-white/30 hover:bg-white hover:text-primary rounded-[6%] transition-all duration-300 hover:-translate-y-1">
              <Link href="/products">Explore Shop</Link>
            </Button>
          </div>
          
          <div className="mt-12 md:mt-16 flex flex-wrap justify-center md:justify-start gap-8 md:gap-10 opacity-80">
              <div className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase">
                <ShieldCheck className="text-accent w-5 h-5 md:w-6 md:h-6" />
                <span>Certified Installations</span>
              </div>
              <div className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase">
                <Droplets className="text-primary w-5 h-5 md:w-6 md:h-6" />
                <span>99% Efficiency</span>
              </div>
              <div className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase">
                <span className="text-lg">🇬🇭</span>
                <span>Proudly Made in Ghana</span>
              </div>
            </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-8 md:bottom-12 right-6 md:right-12 z-20 flex gap-2">
        <button 
          onClick={prevSlide}
          className="rounded-[6%] bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-primary h-10 w-10 flex items-center justify-center transition-all duration-300 shadow-xl"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={nextSlide}
          className="rounded-[6%] bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-primary h-10 w-10 flex items-center justify-center transition-all duration-300 shadow-xl"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12 z-20 flex gap-2 md:gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={cn(
              "h-1.5 md:h-2 transition-all duration-500 rounded-sm",
              i === currentSlide ? "w-10 md:w-16 bg-primary shadow-lg shadow-primary/50" : "w-5 md:w-8 bg-white/20 hover:bg-white/40"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
