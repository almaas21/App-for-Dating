import React, { useState } from 'react';
import { Heart, X } from 'lucide-react';

const TinderLikeApp = () => {
  const [currentProfile, setCurrentProfile] = useState({
    name: 'John Doe',
    age: 28,
    bio: 'I love hiking and trying new restaurants!',
    image: '/api/placeholder/300/400'
  });

  const [matchCount, setMatchCount] = useState(0);

  const handleLike = () => {
    setMatchCount(matchCount + 1);
    // TODO: Implement logic to fetch and display a new profile
  };

  const handleDislike = () => {
    // TODO: Implement logic to fetch and display a new profile
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-rose-400 to-rose-600 p-4">
      <h1 className="text-3xl font-bold text-white mb-8">Tinder-like App</h1>
      <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-sm">
        <img src={currentProfile.image} alt={currentProfile.name} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">{currentProfile.name}, {currentProfile.age}</h2>
          <p className="text-gray-600 mt-2">{currentProfile.bio}</p>
        </div>
        <div className="flex justify-center p-4 bg-gray-100">
          <button 
            onClick={handleDislike} 
            className="bg-white text-red-500 rounded-full p-4 shadow-lg mr-4 transition duration-300 ease-in-out hover:bg-red-100"
            aria-label="Dislike profile"
          >
            <X size={32} />
          </button>
          <button 
            onClick={handleLike} 
            className="bg-white text-green-500 rounded-full p-4 shadow-lg transition duration-300 ease-in-out hover:bg-green-100"
            aria-label="Like profile"
          >
            <Heart size={32} />
          </button>
        </div>
      </div>
      <div className="mt-4 text-white text-xl font-bold">
        Matches: {matchCount}
      </div>
    </div>
  );
};

export default TinderLikeApp;
