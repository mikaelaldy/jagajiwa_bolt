import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled = false }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ketik pesan Anda di sini..."
        className="flex-grow rounded-full border border-gray-300 px-4 py-2 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none transition duration-200"
        disabled={disabled}
      />
      <button
        type="submit"
        className={`rounded-full w-10 h-10 flex items-center justify-center transition-colors ${
          message.trim() && !disabled
            ? 'bg-primary-500 text-white hover:bg-primary-600'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
        disabled={!message.trim() || disabled}
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
};

export default ChatInput;