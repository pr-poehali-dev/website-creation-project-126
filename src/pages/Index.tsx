import { useState, useEffect } from "react";
import Header from "@/components/sections/Header";
import MainSections from "@/components/sections/MainSections";
import PriceAndPrograms from "@/components/sections/PriceAndPrograms";
import ReviewsAndContacts from "@/components/sections/ReviewsAndContacts";

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div 
        className="fixed top-0 left-0 h-1 bg-primary z-[100] transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <Header scrollToSection={scrollToSection} />
      <MainSections scrollToSection={scrollToSection} />
      <PriceAndPrograms scrollToSection={scrollToSection} />
      <ReviewsAndContacts />
    </div>
  );
};

export default Index;
