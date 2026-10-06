import { useEffect } from 'react';
import { PageRoute } from '../../types';

interface SEOProps {
  route: PageRoute;
}

const SEO_DATA: Record<PageRoute, { title: string; description: string; canonical: string }> = {
  '/': {
    title: 'Home Tutors in Hyderabad | Naveen Home Tuitions',
    description:
      'Connect with verified home and online tutors for Classes 1–12 and BTech across Hyderabad. Personalized tutoring in Attapur, Mehdipatnam, Tolichowki, and more.',
    canonical: 'https://naveen-home-tuitions.ai.studio/',
  },
  '/about': {
    title: 'About Us | Naveen Home Tuitions',
    description:
      'Naveen Home Tuitions, established in 2024, connects parents and students with qualified and trusted tutors across Hyderabad, India, and around the world.',
    canonical: 'https://naveen-home-tuitions.ai.studio/about',
  },
  '/parents': {
    title: 'Find Home & Online Tutors in Hyderabad | Naveen Home Tuitions',
    description:
      'Submit your tuition requirements to connect with verified tutors for Classes 1–12 and BTech across Hyderabad. One-on-one home and online classes.',
    canonical: 'https://naveen-home-tuitions.ai.studio/parents',
  },
  '/tutors': {
    title: 'Become a Home Tutor in Hyderabad | Naveen Home Tuitions',
    description:
      'Join our tutor network in Hyderabad. Connect with students matching your subject expertise, preferred locations, and teaching schedule.',
    canonical: 'https://naveen-home-tuitions.ai.studio/tutors',
  },
  '/how-it-works': {
    title: 'How Home Tuition Works in Hyderabad | Naveen Home Tuitions',
    description:
      'Learn how Naveen Home Tuitions connects parents and students with verified tutors across Hyderabad in 4 clear, transparent steps.',
    canonical: 'https://naveen-home-tuitions.ai.studio/how-it-works',
  },
  '/contact': {
    title: 'Contact Naveen Home Tuitions | Hyderabad Tutors',
    description:
      'Get in touch with Naveen Home Tuitions for home and online tutor inquiries across Hyderabad. Call, WhatsApp, or send a direct message.',
    canonical: 'https://naveen-home-tuitions.ai.studio/contact',
  },
};

export function SEOHead({ route }: SEOProps) {
  useEffect(() => {
    const data = SEO_DATA[route] || SEO_DATA['/'];
    document.title = data.title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', data.description);

    // Update OpenGraph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', data.title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', data.description);

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', data.title);

    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', data.description);

    // Update Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', data.canonical);
  }, [route]);

  return null;
}
