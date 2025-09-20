import React, { useState } from 'react';

function Practice() {
  const [selectedExercise, setSelectedExercise] = useState(0);

  const exercises = [
    {
      title: 'Basic HTTP Server',
      description: 'Create a simple HTTP server that responds with "Hello World"',
      starterCode: `const http = require('http');

// Create your server here
const server = http.createServer((req, res) => {
  // Your code here
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
      solution: `const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});`
    },
    {
      title: 'File Operations',
      description: 'Read and write files using the fs module',
      starterCode: `const fs = require('fs');

// Write to a file
// Your code here

// Read from a file
// Your code here`,
      solution: `const fs = require('fs');

// Write to a file
fs.writeFile('example.txt', 'Hello Node.js!', (err) => {
  if (err) throw err;
  console.log('File saved!');
});

// Read from a file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File content:', data);
});`
    },
    {
      title: 'Express Route Handler',
      description: 'Create Express routes for a simple API',
      starterCode: `const express = require('express');
const app = express();

app.use(express.json());

// Create routes for:
// GET /api/users - return list of users
// POST /api/users - create a new user
// GET /api/users/:id - get user by id

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
      solution: `const express = require('express');
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// GET /api/users - return list of users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// POST /api/users - create a new user
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// GET /api/users/:id - get user by id
app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json(user);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`
    },
    {
      title: 'Async/Await Practice',
      description: 'Convert callback-based code to async/await',
      starterCode: `const fs = require('fs').promises;

// Convert this callback-based function to async/await
function readMultipleFiles(callback) {
  fs.readFile('file1.txt', 'utf8', (err, data1) => {
    if (err) return callback(err);
    
    fs.readFile('file2.txt', 'utf8', (err, data2) => {
      if (err) return callback(err);
      
      callback(null, data1 + data2);
    });
  });
}

// Your async/await version here`,
      solution: `const fs = require('fs').promises;

async function readMultipleFiles() {
  try {
    const data1 = await fs.readFile('file1.txt', 'utf8');
    const data2 = await fs.readFile('file2.txt', 'utf8');
    
    return data1 + data2;
  } catch (error) {
    throw error;
  }
}

// Usage
readMultipleFiles()
  .then(result => console.log(result))
  .catch(error => console.error(error));`
    }
  ];

  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gradient mb-4">Practice</h1>
          <p className="text-xl text-white/80">Hands-on coding exercises to master Node.js</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Exercise List */}
          <div className="lg:col-span-1">
            <div className="glass-morphism-dark p-4 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-4">Exercises</h3>
              <div className="space-y-2">
                {exercises.map((exercise, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedExercise(index);
                      setShowSolution(false);
                    }}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      selectedExercise === index
                        ? 'bg-emerald-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <div className="font-medium">{exercise.title}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Exercise Content */}
          <div className="lg:col-span-3">
            <div className="glass-morphism-dark p-6 rounded-xl mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">
                  {exercises[selectedExercise].title}
                </h2>
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="px-4 py-2 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-600 transition-colors"
                >
                  {showSolution ? 'Hide Solution' : 'Show Solution'}
                </button>
              </div>
              <p className="text-gray-300 mb-6">{exercises[selectedExercise].description}</p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Your Code</h3>
                <window.CodeEditor 
                  initialCode={exercises[selectedExercise].starterCode}
                  readOnly={false}
                />
              </div>

              {showSolution && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">Solution</h3>
                  <window.CodeEditor 
                    initialCode={exercises[selectedExercise].solution}
                    readOnly={true}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.Practice = Practice;