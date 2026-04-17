
"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { aiQuoteAssistant } from "@/ai/flows/ai-quote-assistant";

type Message = {
  role: "user" | "assistant";
  text: string;
};

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Hello! I'm your ABZ Water Automation Assistant. I'll help you define your project needs so we can give you a precise quote. What's the main goal you're looking to achieve with water automation?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [finalSummary, setFinalSummary] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || isComplete) return;

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
      
      if (response.isRequestComplete) {
        setIsComplete(true);
        setFinalSummary(response.gatheredDetails);
      }
    } catch (error) {
      console.error("AI Assistant error:", error);
      setMessages(prev => [...prev, { role: "assistant", text: "I'm sorry, I encountered an error. Please try again or contact us directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full min-h-[500px] h-[70vh] lg:h-[600px] flex flex-col shadow-2xl border-none rounded-3xl overflow-hidden bg-white">
      <CardHeader className="bg-primary text-white pb-6 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-lg shadow-black/20">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <CardTitle className="font-headline text-lg md:text-xl">AI Quote Assistant</CardTitle>
            <CardDescription className="text-white/60 text-xs md:text-sm">Crafting your perfect solution together</CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 p-0 flex flex-col overflow-hidden bg-background/50">
        <ScrollArea className="flex-1 p-4 md:p-6">
          <div className="space-y-6">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  m.role === "user" ? "bg-accent text-white" : "bg-primary text-white"
                }`}>
                  {m.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm ${
                  m.role === "user" 
                  ? "bg-accent text-white rounded-tr-none" 
                  : "bg-white text-foreground rounded-tl-none border border-border"
                }`}>
                  <p className="text-sm leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-border">
                  <Loader2 className="w-5 h-5 animate-spin text-primary" />
                </div>
              </div>
            )}
            
            {isComplete && (
              <div className="bg-accent/10 border border-accent/20 p-6 rounded-2xl space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex items-center gap-2 text-accent">
                  <CheckCircle2 className="w-6 h-6" />
                  <h4 className="font-bold">Request Summary Complete!</h4>
                </div>
                <div className="bg-white p-4 rounded-xl text-sm whitespace-pre-line border border-accent/10 shadow-sm italic text-muted-foreground">
                  {finalSummary}
                </div>
                <p className="text-sm font-medium">Your detailed request has been captured. Our team will review this and get back to you within 24 hours.</p>
                <Button className="w-full bg-accent hover:bg-accent/90">Submit Final Quote Request</Button>
              </div>
            )}
            <div ref={scrollRef} />
          </div>
        </ScrollArea>

        {!isComplete && (
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-border flex gap-2 shrink-0">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your response..."
              className="flex-1 rounded-xl h-12"
              disabled={isLoading}
            />
            <Button type="submit" size="icon" className="h-12 w-12 rounded-xl" disabled={isLoading || !input.trim()}>
              <Send className="w-5 h-5" />
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
