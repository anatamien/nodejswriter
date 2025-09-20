import React from 'react';
import { Link } from 'react-router';

function Home() {
  const features = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 100 100" fill="currentColor">
          <rect x="20" y="25" width="60" height="50" rx="4"/>
          <rect x="30" y="35" width="40" height="3"/>
          <rect x="30" y="45" width="40" height="3"/>
          <rect x="30" y="55" width="30" height="3"/>
        </svg>
      ),
      title: 'Interactive Learning',
      description: 'Theory cards with practical examples and visual diagrams',
      link: '/learn'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 100 100" fill="currentColor">
          <rect x="15" y="20" width="70" height="50" rx="4"/>
          <rect x="20" y="15" width="60" height="5" rx="2"/>
          <rect x="25" y="30" width="20" height="3"/>
          <rect x="25" y="38" width="30" height="3"/>
          <rect x="25" y="46" width="25" height="3"/>
          <circle cx="70" cy="40" r="8"/>
        </svg>
      ),
      title: 'Code Practice',
      description: 'Built-in editor to practice Node.js concepts',
      link: '/practice'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="35" r="20"/>
          <rect x="45" y="20" width="10" height="20"/>
          <circle cx="50" cy="65" r="5"/>
        </svg>
      ),
      title: 'Knowledge Quiz',
      description: 'Test your understanding with interactive quizzes',
      link: '/quiz'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="20" cy="20" r="8"/>
          <circle cx="50" cy="40" r="8"/>
          <circle cx="80" cy="60" r="8"/>
          <line x1="28" y1="28" x2="42" y2="32" stroke="currentColor" strokeWidth="3"/>
          <line x1="58" y1="48" x2="72" y2="52" stroke="currentColor" strokeWidth="3"/>
          <rect x="15" y="70" width="70" height="15" rx="3"/>
        </svg>
      ),
      title: 'Learning Roadmap',
      description: 'Step-by-step progression from basics to advanced',
      link: '/roadmap'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="45" r="25"/>
          <circle cx="40" cy="35" r="4"/>
          <circle cx="60" cy="35" r="4"/>
          <path d="M 35 55 Q 50 70 65 55" stroke="currentColor" strokeWidth="3" fill="none"/>
          <rect x="45" y="70" width="10" height="20" rx="5"/>
        </svg>
      ),
      title: 'AI Assistant',
      description: 'Get instant help and explanations',
      link: '/assistant'
    }
  ];

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <svg width="120" height="120" viewBox="0 0 100 100" className="animate-float">
              <rect x="10" y="10" width="80" height="80" fill="#10b981" rx="8"/>
              <rect x="20" y="20" width="20" height="20" fill="#fff" rx="4"/>
              <rect x="50" y="20" width="30" height="10" fill="#fff" rx="2"/>
              <rect x="50" y="35" width="30" height="10" fill="#fff" rx="2"/>
              <rect x="20" y="50" width="60" height="10" fill="#fff" rx="2"/>
              <rect x="20" y="65" width="60" height="10" fill="#fff" rx="2"/>
              <circle cx="85" cy="15" r="8" fill="#34d399" className="animate-pulse"/>
            </svg>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-6">
            NodeMentor
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Master Node.js with interactive lessons, hands-on practice, and AI-powered assistance
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/learn"
              className="px-8 py-4 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-all duration-300 hover:scale-105 animate-glow"
            >
              Start Learning
            </Link>
            <Link
              to="/roadmap"
              className="px-8 py-4 glass-morphism text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              View Roadmap
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="glass-morphism p-8 rounded-xl hover:scale-105 transition-all duration-300 group animate-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-emerald-400 mb-4 group-hover:animate-pixel-bounce">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="glass-morphism-dark rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Learn Node.js The Right Way</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">50+</div>
              <div className="text-gray-300">Interactive Lessons</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">100+</div>
              <div className="text-gray-300">Practice Exercises</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Assistant</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.Home = Home;