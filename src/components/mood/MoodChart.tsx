import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MoodEntry } from '../../types';

interface MoodChartProps {
  entries: MoodEntry[];
}

const MoodChart: React.FC<MoodChartProps> = ({ entries }) => {
  // Sort entries by timestamp (oldest first)
  const sortedEntries = [...entries].sort((a, b) => a.timestamp - b.timestamp);
  
  // Map mood strings to numeric values
  const moodValues = {
    'terrible': 1,
    'bad': 2,
    'neutral': 3,
    'good': 4,
    'great': 5,
  };
  
  // Transform entries for the chart
  const chartData = sortedEntries.map((entry) => {
    return {
      date: new Date(entry.timestamp).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }),
      value: moodValues[entry.mood],
      mood: entry.mood,
    };
  });
  
  // Custom tooltip to show mood label
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const moodLabels: Record<number, string> = {
        1: 'Sangat Buruk',
        2: 'Buruk',
        3: 'Biasa',
        4: 'Baik',
        5: 'Sangat Baik',
      };
      
      return (
        <div className="bg-white p-2 border border-gray-200 rounded shadow-sm">
          <p className="text-sm font-medium">{label}</p>
          <p className="text-sm text-gray-700">{moodLabels[payload[0].value]}</p>
        </div>
      );
    }
    
    return null;
  };

  // No entries or only one entry
  if (chartData.length <= 1) {
    return (
      <div className="flex flex-col items-center justify-center h-52 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-500 text-sm">Tidak cukup data untuk menampilkan grafik.</p>
        <p className="text-gray-500 text-sm">Catat mood Anda secara rutin untuk melihat pola.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-100">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Pola Mood Anda</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="date" 
            stroke="#9ca3af" 
            fontSize={12} 
            tickLine={false}
          />
          <YAxis 
            stroke="#9ca3af" 
            fontSize={12} 
            tickLine={false}
            domain={[1, 5]}
            ticks={[1, 2, 3, 4, 5]}
            tickFormatter={(value) => {
              const labels: Record<number, string> = {
                1: 'SB',
                2: 'B',
                3: 'N',
                4: 'B',
                5: 'SB',
              };
              return labels[value];
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#8b5cf6" 
            strokeWidth={2}
            activeDot={{ r: 6 }}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>SB = Sangat Buruk</span>
        <span>B = Buruk</span>
        <span>N = Netral</span>
        <span>B = Baik</span>
        <span>SB = Sangat Baik</span>
      </div>
    </div>
  );
};

export default MoodChart;