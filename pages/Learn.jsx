import React, { useState } from 'react';

function Learn() {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const lessons = [
    {
      id: 1,
      title: 'Node.js Basics',
      description: 'Introduction to Node.js runtime and core concepts',
      duration: '15 min',
      difficulty: 'Beginner',
      content: {
        theory: `
          <h3>What is Node.js?</h3>
          <p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server side.</p>
          
          <h3>Key Features:</h3>
          <ul>
            <li>Asynchronous and Event-driven</li>
            <li>Single-threaded with event loop</li>
            <li>Cross-platform</li>
            <li>Fast execution</li>
          </ul>
          
          <h3>Why Node.js?</h3>
          <p>Node.js is perfect for building scalable network applications due to its non-blocking I/O model.</p>
        `,
        code: `// Hello World in Node.js
console.log('Hello, Node.js!');

// Working with modules
const fs = require('fs');
const path = require('path');

// Asynchronous file reading
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});`
      }
    },
    {
      id: 2,
      title: 'CommonJS vs ESM',
      description: 'Understanding module systems in Node.js',
      duration: '20 min',
      difficulty: 'Intermediate',
      content: {
        theory: `
          <h3>Module Systems</h3>
          <p>Node.js supports two module systems: CommonJS (default) and ES Modules (ESM).</p>
          
          <h3>CommonJS</h3>
          <p>Uses require() and module.exports</p>
          
          <h3>ES Modules (ESM)</h3>
          <p>Uses import and export statements</p>
          
          <h3>Key Differences:</h3>
          <ul>
            <li>CommonJS is synchronous, ESM is asynchronous</li>
            <li>ESM has better tree-shaking support</li>
            <li>ESM is the future standard</li>
          </ul>
        `,
        code: `// CommonJS example
const express = require('express');
const app = express();

module.exports = {
  start: () => {
    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  }
};

// ESM example (requires "type": "module" in package.json)
import express from 'express';
const app = express();

export const start = () => {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
};`
      }
    },
    {
      id: 3,
      title: 'Asynchronous Programming',
      description: 'Callbacks, Promises, and async/await in Node.js',
      duration: '25 min',
      difficulty: 'Intermediate',
      content: {
        theory: `
          <h3>Asynchronous Programming</h3>
          <p>Node.js is built around asynchronous programming to handle I/O operations efficiently.</p>
          
          <h3>Evolution of Async Programming:</h3>
          <ol>
            <li>Callbacks (callback hell)</li>
            <li>Promises (better error handling)</li>
            <li>Async/Await (synchronous-like syntax)</li>
          </ol>
          
          <h3>Best Practices:</h3>
          <ul>
            <li>Use async/await for cleaner code</li>
            <li>Handle errors properly</li>
            <li>Avoid blocking the event loop</li>
          </ul>
        `,
        code: `// Callback example
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Promise example
const fsPromises = require('fs').promises;

fsPromises.readFile('file.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Async/Await example
async function readFileAsync() {
  try {
    const data = await fsPromises.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readFileAsync();`
      }
    },
    {
      id: 4,
      title: 'Express.js Fundamentals',
      description: 'Building web applications with Express framework',
      duration: '30 min',
      difficulty: 'Intermediate',
      content: {
        theory: `
          <h3>Express.js</h3>
          <p>Express is a minimal and flexible Node.js web application framework that provides robust features for web and mobile applications.</p>
          
          <h3>Key Features:</h3>
          <ul>
            <li>Routing</li>
            <li>Middleware</li>
            <li>Template engines</li>
            <li>Error handling</li>
          </ul>
          
          <h3>Middleware</h3>
          <p>Functions that execute during the request-response cycle. They can modify request/response objects or end the cycle.</p>
        `,
        code: `const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Custom middleware
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.path} - \${new Date().toISOString()}\`);
  next();
});

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello Express!' });
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, name: \`User \${id}\` });
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({ id: Date.now(), name, email });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`
      }
    }
  ];

  if (selectedLesson) {
    const lesson = lessons.find(l => l.id === selectedLesson);
    return (
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setSelectedLesson(null)}
            className="flex items-center gap-2 text-white mb-6 hover:text-emerald-400 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor">
              <polygon points="40,20 10,50 40,80 50,70 30,50 50,30"/>
            </svg>
            Back to Lessons
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-morphism-dark p-6 rounded-xl">
              <h2 className="text-3xl font-bold text-white mb-6">{lesson.title}</h2>
              <div 
                className="prose prose-invert max-w-none text-gray-300"
                dangerouslySetInnerHTML={{ __html: lesson.content.theory }}
              />
            </div>
            
            <div>
              <window.CodeEditor 
                initialCode={lesson.content.code}
                readOnly={false}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gradient mb-4">Learn Node.js</h1>
          <p className="text-xl text-white/80">Master Node.js concepts with interactive lessons</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lessons.map((lesson) => (
            <window.LessonCard
              key={lesson.id}
              lesson={lesson}
              onClick={() => setSelectedLesson(lesson.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

window.Learn = Learn;
window.start = start;