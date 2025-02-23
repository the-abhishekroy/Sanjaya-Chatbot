import { OpenAIStream, StreamingTextResponse } from 'ai';
import { Configuration, OpenAIApi } from 'openai-edge';
import { getApiKey } from '@/config/api';

export const runtime = 'edge';

const configuration = new Configuration({
  apiKey: process.env.DHENU_API_KEY,
  basePath: 'https://api.dhenu.ai/v1',
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  const API_KEY = getApiKey();
  
  try {
    const body = await req.json();
    const response = await fetch('https://api.dhenu.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify(body)
    });
    
    const data = await response.json();
    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response('Error processing your request', { status: 500 });
  }
}

