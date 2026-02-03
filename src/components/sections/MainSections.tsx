import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface MainSectionsProps {
  scrollToSection: (id: string) => void;
}

const MainSections = ({ scrollToSection }: MainSectionsProps) => {
  return (
    <>
      <section className="relative min-h-screen flex flex-col overflow-hidden mt-[70px]">
        <div className="absolute inset-0 bg-black" />
        {/* Большая декоративная рыбка */}
        <img 
          src="https://cdn.poehali.dev/projects/eacdcf2f-19c9-4d20-b040-35bebd611835/files/26a8c8fe-709a-4606-94ee-6dab1a74a830.jpg"
          alt="Рыбка"
          className="absolute top-32 right-10 w-32 h-auto object-contain opacity-40 hidden lg:block z-10"
        />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/eacdcf2f-19c9-4d20-b040-35bebd611835/files/cf6c3257-ce78-40ee-8bb7-096885779784.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/85 z-10" />
        
        <div className="relative z-20 container mx-auto px-4 pt-8 pb-8 flex flex-col min-h-[calc(100vh-70px)]">
          {/* Верхний блок с контактами */}
          <div className="text-center mb-16">
            <p className="text-white text-sm mb-1">Детский бассейн «ПЛЮХбург»</p>
            <a href="tel:+79826322152" className="text-white text-lg md:text-xl font-bold hover:text-primary transition-colors block mb-1">
              +7 (982) 63 22 152
            </a>
            <p className="text-white text-xs md:text-sm opacity-90">г. Екатеринбург, ул. Кольцевая 46</p>
          </div>

          {/* Центральный блок с заголовком и кнопкой */}
          <div className="flex-1 flex flex-col items-center justify-start text-center max-w-4xl mx-auto relative">

            <h1 className="text-[26px] sm:text-[32px] md:text-[42px] lg:text-[48px] font-black text-white mb-20 uppercase leading-tight relative z-10" style={{fontFamily: 'Oswald, Arial, sans-serif', fontWeight: 900, textShadow: '0px 3px 12px rgba(0,0,0,0.9)', letterSpacing: '0.02em'}}>
              ЗАПИШИТЕ РЕБЕНКА НА ПЛАВАНИЕ И ПОЛУЧИТЕ{' '}
              <span className="inline-block bg-primary text-white font-black px-3 py-1 rounded-lg">-60%</span> НА ПЕРВОЕ ЗАНЯТИЕ
            </h1>

            <div className="relative">
              <a 
                href="https://t.me/your_chat_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block relative z-10 w-full max-w-md px-4"
              >
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-black text-lg md:text-2xl px-10 md:px-20 py-6 md:py-8 rounded-full shadow-2xl mb-28 w-full"
                  style={{fontFamily: 'Inter, Arial, sans-serif'}}
                >
                  Записаться на занятие
                </Button>
              </a>
            </div>
          </div>

          {/* Нижний блок с преимуществами */}
          <div className="max-w-2xl mx-auto w-full">
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <Icon name="Star" size={22} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-white text-lg leading-relaxed"><span className="text-primary font-bold">-10%</span> На абонемент</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Star" size={22} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-white text-lg leading-relaxed"><span className="font-bold">Индивидуальный подход.</span> У нас нет шаблонов и планов занятий. Каждый ребёнок получает именно те задания, которые необходимы ему</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Star" size={22} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-white text-lg leading-relaxed"><span className="font-bold">Исправляем асимметрию:</span> кривошея, привычный поворот. Научим переворачиваться и ползти</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Star" size={22} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-white text-lg leading-relaxed"><span className="font-bold">Авторская методика «Осознанное погружение».</span> Без слез, стресса, в игровой форме научим не только плавать, но и дисциплине, выполнению инструкций с уважением к личности ребенка.</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Star" size={22} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-white text-lg leading-relaxed"><span className="font-bold">Используем только физиологичные и эффективные упражнения.</span> Мы не притапливаем и не вертим детей в воде. Они ныряют сами и плывут.</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Star" size={22} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-white text-lg leading-relaxed"><span className="font-bold">Опытные тренеры.</span> В команду «ПЛЮХбурга» не попадают просто так. Только лучшие из лучших</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-8 tracking-tight text-black" style={{fontFamily: 'Oswald, Arial, sans-serif'}}>
            ПОЧЕМУ ВЫБИРАЮТ НАС?
          </h2>
          
          <p className="text-center text-xl mb-4 text-black font-medium">Посмотрите видео о нашем бассейне</p>
          
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
            <div className="bg-white p-8 rounded-3xl border-2 border-black hover:border-primary transition-all shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center mb-4 rotate-6 shadow-lg">
                <Icon name="Users" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4">Комплексный подход</h3>
              <p className="text-foreground leading-relaxed">
                Мы работаем в связке с родителями, обучая ребенка не только плаванию, но и помогая ему развиваться личностно, во время осваивая двигательные навыки.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-black hover:border-primary transition-all shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center mb-4 -rotate-6 shadow-lg">
                <Icon name="Heart" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4">Комфортная атмосфера</h3>
              <p className="text-foreground leading-relaxed">
                Мы создали пространство, где дети чувствуют себя в безопасности. Каждое занятие проходит в игровой форме, без стресса и слез.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-black hover:border-primary transition-all shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center mb-4 rotate-3 shadow-lg">
                <Icon name="Shield" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4">Безопасность превыше всего</h3>
              <p className="text-foreground leading-relaxed">
                Современное оборудование для очистки воды, постоянный контроль качества. Все наши тренеры имеют медицинское образование.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-black hover:border-primary transition-all shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center mb-4 -rotate-3 shadow-lg">
                <Icon name="Baby" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4">Индивидуальный подход</h3>
              <p className="text-foreground leading-relaxed">
                У нас нет шаблонов и планов занятий. Каждый ребёнок получает именно те задания, которые необходимы ему.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-12 uppercase text-white tracking-tight" style={{fontFamily: 'Oswald, Arial, sans-serif'}}>
            ТРЕНЕРСКИЙ СОСТАВ
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-white">
            <p className="text-lg leading-relaxed">
              Шаталова Алина вместе со своим мужем Павлом, в далеком 2016 году открыли первый филиал «ПЛЮХбурга». Сейчас Алина является одним из самых востребованных спикеров в мире грудничкового и раннего плавания и автором методики «осознанное погружение» которая перевернула мир раннего плавания и заставила всех тренеров задуматься об устаревших методах работы. Алина лично стажирует каждого тренера в команду, чтобы маленькие половцы получали самое лучшее от занятий в бассейне.
            </p>
            
            <p className="text-lg leading-relaxed font-medium">
              Наши тренеры - это тренеры с которыми ваш ребенок будет сравнивать всех последующих, потому что мы задаем высокую планку. Наши тренеры - наставники, любящие и уважающие детей.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSections;