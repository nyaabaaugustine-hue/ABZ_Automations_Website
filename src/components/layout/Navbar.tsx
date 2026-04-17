"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Droplets, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Shop Products", href: "/products" },
  { name: "Services", href: "/#services" },
  { name: "Team", href: "/#team" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
            <Droplets className="w-6 h-6" />
          </div>
          <span className={cn(
            "font-headline font-bold text-xl tracking-tight transition-colors",
            scrolled ? "text-foreground" : "text-white"
          )}>
            ABZ<span className="text-primary">Automations</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled 
                  ? "text-muted-foreground hover:text-primary" 
                  : "text-white/90 hover:text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90 font-semibold shadow-md shadow-primary/10 px-6 rounded-xl">
            <Link href="/quote">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 transition-colors",
            scrolled || isOpen ? "text-foreground" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-0 h-screen bg-background z-40 md:hidden transition-all duration-500 ease-in-out px-8 pt-32",
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-headline font-bold text-foreground flex items-center justify-between group"
            >
              {item.name}
              <ChevronRight className="text-primary group-hover:translate-x-2 transition-transform" />
            </Link>
          ))}
          <Button asChild size="lg" className="w-full h-16 text-xl mt-8 rounded-2xl" onClick={() => setIsOpen(false)}>
            <Link href="/quote">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
