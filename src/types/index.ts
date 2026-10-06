export interface ParentRequirementFormData {
  parentName: string;
  mobileNumber: string;
  whatsappNumber: string;
  studentName: string;
  studentClass: string;
  board: string;
  subjectRequired: string;
  tuitionMode: 'Home' | 'Online' | 'Both';
  preferredLocation: string;
  additionalRequirements: string;
}

export interface TutorRegistrationFormData {
  fullName: string;
  mobileNumber: string;
  whatsappNumber: string;
  email: string;
  highestQualification: string;
  teachingExperience: string;
  subjects: string;
  classesYouTeach: string;
  boards: string;
  languagesKnown: string;
  areasYouCanTravelTo: string;
  teachingMode: 'Home' | 'Online' | 'Both';
  expectedFee: string;
  availability: string;
  additionalInformation: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export type PageRoute = '/' | '/about' | '/parents' | '/tutors' | '/how-it-works' | '/contact';
