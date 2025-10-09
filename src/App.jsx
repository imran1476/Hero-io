

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllApps from './pages/AllApps';
import AppDetails from './pages/AppDetails';
import Installation from './pages/Installation'; 
import NotFound from './pages/NotFound';      


const App = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      
      <Header />
      
      <main className="flex-grow ">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<AllApps />} />
          <Route path="/installation" element={<Installation />} />
          
          
          <Route path="/app/:id" element={<AppDetails />} />
          
         
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      
    </div>
  );
};

export default App;