import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../config/siteConfig';

interface WhatsAppButtonProps {
  label?: string;
  customMessage?: string;
  variant?: 'primary' | 'outline' | 'floating';
  className?: string;
}

export function WhatsAppButton({
  label = 'WhatsApp Us',
  customMessage,
  variant = 'primary',
  className = '',
}: WhatsAppButtonProps) {
  const href = getWhatsAppLink(customMessage);

  if (variant === 'floating') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Naveen Home Tuitions on WhatsApp"
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-[#12B76A] hover:bg-[#0e9657] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#12B76A] focus:ring-offset-2 ${className}`}
      >
        <MessageCircle className="w-5 h-5 fill-white text-[#12B76A] group-hover:scale-110 transition-transform" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline">
          {label}
        </span>
      </a>
    );
  }

  if (variant === 'outline') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#12B76A] text-[#12B76A] hover:bg-[#ecfdf3] text-sm font-semibold transition-colors active:scale-[0.98] ${className}`}
      >
        <MessageCircle className="w-4 h-4" />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#12B76A] hover:bg-[#0e9657] text-white text-sm font-semibold shadow-xs hover:shadow transition-colors active:scale-[0.98] ${className}`}
    >
      <MessageCircle className="w-4 h-4 fill-white text-[#12B76A]" />
      <span>{label}</span>
    </a>
  );
}
