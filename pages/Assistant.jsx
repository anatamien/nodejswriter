import React from 'react';

function Assistant() {
  const quickQuestions = [
    "What is the difference between CommonJS and ES modules?",
    "How does the Node.js event loop work?",
    "What are the best practices for error handling in Node.js?",
    "How do I implement authentication in Express.js?",
    "What is middleware in Express and how do I use it?",
    "How do I handle file uploads in Node.js?"
  ];

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gradient mb-4">AI Assistant</h1>
          <p className="text-xl text-white/80">Get instant help with Node.js concepts and coding questions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Questions */}
          <div className="lg:col-span-1">
            <div className="glass-morphism-dark p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Quick Questions</h3>
              <div className="space-y-3">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-gray-300 hover:text-white"
                    onClick={() => {
                      // This would send the question to the chat
                      console.log('Asked:', question);
                    }}
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">
                        <svg width="16" height="16" viewBox="0 0 100 100" fill="currentColor">
                          <circle cx="50" cy="35" r="20"/>
                          <rect x="45" y="20" width="10" height="20"/>
                          <circle cx="50" cy="65" r="5"/>
                        </svg>
                      </span>
                      <span className="text-sm">{question}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Help Topics */}
            <div className="glass-morphism-dark p-6 rounded-xl mt-6">
              <h3 className="text-xl font-bold text-white mb-4">Help Topics</h3>
              <div className="space-y-2">
                {[
                  { icon: (
                    <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor">
                      <rect x="20" y="30" width="60" height="40" rx="4"/>
                      <rect x="30" y="20" width="40" height="20" rx="4"/>
                      <rect x="35" y="50" width="30" height="3"/>
                      <rect x="35" y="58" width="20" height="3"/>
                    </svg>
                  ), topic: 'Node.js Basics' },
                  { icon: (
                    <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor">
                      <circle cx="50" cy="50" r="35"/>
                      <circle cx="50" cy="50" r="20" fill="white"/>
                      <rect x="45" y="30" width="10" height="15"/>
                      <rect x="30" y="45" width="15" height="10"/>
                      <rect x="55" y="45" width="15" height="10"/>
                      <rect x="45" y="55" width="10" height="15"/>
                    </svg>
                  ), topic: 'HTTP & Servers' },
                  { icon: (
                    <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor">
                      <rect x="20" y="20" width="60" height="60" rx="8"/>
                      <rect x="30" y="35" width="15" height="15" fill="white" rx="3"/>
                      <rect x="55" y="35" width="15" height="15" fill="white" rx="3"/>
                      <rect x="30" y="55" width="40" height="5" fill="white" rx="2"/>
                    </svg>
                  ), topic: 'NPM & Modules' },
                  { icon: (
                    <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor">
                      <circle cx="50" cy="40" r="25"/>
                      <rect x="45" y="60" width="10" height="20" rx="5"/>
                      <circle cx="50" cy="85" r="5"/>
                    </svg>
                  ), topic: 'Security' },
                  { icon: (
                    <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor">
                      <circle cx="35" cy="35" r="15"/>
                      <circle cx="65" cy="35" r="15"/>
                      <circle cx="35" cy="65" r="15"/>
                      <circle cx="65" cy="65" r="15"/>
                      <line x1="35" y1="50" x2="35" y2="50" stroke="white" strokeWidth="3"/>
                      <line x1="50" y1="35" x2="50" y2="35" stroke="white" strokeWidth="3"/>
                      <line x1="65" y1="50" x2="65" y2="50" stroke="white" strokeWidth="3"/>
                      <line x1="50" y1="65" x2="50" y2="65" stroke="white" strokeWidth="3"/>
                    </svg>
                  ), topic: 'Testing' },
                  { icon: (
                    <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor">
                      <polygon points="50,10 90,50 50,90 10,50"/>
                      <circle cx="50" cy="50" r="15" fill="white"/>
                    </svg>
                  ), topic: 'Deployment' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 text-gray-300">
                    <span className="text-emerald-400">{item.icon}</span>
                    <span>{item.topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <window.AIAssistant />
            
            {/* Tips */}
            <div className="glass-morphism-dark p-4 rounded-xl mt-6">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 100 100" fill="#34d399">
                  <circle cx="50" cy="50" r="40"/>
                  <rect x="45" y="30" width="10" height="25" fill="white"/>
                  <circle cx="50" cy="70" r="5" fill="white"/>
                </svg>
                Tips for Better Assistance
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Be specific about your Node.js version and environment</li>
                <li>• Include error messages when asking about bugs</li>
                <li>• Describe what you're trying to achieve</li>
                <li>• Ask for code examples when learning new concepts</li>
                <li>• Request explanations of best practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.Assistant = Assistant;