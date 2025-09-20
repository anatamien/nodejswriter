import React from 'react';

function RoadmapNode({ node, isCompleted, isActive, onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`relative cursor-pointer transition-all duration-300 ${
        isActive ? 'scale-110' : 'hover:scale-105'
      }`}
    >
      <div className={`glass-morphism p-6 rounded-xl border-2 ${
        isCompleted 
          ? 'border-green-500 bg-green-500/20' 
          : isActive
          ? 'border-emerald-400 bg-emerald-400/20 animate-glow'
          : 'border-white/30'
      }`}>
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-lg ${
            isCompleted
              ? 'bg-green-500'
              : isActive
              ? 'bg-emerald-500'
              : 'bg-white/20'
          }`}>
            {isCompleted ? (
              <svg width="24" height="24" viewBox="0 0 100 100" fill="white">
                <polyline points="20,50 40,70 80,30" stroke="white" strokeWidth="8" fill="none"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 100 100" fill="white">
                <rect x="20" y="20" width="60" height="60" rx="8"/>
                <rect x="30" y="30" width="15" height="15" fill="#10b981" rx="3"/>
                <rect x="55" y="30" width="15" height="15" fill="#10b981" rx="3"/>
                <rect x="30" y="55" width="40" height="8" fill="#10b981" rx="2"/>
              </svg>
            )}
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white">{node.title}</h3>
            <p className="text-gray-300 text-sm">{node.description}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs px-2 py-1 bg-emerald-500/30 text-emerald-400 rounded">
                {node.difficulty}
              </span>
              <span className="text-xs text-gray-400">{node.duration}</span>
            </div>
          </div>
        </div>
      </div>
      
      {isActive && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse">
          <svg width="12" height="12" viewBox="0 0 100 100" fill="white">
            <circle cx="50" cy="50" r="40"/>
          </svg>
        </div>
      )}
    </div>
  );
}

window.RoadmapNode = RoadmapNode;