// Clean implementation using Vercel API routes
const API_BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000';

export const generateAzureOpenAIResponse = async (
  userMessage: string,
  conversationHistory: Array<{ role: 'user' | 'assistant'; content: string }> = []
): Promise<string> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userMessage,
        history: conversationHistory.slice(-6)
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('✅ Used Azure OpenAI via Vercel API');
    return data.response;

  } catch (error) {
    console.error('❌ Vercel API Error:', error);
    throw error;
  }
};

export const isAzureOpenAIAvailable = (): boolean => {
  return true;
};

export const testAzureOpenAIConnection = async (): Promise<boolean> => {
  try {
    await generateAzureOpenAIResponse('test');
    return true;
  } catch {
    return false;
  }
};
