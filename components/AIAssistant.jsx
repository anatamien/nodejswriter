import React, { useState, useRef, useEffect } from 'react';

function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m your Node.js learning assistant. Ask me anything about Node.js concepts, syntax, or best practices!'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatManagerRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    chatManagerRef.current = new window.ChatManager(
      'You are a helpful Node.js learning assistant. Provide clear, educational responses about Node.js concepts, syntax, best practices, and help users learn effectively. Keep responses concise but informative.'
    );
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage;
    setInputMessage('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    setIsLoading(true);
    chatManagerRef.current.addMessage('user', userMessage);

    try {
      const response = await chatManagerRef.current.getCharacterResponse();
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Error getting response:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try asking your question again.'
      }]);
    }

    setIsLoading(false);
  };

  return (
    <div className="glass-morphism-dark rounded-xl h-96 flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 100 100" fill="white">
              <circle cx="35" cy="35" r="8"/>
              <circle cx="65" cy="35" r="8"/>
              <path d="M 30 60 Q 50 80 70 60" stroke="white" strokeWidth="4" fill="none"/>
            </svg>
          </div>
          <span className="text-white font-medium">Node.js Assistant</span>
        </div>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
              message.role === 'user'
                ? 'bg-emerald-500 text-white'
                : 'bg-white/10 text-gray-200'
            }`}>
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/10 text-gray-200 px-4 py-2 rounded-lg">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-white/20">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask about Node.js..."
            className="flex-1 px-3 py-2 bg-white/10 text-white rounded-lg placeholder-gray-400 outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading}
            className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50"
          >
            <svg width="16" height="16" viewBox="0 0 100 100" fill="currentColor">
              <polygon points="10,50 90,10 90,90"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

window.AIAssistant = AIAssistant;