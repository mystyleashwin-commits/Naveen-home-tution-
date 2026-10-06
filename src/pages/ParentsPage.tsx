import { useState } from 'react';
import { ParentRequirementFormData, PageRoute } from '../types';
import { createParentWhatsAppUrl } from '../config/siteConfig';
import { validateIndianMobile } from '../services/tuitionService';
import { imageAssets } from '../assets/imageAssets';
import {
  CheckCircle,
  AlertCircle,
  MessageCircle,
  Clock,
  ExternalLink,
} from 'lucide-react';

interface ParentsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export function ParentsPage({ onNavigate }: ParentsPageProps) {
  const [formData, setFormData] = useState<ParentRequirementFormData>({
    parentName: '',
    mobileNumber: '',
    whatsappNumber: '',
    studentName: '',
    studentClass: '',
    board: '',
    subjectRequired: '',
    tuitionMode: 'Home',
    preferredLocation: '',
    additionalRequirements: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string | null>(null);

  const popularSubjectsList = [
    'Mathematics',
    'Science (Physics/Chem/Bio)',
    'Physics',
    'Chemistry',
    'English',
    'Computer Science',
    'BTech Engineering Maths',
    'All Subjects (Primary)',
  ];

  const handleInputChange = (
    field: keyof ParentRequirementFormData,
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

  const handleSubjectTagClick = (subj: string) => {
    const current = formData.subjectRequired ? formData.subjectRequired.split(', ').map(s => s.trim()) : [];
    if (current.includes(subj)) {
      const filtered = current.filter(s => s !== subj);
      handleInputChange('subjectRequired', filtered.join(', '));
    } else {
      const added = [...current, subj];
      handleInputChange('subjectRequired', added.join(', '));
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent or Guardian name is required';
    }

    const mobileCheck = validateIndianMobile(formData.mobileNumber);
    if (!mobileCheck.isValid) {
      newErrors.mobileNumber = mobileCheck.error || 'Valid mobile number required';
    }

    if (formData.whatsappNumber.trim()) {
      const waCheck = validateIndianMobile(formData.whatsappNumber);
      if (!waCheck.isValid) {
        newErrors.whatsappNumber = 'Please enter a valid 10-digit WhatsApp number or leave blank to match mobile';
      }
    }

    if (!formData.studentClass) {
      newErrors.studentClass = 'Please select student class or learning stage';
    }

    if (!formData.board) {
      newErrors.board = 'Please select syllabus board';
    }

    if (!formData.subjectRequired.trim()) {
      newErrors.subjectRequired = 'Please specify required subject(s)';
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

    // Generate WhatsApp deep link containing ONLY the required parent enquiry data
    const url = createParentWhatsAppUrl(formData);
    setSubmittedWhatsAppUrl(url);

    // Open WhatsApp directly
    window.open(url, '_blank', 'noopener,noreferrer');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setSubmittedWhatsAppUrl(null);
    setFormData({
      parentName: '',
      mobileNumber: '',
      whatsappNumber: '',
      studentName: '',
      studentClass: '',
      board: '',
      subjectRequired: '',
      tuitionMode: 'Home',
      preferredLocation: '',
      additionalRequirements: '',
    });
    setErrors({});
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#F8FAFC] to-white border-b border-slate-100 py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#155EEF] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            For Parents & Students
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-tight mt-3 mb-4">
            Find a Home or Online Tutor
          </h1>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl mx-auto font-normal">
            Submit your tuition requirements including class, subject, location, schedule and budget.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-slate-600">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#12B76A]" />
              Verified Hyderabad Tutors
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#12B76A]" />
              Direct WhatsApp Connection
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#12B76A]" />
              Classes 1–12 & BTech
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {submittedWhatsAppUrl ? (
          /* WhatsApp Dispatched Confirmation State */
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-10 border-2 border-emerald-300 shadow-md text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#12B76A] flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-8 h-8 stroke-[2.5]" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#101828] mb-2">
              Opening WhatsApp with Your Details
            </h2>
            <p className="text-sm sm:text-base text-[#667085] mb-6">
              Your tuition requirement has been validated and prepared for <span className="font-semibold text-slate-800">+91 95052 03418</span>.
            </p>

            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl mb-6 text-left">
              <div className="text-xs font-bold text-emerald-900 mb-1">
                WhatsApp Action:
              </div>
              <p className="text-xs text-emerald-800 mb-4 leading-relaxed">
                If WhatsApp didn't open automatically in your browser or app, tap the green button below to send your tuition details directly:
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

            {/* Submitted message preview for complete user clarity */}
            <div className="bg-slate-50 rounded-xl p-4 mb-6 text-left border border-slate-200">
              <div className="text-xs font-semibold text-slate-700 mb-2">
                Details Formatted for WhatsApp:
              </div>
              <div className="text-xs text-slate-600 space-y-1">
                <div><strong>Parent Name:</strong> {formData.parentName}</div>
                <div><strong>Mobile Number:</strong> {formData.mobileNumber}</div>
                <div><strong>WhatsApp Number:</strong> {formData.whatsappNumber || formData.mobileNumber}</div>
                <div><strong>Student Name:</strong> {formData.studentName || 'Not specified'}</div>
                <div><strong>Student Class:</strong> {formData.studentClass}</div>
                <div><strong>Board:</strong> {formData.board}</div>
                <div><strong>Subject Required:</strong> {formData.subjectRequired}</div>
                <div><strong>Tuition Mode:</strong> {formData.tuitionMode}</div>
                <div><strong>Preferred Location:</strong> {formData.preferredLocation || 'Hyderabad'}</div>
                <div><strong>Additional Requirements:</strong> {formData.additionalRequirements || 'None'}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={resetForm}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Submit Another Requirement
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
          /* Form Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form Column */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 sm:p-8 md:p-10">
              <div className="mb-6 border-b border-slate-100 pb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#101828]">
                  Parent Tuition Requirement Form
                </h2>
                <p className="text-xs sm:text-sm text-[#667085] mt-1">
                  Fields marked with (<span className="text-red-500 font-bold">*</span>) are required. Your details will be sent directly via WhatsApp to our coordinator.
                </p>
              </div>

              {errors.form && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{errors.form}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Section 1: Parent & Contact Details */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#155EEF] mb-3">
                    1. Parent & Contact Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="parentName" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Parent Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="parentName"
                        value={formData.parentName}
                        onChange={(e) => handleInputChange('parentName', e.target.value)}
                        placeholder="e.g. Ramesh Reddy"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${
                          errors.parentName
                            ? 'border-red-500 focus:border-red-500 bg-red-50/20'
                            : 'border-slate-300 focus:border-[#155EEF]'
                        }`}
                        required
                      />
                      {errors.parentName && (
                        <p className="text-xs text-red-600 mt-1">{errors.parentName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="mobileNumber" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500">
                          +91
                        </span>
                        <input
                          type="tel"
                          id="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                          placeholder="95052 03418"
                          maxLength={14}
                          className={`w-full pl-12 pr-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${
                            errors.mobileNumber
                              ? 'border-red-500 focus:border-red-500 bg-red-50/20'
                              : 'border-slate-300 focus:border-[#155EEF]'
                          }`}
                          required
                        />
                      </div>
                      {errors.mobileNumber && (
                        <p className="text-xs text-red-600 mt-1">{errors.mobileNumber}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="whatsappNumber" className="block text-xs font-medium text-slate-700 mb-1.5">
                        WhatsApp Number
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500">
                          +91
                        </span>
                        <input
                          type="tel"
                          id="whatsappNumber"
                          value={formData.whatsappNumber}
                          onChange={(e) => handleInputChange('whatsappNumber', e.target.value)}
                          placeholder="Leave blank if same as mobile"
                          maxLength={14}
                          className={`w-full pl-12 pr-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${
                            errors.whatsappNumber
                              ? 'border-red-500 focus:border-red-500'
                              : 'border-slate-300 focus:border-[#155EEF]'
                          }`}
                        />
                      </div>
                      {errors.whatsappNumber && (
                        <p className="text-xs text-red-600 mt-1">{errors.whatsappNumber}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="studentName" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Student Name
                      </label>
                      <input
                        type="text"
                        id="studentName"
                        value={formData.studentName}
                        onChange={(e) => handleInputChange('studentName', e.target.value)}
                        placeholder="e.g. Rahul"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#155EEF] text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Student Class & Board */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#155EEF] mb-3">
                    2. Class, Board & Subject Required
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="studentClass" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Student Class <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="studentClass"
                        value={formData.studentClass}
                        onChange={(e) => handleInputChange('studentClass', e.target.value)}
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none bg-white transition-colors ${
                          errors.studentClass
                            ? 'border-red-500 focus:border-red-500 bg-red-50/20'
                            : 'border-slate-300 focus:border-[#155EEF]'
                        }`}
                        required
                      >
                        <option value="">-- Select Class --</option>
                        <option value="Class 1–5">Class 1 to 5 (Primary)</option>
                        <option value="Class 6–8">Class 6 to 8 (Middle School)</option>
                        <option value="Class 9–10">Class 9 to 10 (Secondary / Board)</option>
                        <option value="Class 11–12">Class 11 to 12 (Intermediate / +2)</option>
                        <option value="BTech">BTech (Engineering)</option>
                      </select>
                      {errors.studentClass && (
                        <p className="text-xs text-red-600 mt-1">{errors.studentClass}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="board" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Board <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="board"
                        value={formData.board}
                        onChange={(e) => handleInputChange('board', e.target.value)}
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none bg-white transition-colors ${
                          errors.board
                            ? 'border-red-500 focus:border-red-500 bg-red-50/20'
                            : 'border-slate-300 focus:border-[#155EEF]'
                        }`}
                        required
                      >
                        <option value="">-- Select Board --</option>
                        <option value="SSC">SSC (Telangana State Board)</option>
                        <option value="CBSE">CBSE</option>
                        <option value="ICSE">ICSE / ISC</option>
                        <option value="IGCSE">IGCSE / Cambridge</option>
                        <option value="Other">Other Board on request</option>
                      </select>
                      {errors.board && (
                        <p className="text-xs text-red-600 mt-1">{errors.board}</p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="subjectRequired" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Subject Required <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subjectRequired"
                        value={formData.subjectRequired}
                        onChange={(e) => handleInputChange('subjectRequired', e.target.value)}
                        placeholder="e.g. Mathematics, Science, Physics"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${
                          errors.subjectRequired
                            ? 'border-red-500 focus:border-red-500 bg-red-50/20'
                            : 'border-slate-300 focus:border-[#155EEF]'
                        }`}
                        required
                      />
                      {errors.subjectRequired && (
                        <p className="text-xs text-red-600 mt-1">{errors.subjectRequired}</p>
                      )}

                      {/* Quick subject tags */}
                      <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] text-slate-500 font-medium">Quick select:</span>
                        {popularSubjectsList.map((tag) => {
                          const isSelected = formData.subjectRequired.includes(tag);
                          return (
                            <button
                              type="button"
                              key={tag}
                              onClick={() => handleSubjectTagClick(tag)}
                              className={`text-[11px] px-2 py-0.5 rounded-md border transition-colors cursor-pointer ${
                                isSelected
                                  ? 'bg-[#155EEF] text-white border-[#155EEF]'
                                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              + {tag}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3: Tuition Mode, Location & Requirements */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#155EEF] mb-3">
                    3. Mode, Location & Requirements
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">
                        Home / Online Tuition
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(['Home', 'Online', 'Both'] as const).map((mode) => (
                          <button
                            type="button"
                            key={mode}
                            onClick={() => handleInputChange('tuitionMode', mode)}
                            className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                              formData.tuitionMode === mode
                                ? 'bg-blue-50 border-[#155EEF] text-[#155EEF]'
                                : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            {mode === 'Home' ? 'Home' : mode === 'Online' ? 'Online' : 'Both'}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="preferredLocation" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Preferred Location
                      </label>
                      <input
                        type="text"
                        id="preferredLocation"
                        value={formData.preferredLocation}
                        onChange={(e) => handleInputChange('preferredLocation', e.target.value)}
                        placeholder="e.g. Attapur, Mehdipatnam, Tolichowki"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#155EEF] text-sm focus:outline-none transition-colors"
                      />
                      <div className="mt-1.5 flex flex-wrap gap-1 text-[11px] text-slate-500">
                        <span>Areas:</span>
                        {['Attapur', 'Mehdipatnam', 'Tolichowki', 'Langer House', 'Rajendranagar'].map((a) => (
                          <button
                            type="button"
                            key={a}
                            onClick={() => handleInputChange('preferredLocation', a)}
                            className="underline hover:text-[#155EEF] cursor-pointer"
                          >
                            {a}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="additionalRequirements" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Additional Requirements
                      </label>
                      <textarea
                        id="additionalRequirements"
                        rows={3}
                        value={formData.additionalRequirements}
                        onChange={(e) => handleInputChange('additionalRequirements', e.target.value)}
                        placeholder="e.g. Focus on fundamentals, female tutor preferred if available, student learning pace..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#155EEF] text-xs focus:outline-none transition-colors resize-none"
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
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#155EEF] hover:bg-[#104ec6] text-white text-sm font-semibold transition-all duration-150 cursor-pointer shadow-xs active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-[#155EEF]" />
                    <span>Submit Tuition Requirement</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Right Information Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs">
                <img
                  src={imageAssets.tutorTeachingMath}
                  alt="Tutor teaching student in Hyderabad"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="p-4 bg-white border-t border-slate-100">
                  <div className="text-xs font-semibold text-[#101828] mb-1">
                    Direct Tutor-Parent Matching
                  </div>
                  <p className="text-[11px] text-[#667085] leading-relaxed">
                    We match tutors whose location, board experience, and requirements match your criteria.
                  </p>
                </div>
              </div>

              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200/80">
                <h4 className="text-sm font-bold text-[#101828] mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#155EEF]" />
                  <span>How It Works</span>
                </h4>
                <ol className="space-y-3 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-[#155EEF] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <span>Fill and submit your tuition requirement.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-[#155EEF] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <span>Your request opens directly in WhatsApp with our coordinator.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-[#155EEF] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <span>We connect you with matching tutors in your locality.</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
