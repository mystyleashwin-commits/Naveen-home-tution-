import { useState } from 'react';
import { PageRoute } from '../../types';
import { siteConfig, getPhoneLink, getWhatsAppLink } from '../../config/siteConfig';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export function Header({ currentRoute, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: Array<{ label: string; route: PageRoute }> = [
    { label: 'Home', route: '/' },
    { label: 'About Us', route: '/about' },
    { label: 'For Parents', route: '/parents' },
    { label: 'For Tutors', route: '/tutors' },
    { label: 'How It Works', route: '/how-it-works' },
    { label: 'Contact', route: '/contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
      {/* Top quick announcement bar for Hyderabad tutors & parents */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#12B76A]"></span>
            <span>Serving Hyderabad: Attapur · Mehdipatnam · Tolichowki · Langer House · Rajendranagar & nearby</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={getPhoneLink()}
              className="flex items-center gap-1.5 text-white hover:text-blue-300 transition-colors"
              aria-label="Call Naveen Home Tuitions"
            >
              <Phone className="w-3.5 h-3.5 text-[#155EEF]" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white hover:text-green-300 transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#12B76A]" />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 3-Zone Navigation */}
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-20 lg:h-18">
          {/* Zone 1: Clean Brand Wordmark */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none group cursor-pointer shrink-0"
            aria-label="Naveen Home Tuitions Home"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#155EEF] text-white flex items-center justify-center font-bold text-xl sm:text-2xl shadow-sm group-hover:bg-[#104ec6] transition-colors shrink-0">
              N
            </div>
            <div className="min-w-0">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#101828] group-hover:text-[#155EEF] transition-colors block leading-tight">
                Naveen Home Tuitions
              </span>
              <span className="text-xs sm:text-[13px] font-medium text-[#667085] mt-0.5 block leading-none">
                Hyderabad · Home & Online Tutors
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`text-sm font-medium transition-colors cursor-pointer relative py-1 ${
                    isActive
                      ? 'text-[#155EEF] font-semibold'
                      : 'text-[#667085] hover:text-[#101828]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#155EEF] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Header CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('/parents')}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-[#155EEF] hover:bg-[#104ec6] rounded-lg shadow-xs transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              Find a Tutor
            </button>
            <button
              onClick={() => handleNavClick('/tutors')}
              className="px-4 py-2.5 text-xs font-semibold text-[#12B76A] border border-[#12B76A] hover:bg-[#ecfdf3] rounded-lg transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              Register as Tutor
            </button>
          </div>

          {/* Mobile Menu & Quick Actions button */}
          <div className="flex items-center justify-end gap-1.5 sm:gap-2 lg:hidden shrink-0 ml-auto">
            <button
              onClick={() => handleNavClick('/parents')}
              className="ml-auto px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#155EEF] hover:bg-[#104ec6] rounded-lg shadow-xs sm:hidden whitespace-nowrap active:scale-[0.98] transition-colors"
            >
              Find Tutor
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0 -mr-1"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base sm:text-lg font-medium text-left transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-[#155EEF] font-semibold'
                      : 'text-[#101828] hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#155EEF]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-4 mt-3 border-t border-slate-100 grid grid-cols-2 gap-2.5">
            <button
              onClick={() => handleNavClick('/parents')}
              className="w-full py-3 px-3.5 text-center text-sm font-semibold text-white bg-[#155EEF] hover:bg-[#104ec6] rounded-xl shadow-xs active:scale-[0.98] transition-all"
            >
              Find a Tutor
            </button>
            <button
              onClick={() => handleNavClick('/tutors')}
              className="w-full py-3 px-3.5 text-center text-sm font-semibold text-[#12B76A] border border-[#12B76A] hover:bg-[#ecfdf3] rounded-xl active:scale-[0.98] transition-all"
            >
              Register as Tutor
            </button>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-around text-xs sm:text-sm text-slate-700">
            <a
              href={getPhoneLink()}
              className="flex items-center gap-2 text-slate-800 font-semibold py-1.5 px-3 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#155EEF]" />
              <span>Call Us</span>
            </a>
            <span className="text-slate-300">·</span>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#12B76A] font-semibold py-1.5 px-3 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#12B76A]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
