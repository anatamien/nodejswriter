import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router';

function NavigationBar() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/learn', label: 'Learn', icon: '📚' },
    { path: '/practice', label: 'Practice', icon: '💻' },
    { path: '/quiz', label: 'Quiz', icon: '❓' },
    { path: '/roadmap', label: 'Roadmap', icon: '🗺️' },
    { path: '/assistant', label: 'Assistant', icon: '🤖' }
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
              <span className="text-lg">{item.icon}</span>
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