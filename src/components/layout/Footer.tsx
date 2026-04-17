'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Twitter, Linkedin, Youtube, MessageCircle, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#', name: 'Facebook', color: 'hover:bg-[#1877F2]' },
  { icon: Twitter, href: '#', name: 'X', color: 'hover:bg-black' },
  { icon: Instagram, href: '#', name: 'Instagram', color: 'hover:bg-[#E4405F]' },
  { icon: Linkedin, href: '#', name: 'LinkedIn', color: 'hover:bg-[#0077B5]' },
  { icon: MessageCircle, href: 'https://wa.me/233541988383?text=Hi%20ABZ%20Automations%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20water%20automation%20solutions.', name: 'WhatsApp', color: 'hover:bg-[#25D366]' },
];

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/#about' },
      { name: 'Our Team', href: '/#team' },
      { name: 'Careers', href: '#' },
      { name: 'News', href: '#' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { name: 'AutoX Controller', href: '/#products' },
      { name: 'Pump Installation', href: '/#services' },
      { name: 'Tank Cleaning', href: '/#services' },
      { name: 'Custom Automation', href: '/#services' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Contact Us', href: '/#contact' },
      { name: 'Help Center', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  },
];

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#020817] text-white pt-24 pb-12 overflow-hidden relative border-t border-white/5">
      {/* Premium background effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/2 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/2 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
          <div className="lg:col-span-5 space-y-12">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-white relative overflow-hidden flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500">
                <Image
                  src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776230467/image_j8ruov.webp"
                  alt="ABZ Automations Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-bold text-3xl tracking-tight leading-none mb-1">
                  ABZ<span className="text-primary">Automations</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Precision Engineering</span>
              </div>
            </Link>
            
            <p className="text-white/60 text-lg leading-relaxed max-w-md font-medium">
              We engineer the future of water management through intelligent automation and sustainable Ghanaian innovation.
            </p>

            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Connect Everywhere</p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-all duration-300 group hover:-translate-y-1 ${social.color} hover:text-white hover:border-transparent`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 opacity-80 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-8">
              {footerLinks.map((column) => (
                <div key={column.title} className="space-y-8">
                  <h4 className="font-headline font-bold text-sm uppercase tracking-[0.3em] text-white/90">{column.title}</h4>
                  <ul className="space-y-4">
                    {column.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-white/50 hover:text-accent transition-all duration-300 text-sm flex items-center group gap-2"
                        >
                          {link.name}
                          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">
            © {year || '2026'} ABZ Automations Limited. Registered in Ghana.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}