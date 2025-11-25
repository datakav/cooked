import { useState, useEffect } from 'react';
import Header from './components/Header';
import NaanSenseChat from './components/NaanSenseChat';
import FreeTierAlert from './components/FreeTierAlert';
import PricingModal from './components/PricingModal';
import PremiumContent from './components/PremiumContent';
import FeatureHints from './components/FeatureHints';

function App() {
  const [currentView, setCurrentView] = useState('intro'); // intro | alert | premium
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    console.log('Dark mode changed to:', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
      console.log('Added dark class, classes:', document.documentElement.className);
    } else {
      document.documentElement.classList.remove('dark');
      console.log('Removed dark class, classes:', document.documentElement.className);
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleShowInsights = () => {
    setCurrentView('alert');
  };

  const handleGetPlan = () => {
    setShowPricingModal(true);
  };

  const handleStartTrial = () => {
    setShowPricingModal(false);
    setCurrentView('premium');
  };

  const handleCloseModal = () => {
    setShowPricingModal(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden transition-colors">
      <Header darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />

      <main className="px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-12 max-w-full">
        {currentView === 'intro' && (
          <NaanSenseChat onShowInsights={handleShowInsights} />
        )}

        {currentView === 'alert' && (
          <>
            <NaanSenseChat onShowInsights={handleShowInsights} />
            <FreeTierAlert onGetPlan={handleGetPlan} />
          </>
        )}

        {currentView === 'premium' && (
          <>
            <PremiumContent />
            <FeatureHints />
          </>
        )}
      </main>

      <PricingModal
        isOpen={showPricingModal}
        onClose={handleCloseModal}
        onStartTrial={handleStartTrial}
      />
    </div>
  );
}

export default App;
