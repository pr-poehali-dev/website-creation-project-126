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

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="fixed top-0 left-0 h-1.5 bg-accent z-[100] transition-all duration-300 shadow-lg"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-card/95 border-b border-primary/20 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h1 className="text-xl md:text-3xl font-black text-primary tracking-tight">Детский бассейн «ПЛЮХбург»</h1>
              <p className="text-xs md:text-sm text-foreground/70">г. Екатеринбург, ул. Кольцевая 46</p>
            </div>
            <a href="tel:+79826322152" className="text-primary hover:text-secondary transition text-sm md:text-base font-bold">
              +7 (982) 63 22 152
            </a>
          </div>
        </div>
      </header>

      <section className="relative h-[600px] md:h-[890px] flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 bg-primary/90" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2000)'
          }}
        />
        
        <div className="relative z-20 text-center px-4 max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase mb-6 leading-tight tracking-tight text-white">
            ЗАПИШИТЕ РЕБЕНКА<br />НА ПЛАВАНИЕ И ПОЛУЧИТЕ<br />
            <span className="bg-white text-foreground px-6 py-3 rounded-3xl inline-block shadow-2xl">
              <span className="text-accent font-black animate-pulse">-60%</span> НА ПЕРВОЕ ЗАНЯТИЕ
            </span>
          </h1>
          
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-secondary/20 rounded-full blur-xl animate-ripple" />
            <Button 
              size="lg" 
              className="relative bg-secondary hover:bg-secondary/90 text-white font-bold text-lg md:text-xl px-10 py-7 rounded-full shadow-2xl shadow-secondary/50 animate-water-wave transition-all"
              onClick={() => window.open('https://t.me/shatalova_alina', '_blank')}
            >
              Записаться на занятие
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground text-lg"><span className="text-accent font-bold text-2xl">-10%</span> На абонемент</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground text-lg">Персональные тренировки один на один с тренером. Занятия выстраиваются исходя из потребностей вашего ребенка</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground text-lg">Исправляем асимметрию: кривошея, привычный поворот. Научим переворачиваться и ползти</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground text-lg">Авторская методика «Осознанное погружение». Без слез, стресса, в игровой форме научим не только плавать, но и дисциплине, выполнению инструкций с уважением к личности ребенка.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground text-lg">Используем только физиологичные и эффективные упражнения. Мы не притапливаем и не вертим детей в воде. Они ныряют сами и плывут.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground text-lg">Опытные тренеры. В команду «ПЛЮХбурга» не попадают просто так. Только лучшие из лучших</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-tight text-primary">
            ПОЧЕМУ ВЫБИРАЮТ НАС?
          </h2>
          
          <p className="text-center text-xl mb-12 text-muted-foreground">Посмотрите видео о нашем бассейне</p>
          
          <div className="max-w-5xl mx-auto mb-20">
            <div className="relative aspect-video bg-card rounded-3xl overflow-hidden shadow-2xl border border-primary/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl shadow-secondary/40">
                  <Icon name="Play" size={32} className="text-white ml-1" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-3xl border-2 border-primary/20 hover:border-secondary transition-all shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-secondary rounded-3xl flex items-center justify-center mb-4 rotate-6 shadow-lg">
                <Icon name="Users" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4 text-primary">КОМПЛЕКСНЫЙ ПОДХОД</h3>
              <p className="text-foreground leading-relaxed">
                Мы работаем в связке с родителями, обучая ребенка не только плаванию, но и помогая ему развиваться личностно, во время осваивая двигательные навыки.
              </p>
            </div>

            <div className="bg-card p-8 rounded-3xl border-2 border-primary/20 hover:border-secondary transition-all shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center mb-4 -rotate-6 shadow-lg">
                <Icon name="Award" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4 text-primary">ТРЕНЕРСКИЙ СОСТАВ</h3>
              <p className="text-foreground leading-relaxed">
                Шаталова Алина вместе со своим мужем Павлом, в далеком 2016 году открыли первый филиал «ПЛЮХбурга». Сейчас Алина является одним из самых востребованных спикеров в мире грудничкового и раннего плавания и автором методики «осознанное погружение» которая перевернула мир раннего плавания и заставила всех тренеров задуматься об устаревших методах работы. Алина лично стажирует каждого тренера в команду, чтобы маленькие половцы получали самое лучшее от занятий в бассейне.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                Наши тренеры - это тренеры с которыми ваш ребенок будет сравнивать всех последующих, потому что мы задаем высокую планку. Наши тренеры - наставники, любящие и уважающие детей.
              </p>
            </div>

            <div className="bg-card p-8 rounded-3xl border-2 border-primary/20 hover:border-secondary transition-all shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-secondary rounded-3xl flex items-center justify-center mb-4 rotate-3 shadow-lg">
                <Icon name="Smile" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4 text-primary">АТМОСФЕРА</h3>
              <p className="text-foreground leading-relaxed">
                Смех, улыбки и радость - каждое занятие. Наши половцы ходят к нам годами.
              </p>
            </div>

            <div className="bg-card p-8 rounded-3xl border-2 border-primary/20 hover:border-secondary transition-all shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center mb-4 -rotate-3 shadow-lg">
                <Icon name="Target" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4 text-primary">ТРЕНИРОВОЧНЫЙ ПРОЦЕСС</h3>
              <p className="text-foreground leading-relaxed">
                Тренеры уделяют внимание каждой детали, поэтому наши дети с легкостью поступают в спортивные школы и получают навык плавания на всю жизнь
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-background p-8 rounded-xl border border-primary/20">
              <h3 className="text-3xl font-bold uppercase mb-4 text-primary">ДЕТИ КАКОГО ВОЗРАСТА ПЛАВАЮТ У НАС?</h3>
              <p className="text-foreground text-lg leading-relaxed">
                К самым маленьким мы выезжаем на дом. А вот с 2 месяцев до 10 лет уже можно плавать в нашем теплом и чистом бассейне.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-primary/20">
              <h3 className="text-3xl font-bold uppercase mb-4 text-primary">РАЗМЕРЫ НАШЕГО БАССЕЙНА</h3>
              <p className="text-foreground text-lg leading-relaxed">
                Ширина нашего бассейна 3 метра, длина 6 м. Теплая вода - 33С и небольшие размеры позволяют нам эффективно заниматься с детьми раннего грудного и дошкольного, школьного возраста. Так как дети чувствуют себя комфортно и уютно для изучения базовых навыков.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-primary/20">
              <h3 className="text-3xl font-bold uppercase mb-4 text-primary">РАСПИСАНИЕ ЗАНЯТИЙ</h3>
              <p className="text-foreground text-lg leading-relaxed mb-6">
                Мы работаем с 9:00 до 20:00 каждый день. Узнать о наличии свободных окон и закреплении за вами постоянного времени нужно уточнять у администратора.
              </p>
              <Button 
                className="bg-secondary hover:bg-secondary/90 text-white font-bold text-lg px-8 py-6 rounded-full"
                onClick={() => window.open('https://t.me/shatalova_alina', '_blank')}
              >
                Получить информацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-tight text-primary">
            СТОИМОСТЬ ЗАНЯТИЙ
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
            <div className="bg-card p-8 rounded-3xl border-2 border-secondary hover:border-secondary transition-all shadow-lg hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold z-20">
                -61%
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16" />
              <h3 className="text-2xl font-bold uppercase mb-4 text-primary relative z-10">Пробное занятие</h3>
              <div className="relative z-10 mb-4">
                <p className="text-5xl font-black text-secondary">850₽</p>
                <p className="text-muted-foreground line-through text-lg">вместо 2200₽</p>
              </div>
              <ul className="text-foreground text-sm space-y-2 mb-6 relative z-10">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Консультация</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Диагностика</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Занятие</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Построение плана тренировочного процесса</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full relative z-10"
                onClick={() => window.open('https://t.me/shatalova_alina', '_blank')}
              >
                Записаться
              </Button>
            </div>

            <div className="bg-card p-8 rounded-3xl border-2 border-primary/20 hover:border-accent transition-all shadow-lg hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16" />
              <h3 className="text-2xl font-bold uppercase mb-4 text-primary relative z-10">4 занятия</h3>
              <div className="relative z-10 mb-4">
                <p className="text-5xl font-black text-secondary">7 600₽</p>
                <p className="text-muted-foreground text-sm mt-1">10% скидка многодетным: 6 840₽</p>
              </div>
              <ul className="text-foreground text-sm space-y-2 mb-6 relative z-10">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Персональная работа с тренером</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Индивидуальный подход</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Срок действия 30 дней</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full relative z-10"
                onClick={() => window.open('https://t.me/shatalova_alina', '_blank')}
              >
                Записаться
              </Button>
            </div>

            <div className="bg-card p-8 rounded-3xl border-2 border-primary/20 hover:border-accent transition-all shadow-lg hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16" />
              <h3 className="text-2xl font-bold uppercase mb-4 text-primary relative z-10">8 занятий</h3>
              <div className="relative z-10 mb-4">
                <p className="text-5xl font-black text-secondary">13 590₽*</p>
                <p className="text-muted-foreground text-xs mt-1">*со скидкой 10%</p>
              </div>
              <ul className="text-foreground text-sm space-y-2 mb-6 relative z-10">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Персональная работа с тренером</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Регулярные тренировки 2 раза в неделю</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Срок действия 35 дней</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full relative z-10"
                onClick={() => window.open('https://t.me/shatalova_alina', '_blank')}
              >
                Записаться
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-card p-8 rounded-3xl border-2 border-primary/20 hover:border-accent transition-all shadow-lg hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16" />
              <h3 className="text-2xl font-bold uppercase mb-4 text-primary relative z-10">24 занятия</h3>
              <div className="relative z-10 mb-4">
                <p className="text-5xl font-black text-secondary">37 200₽*</p>
                <p className="text-muted-foreground text-xs mt-1">*со скидкой 10%</p>
              </div>
              <ul className="text-foreground text-sm space-y-2 mb-6 relative z-10">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Персональная работа с тренером</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Регулярные тренировки 2-3 раза в неделю</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Срок действия 90 дней</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full relative z-10"
                onClick={() => window.open('https://t.me/shatalova_alina', '_blank')}
              >
                Записаться
              </Button>
            </div>

            <div className="bg-card p-8 rounded-3xl border-2 border-primary/20 hover:border-accent transition-all shadow-lg hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold z-20">
                Семейный
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16" />
              <h3 className="text-2xl font-bold uppercase mb-4 text-primary relative z-10">16 занятий</h3>
              <div className="relative z-10 mb-4">
                <p className="text-5xl font-black text-secondary">25 650₽*</p>
                <p className="text-muted-foreground text-xs mt-1">*со скидкой 10%</p>
              </div>
              <ul className="text-foreground text-sm space-y-2 mb-6 relative z-10">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Для семей с 2 и более детьми</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>2 ребенка плавают одновременно</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Срок действия 35 дней</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full relative z-10"
                onClick={() => window.open('https://t.me/shatalova_alina', '_blank')}
              >
                Записаться
              </Button>
            </div>

            <div className="bg-card p-8 rounded-3xl border-2 border-primary/20 hover:border-accent transition-all shadow-lg hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold z-20">
                Семейный
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16" />
              <h3 className="text-2xl font-bold uppercase mb-4 text-primary relative z-10">24 занятия</h3>
              <div className="relative z-10 mb-4">
                <p className="text-5xl font-black text-secondary">36 000₽*</p>
                <p className="text-muted-foreground text-xs mt-1">*со скидкой 10%</p>
              </div>
              <ul className="text-foreground text-sm space-y-2 mb-6 relative z-10">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Для семей с 2 и более детьми</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Регулярные тренировки 2-3 раза в неделю</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Срок действия 60 дней</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full relative z-10"
                onClick={() => window.open('https://t.me/shatalova_alina', '_blank')}
              >
                Записаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-tight text-primary">
            ОТЗЫВЫ
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-background p-8 rounded-3xl border-2 border-primary/20 hover:border-secondary transition-all shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="User" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary">Marinella555</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                Это одно из самых лучших мест, где одновременно занимаются физическим и умственным развитием ребенка!
                У меня двое деток, с Плюхом мы уже три года вместе!
                Индивидуальный подход, методика "осознанное погружение" покорило моё сердце!)))
                Всем мамочки, кто в поисках, от души рекомендую! Ваши занятия в бассейне будут весёлыми и без слёз!
                На Кольцевой, 46 очень комфортно малышам и мамочкам! Фен, кофе, стульчики для кормления - мой рай!
              </p>
            </div>

            <div className="bg-background p-8 rounded-3xl border-2 border-primary/20 hover:border-secondary transition-all shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="User" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary">sofya_kondraeva</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                Мы с детками уже 6 месяцев точно ходим в этот замечательный центр раннего плавания. Все очень очень нравится. Тренера работают, очень радуют своим подходом, знаниями, любовью к деткам. Методика осознанного погружения. Плавный подход, никто не заставляет ребёнка через силу или не хочу что то делать. Всё идёт плавно постепенно и с любовью. Наши любимые тренера, с которыми мы занимаемся Никита, Лиза, и конечно же Алина!
              </p>
            </div>

            <div className="bg-background p-8 rounded-3xl border-2 border-primary/20 hover:border-secondary transition-all shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="User" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary">Vera Antsiferova</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                Плюхбург - это то место куда мой сын бежит с радостью. С Плюхбургом мы уже три года. Сын занимается с тренером Евгением, про таких людей говорят "человек на своём месте"! Подход к каждому ребенку индивидуальный. Мой ребенок уже свободно плавает (раньше мыли голову, ребенок плакал, был страх воды). В Плюхбург приходим как домой, все уютно, комфортно и очень душевно. От души всем мамочкам рекомендую этот бассейн!
              </p>
            </div>

            <div className="bg-background p-8 rounded-3xl border-2 border-primary/20 hover:border-secondary transition-all shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="User" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary">Дарья</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                Это любовь! Ребенка спасли от страха воды, который появился в другом бассейне. Индивидуальный подход к каждому ребенку. Тренер подстраивает занятие, исходя из настроения малыша. Интересно и увлекательно проходит каждая тренировка. Искренне любим это место. Отдельная любовь к тренеру Владу! Да все крутые!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-tight text-primary">
            КАК НАС НАЙТИ
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-card p-8 rounded-3xl border-2 border-primary/20">
                <h3 className="text-2xl font-bold uppercase mb-6 text-primary">Наш адрес</h3>
                <div className="space-y-4 text-foreground">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={24} className="text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-primary">г. Екатеринбург</p>
                      <p>ул. Кольцевая, 46</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={24} className="text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <a href="tel:+79826322152" className="hover:text-secondary transition">
                        +7 (982) 63 22 152
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={24} className="text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-primary">Режим работы:</p>
                      <p>Ежедневно с 9:00 до 20:00</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full"
                    onClick={() => window.open('https://yandex.ru/maps/-/CDdkFZji', '_blank')}
                  >
                    Открыть в Яндекс.Картах
                  </Button>
                </div>
              </div>
              
              <div className="rounded-3xl overflow-hidden border-2 border-primary/20 h-[400px] md:h-full">
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?ll=60.529996%2C56.780339&z=17&pt=60.529996,56.780339,pm2rdm"
                  width="100%" 
                  height="100%" 
                  frameBorder="0"
                  style={{ minHeight: '400px' }}
                  title="Карта расположения ПЛЮХбург"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-tight text-primary">
            СВЯЖИТЕСЬ С НАМИ
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <Input 
                  placeholder="Ваше имя" 
                  className="bg-background border-primary/30 text-foreground placeholder:text-muted-foreground h-14 text-lg rounded-2xl"
                />
              </div>
              <div>
                <Input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="bg-background border-primary/30 text-foreground placeholder:text-muted-foreground h-14 text-lg rounded-2xl"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Ваше сообщение" 
                  rows={5} 
                  className="bg-background border-primary/30 text-foreground placeholder:text-muted-foreground text-lg rounded-2xl"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold text-xl py-7 rounded-full"
              >
                Отправить заявку
              </Button>
            </form>
            
            <div className="mt-12 text-center space-y-4">
              <p className="text-muted-foreground">Или свяжитесь с нами напрямую:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+79826322152" 
                  className="flex items-center justify-center gap-2 bg-background border-2 border-primary hover:bg-primary/10 text-primary px-6 py-4 rounded-full transition-all font-bold"
                >
                  <Icon name="Phone" size={20} />
                  +7 (982) 63 22 152
                </a>
                <a 
                  href="https://t.me/shatalova_alina" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-6 py-4 rounded-full transition-all font-bold"
                >
                  <Icon name="MessageCircle" size={20} />
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary py-12 border-t border-primary/60">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-black text-white mb-4">ПЛЮХбург</h3>
              <p className="text-white/95">
                Детский бассейн в Екатеринбурге. Обучаем плаванию детей от 2 месяцев до 10 лет.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Контакты</h3>
              <div className="space-y-2 text-white/95">
                <p>г. Екатеринбург, ул. Кольцевая 46</p>
                <p>+7 (982) 63 22 152</p>
                <p>Ежедневно с 9:00 до 20:00</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <a href="https://t.me/shatalova_alina" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-secondary hover:bg-secondary/90 rounded-full flex items-center justify-center transition-all">
                  <Icon name="MessageCircle" size={24} className="text-white" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/30 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
              <p className="text-white/90">© 2026 ПЛЮХбург. Все права защищены.</p>
              <a href="#privacy" className="text-white hover:text-secondary transition">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </footer>

      <div id="privacy" className="hidden">
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 text-white">
                ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
              </h2>
              
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">1. Общие положения</h3>
                  <p className="leading-relaxed">
                    Настоящая Политика конфиденциальности персональных данных действует в отношении всей информации, 
                    которую детский бассейн «ПЛЮХбург» может получить о пользователе во время использования сайта.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">2. Собираемая информация</h3>
                  <p className="leading-relaxed">
                    При записи на занятия мы можем запросить следующую информацию: имя, контактный телефон, 
                    возраст ребенка. Эта информация используется исключительно для организации занятий и связи с вами.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">3. Защита данных</h3>
                  <p className="leading-relaxed">
                    Мы принимаем все необходимые меры для защиты ваших персональных данных от несанкционированного 
                    доступа, изменения, раскрытия или уничтожения.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">4. Контакты</h3>
                  <p className="leading-relaxed">
                    По всем вопросам, касающимся обработки персональных данных, вы можете связаться с нами 
                    по телефону +7 (982) 63 22 152 или через Telegram.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;