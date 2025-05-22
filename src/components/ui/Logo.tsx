import React from 'react';
import { Heart } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <Heart className="w-full h-full text-primary-500" fill="#8b5cf6" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1/4 h-1/4 bg-white rounded-full" />
      </div>
    </div>
  );
};

export default Logo;