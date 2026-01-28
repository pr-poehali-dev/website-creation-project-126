import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface MainSectionsProps {
  scrollToSection: (id: string) => void;
}

const MainSections = ({ scrollToSection }: MainSectionsProps) => {
  return (
    <>
      <section className="relative h-[890px] flex items-center justify-center overflow-hidden mt-[120px]">
        <div className="absolute inset-0 bg-black" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/eacdcf2f-19c9-4d20-b040-35bebd611835/files/cf6c3257-ce78-40ee-8bb7-096885779784.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-transparent to-black/85 z-10" />
        
        <div className="relative z-20 container mx-auto px-4 text-center -mt-32">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-bold mb-5">
              Бассейн детский
            </span>
            
            <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] font-bold text-white mb-5 uppercase px-4" style={{fontFamily: 'Oswald, Arial, sans-serif', fontWeight: 700, lineHeight: 1.4, textShadow: '0px 3px 8px rgba(0,0,0,0.8)'}}>
              Запишите ребенка на плавание и получите{' '}
              <span className="text-primary">-60%</span> на первое занятие
            </h1>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-bold text-base sm:text-lg md:text-xl px-8 sm:px-12 py-6 sm:py-8 rounded-full shadow-2xl uppercase animate-pulse"
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
    </>
  );
};

export default MainSections;