import { siteConfig } from '../../config/siteConfig';
import { PageRoute } from '../../types';
import { Layers } from 'lucide-react';

interface BoardsSectionProps {
  onNavigate: (route: PageRoute) => void;
}

export function BoardsSection({ onNavigate }: BoardsSectionProps) {
  return (
    <section className="py-14 sm:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#155EEF]">
            Syllabus Alignment
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#101828] mt-1.5">
            Boards We Support
          </h2>
          <p className="text-sm sm:text-base text-[#667085] mt-2">
            Our tutors are versed in school syllabi, textbook problems, and evaluation patterns across state, national, and international curricula.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {siteConfig.boards.map((b) => (
            <div
              key={b.name}
              onClick={() => onNavigate('/parents')}
              className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all duration-200 text-center cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#155EEF] flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#101828]">
                {b.name}
              </h3>
              <p className="text-xs text-[#667085] mt-1 line-clamp-2">
                {b.fullName}
              </p>
            </div>
          ))}
        </div>

        {/* Clear affiliation notice */}
        <div className="mt-8 text-center text-xs text-[#667085] max-w-xl mx-auto italic">
          * Note: Naveen Home Tuitions connects private independent tutors and students based on syllabus requirements. We do not claim any official affiliation with CBSE, CISCE, State Boards, or Cambridge International.
        </div>
      </div>
    </section>
  );
}
