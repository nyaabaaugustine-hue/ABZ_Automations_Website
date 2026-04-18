"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  MessageSquare,
  Phone,
  Mail,
  User,
  Info,
  Send,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const serviceLabels: Record<string, string> = {
  autox: "AutoX Installation",
  pump: "Pump Service",
  tank: "Tank Cleaning",
  irrigation: "Smart Irrigation",
  industrial: "Industrial Management",
  custom: "Custom Solution",
};

type FormData = {
  firstName: string;
  lastName: string;
  whatsapp: string;
  email: string;
  service: string;
  notes: string;
};

function QuoteForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || searchParams.get("product") || "";
  const { toast } = useToast();

  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    whatsapp: "",
    email: "",
    service: preselectedService,
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const isValid =
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.email.trim() &&
    form.service;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    // Build WhatsApp message as primary delivery mechanism
    const serviceLabel = serviceLabels[form.service] || form.service;
    const msg = encodeURIComponent(
      `📋 *ABZ Quote Request*\n\n` +
      `👤 *Name:* ${form.firstName} ${form.lastName}\n` +
      `📧 *Email:* ${form.email}\n` +
      `📱 *WhatsApp:* ${form.whatsapp || "N/A"}\n` +
      `🔧 *Service:* ${serviceLabel}\n\n` +
      `📝 *Notes:*\n${form.notes || "No additional notes."}`
    );

    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);

    // Open WhatsApp after short delay so success screen shows first
    setTimeout(() => {
      window.open(`https://wa.me/233541988383?text=${msg}`, "_blank");
    }, 800);

    toast({
      title: "Quote submitted! 🎉",
      description: "Opening WhatsApp to send your details directly to our team.",
    });
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-6">
        <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center">
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </div>
        <div className="space-y-2">
          <h3 className="font-headline text-2xl font-bold">Request Submitted!</h3>
          <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
            Thanks, <strong>{form.firstName}</strong>! WhatsApp is opening with your
            details pre-filled. Our engineers will confirm within <strong>24 hours</strong>.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center mt-2">
          <Button
            variant="outline"
            className="rounded-2xl font-bold"
            onClick={() => {
              setSubmitted(false);
              setForm({ firstName: "", lastName: "", whatsapp: "", email: "", service: "", notes: "" });
            }}
          >
            New Request
          </Button>
          <Button asChild className="rounded-2xl font-bold">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
      {/* Name row */}
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="font-bold flex items-center gap-2 text-xs md:text-sm">
            <User className="w-3.5 h-3.5 text-primary" /> First Name <span className="text-primary">*</span>
          </Label>
          <Input
            id="firstName"
            placeholder="e.g. Samuel"
            value={form.firstName}
            onChange={handleChange}
            required
            className="h-12 rounded-2xl border-border/60 focus:border-primary transition-all text-sm"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="font-bold flex items-center gap-2 text-xs md:text-sm">
            <User className="w-3.5 h-3.5 text-primary" /> Last Name <span className="text-primary">*</span>
          </Label>
          <Input
            id="lastName"
            placeholder="e.g. Amankwah"
            value={form.lastName}
            onChange={handleChange}
            required
            className="h-12 rounded-2xl border-border/60 focus:border-primary transition-all text-sm"
          />
        </div>
      </div>

      {/* Contact row */}
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        <div className="space-y-2">
          <Label htmlFor="whatsapp" className="font-bold flex items-center gap-2 text-xs md:text-sm">
            <Phone className="w-3.5 h-3.5 text-[#25D366]" /> WhatsApp Number
          </Label>
          <Input
            id="whatsapp"
            type="tel"
            placeholder="+233..."
            value={form.whatsapp}
            onChange={handleChange}
            className="h-12 rounded-2xl border-border/60 focus:border-primary transition-all text-sm"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="font-bold flex items-center gap-2 text-xs md:text-sm">
            <Mail className="w-3.5 h-3.5 text-primary" /> Email Address <span className="text-primary">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="samuel@example.com"
            value={form.email}
            onChange={handleChange}
            required
            className="h-12 rounded-2xl border-border/60 focus:border-primary transition-all text-sm"
          />
        </div>
      </div>

      {/* Service */}
      <div className="space-y-2">
        <Label htmlFor="service" className="font-bold flex items-center gap-2 text-xs md:text-sm">
          <Info className="w-3.5 h-3.5 text-primary" /> Service / Product <span className="text-primary">*</span>
        </Label>
        <Select
          value={form.service}
          onValueChange={(val) => setForm((prev) => ({ ...prev, service: val }))}
          required
        >
          <SelectTrigger className="h-12 rounded-2xl border-border/60 focus:border-primary transition-all text-sm">
            <SelectValue placeholder="What can we help with?" />
          </SelectTrigger>
          <SelectContent className="rounded-2xl">
            <SelectItem value="autox">AutoX Installation</SelectItem>
            <SelectItem value="pump">Pump Service</SelectItem>
            <SelectItem value="tank">Tank Cleaning</SelectItem>
            <SelectItem value="irrigation">Smart Irrigation</SelectItem>
            <SelectItem value="industrial">Industrial Management</SelectItem>
            <SelectItem value="custom">Custom Solution</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Notes */}
      <div className="space-y-2">
        <Label htmlFor="notes" className="font-bold text-xs md:text-sm">
          Project Description
        </Label>
        <Textarea
          id="notes"
          placeholder="Describe your current setup, tank size, location, budget range, or goals..."
          value={form.notes}
          onChange={handleChange}
          className="rounded-2xl min-h-[130px] border-border/60 focus:border-primary transition-all p-4 text-sm resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={loading || !isValid}
        className="w-full h-13 md:h-14 rounded-2xl text-base md:text-lg font-bold shadow-lg shadow-primary/20 gap-3"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin inline-block" />
            Submitting…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" /> Submit Quote Request
          </>
        )}
      </Button>
    </form>
  );
}

export default function QuotePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <Navbar />

      <main className="flex-grow pt-24 md:pt-36 pb-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">

          {/* Hero header */}
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary border-none px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
              Free Consultation
            </Badge>
            <h1 className="font-headline text-3xl md:text-6xl font-bold mb-4">
              Request a <span className="text-primary">Quote</span>
            </h1>
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
              Tell us about your project. Our engineers will review your details and
              respond with a comprehensive estimate within <strong>24 hours</strong>.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 max-w-6xl mx-auto items-start">

            {/* Left — Form */}
            <div className="lg:col-span-3">
              <Card className="border-none shadow-2xl shadow-primary/5 rounded-[40px] overflow-hidden bg-white dark:bg-card">
                <CardHeader className="bg-[#020817] p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-white font-headline text-xl md:text-2xl">Project Details</CardTitle>
                      <CardDescription className="text-white/50 text-xs mt-0.5">
                        We&apos;ll use these to prepare your custom estimate
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10">
                  <Suspense fallback={
                    <div className="py-16 flex items-center justify-center">
                      <span className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                    </div>
                  }>
                    <QuoteForm />
                  </Suspense>
                </CardContent>
              </Card>
            </div>

            {/* Right — Trust signals + info */}
            <div className="lg:col-span-2 space-y-6">

              {/* Why choose us */}
              <div className="bg-white dark:bg-card rounded-3xl p-7 shadow-lg border border-border/40 space-y-6">
                <h3 className="font-headline font-bold text-lg">Why Choose ABZ?</h3>
                <div className="space-y-5">
                  {[
                    { icon: Clock, title: "24-Hour Response", desc: "Our engineers respond to every quote within one business day." },
                    { icon: ShieldCheck, title: "KNUST Certified", desc: "All installations meet Ghana's highest engineering standards." },
                    { icon: Zap, title: "Custom Solutions", desc: "No cookie-cutter quotes — every system is designed for your site." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">{item.title}</p>
                        <p className="text-muted-foreground text-xs leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact alternatives */}
              <div className="bg-[#020817] rounded-3xl p-7 space-y-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2" />
                <div className="relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-1">Prefer to talk?</p>
                  <h3 className="font-headline font-bold text-white text-base mb-5">Reach us directly</h3>
                  <div className="space-y-3">
                    <a href="https://wa.me/233541988383" target="_blank" rel="noreferrer"
                      className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                      <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                      <div>
                        <p className="text-white font-bold text-xs">+233 (0) 54 619 8838</p>
                        <p className="text-white/40 text-[10px]">WhatsApp or Call</p>
                      </div>
                      <ArrowRight className="w-3 h-3 text-white/30 group-hover:text-white/70 ml-auto transition-colors" />
                    </a>
                    <a href="mailto:info@abzautomations.com"
                      className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                      <Mail className="w-4 h-4 text-primary shrink-0" />
                      <div>
                        <p className="text-white font-bold text-xs">info@abzautomations.com</p>
                        <p className="text-white/40 text-[10px]">Email our team</p>
                      </div>
                      <ArrowRight className="w-3 h-3 text-white/30 group-hover:text-white/70 ml-auto transition-colors" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Info note */}
              <div className="bg-primary/5 border border-primary/10 p-5 rounded-3xl flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-border/50">
                  <Info className="w-4 h-4 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Our engineers are available for <strong>site visits</strong> across Kumasi and the Ashanti region. For immediate technical questions, use the floating AI assistant or WhatsApp button.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
