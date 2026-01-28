import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  const [isTopBarHidden, setIsTopBarHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsTopBarHidden(true);
      } else {
        setIsTopBarHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`fixed left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm transition-all duration-300 ${
        isTopBarHidden ? '-top-[50px]' : 'top-0'
      }`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-white text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 w-full sm:w-auto">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-primary flex-shrink-0" />
                <span className="text-center sm:text-left">г. Екатеринбург, ул. Кольцевая 46</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} className="text-primary flex-shrink-0" />
                <span>Ежедневно с 9:00 до 20:00</span>
              </div>
            </div>
            <a href="tel:+79826322152" className="hover:text-primary transition font-semibold whitespace-nowrap">
              +7 (982) 63 22 152
            </a>
          </div>
        </div>
      </div>

      <header className={`fixed left-0 right-0 z-[990] backdrop-blur-[29px] bg-black/65 shadow-[0px_10px_30px_0px_rgba(0,0,0,1)] transition-all duration-300 ${
        isTopBarHidden ? 'top-0' : 'top-[50px]'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[70px]">
            <div className="flex items-center gap-3">
              <Icon name="Droplets" className="text-primary" size={40} />
              <div>
                <h1 className="text-[28px] font-bold text-white uppercase tracking-tight leading-none" style={{fontFamily: 'Oswald, Arial, sans-serif'}}>ПЛЮХбург</h1>
                <p className="text-[12px] text-white font-bold mt-0.5" style={{fontFamily: 'Inter, Arial, sans-serif'}}>с 2016 года</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-12" style={{fontFamily: 'Inter, Arial, sans-serif'}}>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-primary transition-colors duration-200 text-[18px] font-medium">
                О бассейне
              </button>
              <button onClick={() => scrollToSection('price')} className="text-white hover:text-primary transition-colors duration-200 text-[18px] font-medium">
                Тарифы
              </button>
              <button onClick={() => scrollToSection('programm')} className="text-white hover:text-primary transition-colors duration-200 text-[18px] font-medium">
                Программы
              </button>
              <button onClick={() => scrollToSection('team')} className="text-white hover:text-primary transition-colors duration-200 text-[18px] font-medium">
                Тренеры
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-white hover:text-primary transition-colors duration-200 text-[18px] font-medium">
                Контакты
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <a href="tel:+79826322152" className="hidden lg:block text-white hover:opacity-75 transition text-[16px] font-semibold whitespace-nowrap" style={{fontFamily: 'Inter, Arial, sans-serif'}}>
                +7 (982) 63 22 152
              </a>
              <button className="lg:hidden text-white">
                <Icon name="Menu" size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;