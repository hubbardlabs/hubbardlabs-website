import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SnippetsPage from './pages/SnippetsPage';
import SnippetDetail from './pages/SnippetDetail';
import ServicesPage from './pages/ServicesPage';
import IDXBrokerPage from './pages/IDXBrokerPage';
import WordPressDevPage from './pages/WordPressDevPage';
import PerformanceOptimizationPage from './pages/PerformanceOptimizationPage';
import MaintenancePage from './pages/MaintenancePage';
import PortfolioPage from './pages/PortfolioPage';
import PortfolioDetailPage from './pages/PortfolioDetailPage';
import ScreenshotsPage from './pages/ScreenshotsPage';
import PageContent from './pages/PageContent';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
            </>
          } />
          <Route path="/code" element={<SnippetsPage />} />
          <Route path="/code/:id" element={<SnippetDetail />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/idxbroker" element={<IDXBrokerPage />} />
          <Route path="/services/wordpress-development" element={<WordPressDevPage />} />
          <Route path="/services/performance-optimization" element={<PerformanceOptimizationPage />} />
          <Route path="/services/maintenance" element={<MaintenancePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
          <Route path="/screenshots" element={<ScreenshotsPage />} />
          <Route path="/:slug" element={<PageContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;