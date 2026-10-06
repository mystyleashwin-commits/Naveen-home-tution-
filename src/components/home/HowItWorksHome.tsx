import { PageRoute } from '../../types';
import { ArrowRight, FileText, Search, UserCheck, Play } from 'lucide-react';

interface HowItWorksHomeProps {
  onNavigate: (route: PageRoute) => void;
}

export function HowItWorksHome({ onNavigate }: HowItWorksHomeProps) {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Requirement',
      description: 'Tell us the class, subject, location, schedule and budget.',
      icon: FileText,
    },
    {
      number: '02',
      title: 'We Find Suitable Tutors',
      description: 'We identify tutors according to the requirement and availability.',
      icon: Search,
    },
    {
      number: '03',
      title: 'Connect With the Tutor',
      description: 'Discuss requirements, timing, and teaching arrangements directly.',
      icon: UserCheck,
    },
    {
      number: '04',
      title: 'Start Learning',
      description: 'Choose a suitable arrangement and begin classes at home or online.',
      icon: Play,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#155EEF]">
            Simple 4-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] mt-2">
            How It Works
          </h2>
          <p className="text-base text-[#667085] mt-3">
            A straightforward, parent-friendly connection model designed to get you the right teacher without friction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-[#F8FAFC] p-6 rounded-xl border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold text-[#155EEF] font-mono">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-blue-100 text-[#155EEF] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#101828] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-xs text-slate-400">
                      &rarr;
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('/parents')}
            className="px-6 py-3 rounded-xl bg-[#155EEF] hover:bg-[#104ec6] text-white font-semibold text-sm transition-colors cursor-pointer shadow-xs active:scale-[0.98]"
          >
            Find a Tutor
          </button>
          <button
            onClick={() => onNavigate('/how-it-works')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#667085] hover:text-[#101828] transition-colors cursor-pointer"
          >
            <span>Learn more about tutor and parent workflows</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
