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
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/eacdcf2f-19c9-4d20-b040-35bebd611835/files/cf6c3257-ce78-40ee-8bb7-096885779784.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
        
        <div className="relative z-20 container mx-auto px-4 pt-6 pb-12 flex flex-col min-h-[calc(100vh-80px)]">
          {/* Центральный блок с заголовком и кнопкой */}
          <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto relative">
            {/* Большой осьминог с анимацией */}
            <div className="absolute -right-12 top-1/4 text-[120px] animate-bounce opacity-90" style={{animationDuration: '3s'}}>
              🐙
            </div>

            <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-white mb-6 uppercase leading-tight relative z-10" style={{fontFamily: 'Oswald, Arial, sans-serif', fontWeight: 700, textShadow: '0px 3px 12px rgba(0,0,0,0.9)'}}>
              ЗАПИШИТЕ РЕБЕНКА НА ПЛАВАНИЕ И ПОЛУЧИТЕ{' '}
              <span className="text-primary">-60%</span> НА ПЕРВОЕ ЗАНЯТИЕ
            </h1>

            <a 
              href="https://t.me/your_chat_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block relative z-10"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-12 py-6 rounded-full shadow-2xl uppercase mb-8"
              >
                Записаться на занятие
              </Button>
            </a>
          </div>

          {/* Нижний блок с преимуществами */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-white text-sm leading-relaxed"><span className="text-primary font-bold">-10%</span> на абонемент</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-white text-sm leading-relaxed">персональные тренировки один на один с тренером. занятия выстраиваются исходя из потребностей вашего ребенка</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-white text-sm leading-relaxed">исправляем асимметрию: кривошея, привычный поворот. научим переворачиваться и ползти</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-white text-sm leading-relaxed">авторская методика «Осознанное погружение». Без слез, стресса, в игровой форме научим не только плавать, но и дисциплине, выполнению инструкций с уважением к личности ребенка.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-white text-sm leading-relaxed">используем только физиологичные и эффективные упражнения. мы не притапливаем и не вертим детей в воде. они ныряют сами и плывут.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-white text-sm leading-relaxed">опытные тренеры. в команду «ПЛЮХбурга» не попадают просто так. только лучшие из лучших</p>
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
    </>
  );
};

export default MainSections;