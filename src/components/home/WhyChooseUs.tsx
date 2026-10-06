import { ShieldCheck, Monitor, UserCheck, MapPin, BookOpen, MessageCircle } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      title: 'Verified & Experienced Tutors',
      description: 'Connect with tutors based on requirements and tutor profile information.',
      icon: ShieldCheck,
      color: 'text-[#155EEF]',
      bg: 'bg-blue-50',
    },
    {
      title: 'Home & Online Tuition',
      description: 'Choose between convenient home tuition and online learning.',
      icon: Monitor,
      color: 'text-[#12B76A]',
      bg: 'bg-emerald-50',
    },
    {
      title: 'Personalized Learning',
      description: "Find tutoring options based on the student's class, subject and learning requirements.",
      icon: UserCheck,
      color: 'text-[#155EEF]',
      bg: 'bg-blue-50',
    },
    {
      title: 'Tutors Across Hyderabad',
      description: 'Access tutoring options across multiple Hyderabad areas.',
      icon: MapPin,
      color: 'text-[#F79009]',
      bg: 'bg-amber-50',
    },
    {
      title: 'Multiple Classes & Subjects',
      description: 'Support for Classes 1–12, BTech and a wide range of subjects and boards.',
      icon: BookOpen,
      color: 'text-[#155EEF]',
      bg: 'bg-blue-50',
    },
    {
      title: 'Easy WhatsApp Connection',
      description: 'Submit your requirement and connect with Naveen Home Tuitions directly through WhatsApp.',
      icon: MessageCircle,
      color: 'text-[#12B76A]',
      bg: 'bg-emerald-50',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#155EEF]">
            Dedicated Tutor Connection
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] mt-2">
            Why Choose Naveen Home Tuitions?
          </h2>
          <p className="text-base text-[#667085] mt-3">
            We focus on matching student requirements with qualified, verified tutors who understand local syllabi and individualized pacing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-5`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#101828] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#667085] leading-relaxed">
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
