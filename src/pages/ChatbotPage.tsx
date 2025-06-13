import React, { useState, useEffect, useRef } from 'react';
import AppLayout from '../components/layout/AppLayout';
import ChatMessage from '../components/chatbot/ChatMessage';
import ChatInput from '../components/chatbot/ChatInput';
import { Button } from '../components/ui/Button';
import { Trash2, Loader2 } from 'lucide-react';
import { initialBotMessage } from '../data/chatbotResponses';
import { generateBotResponse, createUserMessage, createBotMessage } from '../utils/chatbot';
import { saveMessage, getMessages, clearChatHistory } from '../utils/storage';
import { Message } from '../types';
import '../styles/typing-animation.css';

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isClearing, setIsClearing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadMessages();
  }, []);

  useEffect(() => {
    // Scroll to bottom whenever messages update
    scrollToBottom();
  }, [messages]);

  const loadMessages = async () => {
    try {
      setLoading(true);
      const existingMessages = await getMessages();
      
      if (existingMessages.length === 0) {
        // Start with an initial bot message
        const initialMessage = createBotMessage(initialBotMessage);
        await saveMessage(initialMessage);
        setMessages([initialMessage]);
      } else {
        setMessages(existingMessages);
      }
    } catch (error) {
      console.error('Error loading messages:', error);
      // Fallback to initial message
      const initialMessage = createBotMessage(initialBotMessage);
      setMessages([initialMessage]);
    } finally {
      setLoading(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (text: string) => {
    try {
      // Create and save user message
      const userMessage = createUserMessage(text);
      await saveMessage(userMessage);
      setMessages(prevMessages => [...prevMessages, userMessage]);
      
      // Simulate bot typing
      setIsTyping(true);
      
      // Generate bot response (now async with Azure OpenAI)
      try {
        const currentMessages = [...messages, userMessage];
        const botResponse = await generateBotResponse(text, currentMessages);
        const botMessage = createBotMessage(botResponse);
        await saveMessage(botMessage);
        setMessages(prevMessages => [...prevMessages, botMessage]);
      } catch (error) {
        console.error('Error generating bot response:', error);
        // Fallback response if both Azure OpenAI and keyword system fail
        const fallbackMessage = createBotMessage(
          "Maaf, aku lagi mengalami sedikit gangguan. Bisa coba ulangi pesannya?"
        );
        setMessages(prevMessages => [...prevMessages, fallbackMessage]);
      } finally {
        setIsTyping(false);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Gagal mengirim pesan. Silakan coba lagi.');
      setIsTyping(false);
    }
  };

  const handleClearChat = async () => {
    if (window.confirm('Apakah Anda yakin ingin menghapus semua riwayat chat?')) {
      try {
        setIsClearing(true);
        await clearChatHistory();
        const initialMessage = createBotMessage(initialBotMessage);
        await saveMessage(initialMessage);
        setMessages([initialMessage]);
      } catch (error) {
        console.error('Error clearing chat:', error);
        alert('Gagal menghapus riwayat chat. Silakan coba lagi.');
      } finally {
        setIsClearing(false);
      }
    }
  };

  if (loading) {
    return (
      <AppLayout>
        <div className="container py-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary-500" />
              <span className="ml-2 text-gray-600">Memuat percakapan...</span>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="container py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Rely</h1>
            {messages.length > 1 && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleClearChat}
                icon={isClearing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                disabled={isClearing}
              >
                {isClearing ? 'Menghapus...' : 'Bersihkan Chat'}
              </Button>
            )}
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Chat Messages */}
            <div className="h-[500px] overflow-y-auto p-4">
              {messages.map((message) => (
                <ChatMessage 
                  key={`${message.id}-${message.timestamp}`}
                  message={message} 
                />
              ))}
              
              {isTyping && (
                <div key="typing-indicator" className="flex justify-start mb-4">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                    <div className="h-4 w-4 relative">
                      <div className="dot-typing"></div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-100 text-gray-500 rounded-lg rounded-tl-none">
                    Rely sedang mengetik...
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef}></div>
            </div>
            
            {/* Chat Input */}
            <div className="border-t border-gray-200 p-4">
              <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              Rely adalah AI yang dirancang untuk memberikan dukungan, bukan pengganti konsultasi profesional. 
              Untuk masalah serius, hubungi bantuan darurat di halaman 
              <a href="/emergency" className="text-primary-600 hover:underline"> Bantuan Darurat</a>.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ChatbotPage;