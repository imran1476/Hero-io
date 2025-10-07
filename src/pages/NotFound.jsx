// src/pages/NotFound.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    // Figma-এর Error-404 ডিজাইন অনুযায়ী
    <div className="text-center py-20 min-h-[70vh] flex flex-col items-center justify-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-8">Error-404</h1>
        
        {/* Illustration (Figma অনুযায়ী) */}
        {/* এই ইমেজটি আপনার 'assets' ফোল্ডারে রাখুন এবং পথটি সঠিক করুন */}
        <img 
          src="/assets/error-404-illustration.svg" 
          alt="Page Not Found Illustration" 
          className="w-full h-auto mb-8"
        />

        <h2 className="text-3xl font-bold text-white mb-2">Oops, page not found!</h2>
        <p className="text-gray-400 mb-6">
          The page you are looking for is not available.
        </p>

        <button 
          onClick={() => navigate('/')} // হোমে ফিরে যাওয়ার বাটন
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;