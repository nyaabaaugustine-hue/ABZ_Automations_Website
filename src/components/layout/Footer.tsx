
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: Twitter, href: "#", name: "X" },
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Linkedin, href: "#", name: "LinkedIn" },
  { icon: Youtube, href: "#", name: "TikTok" } 
];

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/#about" },
      { name: "Our Team", href: "/#team" },
      { name: "Careers", href: "#" },
      { name: "News", href: "#" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "AutoX Controller", href: "/#products" },
      { name: "Water Pump Installation", href: "/#services" },
      { name: "Tank Cleaning", href: "/#services" },
      { name: "Custom Automation", href: "/#services" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", href: "/#contact" },
      { name: "Help Center", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  },
];

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-primary text-white pt-32 pb-16 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          <div className="lg:col-span-4 space-y-10">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-white relative overflow-hidden flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776230467/image_j8ruov.webp"
                  alt="ABZ Automations Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-headline font-bold text-3xl tracking-tight">
                ABZ<span className="text-accent">Automations</span>
              </span>
            </Link>
            <p className="text-white/70 text-xl leading-relaxed max-w-sm">
              Pioneering smart water solutions for a sustainable future. Ghanaian innovation, world-class technology.
            </p>
            <div className="flex gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 border border-white/10"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-16">
            {footerLinks.map((column) => (
              <div key={column.title} className="space-y-8">
                <h4 className="font-headline font-bold text-xl uppercase tracking-widest">{column.title}</h4>
                <ul className="space-y-5">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-accent transition-colors duration-300 text-base"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-16 flex flex-col md:flex-row items-center justify-between gap-8 text-white/40 text-sm font-medium tracking-widest uppercase">
          <p>© {year || '2025'} ABZ Automations Limited. All rights reserved.</p>
          <p>Designed for excellence in Kumasi, Ghana.</p>
        </div>
      </div>
    </footer>
  );
}
