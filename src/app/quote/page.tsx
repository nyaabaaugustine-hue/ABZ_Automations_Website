
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
      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h1 className="font-headline text-5xl md:text-6xl font-bold mb-6">Request a <span className="text-primary">Quote</span></h1>
            <p className="text-muted-foreground text-xl">
              Tell us about your project. Our experts will review your details and provide a comprehensive technical estimate within 24 hours.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Standard Form */}
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex items-center gap-4 mb-8 justify-center">
                <div className="w-14 h-14 rounded-[6%] bg-secondary flex items-center justify-center text-primary shadow-sm border border-border/50">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-headline font-bold">Structured Request</h2>
                  <p className="text-muted-foreground">Quick and straightforward</p>
                </div>
              </div>
              
              <Card className="border-none shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] rounded-[6%] overflow-hidden bg-white">
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-2xl font-headline font-bold">Project Details</CardTitle>
                  <CardDescription>We'll use these details to prepare your custom estimate.</CardDescription>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="firstName" className="font-bold flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" /> First Name
                      </Label>
                      <Input id="firstName" placeholder="e.g. Samuel" className="h-12 rounded-[6%] border-border/50 focus:border-primary transition-all" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="lastName" className="font-bold flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" /> Last Name
                      </Label>
                      <Input id="lastName" placeholder="e.g. Amankwah" className="h-12 rounded-[6%] border-border/50 focus:border-primary transition-all" />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="whatsapp" className="font-bold flex items-center gap-2">
                        <Phone className="w-4 h-4 text-accent" /> WhatsApp Number
                      </Label>
                      <Input id="whatsapp" type="tel" placeholder="+233..." className="h-12 rounded-[6%] border-border/50 focus:border-primary transition-all" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="font-bold flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" /> Email Address
                      </Label>
                      <Input id="email" type="email" placeholder="samuel@example.com" className="h-12 rounded-[6%] border-border/50 focus:border-primary transition-all" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="service" className="font-bold flex items-center gap-2">
                      <Info className="w-4 h-4 text-primary" /> Interested Service/Product
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12 rounded-[6%] border-border/50 focus:border-primary transition-all">
                        <SelectValue placeholder="What can we help you with?" />
                      </SelectTrigger>
                      <SelectContent className="rounded-[6%]">
                        <SelectItem value="autox">AutoX Installation</SelectItem>
                        <SelectItem value="pump">Pump Installation & Service</SelectItem>
                        <SelectItem value="tank">Tank Cleaning & Sanitization</SelectItem>
                        <SelectItem value="irrigation">Agricultural Irrigation</SelectItem>
                        <SelectItem value="industrial">Industrial Water Management</SelectItem>
                        <SelectItem value="custom">Other Custom Solution</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="notes" className="font-bold flex items-center gap-2">
                      Project Description
                    </Label>
                    <Textarea 
                      id="notes" 
                      placeholder="Please describe your needs, current setup, or any challenges you're facing..." 
                      className="rounded-[6%] min-h-[160px] border-border/50 focus:border-primary transition-all p-4" 
                    />
                  </div>

                  <Button className="w-full h-14 rounded-[6%] text-lg font-bold shadow-lg shadow-primary/20" size="lg">Submit Quote Request</Button>
                </CardContent>
              </Card>

              <div className="bg-secondary/30 border border-border/50 p-6 rounded-[6%] flex gap-4 items-start">
                 <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <Info className="w-5 h-5 text-primary" />
                 </div>
                 <p className="text-sm text-muted-foreground leading-relaxed">
                   Need technical help? Our engineers are available for site visits across Kumasi and the Ashanti region. For immediate technical questions, use our Tech Assistant at the bottom right.
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
