import { PageRoute } from '../types';
import { ArrowRight, FileCheck, Search, Users, Sparkles, UserPlus, ClipboardList, BellRing, Award } from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (route: PageRoute) => void;
}

export function HowItWorksPage({ onNavigate }: HowItWorksPageProps) {
  const parentSteps = [
    {
      step: '01',
      title: 'Submit Requirement',
      description: 'Tell us your class, subject, location, schedule and budget through our simple requirement form or direct WhatsApp message.',
      icon: FileCheck,
      details: 'Specify home or online preference, target board (CBSE, SSC, ICSE, BTech), and specific areas of student focus.',
    },
    {
      step: '02',
      title: 'Tutor Matching',
      description: 'We identify suitable tutors based on your requirements, academic level, and travel proximity.',
      icon: Search,
      details: 'We evaluate tutor credentials, teaching track record, and verified availability in your Hyderabad locality.',
    },
    {
      step: '03',
      title: 'Connect & Discuss',
      description: 'Connect with the tutor and discuss your requirements, student syllabus, and schedule.',
      icon: Users,
      details: 'Discuss learning pace, specific textbooks, frequency of weekly sessions, and convenient morning/evening slots.',
    },
    {
      step: '04',
      title: 'Start Learning',
      description: 'Choose a suitable arrangement and begin classes at your home or through interactive online sessions.',
      icon: Sparkles,
      details: 'Start regular structured sessions with personalized attention and ongoing academic progress reviews.',
    },
  ];

  const tutorSteps = [
    {
      step: '01',
      title: 'Register',
      description: 'Submit your tutor profile and preferences including qualifications, subjects, and Hyderabad travel areas.',
      icon: UserPlus,
      details: 'Highlight your academic degree, boards you handle, and whether you prefer home visits, online classes, or both.',
    },
    {
      step: '02',
      title: 'Profile Review',
      description: 'Our team reviews the submitted information to verify subject proficiency and location preferences.',
      icon: ClipboardList,
      details: 'We catalog your profile in our active educator network for relevant parent matching.',
    },
    {
      step: '03',
      title: 'Get Opportunities',
      description: 'Receive relevant tuition opportunities when available that match your subjects and commute radius.',
      icon: BellRing,
      details: 'Tuition inquiries are shared based on parent requests. We do not make false guarantees of immediate placement.',
    },
    {
      step: '04',
      title: 'Start Teaching',
      description: 'Discuss the opportunity and begin teaching when mutually agreed upon with the student family.',
      icon: Award,
      details: 'Deliver dedicated one-on-one education, cultivate student confidence, and build an esteemed teaching reputation.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F8FAFC] to-white border-b border-slate-100 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#155EEF] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            Transparent Process
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-tight mt-3 mb-4">
            How Home Tuition Works in Hyderabad
          </h1>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl mx-auto font-normal">
            Whether you are a parent seeking a verified teacher for your child or an educator looking to teach students, explore our simple, four-step connection workflows below.
          </p>
        </div>
      </section>

      {/* Journey 1: FOR PARENTS */}
      <section className="py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#155EEF] text-xs font-bold mb-2">
                <span>Journey 1</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#101828]">
                For Parents & Students
              </h2>
              <p className="text-sm sm:text-base text-[#667085] mt-1.5">
                From requirement submission to commencing the first tuition session.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/parents')}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#155EEF] hover:bg-[#104ec6] text-white text-xs font-semibold transition-colors cursor-pointer shadow-xs active:scale-[0.98]"
            >
              <span>Submit Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {parentSteps.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-extrabold text-[#155EEF] font-mono">
                        {s.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#155EEF] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-[#101828] mb-2">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-4">
                      {s.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 italic">
                    {s.details}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey 2: FOR TUTORS */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#12B76A] text-xs font-bold mb-2">
                <span>Journey 2</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#101828]">
                For Tutors & Educators
              </h2>
              <p className="text-sm sm:text-base text-[#667085] mt-1.5">
                How independent teachers join our network and connect with nearby students.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/tutors')}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#12B76A] hover:bg-[#0e9657] text-white text-xs font-semibold transition-colors cursor-pointer shadow-xs active:scale-[0.98]"
            >
              <span>Register as Tutor</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutorSteps.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-extrabold text-[#12B76A] font-mono">
                        {s.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#12B76A] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-[#101828] mb-2">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-4">
                      {s.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 italic">
                    {s.details}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Important Transparent Note */}
          <div className="mt-10 p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 max-w-3xl mx-auto text-center">
            <strong>Transparency Notice:</strong> Naveen Home Tuitions operates as a matching and referral coordination service. We do not promise guaranteed tuition opportunities or automatic placements; referrals depend strictly upon student requests, syllabus alignment, and parent decisions.
          </div>
        </div>
      </section>

      {/* Bottom Dual Action Section */}
      <section className="py-14 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#101828] mb-3">
            Ready to Begin?
          </h2>
          <p className="text-sm text-[#667085] mb-8 max-w-md mx-auto">
            Choose your path to get started with Naveen Home Tuitions today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/parents')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#155EEF] hover:bg-[#104ec6] text-white text-sm font-semibold transition-colors cursor-pointer"
            >
              Find a Tutor (Parents)
            </button>
            <button
              onClick={() => onNavigate('/tutors')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#12B76A] hover:bg-[#0e9657] text-white text-sm font-semibold transition-colors cursor-pointer"
            >
              Register as Tutor (Teachers)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
