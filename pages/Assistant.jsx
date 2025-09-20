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
                      <span className="text-emerald-400 mt-1">❓</span>
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
                  { icon: '🏗️', topic: 'Node.js Basics' },
                  { icon: '🌐', topic: 'HTTP & Servers' },
                  { icon: '📦', topic: 'NPM & Modules' },
                  { icon: '🔒', topic: 'Security' },
                  { icon: '🧪', topic: 'Testing' },
                  { icon: '🚀', topic: 'Deployment' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 text-gray-300">
                    <span className="text-lg">{item.icon}</span>
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
              <h4 className="text-lg font-bold text-white mb-3">💡 Tips for Better Assistance</h4>
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