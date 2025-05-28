import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Results from '../components/Results';
import { sampleResults } from '../components/data/sampleResults';
import Header from '../components/Header';

const ResultPage = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<Results {...sampleResults} />} />
            <Route path="/results" element={<Results {...sampleResults} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default ResultPage; 