import { PageRoute } from '../../types';
import { siteConfig, getPhoneLink, getWhatsAppLink } from '../../config/siteConfig';
import { Phone, MessageCircle, Mail, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#155EEF] text-white flex items-center justify-center font-bold text-lg">
                N
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Naveen Home Tuitions
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Connecting parents and students with suitable home and online tutors across Hyderabad.
            </p>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href={getPhoneLink()}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#155EEF]" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#12B76A]" />
                <span>WhatsApp: {siteConfig.whatsappDisplay}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{siteConfig.email}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-100 mb-4">
              Navigation
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('/')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/about')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/parents')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  For Parents
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/tutors')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  For Tutors
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/how-it-works')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/contact')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Service Areas Column */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-100 mb-4">
              Hyderabad Service Areas
            </h2>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-slate-400">
              {siteConfig.serviceAreas.map((area) => (
                <li key={area.name}>
                  <button
                    onClick={() => handleNav('/parents')}
                    className="hover:text-blue-300 transition-colors text-left truncate cursor-pointer"
                  >
                    {area.name}
                  </button>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-slate-500 mt-3 italic">
              Home tuition availability is subject to tutor matching in specific localities.
            </p>
          </div>

          {/* User Journeys CTA column */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-100 mb-4">
              Direct Portals
            </h2>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60">
                <div className="text-xs font-medium text-white mb-1">Need a Home Tutor?</div>
                <p className="text-[11px] text-slate-400 mb-2">
                  Share class, subject, and area to connect with suitable tutors.
                </p>
                <button
                  onClick={() => handleNav('/parents')}
                  className="text-xs font-semibold text-[#155EEF] hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Find a Tutor &rarr;
                </button>
              </div>

              <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60">
                <div className="text-xs font-medium text-white mb-1">Looking for Students?</div>
                <p className="text-[11px] text-slate-400 mb-2">
                  Register your profile to receive relevant tuition opportunities.
                </p>
                <button
                  onClick={() => handleNav('/tutors')}
                  className="text-xs font-semibold text-[#12B76A] hover:text-green-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Register as Tutor &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; 2026 Naveen Home Tuitions. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>Hyderabad, Telangana</span>
            <span>·</span>
            <span>Home & Online Tutoring Service</span>
            <span>·</span>
            <a
              href={siteConfig.googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-200 transition-colors inline-flex items-center gap-1"
            >
              <span>Google Business Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
