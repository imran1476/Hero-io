

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { appData } from '../data/appData';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import useLocalStorage from '../hooks/useLocalStorage';
import { FaDownload, FaStar, FaEye } from 'react-icons/fa';


const INSTALLED_APPS_KEY = 'installed_apps';

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const appId = parseInt(id); 
  
  
  const app = appData.find(a => a.id === appId);

  const [installedApps, setInstalledApps] = useLocalStorage(INSTALLED_APPS_KEY, []);


  const isInstalled = installedApps.includes(appId);

  if (!app) {
    return (
      <div className="text-center py-20    min-h-[60vh]">
         <img
              src="https://i.ibb.co.com/fdZDT76Q/App-Error.png"
              alt=""
              className="w-[150px] h-[150px] rounded-2xl mx-auto"
            />
     
        <h1 className="text-4xl font-bold text-white mb-4">Error-App Not Found</h1>
        <p className="text-gray-400 mb-6">OPPS!! APP NOT FOUND</p>
        <p className="text-gray-500">The App you are requesting is not found on our system. Please try another app.</p>
        <button 
          onClick={() => navigate('/apps')}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg mt-6 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  
  const handleInstall = () => {
    if (!isInstalled) {
      
      setInstalledApps(prev => [...prev, appId]);
      toast.success(`'${app.title}' successfully installed!`, { position: "top-center" });
    }
  };
  
  
  const chartData = app.ratings.map(r => ({
    name: r.name,
    count: r.count
  })).reverse(); 

  return (
    <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-8 text-white">
      <ToastContainer />
      
      
      <div className="grid md:grid-cols-3 gap-8 mb-12 bg-gray-800 p-6 rounded-xl shadow-lg">
  
        <div className="md:col-span-1 flex justify-center items-center">
          
          <img src={app.image} alt={app.title} className="w-48 h-48 object-contain rounded-xl border border-gray-700 p-2" />
        </div>
        
        
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-1">{app.title}</h1>
          <p className="text-gray-400 mb-4">Developed by <span className="text-purple-400">{app.companyName}</span></p>
          
          <div className="flex  space-x-6 mb-6">
            <StatPill  icon={<FaDownload />} value={`${Math.round(app.downloads / 100000) / 10}M`} label="Downloads" />
            <StatPill icon={<FaStar />} value={app.ratingAvg} label="Average Rating" />
            <StatPill icon={<FaEye />} value={`${Math.round(app.reviews / 1000)}K`} label="Total Reviews" />
          </div>

          
          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`font-bold py-3 px-8 rounded-lg transition duration-300 ${
              isInstalled 
                ? 'bg-green-600 text-white cursor-not-allowed opacity-75' 
                : 'bg-purple-600 hover:bg-purple-700 text-white'
            }`}
          >
            {isInstalled ? 'Installed' : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>
      
      
      
     
      <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Ratings Breakdown</h2>
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-12 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={chartData} 
            layout="vertical"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis type="number" stroke="#9ca3af" tickFormatter={(value) => `${Math.round(value / 1000)}k`} />
            <YAxis type="category" dataKey="name" stroke="#9ca3af" />
            <Tooltip 
                contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
                formatter={(value) => [`${Math.round(value / 1000)}k reviews`, 'Count']}
            />
            
            <Bar dataKey="count" fill="#f97316" /> 
          </BarChart>
        </ResponsiveContainer>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Description</h2>
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <p className="text-gray-300 whitespace-pre-line leading-relaxed">{app.description}</p>
      </div>

    </div>
  );
};


const StatPill = ({ icon, value, label }) => (
    <div className="text-center">
        <div className="text-3xl text-purple-400 mb-1">{icon}</div>
        <p className="text-xl font-bold text-white">{value}</p>
        <p className="text-sm text-gray-400">{label}</p>
    </div>
);

export default AppDetails;