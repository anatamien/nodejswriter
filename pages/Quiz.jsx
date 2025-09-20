import React, { useState } from 'react';

function Quiz() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const quizzes = [
    {
      question: "What is Node.js?",
      options: [
        "A JavaScript framework",
        "A JavaScript runtime environment",
        "A database management system",
        "A web browser"
      ],
      correctAnswer: 1,
      explanation: "Node.js is a JavaScript runtime environment that allows you to execute JavaScript code outside of a web browser."
    },
    {
      question: "Which module system is traditional in Node.js?",
      options: [
        "ES Modules (ESM)",
        "AMD",
        "CommonJS",
        "UMD"
      ],
      correctAnswer: 2,
      explanation: "CommonJS is the traditional module system in Node.js, using require() and module.exports."
    },
    {
      question: "What does the 'npm' command stand for?",
      options: [
        "Node Package Manager",
        "New Project Manager",
        "Node Process Manager",
        "Network Package Manager"
      ],
      correctAnswer: 0,
      explanation: "npm stands for Node Package Manager, which is the default package manager for Node.js."
    },
    {
      question: "Which method is used to read files asynchronously in Node.js?",
      options: [
        "fs.readFileSync()",
        "fs.readFile()",
        "fs.read()",
        "fs.asyncRead()"
      ],
      correctAnswer: 1,
      explanation: "fs.readFile() is used for asynchronous file reading, while fs.readFileSync() is synchronous."
    },
    {
      question: "What is the event loop in Node.js?",
      options: [
        "A loop that creates events",
        "A mechanism that handles asynchronous operations",
        "A debugging tool",
        "A package manager feature"
      ],
      correctAnswer: 1,
      explanation: "The event loop is Node.js's mechanism for handling asynchronous operations in a single-threaded environment."
    }
  ];

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuiz < quizzes.length - 1) {
        setCurrentQuiz(currentQuiz + 1);
      } else {
        setCompleted(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuiz(0);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    const percentage = Math.round((score / quizzes.length) * 100);
    return (
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-morphism-dark p-8 rounded-xl text-center">
            <div className="text-6xl mb-6">
              {percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '📚'}
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-4">Quiz Completed!</h2>
            
            <div className="text-6xl font-bold text-emerald-400 mb-4">
              {score}/{quizzes.length}
            </div>
            
            <p className="text-2xl text-gray-300 mb-6">
              You scored {percentage}%
            </p>
            
            <div className="mb-8">
              {percentage >= 80 ? (
                <p className="text-green-400 text-lg">Excellent work! You have a strong understanding of Node.js concepts.</p>
              ) : percentage >= 60 ? (
                <p className="text-yellow-400 text-lg">Good job! Consider reviewing some concepts to improve further.</p>
              ) : (
                <p className="text-red-400 text-lg">Keep studying! Review the learning materials and try again.</p>
              )}
            </div>
            
            <div className="flex justify-center gap-4">
              <button
                onClick={resetQuiz}
                className="px-6 py-3 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.href = '/learn'}
                className="px-6 py-3 glass-morphism text-white font-bold rounded-lg hover:bg-white/20 transition-colors"
              >
                Back to Learning
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gradient mb-4">Node.js Quiz</h1>
          <p className="text-xl text-white/80">Test your Node.js knowledge</p>
        </div>

        {/* Progress Bar */}
        <div className="glass-morphism p-4 rounded-xl mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-medium">Progress</span>
            <span className="text-emerald-400 font-medium">
              {currentQuiz + 1} / {quizzes.length}
            </span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <div 
              className="bg-emerald-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuiz + 1) / quizzes.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Quiz Card */}
        <window.QuizCard
          question={quizzes[currentQuiz].question}
          options={quizzes[currentQuiz].options}
          correctAnswer={quizzes[currentQuiz].correctAnswer}
          explanation={quizzes[currentQuiz].explanation}
          onAnswer={handleAnswer}
        />

        {/* Score Display */}
        <div className="glass-morphism p-4 rounded-xl mt-6 text-center">
          <span className="text-white font-medium">Current Score: </span>
          <span className="text-emerald-400 font-bold text-xl">{score}</span>
        </div>
      </div>
    </div>
  );
}

window.Quiz = Quiz;