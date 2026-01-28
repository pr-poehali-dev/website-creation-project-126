import Icon from "@/components/ui/icon";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[990] backdrop-blur-[29px] bg-black/65 shadow-[0px_10px_30px_0px_rgba(0,0,0,1)]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[70px]">
            <div className="flex items-center gap-2 sm:gap-3">
              <Icon name="Droplets" className="text-primary" size={32} />
              <div>
                <h1 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold text-white uppercase tracking-tight leading-none" style={{fontFamily: 'Oswald, Arial, sans-serif'}}>ПЛЮХбург</h1>
                <p className="text-[10px] sm:text-[11px] md:text-[12px] text-white font-bold mt-0.5" style={{fontFamily: 'Inter, Arial, sans-serif'}}>с 2016 года</p>
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
              <span className="text-white/50 text-[18px] font-medium cursor-not-allowed">
                Тренеры
              </span>
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