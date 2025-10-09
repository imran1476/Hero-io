// src/pages/AllApps.jsx

import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppCard from '../components/AppCard';
import { appData } from '../data/appData';
import LoadingSpinner from '../components/LoadingSpinner'; // লোডিং স্পিনার

const AllApps = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('high-low'); // default sort
  const [isLoading, setIsLoading] = useState(false); // লোডিং স্টেট

  // Filtered & Sorted Apps
  const filteredAndSortedApps = useMemo(() => {
    const filtered = appData.filter(app =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sorted = [...filtered].sort((a, b) =>
      sortBy === 'high-low' ? b.downloads - a.downloads : a.downloads - b.downloads
    );

    return sorted;
  }, [searchTerm, sortBy]);

  // Loading state effect
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 200); // smooth loading
    return () => clearTimeout(timer);
  }, [searchTerm, sortBy]);

  return (
    <div className="max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[70vh]">
      
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-center text-[#001931] mt-4 mb-4">
        Our All Applications
      </h1>
      <p className="text-center text-gray-400 mb-8">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      
      {/* Search, State & Sort Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
        
        {/* Total Apps Found */}
        <p className="text-gray-500">
          <span className="font-bold text-lg">({filteredAndSortedApps.length})</span> Apps Found
        </p>

        {/* Search Bar */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search Apps..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-800 text-white rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {/* Search Icon */}
          <svg
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        
        {/* Sort Dropdown */}
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-gray-500 hidden sm:block text-lg">
            Sort By:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-800 text-white rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="high-low">Downloads: High-Low</option>
            <option value="low-high">Downloads: Low-High</option>
          </select>
        </div>
      </div>

      {/* Loading Spinner */}
      {isLoading && (
        <div className="min-h-[40vh] flex items-center justify-center">
          <LoadingSpinner />
        </div>
      )}

      {/* App Grid Section */}
      {!isLoading && (
        filteredAndSortedApps.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredAndSortedApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-800 rounded-lg mt-10">
            <img
              src="https://i.ibb.co.com/fdZDT76Q/App-Error.png"
              alt=""
              className="w-[150px] h-[150px] rounded-2xl mx-auto"
            />
            <h2 className="text-2xl font-bold text-white mb-2">No App Found</h2>
            <p className="text-gray-400">
              Sorry, no applications matched your search for{' '}
              <span className="text-purple-400 font-semibold">"{searchTerm}"</span>.
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default AllApps;
