/**
 * Central Configuration for Naveen Home Tuitions
 * 
 * Update contact details, service locations, and business settings in this file.
 * All phone, WhatsApp, and email actions reference these values.
 */

export interface SiteConfig {
  brandName: string;
  tagline: string;
  description: string;
  city: string;
  state: string;
  country: string;
  /**
   * Phone number placeholder for the business owner.
   * Format: "+91 XXXXXXXXXX" or standard digits.
   */
  phoneNumber: string;
  phoneDisplay: string;
  /**
   * WhatsApp number in international format without '+' or spaces (e.g. "919876543210").
   * Used for https://wa.me/ links.
   */
  whatsappNumber: string;
  whatsappDisplay: string;
  /**
   * Official contact email address placeholder.
   */
  email: string;
  /**
   * Google Business Profile link placeholder.
   * Replace with the verified GBP URL once published.
   */
  googleBusinessProfileUrl: string;
  /**
   * Operating office / representative location in Hyderabad.
   */
  address: {
    line1: string;
    area: string;
    city: string;
    state: string;
    postalCodePlaceholder: string;
  };
  /**
   * Key service areas served across Hyderabad, Telangana.
   */
  serviceAreas: Array<{
    name: string;
    description: string;
    popularSubjects: string[];
  }>;
  /**
   * Subjects offered across boards.
   */
  subjects: Array<{
    name: string;
    category: 'Core' | 'Sciences' | 'Languages' | 'Technical';
    description: string;
  }>;
  /**
   * Boards supported.
   */
  boards: Array<{
    name: string;
    fullName: string;
    badge?: string;
  }>;
  /**
   * Learning stage classifications.
   */
  learningStages: Array<{
    title: string;
    subtitle: string;
    details: string;
  }>;
}

export const siteConfig: SiteConfig = {
  brandName: 'Naveen Home Tuitions',
  tagline: 'Connecting Parents and Students with Suitable Home & Online Tutors in Hyderabad',
  description:
    'Naveen Home Tuitions connects parents and students with verified, dedicated home and online tutors for Classes 1–12 and BTech across Hyderabad, Telangana.',
  city: 'Hyderabad',
  state: 'Telangana',
  country: 'India',

  // Exact business phone and WhatsApp numbers
  phoneNumber: '+91 95052 03418',
  phoneDisplay: '+91 95052 03418',
  whatsappNumber: '919505203418',
  whatsappDisplay: '+91 95052 03418',
  email: 'contact@naveenhometuitions.com',
  googleBusinessProfileUrl: 'https://maps.google.com/?cid=naveen-home-tuitions-hyderabad',

  address: {
    line1: 'Near Pillar No. 120, Ring Road',
    area: 'Attapur',
    city: 'Hyderabad',
    state: 'Telangana',
    postalCodePlaceholder: '500048',
  },

  serviceAreas: [
    {
      name: 'Attapur',
      description: 'Home & online tutors available for CBSE, SSC & ICSE curricula.',
      popularSubjects: ['Maths', 'Physics', 'Chemistry'],
    },
    {
      name: 'Mehdipatnam',
      description: 'Experienced tutors covering secondary classes, junior college & engineering.',
      popularSubjects: ['Mathematics', 'Science', 'English'],
    },
    {
      name: 'Tolichowki',
      description: 'Reliable tuition support for primary, secondary and senior secondary students.',
      popularSubjects: ['Physics', 'Maths', 'Biology'],
    },
    {
      name: 'Langer House',
      description: 'Dedicated home tutors for school academics and board exam preparations.',
      popularSubjects: ['Science', 'Social Studies', 'Maths'],
    },
    {
      name: 'Rajendranagar',
      description: 'Qualified tutors for all major boards and university engineering courses.',
      popularSubjects: ['Computer Science', 'BTech Maths', 'Chemistry'],
    },
    {
      name: 'Upperpally',
      description: 'Individual home tutoring tailored to student learning pace.',
      popularSubjects: ['CBSE Maths', 'Science', 'English'],
    },
    {
      name: 'Karwan',
      description: 'Personalized tuition for primary and high school students.',
      popularSubjects: ['Mathematics', 'Physical Science', 'Languages'],
    },
    {
      name: 'Suncity',
      description: 'Experienced educators for CBSE, ICSE and international syllabus.',
      popularSubjects: ['Physics', 'Chemistry', 'BTech Subjects'],
    },
    {
      name: 'Nearby Hyderabad areas',
      description: 'Tuition inquiries supported across Gachibowli, Manikonda, Masab Tank, and surrounding areas.',
      popularSubjects: ['All Academic Subjects', 'Online Tuition'],
    },
  ],

  subjects: [
    { name: 'Mathematics', category: 'Core', description: 'Foundational arithmetic, algebra, geometry, calculus, and engineering maths.' },
    { name: 'Science', category: 'Core', description: 'Integrated general science for middle and secondary school standards.' },
    { name: 'Physics', category: 'Sciences', description: 'Mechanics, thermodynamics, electrodynamics, and conceptual physics for Class 9–12.' },
    { name: 'Chemistry', category: 'Sciences', description: 'Physical, organic, and inorganic chemistry for board exams and competitive foundations.' },
    { name: 'Biology', category: 'Sciences', description: 'Botany, zoology, human anatomy, and board syllabus preparation.' },
    { name: 'English', category: 'Languages', description: 'Grammar, literature, comprehension, writing skills, and communicative competence.' },
    { name: 'Computer Science', category: 'Technical', description: 'Python, Java, C++, data structures, and computer applications.' },
    { name: 'Other subjects on request', category: 'Core', description: 'Social studies, Telugu, Hindi, Accountancy, Economics, and BTech branches.' },
  ],

  boards: [
    { name: 'SSC', fullName: 'Telangana State Board of Secondary Education' },
    { name: 'CBSE', fullName: 'Central Board of Secondary Education' },
    { name: 'ICSE', fullName: 'Indian Certificate of Secondary Education' },
    { name: 'IGCSE', fullName: 'Cambridge International General Certificate of Secondary Education' },
    { name: 'Other boards', fullName: 'IB, NIOS, and State Intermediate Board on request' },
  ],

  learningStages: [
    {
      title: 'Classes 1–5',
      subtitle: 'Primary Foundation',
      details: 'Building solid literacy, basic numeracy, foundational science concepts, and consistent study habits.',
    },
    {
      title: 'Classes 6–8',
      subtitle: 'Middle School Growth',
      details: 'Conceptual clarity in Mathematics, Integrated Sciences, Social Studies, and language fundamentals.',
    },
    {
      title: 'Classes 9–10',
      subtitle: 'Secondary & Board Prep',
      details: 'Focused guidance for SSC, CBSE, and ICSE board exams, practical problem-solving, and regular test series.',
    },
    {
      title: 'Classes 11–12',
      subtitle: 'Senior Secondary / Intermediate',
      details: 'Deep subject specialization in MPC (Maths, Physics, Chemistry) and BiPC, plus board examination syllabus mastery.',
    },
    {
      title: 'BTech',
      subtitle: 'Engineering Mathematics & Core Subjects',
      details: 'M1, M2, M3, Engineering Physics, C/Java Programming, Electrical Circuits, and core branch engineering modules.',
    },
  ],
};

/**
 * Generates an active WhatsApp messaging link with optional pre-filled message text.
 */
export function getWhatsAppLink(customMessage?: string): string {
  const defaultText = encodeURIComponent(
    'Hello Naveen Home Tuitions, I am looking for information regarding home/online tuition in Hyderabad.'
  );
  const text = customMessage ? encodeURIComponent(customMessage) : defaultText;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

/**
 * Returns telephone dial link.
 */
export function getPhoneLink(): string {
  return `tel:${siteConfig.phoneNumber.replace(/\s+/g, '')}`;
}

/**
 * Format Parent Requirement into WhatsApp message
 */
export function createParentWhatsAppUrl(data: {
  parentName: string;
  mobileNumber: string;
  whatsappNumber?: string;
  studentName?: string;
  studentClass: string;
  board: string;
  subjectRequired: string;
  tuitionMode: string;
  preferredLocation?: string;
  additionalRequirements?: string;
}): string {
  const lines = [
    'Hello Naveen Home Tuitions,',
    '',
    'I would like to find a tutor.',
    '',
    `Parent Name: ${data.parentName || 'Not specified'}`,
    `Mobile Number: ${data.mobileNumber || 'Not specified'}`,
    `WhatsApp Number: ${data.whatsappNumber || data.mobileNumber || 'Same as Mobile'}`,
    `Student Name: ${data.studentName || 'Not specified'}`,
    `Student Class: ${data.studentClass || 'Not specified'}`,
    `Board: ${data.board || 'Not specified'}`,
    `Subject Required: ${data.subjectRequired || 'Not specified'}`,
    `Tuition Mode: ${data.tuitionMode || 'Home'}`,
    `Preferred Location: ${data.preferredLocation || 'Hyderabad'}`,
    `Additional Requirements: ${data.additionalRequirements || 'None'}`,
    '',
    'Please contact me regarding suitable tuition options.',
  ];

  const fullText = lines.join('\n');
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(fullText)}`;
}

/**
 * Format Tutor Registration into WhatsApp message
 */
export function createTutorWhatsAppUrl(data: {
  fullName: string;
  mobileNumber: string;
  whatsappNumber?: string;
  email?: string;
  highestQualification: string;
  teachingExperience?: string;
  subjects: string;
  classesYouTeach: string;
  boards?: string;
  languagesKnown?: string;
  areasYouCanTravelTo?: string;
  teachingMode: string;
  expectedFee?: string;
  availability?: string;
  additionalInformation?: string;
}): string {
  const lines = [
    'Hello Naveen Home Tuitions,',
    '',
    'I would like to register as a tutor.',
    '',
    `Full Name: ${data.fullName || 'Not specified'}`,
    `Mobile Number: ${data.mobileNumber || 'Not specified'}`,
    `WhatsApp Number: ${data.whatsappNumber || data.mobileNumber || 'Same as Mobile'}`,
    `Email: ${data.email || 'Not provided'}`,
    `Highest Qualification: ${data.highestQualification || 'Not specified'}`,
    `Teaching Experience: ${data.teachingExperience || 'Not specified'}`,
    `Subjects: ${data.subjects || 'Not specified'}`,
    `Classes: ${data.classesYouTeach || 'Not specified'}`,
    `Boards: ${data.boards || 'All boards'}`,
    `Languages Known: ${data.languagesKnown || 'English, Telugu, Hindi'}`,
    `Areas: ${data.areasYouCanTravelTo || 'Hyderabad'}`,
    `Teaching Mode: ${data.teachingMode || 'Home'}`,
    `Expected Fee: ${data.expectedFee || 'Negotiable'}`,
    `Availability: ${data.availability || 'Flexible'}`,
    `Additional Information: ${data.additionalInformation || 'None'}`,
    '',
    'Please contact me regarding tutor opportunities.',
  ];

  const fullText = lines.join('\n');
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(fullText)}`;
}

/**
 * Format Contact Form into WhatsApp message
 */
export function createContactWhatsAppUrl(data: {
  name: string;
  phone: string;
  email?: string;
  message: string;
}): string {
  const lines = [
    'Hello Naveen Home Tuitions,',
    '',
    `Name: ${data.name || 'Not specified'}`,
    `Phone: ${data.phone || 'Not specified'}`,
    `Email: ${data.email || 'Not provided'}`,
    `Message: ${data.message || 'Enquiry regarding tuition services.'}`,
    '',
    'Please contact me regarding my enquiry.',
  ];

  const fullText = lines.join('\n');
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(fullText)}`;
}
