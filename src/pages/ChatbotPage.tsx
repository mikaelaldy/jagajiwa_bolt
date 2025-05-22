import React, { useState, useEffect, useRef } from 'react';
import AppLayout from '../components/layout/AppLayout';
import ChatMessage from '../components/chatbot/ChatMessage';
import ChatInput from '../components/chatbot/ChatInput';
import { Button } from '../components/ui/Button';
import { Trash2 } from 'lucide-react';
import { initialBotMessage } from '../data/chatbotResponses';
import { generateBotResponse, createUserMessage, createBotMessage } from '../utils/chatbot';
import { saveMessage, getMessages, clearChatHistory } from '../utils/storage';
import { Message } from '../types';

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load existing messages or start a new conversation
    const existingMessages = getMessages();
    
    if (existingMessages.length === 0) {
      // Start with an initial bot message
      const initialMessage = createBotMessage(initialBotMessage);
      saveMessage(initialMessage);
      setMessages([initialMessage]);
    } else {
      setMessages(existingMessages);
    }
  }, []);

  useEffect(() => {
    // Scroll to bottom whenever messages update
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (text: string) => {
    // Create and save user message
    const userMessage = createUserMessage(text);
    saveMessage(userMessage);
    setMessages(prevMessages => [...prevMessages, userMessage]);
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Generate bot response with a delay to simulate thinking
    setTimeout(() => {
      const botResponse = generateBotResponse(text);
      const botMessage = createBotMessage(botResponse);
      saveMessage(botMessage);
      setMessages(prevMessages => [...prevMessages, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleClearChat = () => {
    if (window.confirm('Apakah Anda yakin ingin menghapus semua riwayat chat?')) {
      clearChatHistory();
      const initialMessage = createBotMessage(initialBotMessage);
      saveMessage(initialMessage);
      setMessages([initialMessage]);
    }
  };

  return (
    <AppLayout>
      <div className="container py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">JiwaBot</h1>
            {messages.length > 1 && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleClearChat}
                icon={<Trash2 className="w-4 h-4" />}
              >
                Bersihkan Chat
              </Button>
            )}
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Chat Messages */}
            <div className="h-[500px] overflow-y-auto p-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                    <div className="h-4 w-4 relative">
                      <div className="dot-typing"></div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-100 text-gray-500 rounded-lg rounded-tl-none">
                    JiwaBot sedang mengetik...
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
              JiwaBot adalah AI yang dirancang untuk memberikan dukungan, bukan pengganti konsultasi profesional. 
              Untuk masalah serius, hubungi bantuan darurat di halaman 
              <a href="/emergency" className="text-primary-600 hover:underline"> Bantuan Darurat</a>.
            </p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .dot-typing {
          position: relative;
          left: -9999px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #8b5cf6;
          color: #8b5cf6;
          box-shadow: 9984px 0 0 0 #8b5cf6, 9999px 0 0 0 #8b5cf6, 10014px 0 0 0 #8b5cf6;
          animation: dot-typing 1.5s infinite linear;
        }

        @keyframes dot-typing {
          0% {
            box-shadow: 9984px 0 0 0 #8b5cf6, 9999px 0 0 0 #8b5cf6, 10014px 0 0 0 #8b5cf6;
          }
          16.667% {
            box-shadow: 9984px -6px 0 0 #8b5cf6, 9999px 0 0 0 #8b5cf6, 10014px 0 0 0 #8b5cf6;
          }
          33.333% {
            box-shadow: 9984px 0 0 0 #8b5cf6, 9999px 0 0 0 #8b5cf6, 10014px 0 0 0 #8b5cf6;
          }
          50% {
            box-shadow: 9984px 0 0 0 #8b5cf6, 9999px -6px 0 0 #8b5cf6, 10014px 0 0 0 #8b5cf6;
          }
          66.667% {
            box-shadow: 9984px 0 0 0 #8b5cf6, 9999px 0 0 0 #8b5cf6, 10014px 0 0 0 #8b5cf6;
          }
          83.333% {
            box-shadow: 9984px 0 0 0 #8b5cf6, 9999px 0 0 0 #8b5cf6, 10014px -6px 0 0 #8b5cf6;
          }
          100% {
            box-shadow: 9984px 0 0 0 #8b5cf6, 9999px 0 0 0 #8b5cf6, 10014px 0 0 0 #8b5cf6;
          }
        }
      `}</style>
    </AppLayout>
  );
};

export default ChatbotPage;