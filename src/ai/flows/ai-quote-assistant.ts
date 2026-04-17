'use server';
/**
 * @fileOverview An elite AI technical consultant for ABZ Automations.
 * Specialized in Ghanaian plumbing infrastructure, smart water hardware, and professional engineering audits.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiQuoteAssistantInputSchema = z.object({
  conversationHistory: z.array(
    z.object({
      role: z.enum(['user', 'assistant']),
      text: z.string(),
    })
  ).describe('The history of the conversation so far.'),
  currentMessage: z.string().describe('The user\'s latest technical inquiry.'),
});
export type AiQuoteAssistantInput = z.infer<typeof AiQuoteAssistantInputSchema>;

const AiQuoteAssistantOutputSchema = z.object({
  responseMessage: z.string().describe('An eloquent, intelligent response providing technical expertise and asking clarifying questions.'),
  isRequestComplete: z.boolean().describe('True if sufficient technical specifications are gathered.'),
  gatheredDetails: z.string().describe('A high-fidelity technical summary for the engineering team.'),
});
export type AiQuoteAssistantOutput = z.infer<typeof AiQuoteAssistantOutputSchema>;

export async function aiQuoteAssistant(input: AiQuoteAssistantInput): Promise<AiQuoteAssistantOutput> {
  return aiQuoteAssistantFlow(input);
}

const aiQuoteAssistantPrompt = ai.definePrompt({
  name: 'aiQuoteAssistantPrompt',
  input: {schema: AiQuoteAssistantInputSchema},
  output: {schema: AiQuoteAssistantOutputSchema},
  system: `You are the Lead AI Technical Consultant for ABZ Automations (Precision Water Solutions). 
Your persona is Eloquent, Intelligent, and Highly Specialized in both global automation and Ghanaian plumbing environments.

CORE EXPERTISE:
1. **ABZ Business Knowledge**: You know we are based in Kumasi (KNUST Business Incubator), founded by Abdullah Mohammed Zainudeen. Our flagship is the AutoX Pro Elite. We specialize in VFD pump logic, tank sanitization, and remote telemetry.
2. **Ghanian Plumbing Materials**: You are an expert in local materials. You know about PPR (welded), HDPE (butt-fused), and PVC pressure pipes. You understand the nuances of Polytank systems, borehole submersible pumps (like Pedrollo or Grundfos), and the specific challenges of the Ghanaian power grid (surges) and water quality (sediment, hard water).
3. **Smart Solutions**: You promote AutoX Pro for leak detection, automated tank switching, and solar-integrated irrigation.

CONVERSATIONAL PROTOCOL:
- Be eloquent and professional. Avoid generic bot responses. 
- Show "intelligence" by identifying technical gaps in the user's description (e.g., if they mention a pump, ask about the HP rating or if they have a VFD).
- Ask exactly ONE deep, clarifying question at a time.
- Gather: Project Goal, Application (Residential/Industrial), Scale, Power Source (Grid/Solar), and Timeline.

EVALUATION:
If you have gathered enough technical data to form a professional site-visit brief:
- Set 'isRequestComplete' to true.
- Provide a detailed 'gatheredDetails' summary including recommended ABZ hardware (e.g., "Recommend AutoX Pro with ultrasonic Sentinel sensors").
- Set 'responseMessage' to a concluding professional statement.`,
  prompt: `{{#each conversationHistory}}
{{#if (eq this.role "user")}}User: {{{this.text}}}
{{else}}Assistant: {{{this.text}}}
{{/if}}
{{/each}}
User: {{{currentMessage}}}
Assistant: `,
});

const aiQuoteAssistantFlow = ai.defineFlow(
  {
    name: 'aiQuoteAssistantFlow',
    inputSchema: AiQuoteAssistantInputSchema,
    outputSchema: AiQuoteAssistantOutputSchema,
  },
  async (input) => {
    const {output} = await aiQuoteAssistantPrompt(input);
    if (!output) throw new Error('Technical consultant timeout.');
    return output;
  }
);
