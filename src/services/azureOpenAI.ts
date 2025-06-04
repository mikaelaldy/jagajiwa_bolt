import { AzureOpenAI } from 'openai';

// Azure OpenAI Configuration
const azureOpenAIConfig = {
  endpoint: import.meta.env.VITE_AZURE_OPENAI_ENDPOINT,
  apiKey: import.meta.env.VITE_AZURE_OPENAI_API_KEY,
  deploymentName: import.meta.env.VITE_AZURE_OPENAI_DEPLOYMENT_NAME || 'gpt-4o', // Your deployment name
  apiVersion: '2024-08-01-preview' // Latest stable API version
};

// Check if Azure OpenAI is configured
const isAzureOpenAIConfigured = !!(
  azureOpenAIConfig.endpoint && 
  azureOpenAIConfig.apiKey && 
  azureOpenAIConfig.deploymentName
);

if (!isAzureOpenAIConfigured) {
  console.warn('❌ Azure OpenAI not configured, using fallback responses');
  console.warn('Missing:', 
    !azureOpenAIConfig.endpoint ? 'ENDPOINT' : '', 
    !azureOpenAIConfig.apiKey ? 'API_KEY' : '',
    !azureOpenAIConfig.deploymentName ? 'DEPLOYMENT_NAME' : ''
  );
} else {
  console.log('✅ Azure OpenAI configured');
}

// Initialize Azure OpenAI client
const openAI = isAzureOpenAIConfigured ? new AzureOpenAI({
  endpoint: azureOpenAIConfig.endpoint,
  apiKey: azureOpenAIConfig.apiKey,
  apiVersion: azureOpenAIConfig.apiVersion
}) : null;

// System prompt for mental health chatbot
const SYSTEM_PROMPT = `Kamu adalah JiwaBot, seorang teman virtual yang empatik dan pendengar yang baik untuk anak muda Indonesia yang mengalami masalah kesehatan mental dan kecanduan judi online.

KEPRIBADIAN & GAYA KOMUNIKASI:
- Gunakan bahasa Indonesia yang hangat, informal, dan sesuai dengan anak muda (Gen Z)
- Bersikap empati, tidak menghakimi, dan mendukung
- Gunakan sapaan seperti "kamu", "aku", dan hindari bahasa formal berlebihan
- Berikan respon yang personal dan menunjukkan perhatian genuine

FOKUS UTAMA:
1. Kesehatan Mental: Kecemasan, depresi, stres, kesepian
2. Kecanduan Judi Online: Gaming, betting, casino online, dampak finansial dan emosional
3. Dukungan Emosional: Mendengarkan, validasi perasaan, encouragement

GUIDELINES KEAMANAN:
- Jika user menyebutkan pikiran menyakiti diri/bunuh diri, SEGERA arahkan ke bantuan darurat (119)
- Selalu ingatkan bahwa kamu bukan pengganti profesional kesehatan mental
- Hindari memberikan diagnosis medis atau saran obat-obatan
- Dorong user untuk mencari bantuan profesional untuk masalah serius

PENDEKATAN PERCAKAPAN:
- Ajukan pertanyaan terbuka untuk memahami situasi user lebih dalam
- Validasi perasaan user sebelum memberikan saran
- Berikan coping strategies yang praktis dan mudah diterapkan
- Arahkan ke fitur aplikasi yang relevan (assessment, mood tracker, emergency contacts)

CONTOH RESPONS:
User: "Aku stress banget gara-gara kalah judi online terus..."
Bot: "Wah, aku bisa banget ngerti gimana rasanya stress karena hal itu. Pasti berat banget ya ngerasain kekalahan terus-menerus. Mau cerita lebih detail ga tentang apa yang bikin kamu mulai main judi online? Kadang understanding the root cause bisa bantu kita cari solusinya."

Selalu prioritaskan keselamatan user dan berikan dukungan yang hangat namun bertanggung jawab.`;

// Generate chat response using Azure OpenAI
export const generateAzureOpenAIResponse = async (
  userMessage: string,
  conversationHistory: Array<{ role: 'user' | 'assistant'; content: string }> = []
): Promise<string> => {
  if (!openAI) {
    throw new Error('Azure OpenAI not configured');
  }

  try {
    // Prepare conversation history with system prompt
    const messages = [
      { role: 'system' as const, content: SYSTEM_PROMPT },
      ...conversationHistory.slice(-6), // Keep last 6 messages for context (3 exchanges)
      { role: 'user' as const, content: userMessage }
    ];

    const response = await openAI.chat.completions.create({
      model: azureOpenAIConfig.deploymentName,
      messages,
      max_tokens: 300, // Limit response length for chat format
      temperature: 0.7, // Balanced creativity and consistency
      top_p: 0.9,
      frequency_penalty: 0.1,
      presence_penalty: 0.1,
    });

    const botResponse = response.choices[0]?.message?.content;
    
    if (!botResponse) {
      throw new Error('No response generated');
    }

    return botResponse.trim();
  } catch (error) {
    console.error('Azure OpenAI Error:', error);
    throw error;
  }
};

// Check if Azure OpenAI is available
export const isAzureOpenAIAvailable = (): boolean => {
  return isAzureOpenAIConfigured && openAI !== null;
};

// Test Azure OpenAI connection
export const testAzureOpenAIConnection = async (): Promise<boolean> => {
  if (!isAzureOpenAIAvailable()) {
    return false;
  }

  try {
    await generateAzureOpenAIResponse('test');
    return true;
  } catch {
    return false;
  }
};
