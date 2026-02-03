import { useState, useEffect } from "react";
import Header from "@/components/sections/Header";
import MainSections from "@/components/sections/MainSections";
import PriceAndPrograms from "@/components/sections/PriceAndPrograms";
import ReviewsAndContacts from "@/components/sections/ReviewsAndContacts";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 300);
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 w-14 h-14 bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center shadow-2xl transition-all z-50 hover:scale-110"
          aria-label="Наверх"
        >
          <Icon name="ArrowUp" size={24} />
        </button>
      )}
    </div>
  );
};

export default Index;