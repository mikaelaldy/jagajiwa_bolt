import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('🔍 API Route called');
    console.log('Environment check:');
    console.log('- AZURE_OPENAI_ENDPOINT:', !!process.env.AZURE_OPENAI_ENDPOINT);
    console.log('- AZURE_OPENAI_API_KEY:', !!process.env.AZURE_OPENAI_API_KEY);
    console.log('- AZURE_OPENAI_DEPLOYMENT_NAME:', process.env.AZURE_OPENAI_DEPLOYMENT_NAME);

    const { message, history = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Check if environment variables are set
    if (!process.env.AZURE_OPENAI_ENDPOINT || !process.env.AZURE_OPENAI_API_KEY) {
      console.error('❌ Missing environment variables');
      return res.status(500).json({ 
        error: 'Server configuration error: Missing Azure OpenAI credentials' 
      });
    }

    // Import OpenAI inside the function to avoid module issues
    const { AzureOpenAI } = await import('openai');

    console.log('✅ OpenAI library imported');

    // Initialize Azure OpenAI client
    const openAI = new AzureOpenAI({
      endpoint: process.env.AZURE_OPENAI_ENDPOINT,
      apiKey: process.env.AZURE_OPENAI_API_KEY,
      apiVersion: '2024-08-01-preview'
    });

    console.log('✅ Azure OpenAI client initialized');

    const SYSTEM_PROMPT = `Anda adalah JiwaBot, asisten virtual AI yang sangat ramah, penuh empati, dan selalu suportif dari aplikasi JagaJiwa. Nama Anda adalah JiwaBot.

Misi utama Anda adalah memberikan dukungan emosional dan mendengarkan dengan penuh perhatian terhadap anak muda Indonesia yang menghadapi masalah kesehatan mental atau dampak dari judi online.

Gaya Komunikasi:
- Gunakan bahasa Indonesia yang hangat, informal, dan mudah dipahami
- Bersikap empati dan tidak menghakimi
- Berikan respons singkat dan jelas (1-3 kalimat)
- Jika ada situasi krisis, arahkan ke bantuan darurat (119)

Anda BUKAN profesional medis dan tidak boleh memberikan diagnosis atau nasihat medis.`;

    // Prepare messages
    const messages = [
      { role: 'system' as const, content: SYSTEM_PROMPT },
      ...history.slice(-6), // Last 6 messages for context
      { role: 'user' as const, content: message }
    ];

    console.log('🔄 Calling Azure OpenAI...');

    // Call Azure OpenAI
    const completion = await openAI.chat.completions.create({
      model: process.env.AZURE_OPENAI_DEPLOYMENT_NAME || 'gpt-4.1-mini',
      messages,
      max_tokens: 300,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content;

    if (!response) {
      throw new Error('No response generated from Azure OpenAI');
    }

    console.log('✅ Azure OpenAI response generated');
    return res.status(200).json({ response: response.trim() });

  } catch (error: any) {
    console.error('❌ Detailed error:', error);
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error status:', error.status);
    console.error('Error code:', error.code);
    
    // Return detailed error for debugging
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error.message,
      type: error.name
    });
  }
} 