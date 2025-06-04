import { gamblingResponses, mentalHealthResponses, fallbackResponses } from '../data/chatbotResponses';
import { Message } from '../types';
import { generateAzureOpenAIResponse, isAzureOpenAIAvailable } from '../services/azureOpenAI';

// Enhanced bot response generation with Azure OpenAI
export const generateBotResponse = async (
  userMessage: string,
  conversationHistory?: Message[]
): Promise<string> => {
  // Try Azure OpenAI first if available
  if (isAzureOpenAIAvailable()) {
    try {
      // Convert message history to OpenAI format
      const openAIHistory = conversationHistory
        ?.slice(-6) // Last 6 messages for context
        ?.map(msg => ({
          role: msg.sender === 'user' ? 'user' as const : 'assistant' as const,
          content: msg.text
        })) || [];

      const response = await generateAzureOpenAIResponse(userMessage, openAIHistory);
      console.log('✅ Used Azure OpenAI for response');
      return response;
    } catch (error) {
      console.warn('⚠️ Azure OpenAI failed, falling back to keyword responses:', error);
      // Fall back to keyword-based responses
    }
  }

  // Fallback to original keyword-based system
  return generateKeywordBasedResponse(userMessage);
};

// Original keyword-based response system (fallback)
export const generateKeywordBasedResponse = (userMessage: string): string => {
  const lowercaseMessage = userMessage.toLowerCase();
  
  // Check for gambling related keywords
  for (const response of gamblingResponses) {
    if (response.keywords.some(keyword => lowercaseMessage.includes(keyword))) {
      return response.response;
    }
  }
  
  // Check for mental health related keywords
  for (const response of mentalHealthResponses) {
    if (response.keywords.some(keyword => lowercaseMessage.includes(keyword))) {
      return response.response;
    }
  }
  
  // If no keywords matched, return a random fallback response
  const randomIndex = Math.floor(Math.random() * fallbackResponses.length);
  return fallbackResponses[randomIndex];
};

export const createUserMessage = (text: string): Message => {
  return {
    id: Date.now().toString(),
    text,
    sender: 'user',
    timestamp: Date.now()
  };
};

export const createBotMessage = (text: string): Message => {
  return {
    id: Date.now().toString(),
    text,
    sender: 'bot',
    timestamp: Date.now()
  };
};