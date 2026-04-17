
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Droplets, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Shop", href: "/products" },
  { name: "Services", href: "/#services" },
  { name: "Team", href: "/#team" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
        scrolled 
          ? "bg-white/90 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/30 group-hover:scale-105 transition-transform duration-300">
            <Droplets className="w-6 h-6" />
          </div>
          <span className={cn(
            "font-headline font-bold text-2xl tracking-tight transition-colors duration-300",
            scrolled ? "text-foreground" : "text-white"
          )}>
            ABZ<span className="text-primary">Automations</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-bold transition-all duration-300 hover:scale-105",
                scrolled 
                  ? "text-muted-foreground hover:text-primary" 
                  : "text-white/90 hover:text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="bg-primary hover:bg-primary/90 font-bold shadow-lg shadow-primary/30 px-8 h-12 rounded-2xl transition-all hover:-translate-y-1">
            <Link href="/quote">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-xl transition-colors",
            scrolled || isOpen ? "text-foreground bg-secondary/80 backdrop-blur-md" : "text-white bg-white/20 backdrop-blur-md"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-0 h-screen bg-background z-40 md:hidden transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) px-10 pt-32",
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-8">
          {navItems.map((item, idx) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-4xl font-headline font-bold text-foreground flex items-center justify-between group",
                isOpen ? "animate-in fade-in slide-in-from-right-10 duration-500" : ""
              )}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {item.name}
              <ChevronRight className="text-primary group-hover:translate-x-3 transition-transform duration-300 w-8 h-8" />
            </Link>
          ))}
          <Button asChild size="lg" className="w-full h-16 text-xl mt-8 rounded-[2rem] shadow-2xl shadow-primary/30 font-bold" onClick={() => setIsOpen(false)}>
            <Link href="/quote">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
