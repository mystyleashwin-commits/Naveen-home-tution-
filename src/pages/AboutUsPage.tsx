import { PageRoute } from '../types';
import {
  GraduationCap,
  Globe2,
  BookOpen,
  Award,
  ArrowRight,
  Target,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

interface AboutUsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export function AboutUsPage({ onNavigate }: AboutUsPageProps) {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Page Hero / Heading Section */}
      <section className="bg-gradient-to-b from-[#F8FAFC] via-white to-white border-b border-slate-100 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#155EEF] text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Established in 2024</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-tight leading-tight">
            About Naveen Home Tuitions
          </h1>

          <p className="text-lg sm:text-xl text-[#344054] mt-5 leading-relaxed max-w-3xl mx-auto font-normal">
            Naveen Home Tuitions, established in 2024, connects parents and students with qualified and trusted tutors across Hyderabad, India, and around the world.
          </p>
        </div>
      </section>

      {/* 2. Clean Introductory & Academic Scope Section */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 p-6 sm:p-10 md:p-12 shadow-xs">
            <div className="space-y-6 text-base sm:text-lg text-[#475467] leading-relaxed">
              <p>
                We provide personalized home and online tuition for students from Classes 1–12 and B.Tech, covering major curricula including CBSE, ICSE, IB, IGCSE, and State Boards. We also provide academic support and foundation coaching for IIT-JEE and NEET preparation.
              </p>

              <p>
                Whether you're a parent in Hyderabad looking for a home tutor or an international parent looking for a reliable online tutor, we help you find the right tutor based on your child's class, subjects, curriculum, learning needs, location, and preferred schedule.
              </p>

              <p>
                From school academics to subject-specific support, our goal is to make quality tutoring accessible, convenient, and personalized for every student while helping them build stronger concepts, confidence, and results.
              </p>
            </div>

            {/* Core Academic Coverage Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-200">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#155EEF] flex items-center justify-center mb-3">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Classes
                </div>
                <div className="text-sm font-bold text-[#101828] mt-0.5">
                  Classes 1–12 & B.Tech
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#12B76A] flex items-center justify-center mb-3">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Curricula
                </div>
                <div className="text-sm font-bold text-[#101828] mt-0.5">
                  CBSE, ICSE, IB, IGCSE & State
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-[#F79009] flex items-center justify-center mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Competitive Exams
                </div>
                <div className="text-sm font-bold text-[#101828] mt-0.5">
                  IIT-JEE & NEET Foundation
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Tuition Modes
                </div>
                <div className="text-sm font-bold text-[#101828] mt-0.5">
                  Home & Online Worldwide
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Separate Our Mission Section */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[#12B76A] text-xs font-semibold mb-4">
            <Target className="w-3.5 h-3.5" />
            <span>Our Purpose</span>
          </div>

          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#155EEF] mb-3">
            Our Mission
          </h2>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101828] tracking-tight leading-tight max-w-2xl mx-auto">
            Connecting every student with the right tutor, anywhere in the world.
          </h3>

          <p className="text-base sm:text-lg text-[#667085] mt-5 leading-relaxed max-w-2xl mx-auto font-normal">
            We aim to connect every student with the right tutor for their individual learning journey and make personalized, quality tutoring accessible wherever they are.
          </p>

          <div className="mt-8 pt-8 border-t border-slate-200/80 max-w-md mx-auto">
            <div className="text-base font-bold text-[#101828]">
              Naveen Home Tuitions
            </div>
            <div className="text-sm font-medium text-[#12B76A] mt-1">
              Connecting Parents with the Right Tutors.
            </div>
          </div>
        </div>
      </section>

      {/* 4. Call-to-Action Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#101828] mb-3">
            Ready to Find the Right Tutor for Your Child?
          </h2>
          <p className="text-sm sm:text-base text-[#667085] mb-8 max-w-xl mx-auto">
            Tell us your class, subject, curriculum, and preferred schedule. We help connect you with suitable home and online tutoring options.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => onNavigate('/parents')}
              className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#155EEF] hover:bg-[#104ec6] rounded-xl shadow-xs transition-all duration-150 cursor-pointer text-center active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>Find a Tutor</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-semibold text-[#155EEF] bg-white border border-[#155EEF] hover:bg-blue-50 rounded-xl transition-all duration-150 cursor-pointer text-center active:scale-[0.98]"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
