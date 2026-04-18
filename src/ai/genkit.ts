import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

// Only initialise Genkit when the Google API key is present.
// This prevents build failures on Vercel when the key is not configured.
export const ai = process.env.GOOGLE_GENAI_API_KEY
  ? genkit({
      plugins: [googleAI()],
      model: 'googleai/gemini-2.5-flash',
    })
  : null;
