import { gamblingResponses, mentalHealthResponses, fallbackResponses } from '../data/chatbotResponses';
import { Message } from '../types';
import { 
  generateAzureOpenAIResponse, 
  isAzureOpenAIAvailable 
} from '../services/azureOpenAI';

// Get user ID for conversations
const getUserId = (): string => {
  let userId = localStorage.getItem('jagajiwa-user-id');
  if (!userId) {
    userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('jagajiwa-user-id', userId);
  }
  return userId;
};

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
    id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    text,
    sender: 'user',
    timestamp: Date.now()
  };
};

export const createBotMessage = (text: string): Message => {
  return {
    id: `bot_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    text,
    sender: 'bot',
    timestamp: Date.now()
  };
};

// Add streaming support to your chatbot

export const generateBotResponseStreaming = async (
  userMessage: string,
  conversationHistory: Message[],
  onChunk: (chunk: string) => void
): Promise<string> => {
  if (isAzureOpenAIAvailable()) {
    try {
      const openAIHistory = conversationHistory
        ?.slice(-6)
        ?.map(msg => ({
          role: msg.sender === 'user' ? 'user' as const : 'assistant' as const,
          content: msg.text
        })) || [];

      const response = await generateStreamingResponse(userMessage, openAIHistory, onChunk);
      console.log('✅ Used Azure OpenAI streaming for response');
      return response;
    } catch (error) {
      console.warn('⚠️ Azure OpenAI streaming failed, falling back to regular response:', error);
      // Fall back to regular response
      return generateBotResponse(userMessage, conversationHistory);
    }
  }

  // Fallback to keyword-based responses
  const response = generateKeywordBasedResponse(userMessage);
  onChunk(response); // Simulate streaming for consistency
  return response;
};