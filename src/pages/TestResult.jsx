import React from 'react';
import Navbar2 from '../components/Navbar2';
import { CircularProgress, PerformanceCard, BarChart, TopicProgressBar } from './ResultUtils';
import { Link } from 'react-router-dom';

export default function TestResult({ results, setSubmitted }) {
  const { totalQuestions, attemptedQuestions, correctAnswers, overallAccuracy, timeTaken, topicResults } = results || {};

  const overallAccuracyPercentage = parseFloat(overallAccuracy);
  const attemptedQuestionsPercentage = totalQuestions > 0 ? (attemptedQuestions / totalQuestions) * 100 : 0;

  // Prepare data for BarChart and TopicProgressBar
  const barChartData = topicResults ? Object.keys(topicResults).map(topic => ({
    topic: topic,
    accuracy: topicResults[topic].totalQuestions > 0 
              ? (topicResults[topic].correctAnswers / topicResults[topic].attemptedQuestions) * 100 
              : 0,
  })) : [];

  const topicProgressData = topicResults ? Object.keys(topicResults).map(topic => ({
    topic: topic,
    completed: topicResults[topic].totalQuestions > 0 
               ? (topicResults[topic].attemptedQuestions / topicResults[topic].totalQuestions) * 100 
               : 0,
  })) : [];

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f6effe]">
      <div className="w-full mt-[-20px] h-[40px] mb-[150px] bg-white shadow-sm">
        <Navbar2 />
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-[32px] font-bold text-[#1F2937]">Result</h1>
          <p className="text-gray-500">Test completed at 14:15 pm</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <CircularProgress 
              value={overallAccuracy !== undefined ? `${overallAccuracy}%` : '--%'}
              label="Overall Accuracy"
              subLabel="Good Going"
              percentage={overallAccuracyPercentage}
            />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <CircularProgress 
              value={totalQuestions !== undefined ? `${attemptedQuestions}/${totalQuestions}` : '--/--'}
              label="Questions Attempted"
              percentage={attemptedQuestionsPercentage}
            />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <CircularProgress 
              value={timeTaken || '-- min'}
              label="Time taken"
              percentage={75}
            />
          </div>
        </div>

        <div className="mt-6">
          <PerformanceCard rating={'Good'} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Topicwise Accuracy</h2>
            <BarChart data={barChartData} />
            <div className="mt-8 space-y-4">
              {topicProgressData.map((topicData, index) => (
                <TopicProgressBar
                  key={index}
                  topic={topicData.topic}
                  completed={topicData.completed}
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col min-h-[600px]">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Topics to Focus on</h2>
              <div className="space-y-4">
                {topicResults && Object.keys(topicResults).map((topic, index) => (
                  <div key={index} className="text-gray-600">
                    {topic}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-[#001529] text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors" onClick={() => setSubmitted(false)}>
                Retry Test
              </button>
              <Link to="/dashboard" className="w-full bg-[#5E2F7C] text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
                Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}