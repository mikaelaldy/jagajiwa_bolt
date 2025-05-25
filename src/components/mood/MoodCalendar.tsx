import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { MoodEntry } from '../../types';

interface MoodCalendarProps {
  entries: MoodEntry[];
  onDateChange?: (date: Date) => void; // Optional: For future use, e.g., selecting a date to view details
}

type TileClassNameProps = {
  date: Date;
  view: string;
};

const MoodCalendar: React.FC<MoodCalendarProps> = ({ entries, onDateChange }) => {
  const moodColors: Record<string, string> = {
    great: 'bg-success-500',
    good: 'bg-secondary-500',
    neutral: 'bg-gray-400',
    bad: 'bg-warning-500',
    terrible: 'bg-error-500',
  };

  const tileClassName = ({ date, view }: TileClassNameProps) => {
    if (view === 'month') {
      const entryForDay = entries.find(entry => {
        const entryDate = new Date(entry.timestamp);
        return (
          entryDate.getFullYear() === date.getFullYear() &&
          entryDate.getMonth() === date.getMonth() &&
          entryDate.getDate() === date.getDate()
        );
      });

      if (entryForDay) {
        return `${moodColors[entryForDay.mood]} text-white rounded-full`;
      }
    }
    return null;
  };

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Kalender Mood</h3>
      <Calendar
        onChange={onDateChange}
        tileClassName={tileClassName}
        className="w-full border-none"
      />
      <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">
        {Object.entries(moodColors).map(([mood, color]) => (
          <div key={mood} className="flex items-center">
            <span className={`w-3 h-3 rounded-full ${color} mr-1`}></span>
            <span>{mood.charAt(0).toUpperCase() + mood.slice(1)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodCalendar; 