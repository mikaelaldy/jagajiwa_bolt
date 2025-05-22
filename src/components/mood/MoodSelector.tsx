import React from 'react';
import { SmilePlus, Smile, Meh, Frown, Frown as FrownPlus } from 'lucide-react';

type Mood = 'great' | 'good' | 'neutral' | 'bad' | 'terrible';

interface MoodSelectorProps {
  selected: Mood | null;
  onChange: (mood: Mood) => void;
}

const MoodSelector: React.FC<MoodSelectorProps> = ({ selected, onChange }) => {
  const moods: { value: Mood; label: string; icon: JSX.Element; color: string }[] = [
    { 
      value: 'great', 
      label: 'Sangat Baik', 
      icon: <SmilePlus />,
      color: 'bg-success-100 text-success-600 border-success-200',
    },
    { 
      value: 'good', 
      label: 'Baik', 
      icon: <Smile />,
      color: 'bg-secondary-100 text-secondary-600 border-secondary-200',
    },
    { 
      value: 'neutral', 
      label: 'Biasa', 
      icon: <Meh />,
      color: 'bg-gray-100 text-gray-600 border-gray-200',
    },
    { 
      value: 'bad', 
      label: 'Buruk', 
      icon: <Frown />,
      color: 'bg-warning-100 text-warning-600 border-warning-200',
    },
    { 
      value: 'terrible', 
      label: 'Sangat Buruk', 
      icon: <FrownPlus />,
      color: 'bg-error-100 text-error-600 border-error-200',
    },
  ];

  return (
    <div className="flex justify-center flex-wrap gap-3">
      {moods.map((mood) => (
        <button
          key={mood.value}
          onClick={() => onChange(mood.value)}
          className={`flex flex-col items-center p-3 rounded-lg border-2 transition-all ${
            selected === mood.value
              ? `${mood.color} border-2`
              : 'bg-white border-gray-200 hover:bg-gray-50'
          }`}
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
            selected === mood.value
              ? mood.color
              : 'bg-gray-100 text-gray-500'
          }`}>
            {mood.icon}
          </div>
          <span className="text-sm font-medium">{mood.label}</span>
        </button>
      ))}
    </div>
  );
};

export default MoodSelector;