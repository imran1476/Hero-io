// src/components/LoadingSpinner.jsx

import React from 'react';

// size এবং color prop ব্যবহার করে LoadingSpinnerটিকে আরও কাস্টমাইজ করা যেতে পারে (ঐচ্ছিক)
const LoadingSpinner = ({ size = '80px', color = '#9333ea' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      
      {/* Tailwind CSS-এর সাহায্যে একটি স্টাইলিশ স্পিনার */}
      <div 
        className="animate-spin rounded-full border-t-4 border-b-4 border-purple-500"
        style={{ width: size, height: size, borderColor: color }}
      ></div>
      
      <p className="mt-4 text-white text-lg">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;