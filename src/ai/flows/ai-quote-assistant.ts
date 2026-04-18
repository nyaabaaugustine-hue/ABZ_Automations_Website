'use server';
/**
 * @fileOverview An elite AI technical consultant for ABZ Automations.
 * Powered by xAI Grok via direct REST API — no additional packages required.
 */

import { z } from 'genkit';

// ── Schemas (kept identical so callers don't change) ─────────────────────────

const AiQuoteAssistantInputSchema = z.object({
  conversationHistory: z.array(
    z.object({
      role: z.enum(['user', 'assistant']),
      text: z.string(),
    })
  ).describe('The history of the conversation so far.'),
  currentMessage: z.string().describe("The user's latest technical inquiry."),
});
export type AiQuoteAssistantInput = z.infer<typeof AiQuoteAssistantInputSchema>;

const AiQuoteAssistantOutputSchema = z.object({
  responseMessage: z.string(),
  isRequestComplete: z.boolean(),
  gatheredDetails: z.string(),
});
export type AiQuoteAssistantOutput = z.infer<typeof AiQuoteAssistantOutputSchema>;

// ── System prompt (unchanged from original) ──────────────────────────────────

const SYSTEM_PROMPT = `You are the Lead AI Technical Consultant for ABZ Automations (Precision Water Solutions).
Your persona is Eloquent, Intelligent, and Highly Specialized in both global automation and Ghanaian plumbing environments.

CORE EXPERTISE:
1. **ABZ Business Knowledge**: You know we are based in Kumasi (KNUST Business Incubator), founded by Abdullah Mohammed Zainudeen. Our flagship is the AutoX Pro Elite. We specialize in VFD pump logic, tank sanitization, and remote telemetry.
2. **Ghanian Plumbing Materials**: You are an expert in local materials. You know about PPR (welded), HDPE (butt-fused), and PVC pressure pipes. You understand the nuances of Polytank systems, borehole submersible pumps (like Pedrollo or Grundfos), and the specific challenges of the Ghanaian power grid (surges) and water quality (sediment, hard water).
3. **Smart Solutions**: You promote AutoX Pro for leak detection, automated tank switching, and solar-integrated irrigation.

CONVERSATIONAL PROTOCOL:
- Be eloquent and professional. Avoid generic bot responses.
- Show "intelligence" by identifying technical gaps in the user's description.
- Ask exactly ONE deep, clarifying question at a time.
- Gather: Project Goal, Application (Residential/Industrial), Scale, Power Source (Grid/Solar), and Timeline.

EVALUATION:
If you have gathered enough technical data to form a professional site-visit brief:
- Set isRequestComplete to true.
- Provide a detailed gatheredDetails summary including recommended ABZ hardware.
- Set responseMessage to a concluding professional statement.

IMPORTANT — RESPONSE FORMAT:
You MUST respond with ONLY a raw JSON object. No markdown, no backticks, no preamble.
The JSON must have exactly these three keys:
{
  "responseMessage": "string — your reply to the user",
  "isRequestComplete": false,
  "gatheredDetails": "string — running summary of technical specs gathered so far (empty string if none yet)"
}`;

// ── xAI Grok direct call ──────────────────────────────────────────────────────

async function callGrok(messages: { role: string; content: string }[]): Promise<AiQuoteAssistantOutput> {
  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) {
    throw new Error('XAI_API_KEY environment variable is not set.');
  }

  const response = await fetch('https://api.x.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'grok-3',
      messages,
      temperature: 0.7,
      max_tokens: 1024,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`xAI API error ${response.status}: ${err}`);
  }

  const data = await response.json();
  const raw: string = data.choices?.[0]?.message?.content ?? '';

  // Strip any accidental markdown fences before parsing
  const clean = raw.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();

  let parsed: AiQuoteAssistantOutput;
  try {
    parsed = JSON.parse(clean);
  } catch {
    // Graceful fallback — surface the raw text as the response
    parsed = {
      responseMessage: raw || 'I encountered an issue processing your request. Please try again.',
      isRequestComplete: false,
      gatheredDetails: '',
    };
  }

  return AiQuoteAssistantOutputSchema.parse(parsed);
}

// ── Public function (same signature as before) ───────────────────────────────

export async function aiQuoteAssistant(input: AiQuoteAssistantInput): Promise<AiQuoteAssistantOutput> {
  // Gracefully handle missing API key — don't crash the build or page
  if (!process.env.XAI_API_KEY) {
    return {
      responseMessage: 'Our AI assistant is currently offline. Please contact us directly via WhatsApp or the quote form below.',
      isRequestComplete: false,
      gatheredDetails: '',
    };
  }

  try {
    const messages: { role: string; content: string }[] = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...input.conversationHistory.map((m) => ({
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: m.text,
      })),
      { role: 'user', content: input.currentMessage },
    ];
    return await callGrok(messages);
  } catch {
    return {
      responseMessage: 'I\'m having trouble connecting right now. Please reach us directly on WhatsApp at +233 054 198 8383.',
      isRequestComplete: false,
      gatheredDetails: '',
    };
  }
}
