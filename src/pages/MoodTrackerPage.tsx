import React, { useState, useEffect } from 'react';
import AppLayout from '../components/layout/AppLayout';
import { Card, CardBody, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { TextArea } from '../components/ui/Input';
import MoodSelector from '../components/mood/MoodSelector';
import MoodChart from '../components/mood/MoodChart';
import { MoodEntry } from '../types';
import { saveMoodEntry, getMoodEntries } from '../utils/storage';

const MoodTrackerPage: React.FC = () => {
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);
  const [selectedMood, setSelectedMood] = useState<'great' | 'good' | 'neutral' | 'bad' | 'terrible' | null>(null);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const entries = getMoodEntries();
    setMoodEntries(entries);
  }, []);

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
  };

  const handleSubmit = () => {
    if (!selectedMood) return;
    
    setIsSubmitting(true);
    
    const newEntry: MoodEntry = {
      mood: selectedMood,
      notes: notes,
      timestamp: Date.now(),
    };
    
    saveMoodEntry(newEntry);
    
    // Update local state
    setMoodEntries([...moodEntries, newEntry]);
    
    // Reset form
    setSelectedMood(null);
    setNotes('');
    
    // Show success message
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
    
    setIsSubmitting(false);
  };

  return (
    <AppLayout>
      <div className="container py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Mood Tracker</h1>
          
          {/* Mood Entry Form */}
          <Card className="mb-8">
            <CardBody>
              <h2 className="text-lg font-medium text-gray-800 mb-4">Bagaimana perasaan Anda hari ini?</h2>
              <MoodSelector selected={selectedMood} onChange={setSelectedMood} />
              
              <div className="mt-6">
                <TextArea
                  id="mood-notes"
                  name="notes"
                  value={notes}
                  onChange={handleNotesChange}
                  label="Catatan (opsional)"
                  placeholder="Ceritakan lebih detail tentang perasaan Anda..."
                  rows={3}
                />
              </div>
            </CardBody>
            <CardFooter className="flex justify-end">
              <Button
                onClick={handleSubmit}
                disabled={!selectedMood || isSubmitting}
              >
                {isSubmitting ? 'Menyimpan...' : 'Simpan Mood'}
              </Button>
            </CardFooter>
          </Card>
          
          {/* Success Message */}
          {showSuccess && (
            <div className="bg-success-100 text-success-700 p-4 rounded-lg mb-6 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Mood berhasil disimpan!</p>
            </div>
          )}
          
          {/* Mood Chart */}
          <div className="mb-6">
            <MoodChart entries={moodEntries} />
          </div>
          
          {/* Mood History */}
          <h2 className="text-lg font-medium text-gray-800 mb-4">Riwayat Mood</h2>
          {moodEntries.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              Belum ada data mood. Mulai catat mood Anda hari ini!
            </p>
          ) : (
            <div className="space-y-4">
              {[...moodEntries]
                .sort((a, b) => b.timestamp - a.timestamp)
                .map((entry, index) => (
                  <MoodHistoryItem key={index} entry={entry} />
                ))}
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

interface MoodHistoryItemProps {
  entry: MoodEntry;
}

const MoodHistoryItem: React.FC<MoodHistoryItemProps> = ({ entry }) => {
  const moodLabels: Record<string, string> = {
    great: 'Sangat Baik',
    good: 'Baik',
    neutral: 'Biasa',
    bad: 'Buruk',
    terrible: 'Sangat Buruk',
  };
  
  const moodColors: Record<string, string> = {
    great: 'bg-success-100 text-success-600',
    good: 'bg-secondary-100 text-secondary-600',
    neutral: 'bg-gray-100 text-gray-600',
    bad: 'bg-warning-100 text-warning-600',
    terrible: 'bg-error-100 text-error-600',
  };

  const date = new Date(entry.timestamp);
  const formattedDate = date.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  
  const formattedTime = date.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Card>
      <CardBody>
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm text-gray-500">
            {formattedDate} • {formattedTime}
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${moodColors[entry.mood]}`}>
            {moodLabels[entry.mood]}
          </div>
        </div>
        {entry.notes && (
          <p className="text-gray-700">{entry.notes}</p>
        )}
      </CardBody>
    </Card>
  );
};

export default MoodTrackerPage;