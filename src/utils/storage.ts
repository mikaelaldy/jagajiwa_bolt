import { AssessmentResult, MoodEntry, Message } from '../types';

// Assessment Results Storage
export const saveAssessmentResult = (result: AssessmentResult): void => {
  const results = getAssessmentResults();
  results.push(result);
  localStorage.setItem('assessmentResults', JSON.stringify(results));
};

export const getAssessmentResults = (): AssessmentResult[] => {
  const results = localStorage.getItem('assessmentResults');
  return results ? JSON.parse(results) : [];
};

export const getLatestAssessmentResult = (): AssessmentResult | null => {
  const results = getAssessmentResults();
  return results.length > 0 ? results[results.length - 1] : null;
};

// Mood Tracking Storage
export const saveMoodEntry = (entry: MoodEntry): void => {
  const entries = getMoodEntries();
  entries.push(entry);
  localStorage.setItem('moodEntries', JSON.stringify(entries));
};

export const getMoodEntries = (): MoodEntry[] => {
  const entries = localStorage.getItem('moodEntries');
  return entries ? JSON.parse(entries) : [];
};

export const getLatestMoodEntry = (): MoodEntry | null => {
  const entries = getMoodEntries();
  return entries.length > 0 ? entries[entries.length - 1] : null;
};

// Chat Message Storage
export const saveMessage = (message: Message): void => {
  const messages = getMessages();
  messages.push(message);
  localStorage.setItem('chatMessages', JSON.stringify(messages));
};

export const getMessages = (): Message[] => {
  const messages = localStorage.getItem('chatMessages');
  return messages ? JSON.parse(messages) : [];
};

export const clearChatHistory = (): void => {
  localStorage.setItem('chatMessages', JSON.stringify([]));
};