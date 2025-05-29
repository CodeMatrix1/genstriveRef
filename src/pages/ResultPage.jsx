import React from 'react';
import Results from '../components/Results';
import { sampleResults } from '../components/data/sampleResults';
import Header from '../components/Header';

const ResultPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-8">
        <Results {...sampleResults} />
      </main>
    </div>
  );
};

export default ResultPage; 