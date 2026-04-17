
"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MessageSquare, Phone, Mail, User, Info } from "lucide-react";

export default function QuotePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4">Request a <span className="text-primary">Quote</span></h1>
            <p className="text-muted-foreground text-base md:text-xl">
              Tell us about your project. Our experts will review your details and provide a comprehensive estimate within 24 hours.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Standard Form */}
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex items-center gap-4 mb-6 justify-center">
                <div className="w-12 h-12 rounded-[6%] bg-secondary flex items-center justify-center text-primary shadow-sm border border-border/50">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-headline font-bold">Structured Request</h2>
                  <p className="text-xs md:text-sm text-muted-foreground">Quick and straightforward</p>
                </div>
              </div>
              
              <Card className="border-none shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] rounded-[6%] overflow-hidden bg-white">
                <CardHeader className="p-6 md:p-8 pb-2">
                  <CardTitle className="text-xl md:text-2xl font-headline font-bold">Project Details</CardTitle>
                  <CardDescription className="text-xs md:text-sm">We'll use these details to prepare your custom estimate.</CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8 space-y-6 md:space-y-8">
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="font-bold flex items-center gap-2 text-xs md:text-sm">
                        <User className="w-3.5 h-3.5 text-primary" /> First Name
                      </Label>
                      <Input id="firstName" placeholder="e.g. Samuel" className="h-11 rounded-[6%] border-border/50 focus:border-primary transition-all text-sm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="font-bold flex items-center gap-2 text-xs md:text-sm">
                        <User className="w-3.5 h-3.5 text-primary" /> Last Name
                      </Label>
                      <Input id="lastName" placeholder="e.g. Amankwah" className="h-11 rounded-[6%] border-border/50 focus:border-primary transition-all text-sm" />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp" className="font-bold flex items-center gap-2 text-xs md:text-sm">
                        <Phone className="w-3.5 h-3.5 text-accent" /> WhatsApp
                      </Label>
                      <Input id="whatsapp" type="tel" placeholder="+233..." className="h-11 rounded-[6%] border-border/50 focus:border-primary transition-all text-sm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-bold flex items-center gap-2 text-xs md:text-sm">
                        <Mail className="w-3.5 h-3.5 text-primary" /> Email Address
                      </Label>
                      <Input id="email" type="email" placeholder="samuel@example.com" className="h-11 rounded-[6%] border-border/50 focus:border-primary transition-all text-sm" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="font-bold flex items-center gap-2 text-xs md:text-sm">
                      <Info className="w-3.5 h-3.5 text-primary" /> Service/Product
                    </Label>
                    <Select>
                      <SelectTrigger className="h-11 rounded-[6%] border-border/50 focus:border-primary transition-all text-sm">
                        <SelectValue placeholder="What can we help with?" />
                      </SelectTrigger>
                      <SelectContent className="rounded-[6%]">
                        <SelectItem value="autox">AutoX Installation</SelectItem>
                        <SelectItem value="pump">Pump Service</SelectItem>
                        <SelectItem value="tank">Tank Cleaning</SelectItem>
                        <SelectItem value="irrigation">Smart Irrigation</SelectItem>
                        <SelectItem value="industrial">Industrial Management</SelectItem>
                        <SelectItem value="custom">Custom Solution</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes" className="font-bold text-xs md:text-sm">
                      Project Description
                    </Label>
                    <Textarea 
                      id="notes" 
                      placeholder="Describe your current setup or needs..." 
                      className="rounded-[6%] min-h-[140px] border-border/50 focus:border-primary transition-all p-4 text-sm" 
                    />
                  </div>

                  <Button className="w-full h-12 md:h-14 rounded-[6%] text-base md:text-lg font-bold shadow-lg shadow-primary/20">Submit Request</Button>
                </CardContent>
              </Card>

              <div className="bg-secondary/30 border border-border/50 p-5 rounded-[6%] flex gap-4 items-start">
                 <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <Info className="w-4 h-4 text-primary" />
                 </div>
                 <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                   Our engineers are available for site visits across Kumasi and the Ashanti region. For immediate technical questions, use the floating assistant.
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
