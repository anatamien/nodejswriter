import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router';

function NavigationBar() {
  const location = useLocation();
  
  const navItems = [
    { 
      path: '/', 
      label: 'Home', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor">
          <rect x="20" y="40" width="60" height="40" rx="4"/>
          <polygon points="10,50 50,10 90,50 80,50 50,20 20,50"/>
          <rect x="40" y="55" width="20" height="25"/>
        </svg>
      )
    },
    { 
      path: '/learn', 
      label: 'Learn', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor">
          <rect x="20" y="25" width="60" height="50" rx="4"/>
          <rect x="30" y="35" width="40" height="3"/>
          <rect x="30" y="45" width="40" height="3"/>
          <rect x="30" y="55" width="30" height="3"/>
        </svg>
      )
    },
    { 
      path: '/practice', 
      label: 'Practice', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor">
          <rect x="15" y="20" width="70" height="50" rx="4"/>
          <rect x="20" y="15" width="60" height="5" rx="2"/>
          <rect x="25" y="30" width="20" height="3"/>
          <rect x="25" y="38" width="30" height="3"/>
          <rect x="25" y="46" width="25" height="3"/>
          <circle cx="70" cy="40" r="8"/>
        </svg>
      )
    },
    { 
      path: '/quiz', 
      label: 'Quiz', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="35" r="20"/>
          <rect x="45" y="20" width="10" height="20"/>
          <circle cx="50" cy="65" r="5"/>
        </svg>
      )
    },
    { 
      path: '/roadmap', 
      label: 'Roadmap', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="20" cy="20" r="8"/>
          <circle cx="50" cy="40" r="8"/>
          <circle cx="80" cy="60" r="8"/>
          <line x1="28" y1="28" x2="42" y2="32" stroke="currentColor" strokeWidth="3"/>
          <line x1="58" y1="48" x2="72" y2="52" stroke="currentColor" strokeWidth="3"/>
          <rect x="15" y="70" width="70" height="15" rx="3"/>
        </svg>
      )
    },
    { 
      path: '/assistant', 
      label: 'Assistant', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="45" r="25"/>
          <circle cx="40" cy="35" r="4"/>
          <circle cx="60" cy="35" r="4"/>
          <path d="M 35 55 Q 50 70 65 55" stroke="currentColor" strokeWidth="3" fill="none"/>
          <rect x="45" y="70" width="10" height="20" rx="5"/>
        </svg>
      )
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism mx-4 mt-4 rounded-xl">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl">
          <svg width="32" height="32" viewBox="0 0 100 100" className="animate-float">
            <rect x="10" y="10" width="80" height="80" fill="#10b981" rx="8"/>
            <rect x="20" y="20" width="20" height="20" fill="#fff" rx="4"/>
            <rect x="50" y="20" width="30" height="10" fill="#fff" rx="2"/>
            <rect x="50" y="35" width="30" height="10" fill="#fff" rx="2"/>
            <rect x="20" y="50" width="60" height="10" fill="#fff" rx="2"/>
            <rect x="20" y="65" width="60" height="10" fill="#fff" rx="2"/>
          </svg>
          NodeMentor
        </Link>
        
        <div className="flex items-center gap-2">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                location.pathname === item.path
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {item.icon}
              <span className="hidden md:inline font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

function App() {
  const [isReady, setIsReady] = useState(false);
  const [basename, setBasename] = useState('');

  useEffect(() => {
    const path = window.location.pathname;
    const basePath = path.substring(0, path.lastIndexOf('/'));
    setBasename(basePath);

    const checkDependencies = () => {
      if (
        window.Home &&
        window.Learn &&
        window.Practice &&
        window.Quiz &&
        window.Roadmap &&
        window.Assistant
      ) {
        setIsReady(true);
      }
    };

    checkDependencies();
    const interval = setInterval(checkDependencies, 100);
    return () => clearInterval(interval);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-emerald-400"></div>
        <p className="mt-4 text-white text-lg font-medium">Loading NodeMentor...</p>
      </div>
    );
  }

  return (
    <BrowserRouter basename={basename}>
      <div className="min-h-screen">
        <NavigationBar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<window.Home />} />
            <Route path="/learn" element={<window.Learn />} />
            <Route path="/practice" element={<window.Practice />} />
            <Route path="/quiz" element={<window.Quiz />} />
            <Route path="/roadmap" element={<window.Roadmap />} />
            <Route path="/assistant" element={<window.Assistant />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('renderDiv')).render(<App />);