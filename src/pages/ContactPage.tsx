import { useState } from 'react';
import { ContactFormData, PageRoute } from '../types';
import { siteConfig, getPhoneLink, getWhatsAppLink, createContactWhatsAppUrl } from '../config/siteConfig';
import { validateIndianMobile } from '../services/tuitionService';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Clock,
  Sparkles,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string | null>(null);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
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

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }

    const phoneCheck = validateIndianMobile(formData.phone);
    if (!phoneCheck.isValid) {
      newErrors.phone = phoneCheck.error || 'Valid mobile number required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const url = createContactWhatsAppUrl(formData);
    setSubmittedWhatsAppUrl(url);

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const resetForm = () => {
    setSubmittedWhatsAppUrl(null);
    setFormData({ name: '', phone: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F8FAFC] to-white border-b border-slate-100 py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#155EEF] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            Direct Communication
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-tight mt-3 mb-4">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl mx-auto font-normal">
            Have questions about finding a tutor in Hyderabad or joining our teaching network? Contact the Naveen Home Tuitions team directly.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#101828] mb-1">
                {siteConfig.brandName}
              </h2>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-6">
                Connecting parents and students with suitable home and online tutors across Hyderabad.
              </p>
            </div>

            {/* Direct Call & WhatsApp Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                href={getPhoneLink()}
                className="p-5 rounded-xl border border-blue-200 bg-blue-50/40 hover:bg-blue-50 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#155EEF] text-white flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                    Phone
                  </div>
                  <div className="text-sm font-bold text-[#101828] mt-0.5 group-hover:text-[#155EEF]">
                    {siteConfig.phoneDisplay}
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#155EEF] mt-4 flex items-center gap-1">
                  Call Now &rarr;
                </span>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/40 hover:bg-emerald-50 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#12B76A] text-white flex items-center justify-center mb-3">
                    <MessageCircle className="w-5 h-5 fill-white text-[#12B76A]" />
                  </div>
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                    WhatsApp
                  </div>
                  <div className="text-sm font-bold text-[#101828] mt-0.5 group-hover:text-[#12B76A]">
                    {siteConfig.whatsappDisplay}
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#12B76A] mt-4 flex items-center gap-1">
                  WhatsApp Us &rarr;
                </span>
              </a>
            </div>

            {/* Additional info cards */}
            <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-800">Email Address</div>
                  <a href={`mailto:${siteConfig.email}`} className="text-slate-600 hover:text-blue-600">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-800">Hyderabad Service Areas</div>
                  <div className="text-slate-600">
                    Attapur, Mehdipatnam, Tolichowki, Langer House, Rajendranagar, Upperpally, Karwan, Suncity, and nearby Hyderabad areas.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <Clock className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-800">Working Hours</div>
                  <div className="text-slate-600">
                    Monday to Saturday: 9:00 AM – 8:00 PM IST
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas Summary */}
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Active Hyderabad Localities
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {siteConfig.serviceAreas.map((a) => (
                  <span
                    key={a.name}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium"
                  >
                    {a.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 sm:p-8 md:p-10">
            <div className="mb-6 border-b border-slate-100 pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#101828]">
                Send a Message
              </h2>
              <p className="text-xs sm:text-sm text-[#667085] mt-1">
                Fill out the form below to send your enquiry directly to +91 95052 03418 on WhatsApp.
              </p>
            </div>

            {submittedWhatsAppUrl ? (
              <div className="py-6 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#12B76A] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-7 h-7 stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-bold text-[#101828]">
                  WhatsApp Ready!
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] max-w-md mx-auto">
                  Your message has been encoded. If WhatsApp didn't open automatically, tap below:
                </p>
                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={submittedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-[#12B76A] text-white text-xs font-semibold hover:bg-[#0e9657] transition-colors inline-flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-[#12B76A]" />
                    <span>Open WhatsApp (+91 95052 03418)</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                  <button
                    onClick={resetForm}
                    className="px-5 py-3 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Write Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {errors.form && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{errors.form}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="contactName" className="block text-xs font-medium text-slate-700 mb-1.5">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Your Name"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-[#155EEF]'
                    }`}
                    required
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contactPhone" className="block text-xs font-medium text-slate-700 mb-1.5">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500">
                      +91
                    </span>
                    <input
                      type="tel"
                      id="contactPhone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="95052 03418"
                      maxLength={14}
                      className={`w-full pl-12 pr-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-[#155EEF]'
                      }`}
                      required
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="contactEmail" className="block text-xs font-medium text-slate-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#155EEF] text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage" className="block text-xs font-medium text-slate-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contactMessage"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us what tuition help you are looking for..."
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-[#155EEF]'
                    }`}
                    required
                  />
                  {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#155EEF] hover:bg-[#104ec6] text-white text-sm font-semibold transition-all duration-150 cursor-pointer shadow-xs active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-[#155EEF]" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
