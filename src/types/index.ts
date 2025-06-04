export interface Question {
  id: number;
  text: string;
  options: {
    value: number;
    label: string;
  }[];
}

export interface AssessmentResult {
  score: number;
  timestamp: number;
  category: 'gambling' | 'mental-health';
  risk: 'low' | 'moderate' | 'high';
  recommendation: string;
}

export interface MoodEntry {
  mood: 'great' | 'good' | 'neutral' | 'bad' | 'terrible';
  notes: string;
  timestamp: number;
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: number;
}

export interface EmergencyContact {
  name: string;
  description: string;
  phone: string;
  website?: string;
  hours?: string;
  serviceFee?: 'Gratis' | 'Berbayar' | 'Informasi tidak tersedia';
}