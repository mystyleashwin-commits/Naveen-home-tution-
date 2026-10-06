import { PageRoute } from '../../types';
import { imageAssets } from '../../assets/imageAssets';
import { CheckCircle2, MapPin, GraduationCap, Laptop } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (route: PageRoute) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-white pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines, Value Prop, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small area badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#155EEF] text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Dedicated Tutor Matching Across Hyderabad</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
              Find the Right Home & Online Tutor in Hyderabad
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-[#667085] leading-relaxed max-w-2xl font-normal">
              Connect with verified tutors for Classes 1–12 and BTech across Hyderabad.
            </p>

            {/* The Two Main Action Paths */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-md">
              <button
                onClick={() => onNavigate('/parents')}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#155EEF] hover:bg-[#104ec6] rounded-xl shadow-sm transition-all duration-150 cursor-pointer text-center active:scale-[0.98]"
              >
                Find a Tutor
              </button>
              <button
                onClick={() => onNavigate('/tutors')}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-[#155EEF] bg-white border-2 border-[#155EEF] hover:bg-blue-50 rounded-xl transition-all duration-150 cursor-pointer text-center active:scale-[0.98]"
              >
                Register as Tutor
              </button>
            </div>

            {/* Clear Value Indicators (no fake numbers) */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2.5 text-xs text-[#101828] font-medium">
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#155EEF] flex items-center justify-center shrink-0">
                  <Laptop className="w-4 h-4" />
                </div>
                <span>Home & Online Tuition</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#101828] font-medium">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-[#12B76A] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span>Multiple Subjects & Boards</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#101828] font-medium">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-[#F79009] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Hyderabad Service Areas</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Educational Imagery & Interactive Context */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Image Frame with Single Elevation */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={imageAssets.heroTutor}
                  alt="Dedicated home tutor guiding a student with mathematics and science concepts in Hyderabad"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Graceful fallback if image is obstructed
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              {/* Quiet informative floating cards giving real context */}
              <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#12B76A]" />
                  <span>Personalized 1-on-1 Matching</span>
                </div>
                <span className="text-[#667085]">Attapur · Mehdipatnam & more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
