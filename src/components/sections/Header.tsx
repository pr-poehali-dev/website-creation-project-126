import Icon from "@/components/ui/icon";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-secondary/65 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Icon name="Droplets" className="text-primary" size={32} />
            <div>
              <h1 className="text-2xl font-black text-white uppercase">ПЛЮХбург</h1>
              <p className="text-xs text-white/70">Детский бассейн</p>
              <p className="text-[10px] text-white/50 mt-0.5">г. Екатеринбург, ул. Кольцевая 46</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-primary transition text-sm font-semibold uppercase">
              О бассейне
            </button>
            <button onClick={() => scrollToSection('price')} className="text-white hover:text-primary transition text-sm font-semibold uppercase">
              Тарифы
            </button>
            <button onClick={() => scrollToSection('programm')} className="text-white hover:text-primary transition text-sm font-semibold uppercase">
              Программы
            </button>
            <button onClick={() => scrollToSection('team')} className="text-white hover:text-primary transition text-sm font-semibold uppercase">
              Тренеры
            </button>

            <button onClick={() => scrollToSection('contacts')} className="text-white hover:text-primary transition text-sm font-semibold uppercase">
              Контакты
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+79826322152" className="text-white hover:text-primary transition text-base font-bold hidden md:block">
              +7 (982) 63 22 152
            </a>
            <button className="lg:hidden text-white">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
