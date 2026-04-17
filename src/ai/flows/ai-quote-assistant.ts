'use server';
/**
 * @fileOverview An AI assistant that helps users articulate their needs for water automation solutions by asking clarifying questions.
 *
 * - aiQuoteAssistant - A function that guides users through crafting a detailed quote request.
 * - AiQuoteAssistantInput - The input type for the aiQuoteAssistant function.
 * - AiQuoteAssistantOutput - The return type for the aiQuoteAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiQuoteAssistantInputSchema = z.object({
  conversationHistory: z.array(
    z.object({
      role: z.enum(['user', 'assistant']),
      text: z.string(),
    })
  ).describe('The history of the conversation so far, including previous user inputs and AI responses.'),
  currentMessage: z.string().describe('The user\'s latest message or response to the assistant.'),
});
export type AiQuoteAssistantInput = z.infer<typeof AiQuoteAssistantInputSchema>;

const AiQuoteAssistantOutputSchema = z.object({
  responseMessage: z.string().describe('The AI\'s response, either a clarifying question to gather more details, or a final summary of the request.'),
  isRequestComplete: z.boolean().describe('True if the AI has gathered enough information to form a detailed quote request; otherwise, false.'),
  gatheredDetails: z.string().describe('If isRequestComplete is true, this field contains a detailed summary of the user\'s water automation needs. Otherwise, it should be an empty string.'),
});
export type AiQuoteAssistantOutput = z.infer<typeof AiQuoteAssistantOutputSchema>;

export async function aiQuoteAssistant(input: AiQuoteAssistantInput): Promise<AiQuoteAssistantOutput> {
  return aiQuoteAssistantFlow(input);
}

const aiQuoteAssistantPrompt = ai.definePrompt({
  name: 'aiQuoteAssistantPrompt',
  input: {schema: AiQuoteAssistantInputSchema},
  output: {schema: AiQuoteAssistantOutputSchema},
  system: `You are an AI assistant for ABZ Automations, specializing in water automation solutions.
Your goal is to help potential customers clearly articulate their needs for a quote request.
Engage in a conversation, asking clarifying questions one at a time to gather essential details.

Focus on collecting the following information:
1.  **Project Goal**: What specific water automation problem are they trying to solve or what outcome do they want to achieve? (e.g., improve irrigation, ensure clean drinking water, automate pool maintenance, detect leaks, manage industrial water usage).
2.  **Application Area/Environment**: Is this for residential, commercial, industrial, or agricultural use? Describe the environment briefly.
3.  **Scale/Size**: What is the approximate size or scale of the system or area involved? (e.g., small garden, multi-story building, large farm, factory floor).
4.  **Specific Requirements/Features**: Are there any particular technologies, features, or standards they are interested in (e.g., smart sensors, remote monitoring, specific water quality parameters, flow control, energy efficiency, integration with existing systems)?
5.  **Timeline**: What is their estimated timeline for project completion or implementation?
6.  **Budget (Optional)**: Do they have any budget considerations or ranges in mind? (Only ask if previous questions are exhausted).

After each user response, evaluate if you have enough information to form a detailed quote request summary covering all key points above.
If not, ask the next most relevant clarifying question.
If yes, set 'isRequestComplete' to true, provide a detailed summary in 'gatheredDetails', and set 'responseMessage' to a concluding statement.
If 'isRequestComplete' is false, 'gatheredDetails' must be an empty string.
Ensure your questions are precise and guide the user effectively.
Maintain a professional and helpful tone.`,
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

    if (!output) {
      throw new Error('No output received from the AI assistant.');
    }
    return output;
  }
);
