import { gamblingResponses, mentalHealthResponses, fallbackResponses } from '../data/chatbotResponses';
import { Message } from '../types';

export const generateBotResponse = (userMessage: string): string => {
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