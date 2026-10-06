import { PageRoute } from '../types';
import { HeroSection } from '../components/home/HeroSection';
import { TwoJourneysSplit } from '../components/home/TwoJourneysSplit';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { AboutUsSection } from '../components/home/AboutUsSection';
import { ClassesSection } from '../components/home/ClassesSection';
import { SubjectsSection } from '../components/home/SubjectsSection';
import { BoardsSection } from '../components/home/BoardsSection';
import { HowItWorksHome } from '../components/home/HowItWorksHome';
import { ServiceAreasSection } from '../components/home/ServiceAreasSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { GoogleReviewsSection } from '../components/home/GoogleReviewsSection';
import { FinalCTASection } from '../components/home/FinalCTASection';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main>
      {/* 1. Hero with direct two-journey entry */}
      <HeroSection onNavigate={onNavigate} />

      {/* 2. Visual Split Section for Parents vs Tutors */}
      <TwoJourneysSplit onNavigate={onNavigate} />

      {/* 3. Why Choose Us (6 cards) */}
      <WhyChooseUs />

      {/* 4. About Us */}
      <AboutUsSection />

      {/* 5. Classes (Tuition for Every Learning Stage) */}
      <ClassesSection onNavigate={onNavigate} />

      {/* 6. Subjects We Cover */}
      <SubjectsSection onNavigate={onNavigate} />

      {/* 7. Boards We Support */}
      <BoardsSection onNavigate={onNavigate} />

      {/* 8. How It Works (4 numbered steps) */}
      <HowItWorksHome onNavigate={onNavigate} />

      {/* 9. Home Tuition Across Hyderabad */}
      <ServiceAreasSection onNavigate={onNavigate} />

      {/* 10. What Parents & Tutors Say (Testimonials) */}
      <TestimonialsSection />

      {/* 11. Google Reviews */}
      <GoogleReviewsSection />

      {/* 12. Final CTA */}
      <FinalCTASection onNavigate={onNavigate} />
    </main>
  );
}
