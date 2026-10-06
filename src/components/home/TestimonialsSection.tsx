import { Quote, User, GraduationCap, MapPin } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 'testimonial-1',
      type: 'Parent Review',
      role: 'Parent',
      roleIcon: User,
      initials: 'SR',
      avatarBg: 'bg-blue-600 text-white',
      badgeBg: 'bg-blue-50 text-[#155EEF] border border-blue-100',
      text: 'We were looking for a patient Mathematics tutor for our son in Class 10 CBSE. Naveen Home Tuitions promptly connected us with a teacher who lives nearby in Attapur. Within two months, his confidence in Trigonometry and Geometry improved noticeably. Very punctual and dedicated.',
      author: 'Srinivas Rao',
      subtitle: 'Parent of Class 10 CBSE Student',
      location: 'Attapur, Hyderabad',
    },
    {
      id: 'testimonial-2',
      type: 'Tutor Review',
      role: 'Tutor',
      roleIcon: GraduationCap,
      initials: 'PS',
      avatarBg: 'bg-emerald-600 text-white',
      badgeBg: 'bg-emerald-50 text-[#12B76A] border border-emerald-100',
      text: 'Joining this tutor network helped me connect with sincere students right within Mehdipatnam and Tolichowki. The student requirements shared are always specific regarding syllabus and timings, making teaching convenient without hectic daily travel.',
      author: 'Priyanka Sharma',
      subtitle: 'MSc Physics · High School Tutor',
      location: 'Mehdipatnam, Hyderabad',
    },
    {
      id: 'testimonial-3',
      type: 'Parent Review',
      role: 'Parent',
      roleIcon: User,
      initials: 'AK',
      avatarBg: 'bg-blue-600 text-white',
      badgeBg: 'bg-blue-50 text-[#155EEF] border border-blue-100',
      text: 'Finding a tutor who thoroughly understands the ICSE Science and Maths curriculum was difficult until we reached out. The teacher conducts regular chapter-end assessments and keeps us updated on weekly progress. Truly personalized attention at home.',
      author: 'Anitha Kulkarni',
      subtitle: 'Parent of Class 8 ICSE Student',
      location: 'Tolichowki, Hyderabad',
    },
    {
      id: 'testimonial-4',
      type: 'Tutor Review',
      role: 'Tutor',
      roleIcon: GraduationCap,
      initials: 'MK',
      avatarBg: 'bg-emerald-600 text-white',
      badgeBg: 'bg-emerald-50 text-[#12B76A] border border-emerald-100',
      text: 'As an engineering graduate passionate about teaching, Naveen Home Tuitions helped me connect with engineering students needing guidance in Engineering Mathematics (M1 & M2). Coordination over WhatsApp is seamless and respectful.',
      author: 'Mohammed Kareem',
      subtitle: 'BTech · Engineering Maths Tutor',
      location: 'Langer House, Hyderabad',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#155EEF] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            Real Community Experiences
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] mt-3">
            What Parents & Tutors Say
          </h2>
          <p className="text-sm sm:text-base text-[#667085] mt-2.5">
            Hear from parents and educators across Hyderabad about their one-on-one learning and teaching experiences.
          </p>
        </div>

        {/* Responsive Grid for Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => {
            const RoleIcon = item.roleIcon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Top Bar: Badge & Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${item.badgeBg} flex items-center gap-1.5`}>
                      <RoleIcon className="w-3.5 h-3.5" />
                      <span>{item.type}</span>
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 text-slate-300 group-hover:text-blue-500 group-hover:bg-blue-50 transition-colors flex items-center justify-center">
                      <Quote className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-[#475467] leading-relaxed mb-6 font-normal">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${item.avatarBg} flex items-center justify-center font-bold text-xs shrink-0 shadow-xs`}>
                    {item.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-[#101828] truncate">
                      {item.author}
                    </div>
                    <div className="text-[11px] text-[#667085] truncate">
                      {item.subtitle}
                    </div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service note */}
        <div className="mt-10 text-center text-xs text-slate-500 max-w-xl mx-auto">
          Tutor connections are tailored to student syllabus, convenient time slots, and localized availability across Hyderabad.
        </div>
      </div>
    </section>
  );
}
