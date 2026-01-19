
import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import { BackgroundEffect } from './components/BackgroundEffect';
import { ViewState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('LANDING');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle smooth transition between pages
  const handleTransition = (nextView: ViewState) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setView(nextView);
      window.scrollTo(0, 0);
      setIsTransitioning(false);
    }, 600); // Duration of fade-out
  };

  return (
    <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
      <BackgroundEffect />
      
      <div className="relative z-10">
        {view === 'LANDING' ? (
          <LandingPage onNext={() => handleTransition('DASHBOARD')} />
        ) : (
          <DashboardPage />
        )}
      </div>
      
      {/* Global Transition Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 bg-[#050505] z-[100] flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-white/10 border-t-indigo-500 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default App;
