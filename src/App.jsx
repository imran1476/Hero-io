// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllApps from './pages/AllApps';
import AppDetails from './pages/AppDetails';
import Installation from './pages/Installation'; // নতুন পেজ
import NotFound from './pages/NotFound';       // 404 Error Page

// Note: Header and Footer are placed outside <Routes> 
// so they appear on every page.

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      
      <Header />
      
      <main className="flex-grow">
        {/* Page Navigation Loading Animation এখানে ম্যানেজ করা যেতে পারে */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<AllApps />} />
          <Route path="/installation" element={<Installation />} />
          
          {/* Dynamic Route: App ID অনুযায়ী App Details পেজ */}
          <Route path="/app/:id" element={<AppDetails />} />
          
          {/* Fallback Route: Invalid URL (Error 404 Page) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      
    </div>
  );
};

export default App;