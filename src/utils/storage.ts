import { AssessmentResult, MoodEntry, Message } from '../types';
import { getContainer, getUserId } from './cosmosdb';

// Check if Cosmos DB is available
const isCosmosDBAvailable = async (): Promise<boolean> => {
  try {
    const container = await getContainer('test');
    return container !== null;
  } catch {
    return false;
  }
};

// Assessment Results Storage
export const saveAssessmentResult = async (result: AssessmentResult): Promise<void> => {
  try {
    const container = await getContainer('assessments');
    if (!container) throw new Error('Cosmos DB not available');
    
    const userId = getUserId();
    const document = {
      id: `${userId}_${result.timestamp}`,
      userId,
      ...result,
      type: 'assessment'
    };
    
    await container.items.create(document);
    console.log('✅ Assessment saved to Cosmos DB');
  } catch {
    console.log('⚠️ Cosmos DB unavailable, using localStorage fallback');
    // Fallback to localStorage
    const results = getAssessmentResultsFromLocal();
    results.push(result);
    localStorage.setItem('assessmentResults', JSON.stringify(results));
  }
};

export const getAssessmentResults = async (): Promise<AssessmentResult[]> => {
  try {
    const container = await getContainer('assessments');
    if (!container) throw new Error('Cosmos DB not available');
    
    const userId = getUserId();
    const { resources } = await container.items
      .query({
        query: 'SELECT * FROM c WHERE c.userId = @userId AND c.type = @type ORDER BY c.timestamp DESC',
        parameters: [
          { name: '@userId', value: userId },
          { name: '@type', value: 'assessment' }
        ]
      })
      .fetchAll();
    
    console.log('✅ Assessment data loaded from Cosmos DB');
    return resources.map(item => ({
      score: item.score,
      timestamp: item.timestamp,
      category: item.category,
      risk: item.risk,
      recommendation: item.recommendation
    }));
  } catch {
    console.log('⚠️ Cosmos DB unavailable, using localStorage fallback');
    return getAssessmentResultsFromLocal();
  }
};

export const getLatestAssessmentResult = async (): Promise<AssessmentResult | null> => {
  const results = await getAssessmentResults();
  return results.length > 0 ? results[0] : null;
};

export const deleteAssessmentResult = async (timestamp: number): Promise<void> => {
  try {
    const container = await getContainer('assessments');
    if (!container) throw new Error('Cosmos DB not available');
    
    const userId = getUserId();
    const documentId = `${userId}_${timestamp}`;
    
    await container.item(documentId, userId).delete();
  } catch {
    console.error('Error deleting assessment result, using localStorage fallback');
    // Fallback to localStorage
    let results = getAssessmentResultsFromLocal();
    results = results.filter(result => result.timestamp !== timestamp);
    localStorage.setItem('assessmentResults', JSON.stringify(results));
  }
};

// Mood Tracking Storage
export const saveMoodEntry = async (entry: MoodEntry): Promise<void> => {
  try {
    const container = await getContainer('moods');
    if (!container) throw new Error('Cosmos DB not available');
    
    const userId = getUserId();
    const document = {
      id: `${userId}_${entry.timestamp}`,
      userId,
      ...entry,
      type: 'mood'
    };
    
    await container.items.create(document);
    console.log('✅ Mood entry saved to Cosmos DB');
  } catch {
    console.log('⚠️ Cosmos DB unavailable, using localStorage fallback');
    
    // Always fallback to localStorage
    const entries = getMoodEntriesFromLocal();
    // Remove any existing entry with the same timestamp
    const filteredEntries = entries.filter(e => e.timestamp !== entry.timestamp);
    filteredEntries.push(entry);
    localStorage.setItem('moodEntries', JSON.stringify(filteredEntries));
  }
};

export const getMoodEntries = async (): Promise<MoodEntry[]> => {
  try {
    const container = await getContainer('moods');
    if (!container) throw new Error('Cosmos DB not available');
    
    const userId = getUserId();
    const { resources } = await container.items
      .query({
        query: 'SELECT * FROM c WHERE c.userId = @userId AND c.type = @type ORDER BY c.timestamp DESC',
        parameters: [
          { name: '@userId', value: userId },
          { name: '@type', value: 'mood' }
        ]
      })
      .fetchAll();
    
    console.log('✅ Mood entries loaded from Cosmos DB');
    return resources.map(item => ({
      mood: item.mood,
      notes: item.notes,
      timestamp: item.timestamp
    }));
  } catch {
    console.log('⚠️ Cosmos DB unavailable, using localStorage fallback');
    return getMoodEntriesFromLocal();
  }
};

export const getLatestMoodEntry = async (): Promise<MoodEntry | null> => {
  const entries = await getMoodEntries();
  return entries.length > 0 ? entries[0] : null;
};

export const updateMoodEntry = async (updatedEntry: MoodEntry): Promise<void> => {
  try {
    const container = await getContainer('moods');
    if (!container) throw new Error('Cosmos DB not available');
    
    const userId = getUserId();
    const entryId = `${userId}_${updatedEntry.timestamp}`;
    
    const document = {
      id: entryId,
      userId,
      mood: updatedEntry.mood,
      notes: updatedEntry.notes,
      timestamp: updatedEntry.timestamp,
      type: 'mood'
    };
    
    await container.item(entryId, userId).replace(document);
    console.log('✅ Mood entry updated in Cosmos DB');
  } catch {
    console.log('⚠️ Cosmos DB unavailable, using localStorage fallback');
    
    // Fallback to localStorage
    let entries = getMoodEntriesFromLocal();
    entries = entries.map(entry => 
      entry.timestamp === updatedEntry.timestamp ? updatedEntry : entry
    );
    localStorage.setItem('moodEntries', JSON.stringify(entries));
  }
};

export const deleteMoodEntry = async (timestamp: number): Promise<void> => {
  try {
    const container = await getContainer('moods');
    if (!container) throw new Error('Cosmos DB not available');
    
    const userId = getUserId();
    const entryId = `${userId}_${timestamp}`;
    
    await container.item(entryId, userId).delete();
    console.log('✅ Mood entry deleted from Cosmos DB');
  } catch {
    console.log('⚠️ Cosmos DB unavailable, using localStorage fallback');
    
    // Fallback to localStorage
    let entries = getMoodEntriesFromLocal();
    entries = entries.filter(entry => entry.timestamp !== timestamp);
    localStorage.setItem('moodEntries', JSON.stringify(entries));
  }
};

// Chat Message Storage
export const saveMessage = async (message: Message): Promise<void> => {
  try {
    const container = await getContainer('messages');
    if (!container) throw new Error('Cosmos DB not available');
    
    const userId = getUserId();
    const document = {
      id: `${userId}_${message.id}`,
      userId,
      ...message,
      type: 'message'
    };
    
    await container.items.create(document);
  } catch {
    console.error('Error saving message, using localStorage fallback');
    // Fallback to localStorage
    const messages = getMessagesFromLocal();
    messages.push(message);
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }
};

export const getMessages = async (): Promise<Message[]> => {
  try {
    const container = await getContainer('messages');
    if (!container) throw new Error('Cosmos DB not available');
    
    const userId = getUserId();
    const { resources } = await container.items
      .query({
        query: 'SELECT * FROM c WHERE c.userId = @userId AND c.type = @type ORDER BY c.timestamp ASC',
        parameters: [
          { name: '@userId', value: userId },
          { name: '@type', value: 'message' }
        ]
      })
      .fetchAll();
    
    return resources.map(item => ({
      id: item.id.split('_').slice(1).join('_'), // Remove userId prefix
      text: item.text,
      sender: item.sender,
      timestamp: item.timestamp
    }));
  } catch {
    console.error('Error fetching messages, using localStorage fallback');
    return getMessagesFromLocal();
  }
};

export const clearChatHistory = async (): Promise<void> => {
  try {
    const container = await getContainer('messages');
    if (!container) throw new Error('Cosmos DB not available');
    
    const userId = getUserId();
    const { resources } = await container.items
      .query({
        query: 'SELECT c.id FROM c WHERE c.userId = @userId AND c.type = @type',
        parameters: [
          { name: '@userId', value: userId },
          { name: '@type', value: 'message' }
        ]
      })
      .fetchAll();
    
    // Delete all messages for this user
    for (const resource of resources) {
      await container.item(resource.id, userId).delete();
    }
  } catch {
    console.error('Error clearing chat history, using localStorage fallback');
    // Fallback to localStorage
    localStorage.setItem('chatMessages', JSON.stringify([]));
  }
};

// Fallback functions for localStorage
const getAssessmentResultsFromLocal = (): AssessmentResult[] => {
  const stored = localStorage.getItem('assessmentResults');
  return stored ? JSON.parse(stored) : [];
};

const getMoodEntriesFromLocal = (): MoodEntry[] => {
  const stored = localStorage.getItem('moodEntries');
  return stored ? JSON.parse(stored) : [];
};

const getMessagesFromLocal = (): Message[] => {
  const stored = localStorage.getItem('chatMessages');
  return stored ? JSON.parse(stored) : [];
};