import { Lightbulb, CheckCircle2, UserCheck, TrendingUp, Sparkles } from 'lucide-react';

export function AboutUsSection() {
  const pillars = [
    {
      title: 'Clear Explanations',
      description: 'Breaking down complex syllabus topics into simple, step-by-step logic so students grasp foundational concepts with complete clarity.',
      icon: Lightbulb,
      color: 'text-[#155EEF]',
      bg: 'bg-blue-50',
    },
    {
      title: 'Easy-to-Understand Teaching',
      description: 'Engaging, approachable teaching methods designed to make learning intuitive, relatable, and enjoyable for students at every level.',
      icon: CheckCircle2,
      color: 'text-[#12B76A]',
      bg: 'bg-emerald-50',
    },
    {
      title: 'Individual Attention',
      description: 'Focused one-on-one guidance where students can ask questions freely without hesitation, receiving patient and personalized support.',
      icon: UserCheck,
      color: 'text-[#155EEF]',
      bg: 'bg-blue-50',
    },
    {
      title: 'Academic Performance Improvement',
      description: 'Steady reinforcement of fundamentals and regular practice aimed at building lasting subject confidence and improving school performance.',
      icon: TrendingUp,
      color: 'text-[#F79009]',
      bg: 'bg-amber-50',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#155EEF] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Us</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] tracking-tight">
            About Naveen Home Tuitions
          </h2>
          <p className="text-base sm:text-lg text-[#667085] mt-4 leading-relaxed font-normal">
            Naveen Home Tuitions is dedicated to providing quality home and online tutoring across Hyderabad. We focus on clear explanations, easy-to-understand teaching, individual attention, and helping students improve their academic performance with confidence.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 sm:p-7 rounded-2xl border border-slate-200/90 bg-[#F8FAFC] hover:bg-white hover:border-blue-200 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-5`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#101828] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
