import Icon from "@/components/ui/icon";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-secondary/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-white/80 text-xs">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={14} className="text-primary" />
                <span>г. Екатеринбург, ул. Кольцевая 46</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={14} className="text-primary" />
                <span>Ежедневно с 9:00 до 21:00</span>
              </div>
            </div>
            <a href="tel:+79826322152" className="hover:text-primary transition text-sm font-semibold">
              +7 (982) 63 22 152
            </a>
          </div>
        </div>
      </div>

      <header className="fixed top-[42px] left-0 right-0 z-50 backdrop-blur-[29px] bg-secondary/65 shadow-[0px_10px_30px_0px_rgba(0,0,0,1)]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[70px]">
            <div className="flex items-center gap-2">
              <Icon name="Droplets" className="text-primary" size={32} />
              <div>
                <h1 className="text-2xl font-black text-white uppercase tracking-tight">ПЛЮХбург</h1>
                <p className="text-xs text-white/70">с 2016 года</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-primary transition text-[18px] font-normal uppercase tracking-wide">
                О бассейне
              </button>
              <button onClick={() => scrollToSection('price')} className="text-white hover:text-primary transition text-[18px] font-normal uppercase tracking-wide">
                Тарифы
              </button>
              <button onClick={() => scrollToSection('programm')} className="text-white hover:text-primary transition text-[18px] font-normal uppercase tracking-wide">
                Программы
              </button>
              <button onClick={() => scrollToSection('team')} className="text-white hover:text-primary transition text-[18px] font-normal uppercase tracking-wide">
                Тренеры
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-white hover:text-primary transition text-[18px] font-normal uppercase tracking-wide">
                Контакты
              </button>
            </nav>

            <div className="flex items-center gap-4">
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