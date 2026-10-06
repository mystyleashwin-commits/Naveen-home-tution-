import { siteConfig } from '../../config/siteConfig';
import { PageRoute } from '../../types';
import { Calculator, Atom, Zap, FlaskConical, Dna, BookA, Code2, PlusCircle } from 'lucide-react';

interface SubjectsSectionProps {
  onNavigate: (route: PageRoute) => void;
}

export function SubjectsSection({ onNavigate }: SubjectsSectionProps) {
  const subjectIcons: Record<string, any> = {
    Mathematics: Calculator,
    Science: Atom,
    Physics: Zap,
    Chemistry: FlaskConical,
    Biology: Dna,
    English: BookA,
    'Computer Science': Code2,
    'Other subjects on request': PlusCircle,
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#155EEF]">
            Curriculum Depth
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] mt-2">
            Subjects We Cover
          </h2>
          <p className="text-base text-[#667085] mt-3">
            Experienced home tutors available across STEM disciplines, languages, and technical engineering subjects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {siteConfig.subjects.map((subj) => {
            const Icon = subjectIcons[subj.name] || BookA;
            const isSpecial = subj.name === 'Other subjects on request';

            return (
              <div
                key={subj.name}
                onClick={() => onNavigate('/parents')}
                className={`p-5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSpecial
                    ? 'border-dashed border-blue-300 bg-blue-50/50 hover:bg-blue-50'
                    : 'border-slate-200 bg-white hover:border-blue-200 hover:shadow-xs'
                }`}
              >
                <div>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                    isSpecial ? 'bg-blue-100 text-[#155EEF]' : 'bg-slate-100 text-slate-700'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#101828] mb-1">
                    {subj.name}
                  </h3>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    {subj.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-[#155EEF] flex items-center justify-between">
                  <span>Inquire for Tutor</span>
                  <span>&rarr;</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
