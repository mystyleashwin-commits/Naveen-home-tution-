import { PageRoute } from '../../types';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { getPhoneLink, siteConfig } from '../../config/siteConfig';

interface FinalCTASectionProps {
  onNavigate: (route: PageRoute) => void;
}

export function FinalCTASection({ onNavigate }: FinalCTASectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#155EEF_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3 bg-blue-900/50 border border-blue-700/50 px-3 py-1 rounded-full">
          Get Started Today
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
          Looking for a Tutor?
        </h2>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Tell us what you need, and we'll help you find suitable tutoring options.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('/parents')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#155EEF] hover:bg-[#104ec6] text-white font-semibold text-base shadow-md transition-all active:scale-[0.98] cursor-pointer"
          >
            <span>Submit Your Requirement</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <WhatsAppButton
            label="WhatsApp Us"
            customMessage="Hello Naveen Home Tuitions, I am looking for a tutor in Hyderabad. Please help me with the options."
            className="w-full sm:w-auto px-8 py-4 text-base"
          />
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-6">
          <a
            href={getPhoneLink()}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-blue-400" />
            <span>Direct Call: {siteConfig.phoneDisplay}</span>
          </a>
          <span>·</span>
          <span>Response within working hours</span>
          <span>·</span>
          <span>No advance registration fee for parent requirement submission</span>
        </div>
      </div>
    </section>
  );
}
