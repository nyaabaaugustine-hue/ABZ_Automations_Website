"use client";

import React, { useState } from "react";
import { MapPin, Mail, Phone, ExternalLink, Copy, CheckCircle2, Send, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

export function Map() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast({ title: "Copied!", description: `${field} has been copied to your clipboard.` });
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    setSending(true);
    const msg = encodeURIComponent(
      `Hi ABZ Automations! 👋\n\nName: ${form.name}\nPhone: ${form.phone || "N/A"}\n\nMessage:\n${form.message}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/233541988383?text=${msg}`, "_blank");
      setForm({ name: "", phone: "", message: "" });
      setSending(false);
      toast({ title: "Opening WhatsApp!", description: "Your message has been prepared. Complete sending in WhatsApp." });
    }, 600);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">

        {/* ── Top row: info + map ── */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-10">
            <div>
              <Badge className="bg-primary/10 text-primary border-none px-4 py-1 font-bold uppercase tracking-widest text-[10px] mb-4">
                Connect With Us
              </Badge>
              <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                Our <span className="text-primary">Headquarters</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Visit us at the heart of innovation in Kumasi. We are located within the prestigious KNUST Business Incubator.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                { label: "Physical Location", value: "Kumasi Business Incubator, KNUST, Kumasi, Ghana", gps: "AK-315-2929", icon: MapPin, color: "bg-primary/10", text: "text-primary" },
                { label: "Call Our Experts", value: "+233 (0) 54 619 8838", icon: Phone, color: "bg-accent/10", text: "text-accent" },
                { label: "Email Inquiries", value: "info@abzautomations.com", icon: Mail, color: "bg-secondary", text: "text-primary" }
              ].map((item, i) => (
                <div key={i} className="group bg-white p-5 rounded-[24px] border border-border/50 shadow-sm hover:shadow-lg transition-all flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center ${item.text} shrink-0`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-base mb-0.5">{item.label}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-1">{item.value}</p>
                    {item.gps && (
                      <div className="inline-flex items-center gap-2 bg-accent/5 px-2 py-0.5 rounded-lg border border-accent/10">
                        <span className="font-mono text-[10px] font-bold text-accent">{item.gps}</span>
                        <button onClick={() => copyToClipboard(item.gps!, "GPS Address")} className="text-accent hover:text-accent/70">
                          {copiedField === "GPS Address" ? <CheckCircle2 className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="rounded-2xl h-12 px-8 font-bold shadow-xl shadow-primary/20 w-full md:w-auto" asChild>
              <a href="https://maps.google.com/?q=Kumasi+Business+Incubator+KNUST" target="_blank" rel="noopener noreferrer">
                Open In Google Maps <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          <div className="lg:col-span-7 relative h-[450px] lg:h-[600px] group">
            <div className="absolute inset-0 bg-primary/10 rounded-[32px] -rotate-1 transition-transform group-hover:rotate-0 duration-700" />
            <div className="relative h-full w-full bg-white rounded-[32px] overflow-hidden shadow-2xl border-2 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3323456789!2d-1.5678901234567!3d6.6789012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96e47f56cfdf%3A0xc3b5e5c06977df7f!2sKumasi%20Business%20Incubator!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 brightness-95"
              />
              <div className="absolute bottom-6 left-6 p-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 max-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-primary">Live Office Hours</span>
                </div>
                <p className="text-xs font-bold text-foreground">Mon – Fri: 8:00 AM – 5:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Contact form ── */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div className="space-y-6">
            <Badge className="bg-accent/10 text-accent border-none px-4 py-1 font-bold uppercase tracking-widest text-[10px]">
              Send A Message
            </Badge>
            <h3 className="font-headline text-3xl md:text-5xl font-bold leading-tight">
              Get A Free <span className="text-primary">Consultation</span>
            </h3>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Fill out the form and we'll open a WhatsApp conversation with your details pre-loaded. Our engineering team typically responds within 2 hours during business hours.
            </p>
            <div className="flex flex-col gap-3 text-sm font-bold text-muted-foreground">
              {["Free site assessment for all inquiries", "Response within 2 business hours", "No obligation consultation"].map((t, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-3xl shadow-2xl border border-border/50 p-8 md:p-10">
            <form onSubmit={handleSend} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Full Name *
                </Label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="contact-name"
                    placeholder="e.g. Kofi Mensah"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="pl-11 h-12 rounded-xl border-border/60 focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-phone" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Phone / WhatsApp
                </Label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="contact-phone"
                    placeholder="+233 XX XXX XXXX"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="pl-11 h-12 rounded-xl border-border/60 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Message / Project Brief *
                </Label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-3.5 w-4 h-4 text-muted-foreground" />
                  <Textarea
                    id="contact-message"
                    placeholder="Describe your project — tank size, location, pump type, goals..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="pl-11 min-h-[120px] rounded-xl border-border/60 focus:border-primary resize-none"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-14 rounded-xl font-bold text-base gap-3 shadow-xl shadow-primary/20"
                disabled={sending || !form.name.trim() || !form.message.trim()}
              >
                {sending ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Opening WhatsApp…
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send via WhatsApp
                  </>
                )}
              </Button>

              <p className="text-center text-[10px] text-muted-foreground font-medium">
                Opens WhatsApp with your message pre-filled · No spam, ever.
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
