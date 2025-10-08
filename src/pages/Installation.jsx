// src/pages/Installation.jsx

import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { appData } from '../data/appData';
import useLocalStorage from '../hooks/useLocalStorage'; 
import { FaDownload, FaStar, FaTrashAlt } from 'react-icons/fa'; // UnInstall আইকন

// Key for localStorage
const INSTALLED_APPS_KEY = 'installed_apps';

const Installation = () => {
  const [installedAppIds, setInstalledAppIds] = useLocalStorage(INSTALLED_APPS_KEY, []);
  const navigate = useNavigate();

  // ইনস্টল করা অ্যাপের ডেটা useMemo ব্যবহার করে বের করা
  const installedApps = useMemo(() => {
    // শুধুমাত্র সেই অ্যাপগুলো ফিল্টার করা যাদের ID localStorage-এ আছে
    return appData.filter(app => installedAppIds.includes(app.id));
  }, [installedAppIds]);

  // Uninstall হ্যান্ডেলার
  const handleUninstall = (appId, appTitle) => {
    // localStorage থেকে অ্যাপ ID মুছে দেওয়া
    setInstalledAppIds(prevIds => prevIds.filter(id => id !== appId));
    
    // টোস্ট নোটিফিকেশন দেখানো
    toast.info(`'${appTitle}' has been successfully uninstalled.`, { position: "top-center" });
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8   min-h-[70vh]">
      <ToastContainer />
      <h1 className="text-4xl font-bold text-center text-[#001931]mb-2">Your Installed Apps</h1> <br />
      <p className="text-center text-gray-400 mb-8">Explore All Trending Apps on the Market developed by us.</p>

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
            {/* Installed App List (Figma Design অনুযায়ী) */}
            {installedApps.map((app) => (
              <div 
                key={app.id} 
                className="flex items-center justify-between p-3 bg-gray-700 rounded-lg transition duration-300 hover:bg-gray-600"
              >
                <div 
                    onClick={() => navigate(`/app/${app.id}`)}
                    className="flex items-center space-x-4 cursor-pointer flex-grow"
                >
                    {/* App Icon */}
                    <img src={app.image} alt={app.title} className="w-12 h-12 rounded-lg object-contain" />
                    
                    {/* Details */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">{app.title}</h3>
                        <div className="flex items-center text-sm text-gray-400 space-x-3">
                            <span className='flex items-center'><FaDownload className="text-green-400 mr-1" size={10} /> {Math.round(app.downloads / 100000) / 10}M</span>
                            <span className='flex items-center'><FaStar className="text-yellow-500 mr-1" size={10} /> {app.ratingAvg}</span>
                            <span>{app.size} MB</span>
                        </div>
                    </div>
                </div>

                {/* Uninstall Button */}
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