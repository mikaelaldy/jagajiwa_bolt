import { AssessmentResult } from '../types';

// Calculate gambling assessment result
export const calculateGamblingResult = (answers: number[]): AssessmentResult => {
  const score = answers.reduce((acc, curr) => acc + curr, 0);
  
  let risk: 'low' | 'moderate' | 'high';
  let recommendation: string;
  
  if (score <= 7) {
    risk = 'low';
    recommendation = 'Saat ini Anda memiliki risiko rendah untuk kecanduan judi. Tetap waspada dan batasi aktivitas perjudian Anda untuk mencegah masalah di masa depan.';
  } else if (score <= 15) {
    risk = 'moderate';
    recommendation = 'Anda menunjukkan beberapa tanda risiko sedang untuk kecanduan judi. Pertimbangkan untuk mengurangi frekuensi perjudian dan mencari dukungan dari orang terdekat.';
  } else {
    risk = 'high';
    recommendation = 'Anda memiliki risiko tinggi untuk kecanduan judi. Sangat disarankan untuk mencari bantuan profesional dan mempertimbangkan untuk berhenti berjudi sepenuhnya.';
  }
  
  return {
    score,
    timestamp: Date.now(),
    category: 'gambling',
    risk,
    recommendation
  };
};

// Calculate mental health assessment result
export const calculateMentalHealthResult = (answers: number[]): AssessmentResult => {
  const score = answers.reduce((acc, curr) => acc + curr, 0);
  
  let risk: 'low' | 'moderate' | 'high';
  let recommendation: string;
  
  if (score <= 7) {
    risk = 'low';
    recommendation = 'Saat ini Anda memiliki tingkat distres psikologis yang rendah. Tetap jaga kesehatan mental Anda dengan aktivitas positif dan hubungan sosial yang baik.';
  } else if (score <= 14) {
    risk = 'moderate';
    recommendation = 'Anda menunjukkan beberapa tanda distres psikologis tingkat sedang. Pertimbangkan untuk meningkatkan aktivitas self-care dan berbicara dengan orang yang Anda percaya.';
  } else {
    risk = 'high';
    recommendation = 'Anda memiliki tanda-tanda distres psikologis yang tinggi. Sangat disarankan untuk berkonsultasi dengan profesional kesehatan mental untuk mendapatkan dukungan yang tepat.';
  }
  
  return {
    score,
    timestamp: Date.now(),
    category: 'mental-health',
    risk,
    recommendation
  };
};