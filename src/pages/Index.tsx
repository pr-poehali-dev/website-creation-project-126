import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

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
            <div className="flex items-center gap-3">
              <Icon name="Droplets" className="text-primary" size={36} />
              <div>
                <h1 className="text-2xl font-black text-white uppercase leading-tight">детский бассейн «ПЛЮХбург»</h1>
                <div className="flex items-center gap-4 mt-1">
                  <a href="tel:+79826322152" className="text-white/90 hover:text-primary transition text-xs font-semibold flex items-center gap-1">
                    <Icon name="Phone" size={12} />
                    +7 (982) 63 22 152
                  </a>
                  <p className="text-white/70 text-xs">г. Екатеринбург, ул. Кольцевая 46</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href="tel:+79826322152" className="text-white hover:text-primary transition text-lg font-bold hidden lg:block">
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
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-8 leading-tight uppercase">
              Запишите ребенка на плавание и получите
              <span className="block mt-6">
                <span className="bg-white text-foreground px-8 py-4 rounded-3xl inline-block shadow-2xl">
                  <span className="text-primary font-black text-5xl md:text-7xl animate-pulse">-60%</span> <span className="text-2xl md:text-4xl">на первое занятие</span>
                </span>
              </span>
            </h1>

            <a 
              href="https://t.me/shatalova_alina" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-bold text-2xl px-16 py-10 rounded-full shadow-2xl uppercase mt-8 hover:scale-105 transition-transform"
              >
                Записаться на занятие
              </Button>
            </a>

            <div className="mt-12 text-white/80 text-sm">
              <p>⁃ -10% на абонемент</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-foreground text-base leading-relaxed">персональные тренировки один на один с тренером. занятия выстраиваются исходя из потребностей вашего ребенка</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-foreground text-base leading-relaxed">исправляем асимметрию: кривошея, привычный поворот. научим переворачиваться и ползти</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-foreground text-base leading-relaxed">авторская методика «Осознанное погружение». Без слез, стресса, в игровой форме научим не только плавать, но и дисциплине, выполнению инструкций с уважением к личности ребенка.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-foreground text-base leading-relaxed">используем только физиологичные и эффективные упражнения. мы не притапливаем и не вертим детей в воде. они ныряют сами и плывут.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-foreground text-base leading-relaxed">опытные тренеры. в команду «ПЛЮХбурга» не попадают просто так. только лучшие из лучших</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-black uppercase text-center mb-8 tracking-tight">
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
                Мы работаем в связке с родителями, обучая ребенка не только плаванию, но и помогая ему развиваться личностно, вовремя осваивая двигательные навыки.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-transparent hover:border-primary transition-all shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center mb-4 -rotate-6 shadow-lg">
                <Icon name="Award" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4">Тренерский состав</h3>
              <p className="text-foreground leading-relaxed">
                Шаталова Алина вместе со своим мужем Павлом, в далеком 2016 году открыли первый филиал «ПЛЮХбурга». Сейчас Алина является одним из самых востребованных спикеров в мире грудничкового и раннего плавания и автором методики «осознанное погружение», которая перевернула мир раннего плавания и заставила всех тренеров задуматься об устаревших методах работы. Алина лично стажирует каждого тренера в команду, чтобы маленькие пловцы получали самое лучшее от занятий в бассейне.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                Наши тренеры - это тренеры с которыми ваш ребенок будет сравнивать всех последующих, потому что мы задаем высокую планку. Наши тренеры - наставники, любящие и уважающие детей.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-transparent hover:border-primary transition-all shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center mb-4 rotate-3 shadow-lg">
                <Icon name="Heart" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4">Атмосфера</h3>
              <p className="text-foreground leading-relaxed">
                Смех, улыбки и радость - каждое занятие. Наши пловцы ходят к нам годами.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-transparent hover:border-primary transition-all shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center mb-4 -rotate-3 shadow-lg">
                <Icon name="Target" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4">Тренировочный процесс</h3>
              <p className="text-foreground leading-relaxed">
                Тренеры уделяют внимание каждой детали, поэтому наши дети с легкостью поступают в спортивные школы и получают навык плавания на всю жизнь.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="bg-card p-8 rounded-3xl shadow-lg border-2 border-border">
              <h3 className="text-3xl font-bold uppercase mb-4">Дети какого возраста плавают у нас?</h3>
              <p className="text-lg leading-relaxed">
                К самым маленьким мы выезжаем на дом. А вот с 2 месяцев до 10 лет уже можно плавать в нашем теплом и чистом бассейне.
              </p>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg border-2 border-border">
              <h3 className="text-3xl font-bold uppercase mb-4">Размеры нашего бассейна</h3>
              <p className="text-lg leading-relaxed">
                Ширина нашего бассейна 3 метра, длина 6 м. Теплая вода - 33°C и небольшие размеры позволяют нам эффективно заниматься с детьми раннего грудного и дошкольного, школьного возраста. Так как дети чувствуют себя комфортно и уютно для изучения базовых навыков.
              </p>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg border-2 border-border">
              <h3 className="text-3xl font-bold uppercase mb-4">Расписание занятий</h3>
              <p className="text-lg leading-relaxed mb-6">
                Мы работаем с 9:00 до 20:00 каждый день. Узнать о наличии свободных окон и закреплении за вами постоянного времени нужно уточнять у администратора.
              </p>
              <a 
                href="https://t.me/shatalova_alina" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 py-6 rounded-full">
                  Получить информацию
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="price" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-6 uppercase">Стоимость занятий</h2>
          <p className="text-center text-xl mb-16 text-muted-foreground">Запишитесь на первую пробную тренировку -60%</p>
          
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
                  <span>консультация</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="flex-shrink-0 mt-1" size={20} />
                  <span>диагностика</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="flex-shrink-0 mt-1" size={20} />
                  <span>занятие</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="flex-shrink-0 mt-1" size={20} />
                  <span>построение плана дальнейшего тренировочного процесса</span>
                </li>
              </ul>
              <a 
                href="https://t.me/shatalova_alina" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-white hover:bg-white/90 text-primary font-bold rounded-full py-6">
                  Записаться
                </Button>
              </a>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary">
              <h3 className="text-2xl font-bold mb-4 uppercase">4 занятия</h3>
              <div className="text-5xl font-black text-primary mb-6">7 600₽</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>10% скидка многодетным, инвалидам. Цена со скидкой 6840₽</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>персональная работа с тренером</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>индивидуальный подход</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>срок действия 30 дней</span>
                </li>
              </ul>
              <a 
                href="https://t.me/shatalova_alina" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full py-6">
                  Записаться
                </Button>
              </a>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary">
              <h3 className="text-2xl font-bold mb-4 uppercase">8 занятий</h3>
              <div className="text-5xl font-black text-primary mb-6">13 590₽*</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>*стоимость со скидкой 10%. скидка в день покупки пробного и в день последнего занятия с предыдущего абонемента</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>персональная работа с тренером</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>индивидуальный подход</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>регулярные тренировки 2 раза в неделю</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>срок действия абонемента 35 дней</span>
                </li>
              </ul>
              <a 
                href="https://t.me/shatalova_alina" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full py-6">
                  Записаться
                </Button>
              </a>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary">
              <h3 className="text-2xl font-bold mb-4 uppercase">24 занятия</h3>
              <div className="text-5xl font-black text-primary mb-6">37 200₽*</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>*стоимость со скидкой 10%. скидка в день покупки пробного и в день последнего занятия с предыдущего абонемента</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>персональная работа с тренером</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>индивидуальный подход</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>регулярные тренировки 2-3 раза в неделю</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>срок действия абонемента 90 дней</span>
                </li>
              </ul>
              <a 
                href="https://t.me/shatalova_alina" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full py-6">
                  Записаться
                </Button>
              </a>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary">
              <div className="mb-4">
                <span className="text-sm font-bold text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">Семейный</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase">16 занятий</h3>
              <div className="text-5xl font-black text-primary mb-6">25 650₽*</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>*стоимость со скидкой 10%. скидка в день покупки пробного и в день последнего занятия с предыдущего абонемента</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>для семей с 2 и более детьми</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>каждый ребенок плавает со своим тренером</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>экономия времени. 2 ребенка плавают одновременно. мама отдыхает</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>регулярные тренировки 2 раза в неделю</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>срок действия абонемента 35 дней</span>
                </li>
              </ul>
              <a 
                href="https://t.me/shatalova_alina" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full py-6">
                  Записаться
                </Button>
              </a>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary">
              <div className="mb-4">
                <span className="text-sm font-bold text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">Семейный</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase">24 занятия</h3>
              <div className="text-5xl font-black text-primary mb-6">36 000₽*</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>*стоимость со скидкой 10%. скидка в день покупки пробного и в день последнего занятия с предыдущего абонемента</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>для семей с 2 и более детьми</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>каждый ребенок плавает со своим тренером</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>экономия времени. 2 ребенка плавают одновременно. мама отдыхает</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>регулярные тренировки 2-3 раза в неделю</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>срок действия абонемента 60 дней</span>
                </li>
              </ul>
              <a 
                href="https://t.me/shatalova_alina" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full py-6">
                  Записаться
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16 uppercase">Отзывы</h2>
          
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
                Это одно из самых лучших мест, где одновременно занимаются физическим и умственным развитием ребенка! У меня двое деток, с Плюхом мы уже три года вместе! Индивидуальный подход, методика "осознанное погружение" покорило моё сердце! Всем мамочки, кто в поисках, от души рекомендую! Ваши занятия в бассейне будут весёлыми и без слёз! На Кольцевой, 46 очень комфортно малышам и мамочкам! Фен, кофе, стульчики для кормления - мой рай!
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
                Мы с детками уже 6 месяцев точно ходим в этот замечательный центр раннего плавания. Все очень очень нравится. Тренера работают, очень радуют своим подходом, знаниями, любовью к деткам. Методика осознанного погружения. Плавный подход, никто не заставляет ребёнка через силу или не хочу что то делать. Всё идёт плавно постепенно и с любовью. Наши любимые тренера, с которыми мы занимаемся Никита, Лиза, и конечно же Алина, когда у неё есть время и наши возможности совпадают мы ходим плавать ко всем и очень рады этому. В бассейне вода чистая, все моется и меняется регулярно. Запаха хлора нет. Всем рекомендую, по нашей рекомендации уже присоединиться успели мамы с детками к водным процедурам и вы присоединиться спешите.
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
                Плюхбург - это то место куда мой сын бежит с радостью. С Плюхбургом мы уже три года. Сын занимается с тренером Евгением, про таких людей говорят "человек на своём месте"! Подход к каждому ребенку индивидуальный. Мой ребенок уже свободно плавает (раньше мыли голову, ребенок плакал, был страх воды). Девочки администраторы - самые лучшие! Все возникшие вопросы решают сразу. К ним можно обратиться с любым вопросом. Предложат чай, обязательно пообщаются с ребенком. А еще там есть наша любимая Люба (повар), которая делает самые вкусные сосиски в тесте (и не только их, у неё всё вкусно). В Плюхбург приходим как домой, все уютно, комфортно и очень душевно. Процветания тебе любимый "ПЛЮХБУРГ", очень любим тебя. От души всем мамочкам рекомендую этот бассейн. Кстати за чистотой воды они тщательно следят!
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

      <section id="contacts" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16 uppercase">Как нас найти</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-card rounded-3xl overflow-hidden shadow-lg border-2 border-border h-[500px]">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=60.597465%2C56.838011&z=17&l=map&pt=60.597465,56.838011,pm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ position: 'relative' }}
                title="Карта"
              />
            </div>

            <div className="space-y-6">
              <div className="bg-card p-8 rounded-3xl shadow-lg border-2 border-border">
                <h3 className="text-2xl font-bold mb-6 uppercase">Контактная информация</h3>
                
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
                      <a href="tel:+79826322152" className="text-primary hover:underline text-lg font-bold">
                        +7 (982) 63 22 152
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Режим работы</p>
                      <p className="text-muted-foreground">Ежедневно с 9:00 до 20:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <a 
                href="https://t.me/shatalova_alina" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-8 rounded-full">
                  Записаться
                </Button>
              </a>

              <div className="bg-card p-6 rounded-3xl shadow-lg border-2 border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <a href="/privacy" className="text-primary hover:underline">политикой конфиденциальности</a>
                </p>
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
                <a href="tel:+79826322152" className="hover:text-primary transition block font-bold">
                  +7 (982) 63 22 152
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase">Режим работы</h4>
              <p className="text-white/80 text-sm">
                Ежедневно с 9:00 до 20:00
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
