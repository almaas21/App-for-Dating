import React from 'react';
      import TinderLikeApp from './TinderLikeApp';

      function App() {
        return (
          <div className="App">
            <h1 className="text-4xl font-bold text-red-500">Debug: React is rendering</h1>
            <div className="text-2xl text-blue-500">
              TinderLikeApp component below:
            </div>
            <TinderLikeApp />
          </div>
        );
      }

      export default App;
