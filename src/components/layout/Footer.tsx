
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Droplets, Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

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
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-20">
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-lg shadow-white/10 group-hover:scale-105 transition-transform">
                <div className="text-primary">
                   <Droplets className="w-6 h-6" />
                </div>
              </div>
              <span className="font-headline font-bold text-xl tracking-tight">
                ABZ<span className="text-accent">Automations</span>
              </span>
            </Link>
            <p className="text-white/70 text-lg leading-relaxed max-w-sm">
              Pioneering smart water solutions for a sustainable future. Ghanaian innovation, world-class technology.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all border border-white/10"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerLinks.map((column) => (
              <div key={column.title} className="space-y-6">
                <h4 className="font-headline font-bold text-lg">{column.title}</h4>
                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-accent transition-colors text-sm"
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

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-white/40 text-sm">
          <p>© {year || '2025'} ABZ Automations Limited. All rights reserved.</p>
          <p>Designed for excellence in Kumasi, Ghana.</p>
        </div>
      </div>
    </footer>
  );
}
