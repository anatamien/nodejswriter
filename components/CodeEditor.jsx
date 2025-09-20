import React, { useState } from 'react';

function CodeEditor({ initialCode = '', onRun, readOnly = false }) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = async () => {
    if (isRunning) return;
    
    setIsRunning(true);
    setOutput('Running code...');
    
    // Simulate code execution
    setTimeout(() => {
      try {
        // Simple evaluation for demonstration
        if (code.includes('console.log')) {
          const matches = code.match(/console\.log\((.*?)\)/g);
          if (matches) {
            const outputs = matches.map(match => {
              const content = match.replace(/console\.log\(|\)/g, '');
              return eval(content);
            });
            setOutput(outputs.join('\n'));
          }
        } else {
          setOutput('Code executed successfully!');
        }
      } catch (error) {
        setOutput(`Error: ${error.message}`);
      }
      setIsRunning(false);
    }, 1000);
    
    if (onRun) onRun(code);
  };

  return (
    <div className="glass-morphism-dark rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-black/30">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-2 text-white font-medium">Code Editor</span>
        </div>
        
        {!readOnly && (
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-2 px-3 py-1 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50"
          >
            <svg width="16" height="16" viewBox="0 0 100 100" fill="currentColor">
              <polygon points="20,10 20,90 80,50"/>
            </svg>
            {isRunning ? 'Running...' : 'Run'}
          </button>
        )}
      </div>
      
      <div className="p-4">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          readOnly={readOnly}
          className="w-full h-64 bg-transparent text-white resize-none outline-none font-mono text-sm"
          placeholder="Write your Node.js code here..."
        />
      </div>
      
      {output && (
        <div className="border-t border-white/20 p-4">
          <div className="text-sm text-gray-400 mb-2">Output:</div>
          <pre className="text-emerald-400 font-mono text-sm whitespace-pre-wrap">{output}</pre>
        </div>
      )}
    </div>
  );
}

window.CodeEditor = CodeEditor;