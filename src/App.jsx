import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

// Pages
import Home from './pages/Home';
import CLD from './pages/CLD';
import EPSAnalysis from './pages/EPSAnalysis';
import SystemArchetypes from './pages/SystemArchetypes';
import Interventions from './pages/Interventions';
import Evaluation from './pages/Evaluation';
import Summary from './pages/Summary';
import Solutions from './pages/Solutions';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen">
        <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center space-x-8">
                <Link to="/" className="text-xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
                  Digital Addiction Analysis
                </Link>
                <div className="hidden md:flex space-x-4">
                  <Link to="/solutions" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    Solutions
                  </Link>
                  <Link to="/cld" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    CLD
                  </Link>
                  <Link to="/eps-analysis" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    EPS Analysis
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {darkMode ? (
                    <SunIcon className="h-6 w-6 text-yellow-500" />
                  ) : (
                    <MoonIcon className="h-6 w-6 text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/cld" element={<CLD />} />
            <Route path="/eps-analysis" element={<EPSAnalysis />} />
            <Route path="/system-archetypes" element={<SystemArchetypes />} />
            <Route path="/interventions" element={<Interventions />} />
            <Route path="/evaluation" element={<Evaluation />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
