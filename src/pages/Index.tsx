import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

export default function Index() {
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

      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-secondary/65 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Icon name="Circle" className="text-primary" size={32} />
              <div>
                <h1 className="text-2xl font-black text-white uppercase">Кальчо</h1>
                <p className="text-xs text-white/70">с 2017 года</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-primary transition text-sm font-semibold uppercase">
                О школе
              </button>
              <button onClick={() => scrollToSection('price')} className="text-white hover:text-primary transition text-sm font-semibold uppercase">
                Тарифы
              </button>
              <button onClick={() => scrollToSection('programm')} className="text-white hover:text-primary transition text-sm font-semibold uppercase">
                Программы обучения
              </button>
              <button onClick={() => scrollToSection('team')} className="text-white hover:text-primary transition text-sm font-semibold uppercase">
                Тренерский состав
              </button>
              <button onClick={() => scrollToSection('triangle')} className="text-white hover:text-primary transition text-sm font-semibold uppercase">
                Методика обучения
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-white hover:text-primary transition text-sm font-semibold uppercase">
                Наши контакты
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <a href="tel:+79030796416" className="text-white hover:text-primary transition text-base font-bold hidden md:block">
                +7 (903) 079-64-16
              </a>
              <button className="lg:hidden text-white">
                <Icon name="Menu" size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative h-[890px] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://cdn.poehali.dev/projects/eacdcf2f-19c9-4d20-b040-35bebd611835/files/7b3e921e-6859-4710-9f5b-473634ef1740.jpg')`
          }}
        />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-bold mb-8">
              с 2017 года
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight uppercase">
              Футбольная школа «Кальчо» — Детский мир футбола в уютной психологической атмосфере
            </h1>

            <div className="flex items-center justify-center gap-2 text-white text-xl mb-12">
              <Icon name="Users" size={24} />
              <span className="font-semibold">Для детей от 4 до 10 лет</span>
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-bold text-xl px-12 py-8 rounded-full shadow-2xl uppercase animate-pulse"
              onClick={() => scrollToSection('contacts')}
            >
              Бесплатная пробная неделя
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase">О школе</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/eacdcf2f-19c9-4d20-b040-35bebd611835/files/1ec3fc48-8435-4528-b049-eb717b394491.jpg"
                alt="Тренировки"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Детская футбольная школа «Кальчо» работает в Екатеринбурге с 2017 года. Мы создали уникальную среду, где каждый ребёнок может проявить свой характер и потенциал.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">Индивидуальный подход к каждому ребёнку</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">Опытные тренеры с международными сертификатами</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">Уютная психологическая атмосфера</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">Помогаем исполнить мечту стать звездой мирового уровня</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="price" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase">Тарифы</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary">
              <h3 className="text-2xl font-bold mb-4 uppercase">Разовое занятие</h3>
              <div className="text-5xl font-black text-primary mb-6">1500₽</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>1 тренировка 60 минут</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Группа до 12 человек</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Профессиональный тренер</span>
                </li>
              </ul>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full py-6" onClick={() => scrollToSection('contacts')}>
                Записаться
              </Button>
            </div>

            <div className="bg-primary p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-secondary text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                Популярный
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white uppercase">Абонемент 8 занятий</h3>
              <div className="text-5xl font-black text-white mb-6">10800₽</div>
              <ul className="space-y-3 mb-8 text-white">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="flex-shrink-0 mt-1" size={20} />
                  <span>8 тренировок по 60 минут</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="flex-shrink-0 mt-1" size={20} />
                  <span>Группа до 12 человек</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="flex-shrink-0 mt-1" size={20} />
                  <span>Профессиональный тренер</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="flex-shrink-0 mt-1" size={20} />
                  <span>Экономия 1200₽</span>
                </li>
              </ul>
              <Button className="w-full bg-white hover:bg-white/90 text-primary font-bold rounded-full py-6" onClick={() => scrollToSection('contacts')}>
                Записаться
              </Button>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary">
              <h3 className="text-2xl font-bold mb-4 uppercase">Абонемент 12 занятий</h3>
              <div className="text-5xl font-black text-primary mb-6">15000₽</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>12 тренировок по 60 минут</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Группа до 12 человек</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Профессиональный тренер</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Экономия 3000₽</span>
                </li>
              </ul>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full py-6" onClick={() => scrollToSection('contacts')}>
                Записаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="programm" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase">Программы обучения</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-card p-8 rounded-3xl shadow-lg border-2 border-border">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Baby" size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 uppercase">4-5 лет</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Программа для самых маленьких. Основы владения мячом, координация движений, развитие моторики. Игровой формат занятий.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={8} className="text-primary flex-shrink-0 mt-2" />
                      <span>Базовые навыки владения мячом</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={8} className="text-primary flex-shrink-0 mt-2" />
                      <span>Развитие координации</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={8} className="text-primary flex-shrink-0 mt-2" />
                      <span>Игры и эстафеты</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg border-2 border-border">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 uppercase">6-7 лет</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Техника владения мячом, передачи, первые тактические элементы. Развитие командных навыков.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={8} className="text-primary flex-shrink-0 mt-2" />
                      <span>Техника ведения и передач</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={8} className="text-primary flex-shrink-0 mt-2" />
                      <span>Базовая тактика</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={8} className="text-primary flex-shrink-0 mt-2" />
                      <span>Командная игра</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg border-2 border-border">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 uppercase">8-10 лет</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Углублённое изучение техники и тактики. Подготовка к соревнованиям. Индивидуальное мастерство.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={8} className="text-primary flex-shrink-0 mt-2" />
                      <span>Продвинутая техника</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={8} className="text-primary flex-shrink-0 mt-2" />
                      <span>Тактические схемы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={8} className="text-primary flex-shrink-0 mt-2" />
                      <span>Участие в турнирах</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase">Тренерский состав</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                <Icon name="User" size={64} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase">Алексей Иванов</h3>
              <p className="text-primary font-semibold mb-4">Главный тренер</p>
              <p className="text-sm leading-relaxed">
                UEFA B License. 12 лет опыта работы с детьми. Экс-игрок профессиональных клубов.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                <Icon name="User" size={64} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase">Дмитрий Петров</h3>
              <p className="text-primary font-semibold mb-4">Тренер</p>
              <p className="text-sm leading-relaxed">
                Специалист по работе с детьми 4-7 лет. Образование ГЦОЛИФК. 8 лет в детском футболе.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                <Icon name="User" size={64} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase">Сергей Смирнов</h3>
              <p className="text-primary font-semibold mb-4">Тренер</p>
              <p className="text-sm leading-relaxed">
                Мастер спорта по футболу. Специализация: техника и индивидуальное мастерство. 10 лет опыта.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="triangle" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase">Методика обучения</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Icon name="Target" size={48} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase">Техника</h3>
                <p className="leading-relaxed">
                  Отработка базовых элементов: ведение, передача, удар, контроль мяча
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Icon name="Brain" size={48} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase">Тактика</h3>
                <p className="leading-relaxed">
                  Понимание игры, позиционирование, взаимодействие с партнёрами
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Icon name="Heart" size={48} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase">Характер</h3>
                <p className="leading-relaxed">
                  Воспитание лидерских качеств, командного духа и любви к игре
                </p>
              </div>
            </div>

            <div className="bg-muted p-8 rounded-3xl">
              <p className="text-lg leading-relaxed text-center">
                Наша методика основана на <strong>индивидуальном подходе</strong> к каждому ребёнку. 
                Мы создаём условия, где дети могут развиваться в своём темпе, получая удовольствие от игры 
                и одновременно совершенствуя свои навыки.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase">Наши контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 uppercase">Запишитесь на бесплатную неделю</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <Input type="text" placeholder="Введите ваше имя" className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Имя ребёнка</label>
                  <Input type="text" placeholder="Введите имя ребёнка" className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Возраст ребёнка</label>
                  <Input type="number" placeholder="От 4 до 10 лет" min="4" max="10" className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон</label>
                  <Input type="tel" placeholder="+7 (___) ___-__-__" className="w-full" />
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-full text-lg">
                  Отправить заявку
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Номер телефона запрашивается исключительно для обратной связи с вами
                </p>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold mb-6 uppercase">Контактная информация</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Адрес</p>
                      <p className="text-muted-foreground">г. Екатеринбург</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Телефон</p>
                      <a href="tel:+79030796416" className="text-primary hover:underline">
                        +7 (903) 079-64-16
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Режим работы</p>
                      <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 uppercase">Мессенджеры</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://wa.me/79030796416" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transition-all"
                  >
                    <Icon name="MessageCircle" size={24} className="text-white" />
                  </a>
                  <a 
                    href="tel:+79030796416"
                    className="w-14 h-14 bg-secondary hover:bg-secondary/90 rounded-full flex items-center justify-center transition-all"
                  >
                    <Icon name="Phone" size={24} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <img 
            src="https://cdn.poehali.dev/projects/eacdcf2f-19c9-4d20-b040-35bebd611835/files/70a8c815-f2fa-4d15-9846-8470c236f541.jpg"
            alt="Дети радуются"
            className="max-w-4xl mx-auto rounded-3xl shadow-2xl mb-12"
          />
          
          <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase">
            Присоединяйтесь к нашей футбольной семье!
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Запишитесь на бесплатную пробную неделю и дайте вашему ребёнку возможность раскрыть свой потенциал
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white font-bold text-xl px-12 py-8 rounded-full shadow-xl uppercase"
            onClick={() => scrollToSection('contacts')}
          >
            Записаться сейчас
          </Button>
        </div>
      </section>

      <footer className="bg-secondary py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Circle" className="text-primary" size={32} />
                <div>
                  <h3 className="text-xl font-black text-white uppercase">Кальчо</h3>
                  <p className="text-xs text-white/70">с 2017 года</p>
                </div>
              </div>
              <p className="text-white/80 text-sm">
                Детская футбольная школа в Екатеринбурге
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase">Контакты</h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>г. Екатеринбург</p>
                <a href="tel:+79030796416" className="hover:text-primary transition block">
                  +7 (903) 079-64-16
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase">Режим работы</h4>
              <p className="text-white/80 text-sm">
                Ежедневно с 9:00 до 21:00
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
            <p>© 2024 Футбольная школа «Кальчо». Все права защищены.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-8 right-8 z-50 flex gap-4">
        <a 
          href="https://wa.me/79030796416" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
        >
          <Icon name="MessageCircle" size={28} className="text-white" />
        </a>
        <a 
          href="tel:+79030796416"
          className="w-16 h-16 bg-secondary hover:bg-secondary/90 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
        >
          <Icon name="Phone" size={28} className="text-white" />
        </a>
      </div>
    </div>
  );
}
