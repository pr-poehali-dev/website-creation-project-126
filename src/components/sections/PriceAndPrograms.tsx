import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface PriceAndProgramsProps {
  scrollToSection: (id: string) => void;
}

const PriceAndPrograms = ({ scrollToSection }: PriceAndProgramsProps) => {
  return (
    <>
      <section id="price" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase">Тарифы</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-primary p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-secondary text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                -60%
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white uppercase">Пробное занятие</h3>
              <div className="text-5xl font-black text-white mb-2" style={{fontFamily: 'Inter, Arial, sans-serif'}}>850₽</div>
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
              <div className="text-5xl font-black text-primary mb-6" style={{fontFamily: 'Inter, Arial, sans-serif'}}>7 600₽</div>
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
              <div className="text-5xl font-black text-primary mb-6" style={{fontFamily: 'Inter, Arial, sans-serif'}}>13 590₽</div>
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
              <div className="text-5xl font-black text-primary mb-6" style={{fontFamily: 'Inter, Arial, sans-serif'}}>37 200₽</div>
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
              <div className="text-5xl font-black text-primary mb-6" style={{fontFamily: 'Inter, Arial, sans-serif'}}>25 650₽</div>
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
              <div className="text-5xl font-black text-primary mb-6" style={{fontFamily: 'Inter, Arial, sans-serif'}}>36 000₽</div>
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
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="bg-white p-10 rounded-3xl shadow-lg border-2 border-border">
              <h3 className="text-4xl font-bold uppercase mb-6 text-center">Дети какого возраста плавают у нас?</h3>
              <p className="text-xl leading-relaxed text-center">
                К самым маленьким мы выезжаем на дом. А вот с 2 месяцев до 10 лет уже можно плавать в нашем теплом и чистом бассейне.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg border-2 border-border">
              <h3 className="text-4xl font-bold uppercase mb-6 text-center">Размеры нашего бассейна</h3>
              <p className="text-xl leading-relaxed text-center">
                Ширина нашего бассейна 3 метра, длина 6 м. Теплая вода - 33°C и небольшие размеры позволяют нам эффективно заниматься с детьми раннего грудного и дошкольного, школьного возраста. Так как дети чувствуют себя комфортно и уютно для изучения базовых навыков.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg border-2 border-border">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-4 sm:mb-6 text-center">Расписание занятий</h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center mb-6 sm:mb-8">
                Мы работаем с 9:00 до 20:00 каждый день. Узнать о наличии свободных окон и закреплении за вами постоянного времени нужно уточнять у администратора.
              </p>
              <div className="text-left">
                <a 
                  href="https://t.me/shatalova_alina" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary hover:bg-primary/90 text-white font-bold text-sm sm:text-base md:text-lg px-6 sm:px-12 py-4 sm:py-6 rounded-none shadow-xl w-full sm:w-auto">
                    Получить информацию
                  </Button>
                </a>
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
    </>
  );
};

export default PriceAndPrograms;