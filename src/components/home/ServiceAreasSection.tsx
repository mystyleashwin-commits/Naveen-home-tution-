import { siteConfig } from '../../config/siteConfig';
import { PageRoute } from '../../types';
import { MapPin, Navigation } from 'lucide-react';

interface ServiceAreasSectionProps {
  onNavigate: (route: PageRoute) => void;
}

export function ServiceAreasSection({ onNavigate }: ServiceAreasSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#155EEF]">
            Local Presence
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] mt-2">
            Home Tuition Across Hyderabad
          </h2>
          <p className="text-base text-[#667085] mt-3">
            Connecting parents with experienced tutors located near key residential neighborhoods and educational corridors in Hyderabad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.serviceAreas.map((area) => (
            <div
              key={area.name}
              onClick={() => onNavigate('/parents')}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all duration-200 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#155EEF] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-[#101828]">
                    {area.name}
                  </h3>
                </div>
                <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  Hyderabad
                </span>
              </div>
              <p className="text-xs text-[#667085] leading-relaxed mb-4">
                {area.description}
              </p>
              <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-slate-600">Frequent:</span>
                {area.popularSubjects.map((subj) => (
                  <span
                    key={subj}
                    className="text-[11px] text-blue-700 bg-blue-50/80 px-2 py-0.5 rounded-md"
                  >
                    {subj}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Local Disclosure */}
        <div className="mt-10 p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-[#667085] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-700">
            <Navigation className="w-4 h-4 text-[#155EEF] shrink-0" />
            <span>
              Tutor travel availability varies by distance, subject specialization, and schedule. Online tuition is also available anywhere across Hyderabad.
            </span>
          </div>
          <button
            onClick={() => onNavigate('/parents')}
            className="text-xs font-semibold text-[#155EEF] hover:underline whitespace-nowrap cursor-pointer"
          >
            Check Tutor in Your Area &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
