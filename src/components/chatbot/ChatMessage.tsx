import React from 'react';
import { Message } from '../../types';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      {!isUser && (
        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center mr-2">
          <Bot className="h-4 w-4 text-primary-600" />
        </div>
      )}
      <div className={`max-w-[80%] md:max-w-[70%]`}>
        <div
          className={`px-4 py-3 rounded-lg ${
            isUser
              ? 'bg-primary-500 text-white rounded-tr-none'
              : 'bg-gray-100 text-gray-800 rounded-tl-none'
          }`}
        >
          <p>{message.text}</p>
        </div>
        <div
          className={`text-xs text-gray-500 mt-1 ${
            isUser ? 'text-right' : 'text-left'
          }`}
        >
          {new Date(message.timestamp).toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
      {isUser && (
        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center ml-2">
          <User className="h-4 w-4 text-gray-600" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;