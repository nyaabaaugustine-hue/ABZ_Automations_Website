"use client";

import React, { useState } from "react";
import { MapPin, Mail, Phone, ExternalLink, Copy, CheckCircle2, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

export function Map() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast({
      title: "Copied!",
      description: `${field} has been copied to your clipboard.`,
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Content */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <Badge className="bg-primary/10 text-primary border-none px-4 py-1 font-bold uppercase tracking-widest text-[10px] mb-6">
                Connect With Us
              </Badge>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our <span className="text-primary">Headquarters</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Visit us at the heart of innovation in Kumasi. We are located within the prestigious KNUST Business Incubator.
              </p>
            </div>

            <div className="grid gap-6">
              {/* Address Card */}
              <div className="group bg-white p-6 rounded-[32px] border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-110">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-lg mb-1">Physical Location</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Kumasi Business Incubator, KNUST, Kumasi, Ghana
                  </p>
                  <div className="inline-flex items-center gap-2 bg-accent/5 px-3 py-1.5 rounded-xl border border-accent/10">
                    <span className="font-mono text-xs font-bold text-accent">AK-039-5028</span>
                    <button 
                      onClick={() => copyToClipboard("AK-039-5028", "GPS Address")}
                      className="text-accent hover:text-accent/70 transition-colors"
                    >
                      {copiedField === "GPS Address" ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group bg-white p-6 rounded-[32px] border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0 transition-transform group-hover:scale-110">
                  <Phone className="w-7 h-7" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-lg mb-1">Call Our Experts</h4>
                  <div className="space-y-1">
                    <button 
                      onClick={() => copyToClipboard("+233241234567", "Primary Phone")}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-2"
                    >
                      +233 (0) 24 123 4567 {copiedField === "Primary Phone" && <CheckCircle2 className="w-3 h-3" />}
                    </button>
                    <button 
                      onClick={() => copyToClipboard("+233509876543", "Secondary Phone")}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-2"
                    >
                      +233 (0) 50 987 6543 {copiedField === "Secondary Phone" && <CheckCircle2 className="w-3 h-3" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="group bg-white p-6 rounded-[32px] border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-110">
                  <Mail className="w-7 h-7" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-lg mb-1">Email Inquiries</h4>
                  <div className="space-y-1">
                    <p className="text-muted-foreground text-sm">hello@abzautomations.com</p>
                    <p className="text-muted-foreground text-sm">support@abzautomations.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-2xl h-14 px-8 font-bold shadow-xl shadow-primary/20">
                Get Directions <Navigation className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-2xl h-14 px-8 font-bold border-primary text-primary hover:bg-primary/5">
                View on Google Maps <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Map Embed */}
          <div className="lg:col-span-7 relative h-[600px] lg:h-[700px] group">
            <div className="absolute inset-0 bg-primary/10 rounded-[48px] -rotate-2 transition-transform group-hover:rotate-0 duration-700"></div>
            <div className="relative h-full w-full bg-white rounded-[48px] overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3323456789!2d-1.5678901234567!3d6.6789012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96e47f56cfdf%3A0xc3b5e5c06977df7f!2sKumasi%20Business%20Incubator!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 brightness-95"
              ></iframe>
              
              {/* Overlay Label */}
              <div className="absolute bottom-8 left-8 p-6 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 max-w-xs animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Live Office Hours</span>
                </div>
                <p className="text-sm font-bold text-foreground">Mon - Fri: 8:00 AM - 5:30 PM</p>
                <p className="text-xs text-muted-foreground mt-1">Visit us for a live demo of AutoX Pro.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
