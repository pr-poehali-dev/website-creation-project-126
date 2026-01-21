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
    <div className="min-h-screen">
      <div 
        className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary z-[100] transition-all duration-300 shadow-lg"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 border-b border-primary/20 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h1 className="text-xl md:text-3xl font-black text-primary tracking-tight">Детский бассейн «ПЛЮХбург»</h1>
              <p className="text-xs md:text-sm text-gray-600">г. Екатеринбург, ул. Кольцевая 46</p>
            </div>
            <a href="tel:+79826322152" className="text-accent hover:text-accent/80 transition text-sm md:text-base font-bold">
              +7 (982) 63 22 152
            </a>
          </div>
        </div>
      </header>

      <section className="relative h-[600px] md:h-[890px] flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-sky-50 to-purple-100" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2000)'
          }}
        />
        <svg className="absolute bottom-0 left-0 w-full h-32 text-white/80" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,60 Q300,100 600,60 T1200,60 L1200,120 L0,120 Z" fill="currentColor" opacity="0.5"/>
          <path d="M0,80 Q300,50 600,80 T1200,80 L1200,120 L0,120 Z" fill="currentColor"/>
        </svg>
        
        <div className="relative z-20 text-center px-4 max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase mb-6 leading-tight tracking-tight text-gray-800">
            ЗАПИШИТЕ РЕБЕНКА<br />НА ПЛАВАНИЕ И ПОЛУЧИТЕ<br />
            <span className="bg-accent text-gray-800 px-6 py-3 rounded-3xl inline-block shadow-xl">-60% НА ПЕРВОЕ ЗАНЯТИЕ</span>
          </h1>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white font-bold text-lg md:text-xl px-10 py-7 rounded-full shadow-2xl shadow-primary/30 hover:scale-105 transition-all"
            onClick={() => window.open('https://t.me/shatalova_alina', '_blank')}
          >
            Записаться на занятие
          </Button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-lg"><span className="text-accent font-bold text-2xl">-10%</span> на абонемент</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-lg">персональные тренировки один на один с тренером. занятия выстраиваются исходя из потребностей вашего ребенка</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-lg">исправляем асимметрию: кривошея, привычный поворот. научим переворачиваться и ползти</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-lg">авторская методика «Осознанное погружение». Без слез, стресса, в игровой форме научим не только плавать, но и дисциплине, выполнению инструкций с уважением к личности ребенка.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-lg">используем только физиологичные и эффективные упражнения. мы не притапливаем и не вертим детей в воде. они ныряют сами и плывут.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-lg">опытные тренеры. в команду «ПЛЮХбурга» не попадают просто так. только лучшие из лучших</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-cyan-50 via-purple-50 to-sky-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <svg className="absolute top-0 left-0 w-full h-20 transform rotate-180" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M0,60 Q300,100 600,60 T1200,60 L1200,0 L0,0 Z" fill="white"/>
          </svg>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-tight text-primary">
            ПОЧЕМУ ВЫБИРАЮТ НАС?
          </h2>
          
          <p className="text-center text-xl mb-12 text-gray-600">Посмотрите видео о нашем бассейне</p>
          
          <div className="max-w-5xl mx-auto mb-20">
            <div className="relative aspect-video bg-gradient-to-br from-cyan-100 to-purple-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl shadow-primary/40">
                  <Icon name="Play" size={32} className="text-white ml-1" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-3xl border-2 border-cyan-100 hover:border-primary transition-all shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center mb-4 rotate-6 shadow-lg">
                <Icon name="Users" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4 text-primary">КОМПЛЕКСНЫЙ ПОДХОД</h3>
              <p className="text-gray-700 leading-relaxed">
                Мы работаем в связке с родителями, обучая ребенка не только плаванию, но и помогая ему развиваться личностно, во время осваивая двигательные навыки.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-purple-100 hover:border-secondary transition-all shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl flex items-center justify-center mb-4 -rotate-6 shadow-lg">
                <Icon name="Award" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4 text-secondary">ТРЕНЕРСКИЙ СОСТАВ</h3>
              <p className="text-gray-700 leading-relaxed">
                Шаталова Алина вместе со своим мужем Павлом, в далеком 2016 году открыли первый филиал «ПЛЮХбурга». Сейчас Алина является одним из самых востребованных спикеров в мире грудничкового и раннего плавания и автором методики «осознанное погружение» которая перевернула мир раннего плавания и заставила всех тренеров задуматься об устаревших методах работы. Алина лично стажирует каждого тренера в команду, чтобы маленькие половцы получали самое лучшее от занятий в бассейне.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Наши тренеры - это тренеры с которыми ваш ребенок будет сравнивать всех последующих, потому что мы задаем высокую планку. Наши тренеры - наставники, любящие и уважающие детей.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-sky-100 hover:border-primary transition-all shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-cyan-400 rounded-3xl flex items-center justify-center mb-4 rotate-3 shadow-lg">
                <Icon name="Smile" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4 text-primary">АТМОСФЕРА</h3>
              <p className="text-gray-700 leading-relaxed">
                Смех, улыбки и радость - каждое занятие. Наши половцы ходят к нам годами.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-purple-100 hover:border-secondary transition-all shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-3xl flex items-center justify-center mb-4 -rotate-3 shadow-lg">
                <Icon name="Target" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4 text-secondary">ТРЕНИРОВОЧНЫЙ ПРОЦЕСС</h3>
              <p className="text-gray-700 leading-relaxed">
                Тренеры уделяют внимание каждой детали, поэтому наши дети с легкостью поступают в спортивные школы и получают навык плавания на всю жизнь
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-zinc-900 p-8 rounded-xl border border-white/10">
              <h3 className="text-3xl font-bold uppercase mb-4 text-accent">ДЕТИ КАКОГО ВОЗРАСТА ПЛАВАЮТ У НАС?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                к самым маленьким мы выезжаем на дом. а вот с 2 месяцев до 10 лет уже можно плавать в нашем теплом и чистом бассейне.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-white/10">
              <h3 className="text-3xl font-bold uppercase mb-4 text-accent">РАЗМЕРЫ НАШЕГО БАССЕЙНА</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                ширина нашего бассейна 3 метра, длина 6 м. Теплая вода - 33С и небольшие размеры позволяют нам эффективно заниматься с детьми раннего грудного и дошкольного, школьного возраста. Так как дети чувствуют себя комфортно и уютно для изучения базовых навыков.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-white/10">
              <h3 className="text-3xl font-bold uppercase mb-4 text-accent">РАСПИСАНИЕ ЗАНЯТИЙ</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                мы работаем с 9:00 до 20:00 каждый день. узнать о наличии свободных окон и закреплении за вами постоянного времени нужно уточнять у администратора.
              </p>
              <Button 
                className="bg-accent hover:bg-accent/90 font-bold text-lg px-8 py-6 rounded-full"
                onClick={() => window.open('https://t.me/shatalova_alina', '_blank')}
              >
                Получить информацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-cyan-50 via-purple-50 to-sky-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-8 tracking-tight">
            СТОИМОСТЬ ЗАНЯТИЙ
          </h2>
          <p className="text-center text-2xl text-accent font-bold mb-16">
            запишитесь на первую пробную тренировку -60%
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-accent/20 to-accent/5 p-8 rounded-xl border-2 border-accent hover:scale-105 transition-transform">
              <h3 className="text-3xl font-bold uppercase mb-3 text-accent">Пробное занятие</h3>
              <p className="text-5xl font-black mb-2">850 ₽</p>
              <p className="text-sm text-gray-400 line-through mb-6">вместо 2200 рублей</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>консультация</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>диагностика</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>занятие</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>построение плана дальнейшего тренировочного процесса</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-white/10 hover:border-accent/50 hover:scale-105 transition-all">
              <h3 className="text-3xl font-bold uppercase mb-3">4 занятия</h3>
              <p className="text-5xl font-black mb-2">7 600 ₽</p>
              <p className="text-sm text-gray-400 mb-6">со скидкой 6840 рублей*</p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>10% скидка многодетным, инвалидам</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>персональная работа с тренером</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>индивидуальный подход</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>срок действия 30 дней</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-white/10 hover:border-accent/50 hover:scale-105 transition-all">
              <h3 className="text-3xl font-bold uppercase mb-3">8 занятий</h3>
              <p className="text-5xl font-black mb-2">13 590 ₽*</p>
              <p className="text-sm text-gray-400 mb-6">со скидкой 10%</p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>персональная работа с тренером</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>индивидуальный подход</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>регулярные тренировки 2 раза в неделю</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>срок действия абонемента 35 дней</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-white/10 hover:border-accent/50 hover:scale-105 transition-all">
              <h3 className="text-3xl font-bold uppercase mb-3">24 занятия</h3>
              <p className="text-5xl font-black mb-2">37 200 ₽*</p>
              <p className="text-sm text-gray-400 mb-6">со скидкой 10%</p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>персональная работа с тренером</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>индивидуальный подход</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>регулярные тренировки 2-3 раза в неделю</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>срок действия абонемента 90 дней</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-white/10 hover:border-accent/50 hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold uppercase mb-3">Семейный 16</h3>
              <p className="text-5xl font-black mb-2">25 650 ₽*</p>
              <p className="text-sm text-gray-400 mb-6">для 2+ детей</p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>для семей с 2 и более детьми</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>каждый ребенок плавает со своим тренером</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>экономия времени. 2 ребенка плавают одновременно</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>срок действия 35 дней</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-white/10 hover:border-accent/50 hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold uppercase mb-3">Семейный 24</h3>
              <p className="text-5xl font-black mb-2">36 000 ₽*</p>
              <p className="text-sm text-gray-400 mb-6">для 2+ детей</p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>для семей с 2 и более детьми</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>каждый ребенок плавает со своим тренером</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>регулярные тренировки 2-3 раза в неделю</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>срок действия 60 дней</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-tight">
            ОТЗЫВЫ
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="bg-zinc-900 p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-all">
              <div className="flex items-center gap-2 mb-4">
                {[1,2,3,4,5].map(star => (
                  <Icon key={star} name="Star" className="text-accent fill-accent" size={18} />
                ))}
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Это одно из самых лучших мест, где одновременно занимаются физическим и умственным развитием ребенка! У меня двое деток, с Плюхом мы уже три года вместе! Индивидуальный подход, методика "осознанное погружение" покорило моё сердце! Всем мамочки, кто в поисках, от души рекомендую! Ваши занятия в бассейне будут весёлыми и без слёз! На Кольцевой, 46 очень комфортно малышам и мамочкам! Фен, кофе, стульчики для кормления - мой рай!
              </p>
              <p className="font-bold text-sm">Marinella555</p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-all">
              <div className="flex items-center gap-2 mb-4">
                {[1,2,3,4,5].map(star => (
                  <Icon key={star} name="Star" className="text-accent fill-accent" size={18} />
                ))}
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Мы с детками уже 6 месяцев точно ходим в этот замечательный центр раннего плавания. Все очень очень нравится. Тренера работают, очень радуют своим подходом, знаниями, любовью к деткам. Методика осознанного погружения. Плавный подход, никто не заставляет ребёнка через силу или не хочу что то делать. Всё идёт плавно постепенно и с любовью. В бассейне вода чистая, все моется и меняется регулярно. Запаха хлора нет.
              </p>
              <p className="font-bold text-sm">sofya_kondraeva</p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-all">
              <div className="flex items-center gap-2 mb-4">
                {[1,2,3,4,5].map(star => (
                  <Icon key={star} name="Star" className="text-accent fill-accent" size={18} />
                ))}
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Плюхбург - это то место куда мой сын бежит с радостью. С Плюхбургом мы уже три года. Сын занимается с тренером Евгением, про таких людей говорят "человек на своём месте"! Подход к каждому ребенку индивидуальный. Мой ребенок уже свободно плавает (раньше мыли голову, ребенок плакал, был страх воды). В Плюхбург приходим как домой, все уютно, комфортно и очень душевно. Кстати за чистотой воды они тщательно следят!
              </p>
              <p className="font-bold text-sm">Vera Antsiferova</p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-all">
              <div className="flex items-center gap-2 mb-4">
                {[1,2,3,4,5].map(star => (
                  <Icon key={star} name="Star" className="text-accent fill-accent" size={18} />
                ))}
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Это любовь! Ребенка спасли от страха воды, который появился в другом бассейне. Индивидуальный подход к каждому ребенку. Тренер подстраивает занятие, исходя из настроения малыша. Интересно и увлекательно проходит каждая тренировка. Искренне любим это место. Отдельная любовь к тренеру Владу! Да все крутые!
              </p>
              <p className="font-bold text-sm">Дарья</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-cyan-50 via-purple-50 to-sky-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-12 tracking-tight">
            КАК НАС НАЙТИ
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-zinc-900 rounded-xl mb-8 flex items-center justify-center border border-white/10">
              <Icon name="MapPin" size={64} className="text-accent" />
            </div>
            <p className="text-center text-xl text-gray-300 mb-8">
              г. Екатеринбург, ул. Кольцевая 46
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-12 tracking-tight">
              Форма обратной связи
            </h2>
            <div className="bg-zinc-900 p-10 rounded-xl border border-white/10">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold uppercase mb-3 text-gray-400">
                    Ваше имя
                  </label>
                  <Input 
                    placeholder="Введите ваше имя" 
                    className="bg-black border-white/20 text-white h-14 text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase mb-3 text-gray-400">
                    Телефон
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="+7 (___) ___-__-__" 
                    className="bg-black border-white/20 text-white h-14 text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase mb-3 text-gray-400">
                    Сообщение
                  </label>
                  <Textarea 
                    placeholder="Ваш вопрос или пожелание" 
                    rows={5}
                    className="bg-black border-white/20 text-white text-lg"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 font-bold text-xl py-7 rounded-full"
                >
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-white/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">детский бассейн «ПЛЮХбург»</h3>
          <p className="text-gray-400 mb-2">г. Екатеринбург, ул. Кольцевая 46</p>
          <a 
            href="tel:+79826322152" 
            className="text-accent hover:text-accent/80 transition text-xl font-bold mb-8 inline-block"
          >
            +7 (982) 63 22 152
          </a>
          <div className="mt-8">
            <Button 
              className="bg-accent hover:bg-accent/90 font-bold text-lg px-10 py-6 rounded-full"
              onClick={() => window.open('https://t.me/shatalova_alina', '_blank')}
            >
              Записаться в Telegram
            </Button>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;