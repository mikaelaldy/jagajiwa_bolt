import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AssessmentPage from './pages/AssessmentPage';
import ChatbotPage from './pages/ChatbotPage';
import MoodTrackerPage from './pages/MoodTrackerPage';
import EmergencyPage from './pages/EmergencyPage';
import NotFoundPage from './pages/NotFoundPage';
import AssessmentHistoryPage from './pages/AssessmentHistoryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/assessment" element={<AssessmentPage />} />
        <Route path="/assessment-history" element={<AssessmentHistoryPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/mood-tracker" element={<MoodTrackerPage />} />
        <Route path="/emergency" element={<EmergencyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;