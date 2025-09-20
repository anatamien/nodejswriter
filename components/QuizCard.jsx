import React, { useState } from 'react';

function QuizCard({ question, options, correctAnswer, explanation, onAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answerIndex) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (onAnswer) {
      onAnswer(answerIndex === correctAnswer);
    }
  };

  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <div className="glass-morphism-dark p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-4">{question}</h3>
      
      <div className="space-y-3 mb-6">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={showResult}
            className={`w-full p-4 text-left rounded-lg transition-all duration-300 ${
              showResult
                ? index === correctAnswer
                  ? 'bg-green-500/30 border-2 border-green-500 text-white'
                  : index === selectedAnswer
                  ? 'bg-red-500/30 border-2 border-red-500 text-white'
                  : 'bg-white/10 text-gray-300'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                showResult && index === correctAnswer
                  ? 'border-green-500 bg-green-500'
                  : showResult && index === selectedAnswer
                  ? 'border-red-500 bg-red-500'
                  : 'border-gray-400'
              }`}>
                {showResult && index === correctAnswer && (
                  <svg width="12" height="12" viewBox="0 0 100 100" fill="white">
                    <polyline points="20,50 40,70 80,30" stroke="white" strokeWidth="8" fill="none"/>
                  </svg>
                )}
                {showResult && index === selectedAnswer && index !== correctAnswer && (
                  <svg width="12" height="12" viewBox="0 0 100 100" fill="white">
                    <line x1="20" y1="20" x2="80" y2="80" stroke="white" strokeWidth="8"/>
                    <line x1="80" y1="20" x2="20" y2="80" stroke="white" strokeWidth="8"/>
                  </svg>
                )}
              </div>
              <span>{option}</span>
            </div>
          </button>
        ))}
      </div>
      
      {showResult && (
        <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
          <div className="flex items-center gap-2 mb-2">
            <span className={`${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
              {isCorrect ? (
                <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="40"/>
                  <polyline points="30,50 45,65 70,35" stroke="white" strokeWidth="8" fill="none"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="40"/>
                  <line x1="30" y1="30" x2="70" y2="70" stroke="white" strokeWidth="8"/>
                  <line x1="70" y1="30" x2="30" y2="70" stroke="white" strokeWidth="8"/>
                </svg>
              )}
            </span>
            <span className={`font-bold ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
              {isCorrect ? 'Correct!' : 'Incorrect'}
            </span>
          </div>
          <p className="text-gray-300">{explanation}</p>
        </div>
      )}
    </div>
  );
}

window.QuizCard = QuizCard;