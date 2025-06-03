import React, { useState, useEffect, useRef } from 'react';
import AppLayout from '../components/layout/AppLayout';
import { Card, CardBody, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { TextArea } from '../components/ui/Input';
import MoodSelector from '../components/mood/MoodSelector';
import MoodChart from '../components/mood/MoodChart';
import MoodCalendar from '../components/mood/MoodCalendar';
import { MoodEntry } from '../types';
import { saveMoodEntry, getMoodEntries, updateMoodEntry, deleteMoodEntry } from '../utils/storage';
import { Edit3, Trash2, XCircle, Loader2 } from 'lucide-react';

const MoodTrackerPage: React.FC = () => {
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);
  const [selectedMood, setSelectedMood] = useState<'great' | 'good' | 'neutral' | 'bad' | 'terrible' | null>(null);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [editingEntryTimestamp, setEditingEntryTimestamp] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const moodFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadMoodEntries();
  }, []);

  const loadMoodEntries = async () => {
    try {
      setLoading(true);
      const entries = await getMoodEntries();
      setMoodEntries(entries);
    } catch (error) {
      console.error('Error loading mood entries:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
  };

  const resetForm = () => {
    setSelectedMood(null);
    setNotes('');
    setEditingEntryTimestamp(null);
    setIsSubmitting(false);
  };

  const handleEditEntry = (entry: MoodEntry) => {
    setEditingEntryTimestamp(entry.timestamp);
    setSelectedMood(entry.mood);
    setNotes(entry.notes);
    moodFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDeleteEntry = async (timestamp: number) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus catatan mood ini?')) {
      try {
        setDeletingId(timestamp);
        await deleteMoodEntry(timestamp);
        await loadMoodEntries();
        setSuccessMessage('Mood berhasil dihapus!');
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        if (editingEntryTimestamp === timestamp) {
          resetForm();
        }
      } catch (error) {
        console.error('Error deleting mood entry:', error);
        alert('Gagal menghapus mood. Silakan coba lagi.');
      } finally {
        setDeletingId(null);
      }
    }
  };

  const handleSubmit = async () => {
    if (!selectedMood) return;
    
    setIsSubmitting(true);
    
    try {
      if (editingEntryTimestamp) {
        const updatedEntry: MoodEntry = {
          mood: selectedMood,
          notes: notes,
          timestamp: editingEntryTimestamp,
        };
        await updateMoodEntry(updatedEntry);
        setSuccessMessage('Mood berhasil diperbarui!');
      } else {
        const newEntry: MoodEntry = {
          mood: selectedMood,
          notes: notes,
          timestamp: Date.now(),
        };
        await saveMoodEntry(newEntry);
        setSuccessMessage('Mood berhasil disimpan!');
      }
      
      await loadMoodEntries();
      resetForm();
          
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error saving mood entry:', error);
      alert('Gagal menyimpan mood. Silakan coba lagi.');
      setIsSubmitting(false);
    }
  };

  const handleCancelEdit = () => {
    resetForm();
  };

  if (loading) {
    return (
      <AppLayout>
        <div className="container py-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary-500" />
              <span className="ml-2 text-gray-600">Memuat data mood...</span>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="container py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Mood Tracker</h1>
          
          <div ref={moodFormRef}>
            <Card className="mb-8">
              <CardBody>
                <h2 className="text-lg font-medium text-gray-800 mb-4">
                  {editingEntryTimestamp ? 'Edit Catatan Mood' : 'Catat perasaanmu setiap hari dan kenali pola emosimu dari waktu ke waktu.'}
                </h2>
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
              <CardFooter className="flex justify-end gap-2">
                {editingEntryTimestamp && (
                  <Button
                    variant="outline"
                    onClick={handleCancelEdit}
                    icon={<XCircle className="w-4 h-4"/>}
                    disabled={isSubmitting}
                  >
                    Batal Edit
                  </Button>
                )}
                <Button
                  onClick={handleSubmit}
                  disabled={!selectedMood || isSubmitting}
                  icon={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin"/> : undefined}
                >
                  {isSubmitting 
                    ? (editingEntryTimestamp ? 'Memperbarui...' : 'Menyimpan...') 
                    : (editingEntryTimestamp ? 'Update Mood' : 'Simpan Mood')}
                </Button>
              </CardFooter>
            </Card>
          </div>
          
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
              <p>{successMessage}</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
            <MoodChart entries={moodEntries} />
            <MoodCalendar entries={moodEntries} />
          </div>
          
          <h2 className="text-lg font-medium text-gray-800 mb-4">Riwayat Mood</h2>
          {moodEntries.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              Belum ada data mood. Mulai catat mood Anda hari ini!
            </p>
          ) : (
            <div className="space-y-4">
              {[...moodEntries]
                .sort((a, b) => b.timestamp - a.timestamp)
                .map((entry) => (
                  <MoodHistoryItem 
                    key={entry.timestamp}
                    entry={entry} 
                    onEdit={() => handleEditEntry(entry)}
                    onDelete={() => handleDeleteEntry(entry.timestamp)}
                    isDeleting={deletingId === entry.timestamp}
                  />
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
  onEdit: () => void;
  onDelete: () => void;
  isDeleting: boolean;
}

const MoodHistoryItem: React.FC<MoodHistoryItemProps> = ({ entry, onEdit, onDelete, isDeleting }) => {
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
        <div className="flex justify-between items-start mb-2">
          <div>
            <div className="text-sm text-gray-500">
              {formattedDate} • {formattedTime}
            </div>
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${moodColors[entry.mood]} mt-1`}>
              {moodLabels[entry.mood]}
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0 ml-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onEdit} 
              icon={<Edit3 className="w-4 h-4"/>} 
              className="text-primary-600 hover:bg-primary-50"
              disabled={isDeleting}
            >
              Edit
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onDelete} 
              icon={isDeleting ? <Loader2 className="w-4 h-4 animate-spin"/> : <Trash2 className="w-4 h-4"/>} 
              className="text-error-600 hover:bg-error-50"
              disabled={isDeleting}
            >
              {isDeleting ? 'Menghapus...' : 'Hapus'}
            </Button>
          </div>
        </div>
        {entry.notes && (
          <p className="text-gray-700 whitespace-pre-wrap">{entry.notes}</p>
        )}
      </CardBody>
    </Card>
  );
};

export default MoodTrackerPage;