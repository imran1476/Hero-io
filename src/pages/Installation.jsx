// src/pages/Installation.jsx

import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { appData } from '../data/appData';
import useLocalStorage from '../hooks/useLocalStorage'; 
import { FaDownload, FaStar, FaTrashAlt } from 'react-icons/fa'; // UnInstall আইকন

// Key for localStorage
const INSTALLED_APPS_KEY = 'installed_apps';

const Installation = () => {
  const [installedAppIds, setInstalledAppIds] = useLocalStorage(INSTALLED_APPS_KEY, []);
  const [sortBy, setSortBy] = useState('high-low'); // নতুন sort state
  const navigate = useNavigate();

  // ইনস্টল করা অ্যাপের ডেটা useMemo ব্যবহার করে বের করা এবং sort করা
  const installedApps = useMemo(() => {
    const filtered = appData.filter(app => installedAppIds.includes(app.id));

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'high-low') {
        return b.downloads - a.downloads;
      } else if (sortBy === 'low-high') {
        return a.downloads - b.downloads;
      }
      return 0;
    });

    return sorted;
  }, [installedAppIds, sortBy]);

  // Uninstall হ্যান্ডেলার
  const handleUninstall = (appId, appTitle) => {
    setInstalledAppIds(prevIds => prevIds.filter(id => id !== appId));
    toast.info(`'${appTitle}' has been successfully uninstalled.`, { position: "top-center" });
  };
  
  return (
    <div className="max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[70vh]">
      <ToastContainer />
      <h1 className="text-4xl font-bold text-center text-[#001931] mb-2">Your Installed Apps</h1>
      <p className="text-center text-gray-400 mb-8">Explore All Trending Apps on the Market developed by us.</p>

      {/* Sort Section */}
      {installedApps.length > 0 && (
        <div className="flex justify-end mb-4">
          <label htmlFor="sort" className="text-gray-500 hidden sm:block text-lg mr-2">Sort By:</label>
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
      )}

      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <p className="text-gray-300 mb-4">
          <span className="font-bold text-purple-400">{installedApps.length}</span> Apps Found
        </p>
        
        {installedApps.length === 0 ? (
          <div className="text-center py-10">
            <h2 className="text-xl text-gray-400">You have no installed apps yet!</h2>
            <button 
              onClick={() => navigate('/apps')}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg mt-4 transition"
            >
              Browse Apps
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Installed App List */}
            {installedApps.map((app) => (
              <div 
                key={app.id} 
                className="flex items-center justify-between p-3 bg-gray-700 rounded-lg transition duration-300 hover:bg-gray-600"
              >
                <div 
                  onClick={() => navigate(`/app/${app.id}`)}
                  className="flex items-center space-x-4 cursor-pointer flex-grow"
                >
                  <img src={app.image} alt={app.title} className="w-12 h-12 rounded-lg object-contain" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{app.title}</h3>
                    <div className="flex items-center text-sm text-gray-400 space-x-3">
                      <span className="flex items-center">
                        <FaDownload className="text-green-400 mr-1" size={10} /> 
                        {Math.round(app.downloads / 100000) / 10}M
                      </span>
                      <span className="flex items-center">
                        <FaStar className="text-yellow-500 mr-1" size={10} /> {app.ratingAvg}
                      </span>
                      <span>{app.size} MB</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleUninstall(app.id, app.title)}
                  className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 text-sm"
                >
                  <FaTrashAlt />
                  <span>Uninstall</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Installation;
