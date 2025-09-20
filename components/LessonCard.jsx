import React from 'react';

function LessonCard({ lesson, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="glass-morphism-dark p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 animate-float group"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-emerald-500 rounded-lg group-hover:animate-pixel-bounce">
          <svg width="24" height="24" viewBox="0 0 100 100" fill="white">
            <rect x="20" y="20" width="60" height="60" rx="8"/>
            <rect x="30" y="30" width="15" height="15" fill="#10b981" rx="3"/>
            <rect x="55" y="30" width="15" height="15" fill="#10b981" rx="3"/>
            <rect x="30" y="55" width="40" height="8" fill="#10b981" rx="2"/>
          </svg>
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{lesson.title}</h3>
          <p className="text-gray-300 mb-4">{lesson.description}</p>
          
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1 text-emerald-400">
              <svg width="16" height="16" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="40"/>
                <polygon points="40,30 40,70 70,50" fill="white"/>
              </svg>
              {lesson.duration}
            </span>
            <span className="flex items-center gap-1 text-yellow-400">
              <svg width="16" height="16" viewBox="0 0 100 100" fill="currentColor">
                <polygon points="50,10 60,40 90,40 70,60 80,90 50,70 20,90 30,60 10,40 40,40"/>
              </svg>
              {lesson.difficulty}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

window.LessonCard = LessonCard;