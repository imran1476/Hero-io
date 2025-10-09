

import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    
    <div className="text-center py-10 min-h-[70vh] flex flex-col items-center justify-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-8">Error-404</h1>
        
       
        <img 
          src="https://i.ibb.co.com/KcdMYb6y/error-404.png" 
          alt="Page Not Found Illustration" 
          className="w-full h-auto mb-8"
        />

        <h2 className="text-3xl font-bold text-white mb-2">Oops, page not found!</h2>
        <p className="text-gray-400 mb-6">
          The page you are looking for is not available.
        </p>

        <button 
          onClick={() => navigate('/')} 
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;