
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Bot, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { aiQuoteAssistant } from "@/ai/flows/ai-quote-assistant";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "assistant";
  text: string;
};

export function FloatingAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Hi! I'm the ABZ Tech Assistant. How can I help you with your water automation project today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    const newMessages: Message[] = [...messages, { role: "user", text: userMessage }];
    
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await aiQuoteAssistant({
        conversationHistory: messages,
        currentMessage: userMessage,
      });

      setMessages(prev => [...prev, { role: "assistant", text: response.responseMessage }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "assistant", text: "I'm having trouble connecting. Please try again or visit our Quote page for full assistance." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn(
      "fixed right-6 md:right-10 z-[100] flex flex-col items-end transition-all duration-500",
      // Positioned higher to clear the new massive WhatsApp button
      "bottom-[220px] md:bottom-[280px]"
    )}>
      {isOpen && (
        <Card className="mb-4 w-[calc(100vw-3rem)] sm:w-[400px] h-[500px] max-h-[calc(100vh-350px)] flex flex-col shadow-2xl border border-white/20 glass animate-in fade-in slide-in-from-bottom-8 duration-500 overflow-hidden rounded-[24px]">
          <CardHeader className="bg-primary text-white p-4 flex flex-row items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white relative overflow-hidden shadow-lg border border-white/20">
                <Image 
                  src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776230467/image_j8ruov.webp"
                  alt="ABZ Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle className="text-sm font-headline tracking-tight">ABZ Tech Hub</CardTitle>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/10" onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="flex-1 p-0 flex flex-col overflow-hidden bg-background/30">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((m, i) => (
                  <div key={i} className={cn("flex gap-2", m.role === "user" ? "flex-row-reverse" : "flex-row")}>
                    <div className={cn("w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px]", m.role === "user" ? "bg-accent" : "bg-primary")}>
                      {m.role === "user" ? "U" : <Bot className="w-3 h-3 text-white" />}
                    </div>
                    <div className={cn("p-3 rounded-2xl text-xs shadow-sm", m.role === "user" ? "bg-primary text-white rounded-tr-none" : "bg-white text-foreground rounded-tl-none border border-border")}>
                      {m.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                      <Bot className="w-3 h-3" />
                    </div>
                    <div className="bg-white p-3 rounded-2xl shadow-sm border border-border">
                      <Loader2 className="w-3 h-3 animate-spin text-primary" />
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-border flex gap-2 shrink-0">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about water automation..."
                className="flex-1 h-10 rounded-xl text-xs"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" className="h-10 w-10 rounded-xl" disabled={isLoading || !input.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative w-16 h-16 md:w-20 md:h-20 transition-all duration-500 flex items-center justify-center group outline-none",
          !isOpen && "animate-bounce hover:animate-none"
        )}
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-transform group-hover:scale-110 ring-2 ring-primary/20 bg-white">
          <Image 
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776259783/aiman_yeztcl.png"
            alt="AI Assistant"
            fill
            className="object-cover"
          />
        </div>
        
        {isOpen && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white animate-in zoom-in duration-300">
            <X className="w-3 h-3" />
          </div>
        )}

        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4 md:h-5 md:w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 md:h-5 md:w-5 bg-accent items-center justify-center text-[9px] md:text-[10px] font-bold text-accent-foreground">!</span>
          </span>
        )}
      </button>
    </div>
  );
}
