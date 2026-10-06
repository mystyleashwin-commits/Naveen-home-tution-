import { PageRoute } from '../../types';
import { Users, GraduationCap, ArrowRight, Check } from 'lucide-react';

interface TwoJourneysSplitProps {
  onNavigate: (route: PageRoute) => void;
}

export function TwoJourneysSplit({ onNavigate }: TwoJourneysSplitProps) {
  return (
    <section className="py-14 sm:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#155EEF]">
            Two Dedicated Portals
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#101828] mt-1.5">
            How Can Naveen Home Tuitions Help You?
          </h2>
          <p className="text-sm sm:text-base text-[#667085] mt-2">
            Whether you are a parent seeking qualified academic guidance or an educator looking for teaching opportunities in Hyderabad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: For Parents / Students */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border-2 border-blue-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full pointer-events-none -mr-6 -mt-6"></div>
            <div>
              <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#155EEF] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Users className="w-7 h-7" />
              </div>
              <span className="text-xs font-semibold text-[#155EEF] uppercase tracking-wide">
                For Parents & Students
              </span>
              <h3 className="text-2xl font-bold text-[#101828] mt-1 mb-3">
                Need a Tutor?
              </h3>
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed mb-6">
                Tell us your class, subject, location, schedule and budget.
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-100 text-[#155EEF] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>Classes 1–12 (CBSE, SSC, ICSE) and BTech</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-100 text-[#155EEF] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>Verified tutors for in-home or online sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-100 text-[#155EEF] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>Flexible timings matched to student schedule</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onNavigate('/parents')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#155EEF] hover:bg-[#104ec6] text-white font-semibold text-sm transition-colors cursor-pointer shadow-xs active:scale-[0.98]"
            >
              <span>Find a Tutor</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: For Tutors */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border-2 border-emerald-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 rounded-bl-full pointer-events-none -mr-6 -mt-6"></div>
            <div>
              <div className="w-14 h-14 rounded-xl bg-emerald-50 text-[#12B76A] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-7 h-7" />
              </div>
              <span className="text-xs font-semibold text-[#12B76A] uppercase tracking-wide">
                For Teachers & Educators
              </span>
              <h3 className="text-2xl font-bold text-[#101828] mt-1 mb-3">
                Want Students?
              </h3>
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed mb-6">
                Join the Naveen Home Tuitions tutor network and receive relevant tuition opportunities.
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-[#12B76A] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>Choose your preferred teaching areas in Hyderabad</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-[#12B76A] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>Teach preferred classes, boards, and subjects</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-[#12B76A] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>Home tuition or online teaching options</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onNavigate('/tutors')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#12B76A] hover:bg-[#0e9657] text-white font-semibold text-sm transition-colors cursor-pointer shadow-xs active:scale-[0.98]"
            >
              <span>Register as Tutor</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
