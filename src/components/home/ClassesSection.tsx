import { siteConfig } from '../../config/siteConfig';
import { PageRoute } from '../../types';
import { BookMarked, Compass, Award, Briefcase, Cpu, ArrowRight } from 'lucide-react';

interface ClassesSectionProps {
  onNavigate: (route: PageRoute) => void;
}

export function ClassesSection({ onNavigate }: ClassesSectionProps) {
  const icons = [BookMarked, Compass, Award, Briefcase, Cpu];

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#155EEF]">
              Academic Spectrum
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] mt-2">
              Tuition for Every Learning Stage
            </h2>
            <p className="text-base text-[#667085] mt-3">
              Personalized one-on-one attention adapted to each student's current academic level and target milestones.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/parents')}
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[#155EEF] hover:text-[#104ec6] transition-colors cursor-pointer"
          >
            <span>Request Tutor for Your Class</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {siteConfig.learningStages.map((stage, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={stage.title}
                className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-blue-50 text-[#155EEF] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#101828]">
                    {stage.title}
                  </h3>
                  <div className="text-xs font-medium text-[#155EEF] mb-3">
                    {stage.subtitle}
                  </div>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    {stage.details}
                  </p>
                </div>
                <div className="pt-5 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => onNavigate('/parents')}
                    className="text-xs font-semibold text-[#155EEF] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inquire Now</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
