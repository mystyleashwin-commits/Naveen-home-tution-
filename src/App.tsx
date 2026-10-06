/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { FloatingContactButtons } from './components/common/FloatingContactButtons';
import { SEOHead } from './components/common/SEOHead';
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ParentsPage } from './pages/ParentsPage';
import { TutorsPage } from './pages/TutorsPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const getInitialRoute = (): PageRoute => {
    if (typeof window === 'undefined') return '/';
    const path = window.location.pathname as PageRoute;
    const validRoutes: PageRoute[] = ['/', '/about', '/parents', '/tutors', '/how-it-works', '/contact'];
    return validRoutes.includes(path) ? path : '/';
  };

  const [currentRoute, setCurrentRoute] = useState<PageRoute>(getInitialRoute);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname as PageRoute;
      const validRoutes: PageRoute[] = ['/', '/about', '/parents', '/tutors', '/how-it-works', '/contact'];
      setCurrentRoute(validRoutes.includes(path) ? path : '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (route: PageRoute) => {
    if (currentRoute !== route) {
      window.history.pushState({}, '', route);
      setCurrentRoute(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#101828] selection:bg-blue-100 selection:text-blue-900">
      {/* Dynamic SEO metadata synchronization */}
      <SEOHead route={currentRoute} />

      {/* Top 3-Zone Global Navigation Header */}
      <Header currentRoute={currentRoute} onNavigate={navigate} />

      {/* Dynamic Route Content */}
      <div className="flex-1">
        {currentRoute === '/' && <HomePage onNavigate={navigate} />}
        {currentRoute === '/about' && <AboutUsPage onNavigate={navigate} />}
        {currentRoute === '/parents' && <ParentsPage onNavigate={navigate} />}
        {currentRoute === '/tutors' && <TutorsPage onNavigate={navigate} />}
        {currentRoute === '/how-it-works' && <HowItWorksPage onNavigate={navigate} />}
        {currentRoute === '/contact' && <ContactPage onNavigate={navigate} />}
      </div>

      {/* Global Comprehensive Footer */}
      <Footer onNavigate={navigate} />

      {/* Floating Instant WhatsApp & Call Assistance */}
      <FloatingContactButtons />
    </div>
  );
}
