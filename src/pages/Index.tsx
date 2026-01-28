import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-secondary/65 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Icon name="Droplets" className="text-primary" size={32} />
              <div>
                <h1 className="text-2xl font-black text-white uppercase">ПЛЮХбург</h1>
                <p className="text-xs text-white/70">Детский бассейн</p>
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
              <button onClick={() => scrollToSection('triangle')} className="text-white hover:text-primary transition text-sm font-semibold uppercase">
                Методика
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

      <section className="relative h-[890px] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2000)'
          }}
        />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-bold mb-8">
              Детский бассейн
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight uppercase">
              Запишитесь на первую пробную тренировку
              <span className="block mt-4">
                <span className="bg-white text-foreground px-6 py-3 rounded-3xl inline-block shadow-2xl">
                  <span className="text-primary font-black animate-pulse">-60%</span>
                </span>
              </span>
            </h1>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-bold text-xl px-12 py-8 rounded-full shadow-2xl uppercase animate-pulse mt-8"
              onClick={() => scrollToSection('contacts')}
            >
              Записаться на занятие
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground text-lg"><span className="text-primary font-bold text-2xl">-10%</span> На абонемент</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground text-lg">Персональные тренировки один на один с тренером. Занятия выстраиваются исходя из потребностей вашего ребенка</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground text-lg">Исправляем асимметрию: кривошея, привычный поворот. Научим переворачиваться и ползти</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground text-lg">Авторская методика «Осознанное погружение». Без слез, стресса, в игровой форме научим не только плавать, но и дисциплине, выполнению инструкций с уважением к личности ребенка.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground text-lg">Используем только физиологичные и эффективные упражнения. Мы не притапливаем и не вертим детей в воде. Они ныряют сами и плывут.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground text-lg">Опытные тренеры. В команду «ПЛЮХбурга» не попадают просто так. Только лучшие из лучших</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-tight">
            Почему выбирают нас?
          </h2>
          
          <p className="text-center text-xl mb-12 text-muted-foreground">Посмотрите видео о нашем бассейне</p>
          
          <div className="max-w-5xl mx-auto mb-20">
            <div className="relative aspect-video bg-card rounded-3xl overflow-hidden shadow-2xl border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl shadow-primary/40">
                  <Icon name="Play" size={32} className="text-white ml-1" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-3xl border-2 border-transparent hover:border-primary transition-all shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center mb-4 rotate-6 shadow-lg">
                <Icon name="Users" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4">Комплексный подход</h3>
              <p className="text-foreground leading-relaxed">
                Мы работаем в связке с родителями, обучая ребенка не только плаванию, но и помогая ему развиваться личностно, во время осваивая двигательные навыки.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-transparent hover:border-primary transition-all shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center mb-4 -rotate-6 shadow-lg">
                <Icon name="Award" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4">Тренерский состав</h3>
              <p className="text-foreground leading-relaxed">
                Шаталова Алина вместе со своим мужем Павлом, в далеком 2016 году открыли первый филиал «ПЛЮХбурга». Сейчас Алина является одним из самых востребованных спикеров в мире грудничкового и раннего плавания и автором методики «осознанное погружение».
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-transparent hover:border-primary transition-all shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center mb-4 rotate-3 shadow-lg">
                <Icon name="Heart" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4">Комфортная атмосфера</h3>
              <p className="text-foreground leading-relaxed">
                Мы создали пространство, где дети чувствуют себя в безопасности. Каждое занятие проходит в игровой форме, без стресса и слез.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-transparent hover:border-primary transition-all shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center mb-4 -rotate-3 shadow-lg">
                <Icon name="Baby" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4">Индивидуальный подход</h3>
              <p className="text-foreground leading-relaxed">
                Персональные тренировки один на один с тренером. Занятия выстраиваются исходя из потребностей вашего ребенка.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="price" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase">Тарифы</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-primary p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-secondary text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                -60%
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white uppercase">Пробное занятие</h3>
              <div className="text-5xl font-black text-white mb-2">850₽</div>
              <p className="text-white/80 text-sm mb-6 line-through">вместо 2200₽</p>
              <ul className="space-y-3 mb-8 text-white">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="flex-shrink-0 mt-1" size={20} />
                  <span>Консультация</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="flex-shrink-0 mt-1" size={20} />
                  <span>Диагностика</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="flex-shrink-0 mt-1" size={20} />
                  <span>Занятие</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="flex-shrink-0 mt-1" size={20} />
                  <span>План тренировочного процесса</span>
                </li>
              </ul>
              <Button className="w-full bg-white hover:bg-white/90 text-primary font-bold rounded-full py-6" onClick={() => scrollToSection('contacts')}>
                Записаться
              </Button>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary">
              <h3 className="text-2xl font-bold mb-4 uppercase">4 занятия</h3>
              <div className="text-5xl font-black text-primary mb-6">7 600₽</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>10% скидка многодетным, инвалидам (6840₽)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Персональная работа с тренером</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Индивидуальный подход</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Срок действия 30 дней</span>
                </li>
              </ul>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full py-6" onClick={() => scrollToSection('contacts')}>
                Записаться
              </Button>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary">
              <h3 className="text-2xl font-bold mb-4 uppercase">8 занятий</h3>
              <div className="text-5xl font-black text-primary mb-6">13 590₽</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Скидка 10% в день покупки пробного</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Персональная работа с тренером</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Регулярные тренировки 2 раза в неделю</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Срок действия 35 дней</span>
                </li>
              </ul>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full py-6" onClick={() => scrollToSection('contacts')}>
                Записаться
              </Button>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary">
              <h3 className="text-2xl font-bold mb-4 uppercase">24 занятия</h3>
              <div className="text-5xl font-black text-primary mb-6">37 200₽</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Скидка 10% в день покупки пробного</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Персональная работа с тренером</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Регулярные тренировки 2-3 раза в неделю</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Срок действия 90 дней</span>
                </li>
              </ul>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full py-6" onClick={() => scrollToSection('contacts')}>
                Записаться
              </Button>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary">
              <div className="mb-4">
                <span className="text-sm font-bold text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">Семейный</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase">16 занятий</h3>
              <div className="text-5xl font-black text-primary mb-6">25 650₽</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Для семей с 2 и более детьми</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Каждый ребенок со своим тренером</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>2 ребенка плавают одновременно</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Срок действия 35 дней</span>
                </li>
              </ul>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full py-6" onClick={() => scrollToSection('contacts')}>
                Записаться
              </Button>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary">
              <div className="mb-4">
                <span className="text-sm font-bold text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">Семейный</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase">24 занятия</h3>
              <div className="text-5xl font-black text-primary mb-6">36 000₽</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Для семей с 2 и более детьми</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Каждый ребенок со своим тренером</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>2 ребенка плавают одновременно</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Срок действия 60 дней</span>
                </li>
              </ul>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full py-6" onClick={() => scrollToSection('contacts')}>
                Записаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="programm" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase">Программы обучения</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-border">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Baby" size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 uppercase">Грудничковое плавание</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Для детей от 0 до 3 лет. Раннее развитие в воде, укрепление иммунитета, профилактика заболеваний опорно-двигательного аппарата.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={8} className="text-primary flex-shrink-0 mt-2" />
                      <span>Методика «Осознанное погружение»</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={8} className="text-primary flex-shrink-0 mt-2" />
                      <span>Без стресса и слез</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={8} className="text-primary flex-shrink-0 mt-2" />
                      <span>Комфортная температура воды</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-border">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 uppercase">Раннее плавание</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Для детей от 3 до 7 лет. Освоение базовых навыков плавания, игровой формат занятий, социализация в группе.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={8} className="text-primary flex-shrink-0 mt-2" />
                      <span>Базовая техника плавания</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={8} className="text-primary flex-shrink-0 mt-2" />
                      <span>Игровые упражнения</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={8} className="text-primary flex-shrink-0 mt-2" />
                      <span>Уверенность в воде</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-border">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 uppercase">Спортивное плавание</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Для детей от 7 лет. Совершенствование техники, подготовка к соревнованиям, развитие выносливости.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={8} className="text-primary flex-shrink-0 mt-2" />
                      <span>Все стили плавания</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={8} className="text-primary flex-shrink-0 mt-2" />
                      <span>Тренировки на результат</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" size={8} className="text-primary flex-shrink-0 mt-2" />
                      <span>Участие в соревнованиях</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase">Наши тренеры</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-3xl shadow-lg text-center border-2 border-border">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                <Icon name="User" size={64} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase">Алина Шаталова</h3>
              <p className="text-primary font-semibold mb-4">Основатель, главный тренер</p>
              <p className="text-sm leading-relaxed">
                Автор методики «Осознанное погружение». Востребованный спикер в мире грудничкового плавания. Более 8 лет опыта.
              </p>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg text-center border-2 border-border">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                <Icon name="User" size={64} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase">Павел Шаталов</h3>
              <p className="text-primary font-semibold mb-4">Со-основатель</p>
              <p className="text-sm leading-relaxed">
                Управляющий партнер. Отвечает за развитие сети бассейнов «ПЛЮХбург» по всей России.
              </p>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg text-center border-2 border-border">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                <Icon name="User" size={64} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase">Команда тренеров</h3>
              <p className="text-primary font-semibold mb-4">Сертифицированные специалисты</p>
              <p className="text-sm leading-relaxed">
                Все тренеры проходят личную стажировку у Алины Шаталовой. Только лучшие попадают в команду.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="triangle" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase">Методика обучения</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Icon name="Heart" size={48} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase">Без стресса</h3>
                <p className="leading-relaxed">
                  Авторская методика «Осознанное погружение» без слез и принуждения
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Icon name="Target" size={48} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase">Результат</h3>
                <p className="leading-relaxed">
                  Эффективные упражнения, проверенные на тысячах детей
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Icon name="Users" size={48} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase">Команда</h3>
                <p className="leading-relaxed">
                  Работа в связке с родителями для достижения лучших результатов
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-border">
              <p className="text-lg leading-relaxed text-center">
                Наша методика основана на <strong>уважении к личности ребенка</strong>. 
                Мы не притапливаем и не вертим детей в воде. Они ныряют сами и плывут, 
                получая удовольствие от процесса и одновременно развивая важные навыки.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase">Отзывы</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-3xl shadow-lg border-2 border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Marinella555</h3>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="leading-relaxed">
                Это одно из самых лучших мест, где одновременно занимаются физическим и умственным развитием ребенка! У меня двое деток, с Плюхом мы уже три года вместе! Индивидуальный подход, методика "осознанное погружение" покорило моё сердце! Всем мамочки, кто в поисках, от души рекомендую! На Кольцевой, 46 очень комфортно малышам и мамочкам! Фен, кофе, стульчики для кормления - мой рай!
              </p>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg border-2 border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Sofya Kondraeva</h3>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="leading-relaxed">
                Мы с детками уже 6 месяцев точно ходим в этот замечательный центр раннего плавания. Тренера работают очень радуют своим подходом, знаниями, любовью к деткам. Методика осознанного погружения. Плавный подход, никто не заставляет ребёнка через силу. В бассейне вода чистая, запаха хлора нет. Всем рекомендую!
              </p>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg border-2 border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Vera Antsiferova</h3>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="leading-relaxed">
                Плюхбург - это то место куда мой сын бежит с радостью. С Плюхбургом мы уже три года. Сын занимается с тренером Евгением, про таких людей говорят "человек на своём месте"! Подход к каждому ребенку индивидуальный. Раньше был страх воды, сейчас уже свободно плавает. Девочки администраторы - самые лучшие! В Плюхбург приходим как домой, все уютно, комфортно и очень душевно. За чистотой воды тщательно следят!
              </p>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg border-2 border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Дарья</h3>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="leading-relaxed">
                Это любовь! Ребенка спасли от страха воды, который появился в другом бассейне. Индивидуальный подход к каждому ребенку. Тренер подстраивает занятие, исходя из настроения малыша. Интересно и увлекательно проходит каждая тренировка. Искренне любим это место. Отдельная любовь к тренеру Владу! Да все крутые!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase">Наши контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-3xl shadow-lg border-2 border-border">
              <h3 className="text-2xl font-bold mb-6 uppercase">Запишитесь на пробное занятие</h3>
              
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
                  <Input type="text" placeholder="Возраст" className="w-full" />
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
              <div className="bg-card p-8 rounded-3xl shadow-lg border-2 border-border">
                <h3 className="text-xl font-bold mb-6 uppercase">Контактная информация</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Адрес</p>
                      <p className="text-muted-foreground">г. Екатеринбург, ул. Кольцевая 46</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Телефон</p>
                      <a href="tel:+79826322152" className="text-primary hover:underline">
                        +7 (982) 63 22 152
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

              <div className="bg-card p-8 rounded-3xl shadow-lg border-2 border-border">
                <h3 className="text-xl font-bold mb-4 uppercase">Мессенджеры</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://t.me/shatalova_alina" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transition-all"
                  >
                    <Icon name="MessageCircle" size={24} className="text-white" />
                  </a>
                  <a 
                    href="tel:+79826322152"
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

      <footer className="bg-secondary py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Droplets" className="text-primary" size={32} />
                <div>
                  <h3 className="text-xl font-black text-white uppercase">ПЛЮХбург</h3>
                  <p className="text-xs text-white/70">Детский бассейн</p>
                </div>
              </div>
              <p className="text-white/80 text-sm">
                Детский бассейн в Екатеринбурге
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase">Контакты</h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>г. Екатеринбург, ул. Кольцевая 46</p>
                <a href="tel:+79826322152" className="hover:text-primary transition block">
                  +7 (982) 63 22 152
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
            <p>© 2024 Детский бассейн «ПЛЮХбург». Все права защищены.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-8 right-8 z-50 flex gap-4">
        <a 
          href="https://t.me/shatalova_alina" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
        >
          <Icon name="MessageCircle" size={28} className="text-white" />
        </a>
        <a 
          href="tel:+79826322152"
          className="w-16 h-16 bg-secondary hover:bg-secondary/90 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
        >
          <Icon name="Phone" size={28} className="text-white" />
        </a>
      </div>
    </div>
  );
};

export default Index;