
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AIAssistant } from "@/components/quote/AIAssistant";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, MessageSquare } from "lucide-react";

export default function QuotePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-6">Get Your <span className="text-primary">Free Quote</span></h1>
            <p className="text-muted-foreground text-lg">
              Whether you need a full industrial setup or a residential upgrade, we're here to help. Choose the way you want to start.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Standard Form */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-headline font-bold">Standard Request</h2>
              </div>
              
              <Card className="border-none shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>We'll use this to send your personalized quote.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="rounded-xl" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="rounded-xl" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Interested Service</Label>
                    <Select>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="autox">AutoX Installation</SelectItem>
                        <SelectItem value="pump">Pump Installation</SelectItem>
                        <SelectItem value="tank">Tank Cleaning</SelectItem>
                        <SelectItem value="irrigation">Irrigation Systems</SelectItem>
                        <SelectItem value="custom">Custom Solution</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea id="notes" placeholder="Tell us more about your project..." className="rounded-xl min-h-[120px]" />
                  </div>

                  <Button className="w-full h-12 rounded-xl text-lg font-bold" size="lg">Send Request</Button>
                </CardContent>
              </Card>
            </div>

            {/* AI Assistant */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-headline font-bold">AI Assistant <span className="text-sm font-normal text-muted-foreground ml-2">(Recommended)</span></h2>
              </div>
              
              <AIAssistant />
              
              <p className="text-center text-sm text-muted-foreground px-8 italic">
                Our AI assistant helps clarify technical details, ensuring your quote is as accurate as possible from the start.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
