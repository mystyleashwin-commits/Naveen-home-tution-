import { Phone, MessageCircle } from 'lucide-react';
import { getPhoneLink, getWhatsAppLink } from '../../config/siteConfig';

export function FloatingContactButtons() {
  const whatsappUrl = getWhatsAppLink('Hello Naveen Home Tuitions, I would like to inquire about home/online tuitions in Hyderabad.');
  const callUrl = getPhoneLink();

  return (
    <div
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-auto"
      role="region"
      aria-label="Quick Contact Actions"
    >
      {/* Call Button (Primary Blue #155EEF) */}
      <a
        href={callUrl}
        aria-label="Call Naveen Home Tuitions at +91 95052 03418"
        className="flex items-center gap-2 bg-[#155EEF] hover:bg-[#104ec6] text-white p-3 sm:py-2.5 sm:px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-150 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#155EEF] focus:ring-offset-2"
      >
        <Phone className="w-5 h-5 text-white shrink-0 group-hover:scale-110 transition-transform" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline whitespace-nowrap">
          Call Now
        </span>
      </a>

      {/* WhatsApp Button (Secondary Green #12B76A) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Naveen Home Tuitions on WhatsApp at +91 95052 03418"
        className="flex items-center gap-2 bg-[#12B76A] hover:bg-[#0e9657] text-white p-3 sm:py-2.5 sm:px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-150 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#12B76A] focus:ring-offset-2"
      >
        <MessageCircle className="w-5 h-5 fill-white text-[#12B76A] shrink-0 group-hover:scale-110 transition-transform" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline whitespace-nowrap">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}
