"use client";

import React from "react";
import { FloatingAI } from "./FloatingAI";
import { WhatsAppButton } from "./WhatsAppButton";

/**
 * GLOBAL FLOATING HUB
 * Fixed to viewport bottom-right. Stacks WhatsApp above the AI assistant.
 * Both buttons are self-contained and sized correctly.
 */
export function FloatingHub() {
  return (
    <div className="fixed bottom-6 right-6 z-[99999] flex flex-col items-end gap-4 pointer-events-none">
      {/* AI Assistant — top of stack */}
      <div className="pointer-events-auto">
        <FloatingAI />
      </div>
      {/* WhatsApp — bottom of stack */}
      <div className="pointer-events-auto">
        <WhatsAppButton />
      </div>
    </div>
  );
}
