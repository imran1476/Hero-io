 
import { Link } from 'react-router-dom';
import { FaDownload, FaStar } from 'react-icons/fa';

const AppCard = ({ app }) => {
  return (
    
 <Link to={`/app/${app.id}`} className="block bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.02]">
  <div className="p-4 flex flex-col h-full">
       
<div className="w-full h-32 bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
          
<img 
  src={app.image} 
 alt={`${app.title} logo`} 
  className="h-full w-full   p-2" 
 onError={(e) => { e.target.style.display = 'none'; }}  
          />
        </div>
        
       
   <h3 className="text-white text-base font-semibold truncate mb-2">{app.title}</h3>
 <div className="flex justify-between items-center text-sm text-gray-400 mt-auto">
 <div className="flex items-center space-x-1">
   <FaDownload className="text-green-400" />
  <span>{Math.round(app.downloads / 100000) / 10}M</span> 
 </div>
          
      
 <div className="flex items-center space-x-1">
  <FaStar className="text-yellow-500" />
  <span>{app.ratingAvg}</span>
   </div>
   </div>
   </div>
    </Link>
  );
};

export default AppCard;