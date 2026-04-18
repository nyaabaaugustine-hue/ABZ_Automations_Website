"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, Activity, Zap, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Shop", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Team", href: "/#team" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  // Pages that have a dark hero background — nav can be transparent/white text
  const darkHeroPages = ["/"];
  const isHomePage = darkHeroPages.includes(pathname);

  // On inner pages, always show the solid/scrolled style even before scroll
  const isTransparent = isHomePage && !scrolled && !isOpen;

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Reset scroll state on route change
    setScrolled(false);
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <>
      {/* Tech Status Bar */}
      <div className="fixed top-0 left-0 right-0 z-[70] bg-[#020817] text-white py-2 px-6 overflow-hidden hidden md:block border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 animate-in slide-in-from-left-4 duration-1000">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[9px] font-bold uppercase tracking-widest text-white/50">ABZ Mesh Status: ONLINE</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-3 h-3 text-primary" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-white/50">Cumulative Saved: 5.2M Gal</span>
            </div>
          </div>
          <div className="flex items-center gap-2 opacity-50">
            <Zap className="w-3 h-3 text-accent fill-accent" />
            <span className="text-[9px] font-bold uppercase tracking-widest">v4.0.2 AutoX Pro Firmware Deployed</span>
          </div>
        </div>
      </div>

      <nav
        className={cn(
          "fixed top-0 md:top-[34px] left-0 right-0 z-[60] transition-all duration-500 px-4 md:px-6",
          isTransparent
            ? "bg-transparent py-6"
            : "bg-white/97 backdrop-blur-2xl border-b border-border/50 shadow-sm py-3 dark:bg-background/97"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group" onClick={() => setIsOpen(false)}>
            <div className="w-9 h-9 md:w-11 md:h-11 rounded-2xl bg-white relative overflow-hidden shadow-xl shadow-primary/30 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776230467/image_j8ruov.webp"
                alt="ABZ Automations Logo"
                fill
                priority
                className="object-cover"
              />
            </div>
            <span
              className={cn(
                "font-headline font-bold text-lg md:text-2xl tracking-tight transition-colors duration-300",
                isTransparent ? "text-white" : "text-foreground"
              )}
            >
              ABZ<span className="text-primary">Automations</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => {
              const isActive =
                item.href === pathname ||
                (item.href.startsWith("/") && !item.href.includes("#") && pathname.startsWith(item.href) && item.href !== "/");
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-bold transition-all duration-300 hover:scale-110 relative group",
                    isTransparent
                      ? "text-white/90 hover:text-white"
                      : isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {item.name}
                  {/* Active underline */}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300",
                      isActive && !isTransparent ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}

            {/* Dark mode toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={cn(
                  "w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300",
                  isTransparent
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10"
                )}
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            <Button
              asChild
              className="bg-primary hover:bg-primary/90 font-bold shadow-xl shadow-primary/30 px-8 h-12 rounded-2xl transition-all hover:-translate-y-1 text-sm"
            >
              <Link href="/quote">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "md:hidden p-3 rounded-2xl transition-all duration-300",
              isTransparent ? "text-white bg-white/10" : "text-foreground bg-secondary/80"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 h-screen bg-background z-[55] md:hidden transition-all duration-500 ease-in-out px-8 pt-32",
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-6">
          {navItems.map((item, idx) => {
            const isActive =
              item.href === pathname ||
              (item.href.startsWith("/") && !item.href.includes("#") && pathname.startsWith(item.href) && item.href !== "/");
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-3xl font-headline font-bold flex items-center justify-between group py-4 border-b border-border/50",
                  isActive ? "text-primary" : "text-foreground",
                  isOpen ? "animate-in fade-in slide-in-from-right-10" : ""
                )}
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                {item.name}
                <ChevronRight
                  className={cn(
                    "group-hover:translate-x-3 transition-transform duration-300 w-7 h-7",
                    isActive ? "text-primary" : "text-primary"
                  )}
                />
              </Link>
            );
          })}
          <Button
            asChild
            size="lg"
            className="w-full h-16 text-xl mt-6 rounded-2xl shadow-2xl shadow-primary/20 font-bold"
            onClick={() => setIsOpen(false)}
          >
            <Link href="/quote">Get a Quote</Link>
          </Button>

          {/* Mobile theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center gap-3 text-sm font-bold text-muted-foreground mt-2"
            >
              {theme === "dark" ? (
                <><Sun className="w-5 h-5" /> Switch to Light Mode</>
              ) : (
                <><Moon className="w-5 h-5" /> Switch to Dark Mode</>
              )}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
