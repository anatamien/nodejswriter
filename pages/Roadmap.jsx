import React, { useState } from 'react';

function Roadmap() {
  const [completedNodes, setCompletedNodes] = useState(new Set([0]));
  const [activeNode, setActiveNode] = useState(0);

  const roadmapNodes = [
    {
      id: 0,
      title: 'JavaScript Fundamentals',
      description: 'Master JavaScript basics before diving into Node.js',
      difficulty: 'Beginner',
      duration: '2-3 weeks',
      topics: ['Variables & Data Types', 'Functions & Scope', 'Objects & Arrays', 'Async Programming']
    },
    {
      id: 1,
      title: 'Node.js Core Concepts',
      description: 'Understanding the Node.js runtime and architecture',
      difficulty: 'Beginner',
      duration: '1-2 weeks',
      topics: ['V8 Engine', 'Event Loop', 'Modules', 'Global Objects']
    },
    {
      id: 2,
      title: 'File System & Streams',
      description: 'Working with files and handling data streams',
      difficulty: 'Beginner',
      duration: '1 week',
      topics: ['fs Module', 'Readable Streams', 'Writable Streams', 'Transform Streams']
    },
    {
      id: 3,
      title: 'HTTP & Web Servers',
      description: 'Building HTTP servers and handling requests',
      difficulty: 'Intermediate',
      duration: '2 weeks',
      topics: ['HTTP Module', 'Request/Response', 'Routing', 'Middleware']
    },
    {
      id: 4,
      title: 'Express.js Framework',
      description: 'Building web applications with Express',
      difficulty: 'Intermediate',
      duration: '2-3 weeks',
      topics: ['Express Setup', 'Routing', 'Middleware', 'Template Engines']
    },
    {
      id: 5,
      title: 'Database Integration',
      description: 'Connecting to databases and managing data',
      difficulty: 'Intermediate',
      duration: '2 weeks',
      topics: ['MongoDB', 'Mongoose', 'SQL Databases', 'Database Design']
    },
    {
      id: 6,
      title: 'Authentication & Security',
      description: 'Implementing user auth and securing applications',
      difficulty: 'Advanced',
      duration: '2 weeks',
      topics: ['JWT', 'Passport.js', 'bcrypt', 'Security Best Practices']
    },
    {
      id: 7,
      title: 'Testing & Debugging',
      description: 'Writing tests and debugging Node.js applications',
      difficulty: 'Advanced',
      duration: '1-2 weeks',
      topics: ['Unit Testing', 'Integration Testing', 'Jest', 'Debugging Tools']
    },
    {
      id: 8,
      title: 'Performance & Optimization',
      description: 'Optimizing Node.js applications for production',
      difficulty: 'Advanced',
      duration: '1-2 weeks',
      topics: ['Profiling', 'Clustering', 'Caching', 'Memory Management']
    },
    {
      id: 9,
      title: 'Deployment & DevOps',
      description: 'Deploying applications to production environments',
      difficulty: 'Advanced',
      duration: '1-2 weeks',
      topics: ['Docker', 'CI/CD', 'Cloud Platforms', 'Monitoring']
    }
  ];

  const handleNodeClick = (nodeId) => {
    setActiveNode(nodeId);
  };

  const markCompleted = (nodeId) => {
    const newCompleted = new Set(completedNodes);
    newCompleted.add(nodeId);
    setCompletedNodes(newCompleted);
    
    // Unlock next node
    if (nodeId + 1 < roadmapNodes.length) {
      setActiveNode(nodeId + 1);
    }
  };

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gradient mb-4">Learning Roadmap</h1>
          <p className="text-xl text-white/80">Your step-by-step journey to Node.js mastery</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Roadmap Path */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {roadmapNodes.map((node, index) => (
                <div key={node.id} className="relative">
                  {/* Connection Line */}
                  {index < roadmapNodes.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-12 bg-gradient-to-b from-emerald-500 to-emerald-700"></div>
                  )}
                  
                  <window.RoadmapNode
                    node={node}
                    isCompleted={completedNodes.has(node.id)}
                    isActive={activeNode === node.id}
                    onClick={() => handleNodeClick(node.id)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Node Details */}
          <div className="lg:col-span-1">
            <div className="glass-morphism-dark p-6 rounded-xl sticky top-24">
              <h3 className="text-2xl font-bold text-white mb-4">
                {roadmapNodes[activeNode].title}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {roadmapNodes[activeNode].description}
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-medium">Difficulty:</span>
                  <span className="text-white">{roadmapNodes[activeNode].difficulty}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-medium">Duration:</span>
                  <span className="text-white">{roadmapNodes[activeNode].duration}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-bold text-white mb-3">Topics Covered:</h4>
                <ul className="space-y-2">
                  {roadmapNodes[activeNode].topics.map((topic, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300">
                      <svg width="16" height="16" viewBox="0 0 100 100" fill="#10b981">
                        <circle cx="50" cy="50" r="40"/>
                        <polyline points="30,50 45,65 70,35" stroke="white" strokeWidth="8" fill="none"/>
                      </svg>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              
              {!completedNodes.has(activeNode) && (
                <button
                  onClick={() => markCompleted(activeNode)}
                  className="w-full px-4 py-3 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  Mark as Completed
                </button>
              )}
              
              {completedNodes.has(activeNode) && (
                <div className="flex items-center justify-center gap-2 p-3 bg-green-500/20 text-green-400 rounded-lg">
                  <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="50" r="40"/>
                    <polyline points="30,50 45,65 70,35" stroke="white" strokeWidth="8" fill="none"/>
                  </svg>
                  Completed!
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Progress Summary */}
        <div className="glass-morphism p-6 rounded-xl mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Progress Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                {completedNodes.size}/{roadmapNodes.length}
              </div>
              <div className="text-gray-300">Modules Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                {Math.round((completedNodes.size / roadmapNodes.length) * 100)}%
              </div>
              <div className="text-gray-300">Progress</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                {roadmapNodes.length - completedNodes.size}
              </div>
              <div className="text-gray-300">Remaining</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.Roadmap = Roadmap;