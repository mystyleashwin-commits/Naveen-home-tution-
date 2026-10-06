import { useState } from 'react';
import { TutorRegistrationFormData, PageRoute } from '../types';
import { createTutorWhatsAppUrl } from '../config/siteConfig';
import { validateIndianMobile } from '../services/tuitionService';
import { imageAssets } from '../assets/imageAssets';
import {
  CheckCircle,
  Briefcase,
  MapPin,
  Laptop,
  Clock,
  BookOpen,
  AlertCircle,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';

interface TutorsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export function TutorsPage({ onNavigate }: TutorsPageProps) {
  const [formData, setFormData] = useState<TutorRegistrationFormData>({
    fullName: '',
    mobileNumber: '',
    whatsappNumber: '',
    email: '',
    highestQualification: '',
    teachingExperience: '1 to 3 Years',
    subjects: '',
    classesYouTeach: '',
    boards: '',
    languagesKnown: 'English, Telugu, Hindi',
    areasYouCanTravelTo: '',
    teachingMode: 'Both',
    expectedFee: '₹500 – ₹800 / hour or monthly package',
    availability: 'Evenings (after 5 PM)',
    additionalInformation: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string | null>(null);

  const benefits = [
    {
      title: 'Get relevant tuition opportunities',
      desc: 'Receive alerts for tuition inquiries that match your subjects and teaching areas.',
      icon: Briefcase,
    },
    {
      title: 'Choose preferred subjects and classes',
      desc: 'Focus on the standards and subjects you are most confident teaching.',
      icon: BookOpen,
    },
    {
      title: 'Choose preferred teaching areas',
      desc: 'Select the Hyderabad neighborhoods you can comfortably travel to.',
      icon: MapPin,
    },
    {
      title: 'Home and online teaching opportunities',
      desc: 'Take up in-person home tutoring or remote online one-on-one sessions.',
      icon: Laptop,
    },
    {
      title: 'Flexible teaching options',
      desc: 'Agree on convenient time slots and schedules with student families.',
      icon: Clock,
    },
  ];

  const handleInputChange = (
    field: keyof TutorRegistrationFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    const mobileCheck = validateIndianMobile(formData.mobileNumber);
    if (!mobileCheck.isValid) {
      newErrors.mobileNumber = mobileCheck.error || 'Valid mobile number required';
    }

    if (formData.whatsappNumber.trim()) {
      const waCheck = validateIndianMobile(formData.whatsappNumber);
      if (!waCheck.isValid) {
        newErrors.whatsappNumber = 'Please enter a valid 10-digit WhatsApp number';
      }
    }

    if (!formData.highestQualification.trim()) {
      newErrors.highestQualification = 'Highest qualification is required';
    }

    if (!formData.subjects.trim()) {
      newErrors.subjects = 'Please list subjects you can teach';
    }

    if (!formData.classesYouTeach.trim()) {
      newErrors.classesYouTeach = 'Please specify classes you teach';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      const firstError = document.querySelector('.border-red-500');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const url = createTutorWhatsAppUrl(formData);
    setSubmittedWhatsAppUrl(url);

    window.open(url, '_blank', 'noopener,noreferrer');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setSubmittedWhatsAppUrl(null);
    setFormData({
      fullName: '',
      mobileNumber: '',
      whatsappNumber: '',
      email: '',
      highestQualification: '',
      teachingExperience: '1 to 3 Years',
      subjects: '',
      classesYouTeach: '',
      boards: '',
      languagesKnown: 'English, Telugu, Hindi',
      areasYouCanTravelTo: '',
      teachingMode: 'Both',
      expectedFee: '₹500 – ₹800 / hour or monthly package',
      availability: 'Evenings (after 5 PM)',
      additionalInformation: '',
    });
    setErrors({});
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#F8FAFC] to-white border-b border-slate-100 py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#12B76A] bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
            For Tutors & Educators
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-tight mt-3 mb-4">
            Become a Tutor with Naveen Home Tuitions
          </h1>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl mx-auto font-normal">
            Join our tutor network and receive relevant tuition opportunities based on your subjects, classes, preferred areas and availability.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101828]">
              Tutor Network Benefits
            </h2>
            <p className="text-xs sm:text-sm text-[#667085] mt-1.5">
              Connect with students needing one-on-one attention across Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="p-5 rounded-xl border border-slate-200/90 bg-white hover:border-emerald-300 hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#12B76A] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#101828] mb-1.5">
                      {b.title}
                    </h3>
                    <p className="text-xs text-[#667085] leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form / Success State */}
      <section className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {submittedWhatsAppUrl ? (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-10 border-2 border-emerald-300 shadow-md text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#12B76A] flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-8 h-8 stroke-[2.5]" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#101828] mb-2">
              Opening WhatsApp with Tutor Profile
            </h2>
            <p className="text-sm sm:text-base text-[#667085] mb-6">
              Your tutor registration details have been prepared for <span className="font-semibold text-slate-800">+91 95052 03418</span>.
            </p>

            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl mb-6 text-left">
              <div className="text-xs font-bold text-emerald-900 mb-1">
                WhatsApp Action:
              </div>
              <p className="text-xs text-emerald-800 mb-4 leading-relaxed">
                If WhatsApp didn't open automatically, tap the button below to send your profile details to our coordinator:
              </p>
              <a
                href={submittedWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#12B76A] hover:bg-[#0e9657] text-white text-sm font-semibold transition-all active:scale-[0.98] shadow-sm"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#12B76A]" />
                <span>Open WhatsApp Now (+91 95052 03418)</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 mb-6 text-left">
              <div className="font-semibold text-slate-800 mb-1">Please Note:</div>
              <div>
                Tutor opportunities depend on parent requirements and locality matching. We do not make guaranteed placement promises.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={resetForm}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Submit Another Profile
              </button>
              <button
                onClick={() => onNavigate('/')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Return to Home
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form Column */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 sm:p-8 md:p-10">
              <div className="mb-6 border-b border-slate-100 pb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#101828]">
                  Tutor Registration Form
                </h2>
                <p className="text-xs sm:text-sm text-[#667085] mt-1">
                  Fields marked with (<span className="text-red-500 font-bold">*</span>) are required. Submitting will open WhatsApp to send your application to our team.
                </p>
              </div>

              {errors.form && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{errors.form}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* 1. Personal & Contact */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#12B76A] mb-3">
                    1. Contact Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="e.g. K. Naveen Kumar"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${
                          errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-[#12B76A]'
                        }`}
                        required
                      />
                      {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label htmlFor="tutorMobile" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500">
                          +91
                        </span>
                        <input
                          type="tel"
                          id="tutorMobile"
                          value={formData.mobileNumber}
                          onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                          placeholder="95052 03418"
                          maxLength={14}
                          className={`w-full pl-12 pr-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${
                            errors.mobileNumber ? 'border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-[#12B76A]'
                          }`}
                          required
                        />
                      </div>
                      {errors.mobileNumber && <p className="text-xs text-red-600 mt-1">{errors.mobileNumber}</p>}
                    </div>

                    <div>
                      <label htmlFor="tutorWhatsapp" className="block text-xs font-medium text-slate-700 mb-1.5">
                        WhatsApp Number
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500">
                          +91
                        </span>
                        <input
                          type="tel"
                          id="tutorWhatsapp"
                          value={formData.whatsappNumber}
                          onChange={(e) => handleInputChange('whatsappNumber', e.target.value)}
                          placeholder="Leave blank if same as mobile"
                          maxLength={14}
                          className="w-full pl-12 pr-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#12B76A] text-sm focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="tutor@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#12B76A] text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Educational & Teaching Background */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#12B76A] mb-3">
                    2. Qualifications & Experience
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="highestQualification" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Highest Qualification <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="highestQualification"
                        value={formData.highestQualification}
                        onChange={(e) => handleInputChange('highestQualification', e.target.value)}
                        placeholder="e.g. BTech, MSc, MTech, BEd"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${
                          errors.highestQualification ? 'border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-[#12B76A]'
                        }`}
                        required
                      />
                      {errors.highestQualification && (
                        <p className="text-xs text-red-600 mt-1">{errors.highestQualification}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="teachingExperience" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Teaching Experience
                      </label>
                      <select
                        id="teachingExperience"
                        value={formData.teachingExperience}
                        onChange={(e) => handleInputChange('teachingExperience', e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#12B76A] text-sm focus:outline-none bg-white transition-colors"
                      >
                        <option value="Fresher">Fresher (Passionate to teach)</option>
                        <option value="1 to 3 Years">1 to 3 Years</option>
                        <option value="3 to 5 Years">3 to 5 Years</option>
                        <option value="5+ Years">5+ Years</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subjects" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Subjects <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subjects"
                        value={formData.subjects}
                        onChange={(e) => handleInputChange('subjects', e.target.value)}
                        placeholder="e.g. Mathematics, Physics, Chemistry"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${
                          errors.subjects ? 'border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-[#12B76A]'
                        }`}
                        required
                      />
                      {errors.subjects && <p className="text-xs text-red-600 mt-1">{errors.subjects}</p>}
                    </div>

                    <div>
                      <label htmlFor="classesYouTeach" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Classes You Teach <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="classesYouTeach"
                        value={formData.classesYouTeach}
                        onChange={(e) => handleInputChange('classesYouTeach', e.target.value)}
                        placeholder="e.g. Classes 6–10, 11–12, BTech"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${
                          errors.classesYouTeach ? 'border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-[#12B76A]'
                        }`}
                        required
                      />
                      {errors.classesYouTeach && (
                        <p className="text-xs text-red-600 mt-1">{errors.classesYouTeach}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="boards" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Boards
                      </label>
                      <input
                        type="text"
                        id="boards"
                        value={formData.boards}
                        onChange={(e) => handleInputChange('boards', e.target.value)}
                        placeholder="e.g. CBSE, SSC, ICSE"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#12B76A] text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="languagesKnown" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Languages Known
                      </label>
                      <input
                        type="text"
                        id="languagesKnown"
                        value={formData.languagesKnown}
                        onChange={(e) => handleInputChange('languagesKnown', e.target.value)}
                        placeholder="e.g. English, Telugu, Hindi"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#12B76A] text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Travel Areas, Mode & Availability */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#12B76A] mb-3">
                    3. Teaching Areas, Mode & Fees
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label htmlFor="areasYouCanTravelTo" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Areas You Can Travel To
                      </label>
                      <input
                        type="text"
                        id="areasYouCanTravelTo"
                        value={formData.areasYouCanTravelTo}
                        onChange={(e) => handleInputChange('areasYouCanTravelTo', e.target.value)}
                        placeholder="e.g. Attapur, Mehdipatnam, Tolichowki, Langer House"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#12B76A] text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">
                        Home / Online / Both
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(['Home', 'Online', 'Both'] as const).map((mode) => (
                          <button
                            type="button"
                            key={mode}
                            onClick={() => handleInputChange('teachingMode', mode)}
                            className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                              formData.teachingMode === mode
                                ? 'bg-emerald-50 border-[#12B76A] text-[#12B76A]'
                                : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="expectedFee" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Expected Fee
                      </label>
                      <input
                        type="text"
                        id="expectedFee"
                        value={formData.expectedFee}
                        onChange={(e) => handleInputChange('expectedFee', e.target.value)}
                        placeholder="e.g. ₹6,000/month or ₹500/hour"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#12B76A] text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="availability" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Availability
                      </label>
                      <input
                        type="text"
                        id="availability"
                        value={formData.availability}
                        onChange={(e) => handleInputChange('availability', e.target.value)}
                        placeholder="e.g. Evenings after 5 PM"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#12B76A] text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="additionalInformation" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Additional Information
                      </label>
                      <textarea
                        id="additionalInformation"
                        rows={2}
                        value={formData.additionalInformation}
                        onChange={(e) => handleInputChange('additionalInformation', e.target.value)}
                        placeholder="Any additional information about your background or methodology..."
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:border-[#12B76A] text-xs focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-slate-500">
                    Submitting opens WhatsApp with your details to +91 95052 03418.
                  </p>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#12B76A] hover:bg-[#0e9657] text-white text-sm font-semibold transition-all duration-150 cursor-pointer shadow-xs active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-[#12B76A]" />
                    <span>Register as Tutor</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Right Context */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs">
                <img
                  src={imageAssets.onlineTuitionStudent}
                  alt="Student learning"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="p-4 bg-white border-t border-slate-100">
                  <div className="text-xs font-semibold text-[#101828] mb-1">
                    Flexible In-Person & Online Tuition
                  </div>
                  <p className="text-[11px] text-[#667085] leading-relaxed">
                    Connect with students looking for structured weekly learning in your preferred Hyderabad clusters.
                  </p>
                </div>
              </div>

              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200/80">
                <h4 className="text-sm font-bold text-[#101828] mb-3">
                  Tutor Expectations & Ethics
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#12B76A] mt-1.5 shrink-0" />
                    <span>Punctuality and consistent weekly schedule.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#12B76A] mt-1.5 shrink-0" />
                    <span>Regular assessment and feedback to parents on progress.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#12B76A] mt-1.5 shrink-0" />
                    <span>Focus on conceptual understanding rather than rote memorization.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
