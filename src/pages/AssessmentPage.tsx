import React, { useState } from 'react';
import AppLayout from '../components/layout/AppLayout';
import { Button, LinkButton } from '../components/ui/Button';
import { Card, CardBody, CardFooter } from '../components/ui/Card';
import QuestionCard from '../components/assessment/QuestionCard';
import ResultCard from '../components/assessment/ResultCard';
import { gamblingAssessmentQuestions, mentalHealthAssessmentQuestions } from '../data/assessmentQuestions';
import { calculateGamblingResult, calculateMentalHealthResult } from '../utils/assessment';
import { saveAssessmentResult } from '../utils/storage';
import { AssessmentResult } from '../types';
import { BookOpen } from 'lucide-react';

const AssessmentPage: React.FC = () => {
  const [assessmentType, setAssessmentType] = useState<'gambling' | 'mental-health' | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questions = assessmentType === 'gambling' 
    ? gamblingAssessmentQuestions 
    : mentalHealthAssessmentQuestions;

  const handleStartAssessment = (type: 'gambling' | 'mental-health') => {
    setAssessmentType(type);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  const handleSelectAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateResult = async () => {
    setIsSubmitting(true);
    try {
      let assessmentResult: AssessmentResult;
      
      if (assessmentType === 'gambling') {
        assessmentResult = calculateGamblingResult(answers);
      } else {
        assessmentResult = calculateMentalHealthResult(answers);
      }
      
      await saveAssessmentResult(assessmentResult);
      setResult(assessmentResult);
    } catch (error) {
      console.error('Error saving assessment result:', error);
      // Still show result even if save failed
      let assessmentResult: AssessmentResult;
      if (assessmentType === 'gambling') {
        assessmentResult = calculateGamblingResult(answers);
      } else {
        assessmentResult = calculateMentalHealthResult(answers);
      }
      setResult(assessmentResult);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setAssessmentType(null);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  if (result) {
    return (
      <AppLayout>
        <div className="container py-8">
          <ResultCard result={result} onClose={handleReset} />
        </div>
      </AppLayout>
    );
  }

  if (!assessmentType) {
    return (
      <AppLayout>
        <div className="container py-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Kenali kondisimu lebih dalam lewat penilaian singkat ini.</h1>
            <p className="text-gray-600 mb-8 text-center">
              Ambil self-assessment untuk mengevaluasi kondisi Anda. Semua hasil tersimpan aman di cloud
              dan dapat diakses dari perangkat manapun.
            </p>
            
            <div className="text-center mb-8">
              <LinkButton to="/assessment-history" variant="ghost" icon={<BookOpen className="w-4 h-4 mr-1" />}>
                Lihat Riwayat Assessment
              </LinkButton>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card hoverable className="transition-transform hover:translate-y-[-5px]">
                <CardBody className="text-center p-6">
                  <div className="bg-primary-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">Kecanduan Judi Online</h2>
                  <p className="text-gray-600 mb-6">
                    Evaluasi tingkat risiko Anda terhadap kecanduan judi online dan pola perilaku terkait perjudian.
                  </p>
                  <Button
                    onClick={() => handleStartAssessment('gambling')}
                    fullWidth
                  >
                    Mulai Penilaian
                  </Button>
                </CardBody>
              </Card>
              
              <Card hoverable className="transition-transform hover:translate-y-[-5px]">
                <CardBody className="text-center p-6">
                  <div className="bg-secondary-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">Kesehatan Mental</h2>
                  <p className="text-gray-600 mb-6">
                    Evaluasi tingkat kecemasan dan depresi Anda, serta dampak potensial dari kebiasaan perjudian online.
                  </p>
                  <Button
                    onClick={() => handleStartAssessment('mental-health')}
                    variant="primary"
                    fullWidth
                  >
                    Mulai Penilaian
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="container py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              {assessmentType === 'gambling' ? 'Assessment Kecanduan Judi' : 'Assessment Kesehatan Mental'}
            </h1>
            <div className="text-sm text-gray-500">
              Pertanyaan {currentQuestionIndex + 1} dari {questions.length}
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
            <div
              className="bg-primary-500 h-2.5 rounded-full"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          
          <QuestionCard
            question={questions[currentQuestionIndex]}
            selectedValue={answers[currentQuestionIndex] ?? null}
            onSelect={handleSelectAnswer}
          />
          
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0 || isSubmitting}
            >
              Sebelumnya
            </Button>
            <Button
              onClick={handleNext}
              disabled={answers[currentQuestionIndex] === undefined || isSubmitting}
            >
              {isSubmitting 
                ? 'Menyimpan...' 
                : currentQuestionIndex < questions.length - 1 ? 'Selanjutnya' : 'Lihat Hasil'}
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default AssessmentPage;