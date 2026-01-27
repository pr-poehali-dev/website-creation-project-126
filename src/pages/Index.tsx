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
    <div className="min-h-screen bg-black">
      <div 
        className="fixed top-0 left-0 h-1.5 bg-accent z-[100] transition-all duration-300 shadow-lg"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/90 border-b border-accent/30 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h1 className="text-xl md:text-3xl font-black text-white tracking-tight">Детский бассейн «ПЛЮХбург»</h1>
              <p className="text-xs md:text-sm text-gray-300">г. Екатеринбург, ул. Кольцевая 46</p>
            </div>
            <a href="tel:+79826322152" className="text-accent hover:text-white transition text-sm md:text-base font-bold">
              +7 (982) 63 22 152
            </a>
          </div>
        </div>
      </header>

      <section className="relative h-[600px] md:h-[890px] flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 bg-black" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2000)'
          }}
        />
        
        <div className="relative z-20 text-center px-4 max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase mb-6 leading-tight tracking-tight text-white">
            ЗАПИШИТЕ РЕБЕНКА<br />НА ПЛАВАНИЕ И ПОЛУЧИТЕ<br />
            <span className="bg-white text-black px-6 py-3 rounded-3xl inline-block shadow-2xl">
              <span className="text-accent font-black animate-pulse">-60%</span> НА ПЕРВОЕ ЗАНЯТИЕ
            </span>
          </h1>
          
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl animate-ripple" />
            <Button 
              size="lg" 
              className="relative bg-accent hover:bg-accent/90 text-white font-bold text-lg md:text-xl px-10 py-7 rounded-full shadow-2xl shadow-accent/50 animate-water-wave transition-all"
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
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300 text-lg"><span className="text-accent font-bold text-2xl">-10%</span> на абонемент</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">персональные тренировки один на один с тренером. занятия выстраиваются исходя из потребностей вашего ребенка</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">исправляем асимметрию: кривошея, привычный поворот. научим переворачиваться и ползти</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">авторская методика «Осознанное погружение». Без слез, стресса, в игровой форме научим не только плавать, но и дисциплине, выполнению инструкций с уважением к личности ребенка.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">используем только физиологичные и эффективные упражнения. мы не притапливаем и не вертим детей в воде. они ныряют сами и плывут.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">опытные тренеры. в команду «ПЛЮХбурга» не попадают просто так. только лучшие из лучших</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-tight text-white">
            ПОЧЕМУ ВЫБИРАЮТ НАС?
          </h2>
          
          <p className="text-center text-xl mb-12 text-gray-400">Посмотрите видео о нашем бассейне</p>
          
          <div className="max-w-5xl mx-auto mb-20">
            <div className="relative aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-accent/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl shadow-accent/40">
                  <Icon name="Play" size={32} className="text-white ml-1" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-secondary p-8 rounded-3xl border-2 border-white/10 hover:border-accent transition-all shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-accent rounded-3xl flex items-center justify-center mb-4 rotate-6 shadow-lg">
                <Icon name="Users" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4 text-white">КОМПЛЕКСНЫЙ ПОДХОД</h3>
              <p className="text-white leading-relaxed">
                Мы работаем в связке с родителями, обучая ребенка не только плаванию, но и помогая ему развиваться личностно, во время осваивая двигательные навыки.
              </p>
            </div>

            <div className="bg-secondary p-8 rounded-3xl border-2 border-white/10 hover:border-accent transition-all shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-accent rounded-3xl flex items-center justify-center mb-4 -rotate-6 shadow-lg">
                <Icon name="Award" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4 text-white">ТРЕНЕРСКИЙ СОСТАВ</h3>
              <p className="text-white leading-relaxed">
                Шаталова Алина вместе со своим мужем Павлом, в далеком 2016 году открыли первый филиал «ПЛЮХбурга». Сейчас Алина является одним из самых востребованных спикеров в мире грудничкового и раннего плавания и автором методики «осознанное погружение» которая перевернула мир раннего плавания и заставила всех тренеров задуматься об устаревших методах работы. Алина лично стажирует каждого тренера в команду, чтобы маленькие половцы получали самое лучшее от занятий в бассейне.
              </p>
              <p className="text-white leading-relaxed mt-4">
                Наши тренеры - это тренеры с которыми ваш ребенок будет сравнивать всех последующих, потому что мы задаем высокую планку. Наши тренеры - наставники, любящие и уважающие детей.
              </p>
            </div>

            <div className="bg-secondary p-8 rounded-3xl border-2 border-white/10 hover:border-accent transition-all shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-accent rounded-3xl flex items-center justify-center mb-4 rotate-3 shadow-lg">
                <Icon name="Smile" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4 text-white">АТМОСФЕРА</h3>
              <p className="text-white leading-relaxed">
                Смех, улыбки и радость - каждое занятие. Наши половцы ходят к нам годами.
              </p>
            </div>

            <div className="bg-secondary p-8 rounded-3xl border-2 border-white/10 hover:border-accent transition-all shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-accent rounded-3xl flex items-center justify-center mb-4 -rotate-3 shadow-lg">
                <Icon name="Target" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4 text-white">ТРЕНИРОВОЧНЫЙ ПРОЦЕСС</h3>
              <p className="text-white leading-relaxed">
                Тренеры уделяют внимание каждой детали, поэтому наши дети с легкостью поступают в спортивные школы и получают навык плавания на всю жизнь
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-secondary p-8 rounded-xl border border-accent/20">
              <h3 className="text-3xl font-bold uppercase mb-4 text-white">ДЕТИ КАКОГО ВОЗРАСТА ПЛАВАЮТ У НАС?</h3>
              <p className="text-white text-lg leading-relaxed">
                к самым маленьким мы выезжаем на дом. а вот с 2 месяцев до 10 лет уже можно плавать в нашем теплом и чистом бассейне.
              </p>
            </div>

            <div className="bg-secondary p-8 rounded-xl border border-accent/20">
              <h3 className="text-3xl font-bold uppercase mb-4 text-white">РАЗМЕРЫ НАШЕГО БАССЕЙНА</h3>
              <p className="text-white text-lg leading-relaxed">
                ширина нашего бассейна 3 метра, длина 6 м. Теплая вода - 33С и небольшие размеры позволяют нам эффективно заниматься с детьми раннего грудного и дошкольного, школьного возраста. Так как дети чувствуют себя комфортно и уютно для изучения базовых навыков.
              </p>
            </div>

            <div className="bg-secondary p-8 rounded-xl border border-accent/20">
              <h3 className="text-3xl font-bold uppercase mb-4 text-white">РАСПИСАНИЕ ЗАНЯТИЙ</h3>
              <p className="text-white text-lg leading-relaxed mb-6">
                мы работаем с 9:00 до 20:00 каждый день. узнать о наличии свободных окон и закреплении за вами постоянного времени нужно уточнять у администратора.
              </p>
              <Button 
                className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6 rounded-full"
                onClick={() => window.open('https://t.me/shatalova_alina', '_blank')}
              >
                Получить информацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-tight text-white">
            СТОИМОСТЬ ЗАНЯТИЙ
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-secondary p-8 rounded-3xl border-2 border-white/10 hover:border-accent transition-all shadow-lg hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16" />
              <h3 className="text-2xl font-bold uppercase mb-4 text-white relative z-10">Пробное занятие</h3>
              <p className="text-5xl font-black text-accent mb-4 relative z-10">1200₽</p>
              <p className="text-gray-300 mb-6 relative z-10">Первое знакомство с бассейном и тренером</p>
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-white font-bold rounded-full relative z-10"
                onClick={() => window.open('https://t.me/shatalova_alina', '_blank')}
              >
                Записаться
              </Button>
            </div>

            <div className="bg-secondary p-8 rounded-3xl border-2 border-accent/50 hover:border-accent transition-all shadow-lg hover:shadow-xl relative overflow-hidden transform scale-105">
              <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold z-20">
                Хит
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16" />
              <h3 className="text-2xl font-bold uppercase mb-4 text-white relative z-10">Абонемент 8 занятий</h3>
              <p className="text-5xl font-black text-accent mb-4 relative z-10">8000₽</p>
              <p className="text-gray-300 mb-6 relative z-10">1000₽ за занятие. Действует 30 дней</p>
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-white font-bold rounded-full relative z-10"
                onClick={() => window.open('https://t.me/shatalova_alina', '_blank')}
              >
                Записаться
              </Button>
            </div>

            <div className="bg-secondary p-8 rounded-3xl border-2 border-white/10 hover:border-accent transition-all shadow-lg hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16" />
              <h3 className="text-2xl font-bold uppercase mb-4 text-white relative z-10">Абонемент 12 занятий</h3>
              <p className="text-5xl font-black text-accent mb-4 relative z-10">11400₽</p>
              <p className="text-gray-300 mb-6 relative z-10">950₽ за занятие. Действует 45 дней</p>
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-white font-bold rounded-full relative z-10"
                onClick={() => window.open('https://t.me/shatalova_alina', '_blank')}
              >
                Записаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-tight text-white">
            СВЯЖИТЕСЬ С НАМИ
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <Input 
                  placeholder="Ваше имя" 
                  className="bg-secondary border-accent/20 text-white placeholder:text-gray-400 h-14 text-lg rounded-2xl"
                />
              </div>
              <div>
                <Input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="bg-secondary border-accent/20 text-white placeholder:text-gray-400 h-14 text-lg rounded-2xl"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Ваше сообщение" 
                  rows={5} 
                  className="bg-secondary border-accent/20 text-white placeholder:text-gray-400 text-lg rounded-2xl"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-accent hover:bg-accent/90 text-white font-bold text-xl py-7 rounded-full"
              >
                Отправить заявку
              </Button>
            </form>
            
            <div className="mt-12 text-center space-y-4">
              <p className="text-gray-400">или свяжитесь с нами напрямую:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+79826322152" 
                  className="flex items-center justify-center gap-2 bg-secondary hover:bg-accent/20 text-white px-6 py-4 rounded-full transition-all font-bold"
                >
                  <Icon name="Phone" size={20} />
                  +7 (982) 63 22 152
                </a>
                <a 
                  href="https://t.me/shatalova_alina" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-4 rounded-full transition-all font-bold"
                >
                  <Icon name="MessageCircle" size={20} />
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary py-12 border-t border-accent/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-black text-white mb-4">ПЛЮХбург</h3>
              <p className="text-gray-400">
                Детский бассейн в Екатеринбурге. Обучаем плаванию детей от 2 месяцев до 10 лет.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <p>г. Екатеринбург, ул. Кольцевая 46</p>
                <p>+7 (982) 63 22 152</p>
                <p>Ежедневно с 9:00 до 20:00</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <a href="https://t.me/shatalova_alina" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center transition-all">
                  <Icon name="MessageCircle" size={24} className="text-white" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-accent/20 pt-8 text-center text-gray-400">
            <p>© 2024 ПЛЮХбург. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
