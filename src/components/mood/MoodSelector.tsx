import React from 'react';
import { SmilePlus, Smile, Meh, Frown } from 'lucide-react';

type Mood = 'great' | 'good' | 'neutral' | 'bad' | 'terrible';

interface MoodSelectorProps {
  selected: Mood | null;
  onChange: (mood: Mood) => void;
}

const MoodSelector: React.FC<MoodSelectorProps> = ({ selected, onChange }) => {
  const moods: {
    value: Mood;
    label: string;
    icon: JSX.Element;
    selectedButtonClasses: string;
    defaultIconContainerClasses: string;
  }[] = [
    {
      value: 'great',
      label: 'Sangat Baik',
      icon: <SmilePlus className="w-6 h-6" />,
      selectedButtonClasses: 'bg-success-100 text-success-700',
      defaultIconContainerClasses: 'bg-gray-100 text-gray-600',
    },
    {
      value: 'good',
      label: 'Baik',
      icon: <Smile className="w-6 h-6" />,
      selectedButtonClasses: 'bg-secondary-100 text-secondary-700',
      defaultIconContainerClasses: 'bg-gray-100 text-gray-600',
    },
    {
      value: 'neutral',
      label: 'Biasa',
      icon: <Meh className="w-6 h-6" />,
      selectedButtonClasses: 'bg-gray-200 text-gray-700',
      defaultIconContainerClasses: 'bg-gray-100 text-gray-600',
    },
    {
      value: 'bad',
      label: 'Buruk',
      icon: <Frown className="w-6 h-6" />,
      selectedButtonClasses: 'bg-warning-100 text-warning-700',
      defaultIconContainerClasses: 'bg-gray-100 text-gray-600',
    },
    {
      value: 'terrible',
      label: 'Sangat Buruk',
      icon: <Frown className="w-6 h-6" />,
      selectedButtonClasses: 'bg-error-100 text-error-700',
      defaultIconContainerClasses: 'bg-gray-100 text-gray-600',
    },
  ];

  return (
    <div className="flex justify-center flex-wrap gap-3">
      {moods.map((mood) => (
        <button
          key={mood.value}
          onClick={() => onChange(mood.value)}
          className={`flex flex-col items-center p-3 rounded-lg border-2 transition-all w-24 h-28 justify-center ${
            selected === mood.value
              ? `${mood.selectedButtonClasses} border-primary-500`
              : 'bg-white border-gray-200 hover:bg-gray-50'
          }`}
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors duration-200 ${
            selected === mood.value
              ? 'bg-primary-500 text-white'
              : mood.defaultIconContainerClasses
          }`}>
            {mood.icon}
          </div>
          <span className="text-sm font-medium text-center">{mood.label}</span>
        </button>
      ))}
    </div>
  );
};

export default MoodSelector;