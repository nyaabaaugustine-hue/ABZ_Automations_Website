"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  Zap,
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import { cn } from "@/lib/utils";

const contactMethods = [
  {
    icon: Phone,
    title: "Call or WhatsApp",
    value: "+233 (0) 54 619 8838",
    sub: "Available Mon–Sat, 8am–6pm",
    href: "tel:+233541988383",
    iconBg: "bg-green-500",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@abzautomations.com",
    sub: "We reply within 24 hours",
    href: "mailto:info@abzautomations.com",
    iconBg: "bg-primary",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Chat",
    value: "Quick Message",
    sub: "Fastest way to reach us",
    href: "https://wa.me/233541988383?text=Hi%20ABZ%20Automations%2C%20I%27d%20like%20to%20get%20in%20touch.",
    iconBg: "bg-emerald-500",
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    value: "Kumasi, Ashanti Region",
    sub: "Ghana, West Africa",
    href: "https://maps.google.com/?q=Kumasi,Ghana",
    iconBg: "bg-accent",
  },
];

const faqs = [
  {
    q: "How quickly can you install a system?",
    a: "Most residential installations take 1–2 days. Larger industrial systems are typically completed within a week after site assessment.",
  },
  {
    q: "Do you service areas outside Kumasi?",
    a: "Yes — we serve clients across Ghana including Accra, Tema, Takoradi, and the wider Ashanti Region. Remote monitoring means we can support you anywhere.",
  },
  {
    q: "What warranty do your products carry?",
    a: "All ABZ hardware comes with 18–36 month replacement warranties. Our AutoX Pro Elite carries a full 24-month warranty.",
  },
  {
    q: "Can I monitor my system remotely?",
    a: "Absolutely. Our systems connect via WiFi, 4G, or GSM and send real-time alerts to your phone via WhatsApp or the ABZ app.",
  },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* ── HERO BANNER ── */}
      <section className="relative pt-32 md:pt-44 pb-20 md:pb-28 overflow-hidden bg-[#020817]">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="flex gap-1 justify-center mb-6">
            <span className="h-1 w-8 rounded-full bg-[#006B3F]" />
            <span className="h-1 w-8 rounded-full bg-[#FCD116]" />
            <span className="h-1 w-8 rounded-full bg-[#CE1126]" />
          </div>
          <Badge className="mb-5 bg-white/10 text-white/80 border border-white/20 px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
            Get In Touch
          </Badge>
          <h1 className="font-headline text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Let&apos;s Build Something{" "}
            <span className="text-primary">Remarkable</span>
          </h1>
          <p className="text-white/60 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            Whether you need a quote, technical guidance, or just want to learn
            how ABZ Automations can transform your water systems — we&apos;re here.
          </p>
        </div>
      </section>

      <main className="flex-grow -mt-8 relative z-10">
        {/* ── CONTACT METHOD CARDS ── */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactMethods.map((method, i) => (
              <a
                key={i}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group bg-white dark:bg-card rounded-3xl p-7 shadow-lg hover:shadow-2xl border border-border/40 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 flex flex-col gap-5"
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg",
                    method.iconBg
                  )}
                >
                  <method.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                    {method.title}
                  </p>
                  <p className="font-headline font-bold text-base group-hover:text-primary transition-colors text-foreground">
                    {method.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {method.sub}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-auto" />
              </a>
            ))}
          </div>
        </section>

        {/* ── MAIN CONTENT: FORM + INFO ── */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            {/* LEFT — Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-card rounded-[40px] shadow-2xl shadow-primary/5 border border-border/40 overflow-hidden">
                <div className="bg-[#020817] p-8 md:p-12">
                  <Badge className="mb-4 bg-white/10 text-white/70 border border-white/20 text-[9px] font-bold uppercase tracking-widest">
                    Send a Message
                  </Badge>
                  <h2 className="font-headline text-2xl md:text-3xl font-bold text-white">
                    Tell Us About Your{" "}
                    <span className="text-primary">Project</span>
                  </h2>
                  <p className="text-white/50 text-sm mt-2">
                    We&apos;ll get back to you within 24 hours with a tailored response.
                  </p>
                </div>

                <div className="p-8 md:p-12">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center text-center py-16 gap-6">
                      <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-headline text-2xl font-bold mb-2">
                          Message Sent!
                        </h3>
                        <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                          Thank you, {form.name.split(" ")[0] || "there"}! Our
                          team will review your message and respond within 24
                          hours.
                        </p>
                      </div>
                      <div className="flex gap-4 flex-wrap justify-center">
                        <Button
                          variant="outline"
                          className="rounded-2xl font-bold"
                          onClick={() => {
                            setSubmitted(false);
                            setForm({ name: "", email: "", phone: "", subject: "", message: "" });
                          }}
                        >
                          Send Another
                        </Button>
                        <Button asChild className="rounded-2xl font-bold">
                          <Link href="/quote">Get a Quote</Link>
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                            Full Name <span className="text-primary">*</span>
                          </Label>
                          <Input
                            id="name"
                            required
                            placeholder="e.g. Samuel Asante"
                            value={form.name}
                            onChange={handleChange}
                            className="h-12 rounded-2xl border-border/60 focus:border-primary transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                            WhatsApp / Phone
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+233 ..."
                            value={form.phone}
                            onChange={handleChange}
                            className="h-12 rounded-2xl border-border/60 focus:border-primary transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                          Email Address <span className="text-primary">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={handleChange}
                          className="h-12 rounded-2xl border-border/60 focus:border-primary transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          placeholder="e.g. Pump installation for 5-bedroom house"
                          value={form.subject}
                          onChange={handleChange}
                          className="h-12 rounded-2xl border-border/60 focus:border-primary transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                          Message <span className="text-primary">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          required
                          placeholder="Describe your current setup, challenge, or question..."
                          value={form.message}
                          onChange={handleChange}
                          className="min-h-[140px] rounded-2xl border-border/60 focus:border-primary transition-all p-4 resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full h-14 rounded-2xl font-bold text-base shadow-xl shadow-primary/20 gap-3 transition-all"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin inline-block" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" /> Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT — Info Panel */}
            <div className="lg:col-span-2 space-y-8">
              {/* Office hours */}
              <div className="bg-white dark:bg-card rounded-3xl p-8 shadow-lg border border-border/40 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="font-headline font-bold text-lg">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { day: "Monday – Friday", hours: "8:00am – 6:00pm" },
                    { day: "Saturday", hours: "9:00am – 3:00pm" },
                    { day: "Sunday", hours: "Emergency only" },
                  ].map((row) => (
                    <div key={row.day} className="flex justify-between items-center border-b border-border/40 pb-3 last:border-0 last:pb-0">
                      <span className="text-sm font-bold text-muted-foreground">{row.day}</span>
                      <span className="text-sm font-extrabold text-foreground">{row.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 bg-green-50 dark:bg-green-950/30 rounded-2xl px-4 py-3 border border-green-200/50 dark:border-green-900/50">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold text-green-700 dark:text-green-400">
                    WhatsApp available 24/7 for emergencies
                  </span>
                </div>
              </div>

              {/* Location card */}
              <div className="bg-white dark:bg-card rounded-3xl overflow-hidden shadow-lg border border-border/40">
                <div className="relative h-44 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "linear-gradient(rgba(31,114,173,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(31,114,173,0.4) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                  <a
                    href="https://maps.google.com/?q=Kumasi,Ghana"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center gap-3 group z-10"
                  >
                    <div className="w-14 h-14 rounded-full bg-primary shadow-xl shadow-primary/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary group-hover:underline">
                      Open in Google Maps
                    </span>
                  </a>
                </div>
                <div className="p-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary shrink-0" />
                    <p className="font-bold text-sm">ABZ Automations Ltd.</p>
                  </div>
                  <p className="text-muted-foreground text-sm pl-6">Kumasi, Ashanti Region, Ghana</p>
                </div>
              </div>

              {/* Social links */}
              <div className="bg-[#020817] rounded-3xl p-8 space-y-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2" />
                <div className="relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-3">Follow Along</p>
                  <h3 className="font-headline font-bold text-white text-lg mb-6">Stay Connected</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { icon: Facebook, label: "Facebook", href: "#", color: "hover:bg-[#1877F2]" },
                      { icon: Instagram, label: "Instagram", href: "#", color: "hover:bg-[#E4405F]" },
                      { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:bg-[#0077B5]" },
                      { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/233541988383", color: "hover:bg-[#25D366]" },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        className={cn(
                          "w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-1",
                          s.color
                        )}
                      >
                        <s.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ SECTION ── */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-none px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
              Quick Answers
            </Badge>
            <h2 className="font-headline text-3xl md:text-5xl font-bold">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white dark:bg-card rounded-3xl border border-border/40 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  className="w-full flex items-center justify-between gap-4 p-7 text-left group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-headline font-bold text-base md:text-lg group-hover:text-primary transition-colors">
                    {faq.q}
                  </span>
                  <span className={cn(
                    "w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 transition-transform duration-300",
                    openFaq === i ? "rotate-45" : ""
                  )}>
                    <Zap className="w-4 h-4" />
                  </span>
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-300",
                  openFaq === i ? "max-h-40 pb-7" : "max-h-0"
                )}>
                  <p className="text-muted-foreground text-sm leading-relaxed px-7">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="bg-[#020817] rounded-[40px] p-10 md:p-20 relative overflow-hidden text-center">
            <div className="absolute top-0 left-1/2 w-[600px] h-[300px] bg-primary/15 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-white">
                Ready for a <span className="text-primary">Site Assessment?</span>
              </h2>
              <p className="text-white/60 text-lg">
                Our certified engineers will visit your property and design the perfect automation solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="h-14 px-10 rounded-2xl font-bold text-base shadow-2xl shadow-primary/30">
                  <Link href="/quote">
                    Request a Quote <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-14 px-10 rounded-2xl font-bold text-base border-white/20 text-white hover:bg-white/10 hover:text-white"
                >
                  <a href="https://wa.me/233541988383" target="_blank" rel="noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" /> Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
