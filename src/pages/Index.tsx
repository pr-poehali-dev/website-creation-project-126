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
    <div className="min-h-screen bg-white">
      <div 
        className="fixed top-0 left-0 h-1 bg-accent z-[100] transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg md:text-2xl font-black text-black">ПЛЮХбург</h1>
            </div>
            <div className="text-right text-sm md:text-base">
              <p className="text-gray-600">детский бассейн «ПЛЮХбург»</p>
              <p className="text-gray-600">+7 (982) 63 22 152</p>
              <p className="text-gray-600">г. Екатеринбург, ул. Кольцевая 46</p>
            </div>
          </div>
        </div>
      </header>

      <section className="relative pt-24 pb-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-black uppercase leading-tight">
                ЗАПИШИТЕ РЕБЕНКА<br />
                НА ПЛАВАНИЕ<br />
                И ПОЛУЧИТЕ <span className="bg-accent px-2">-60%</span><br />
                НА ПЕРВОЕ ЗАНЯТИЕ
              </h1>

              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-black font-bold text-base md:text-lg px-8 py-6 rounded-md uppercase"
                onClick={() => window.open('https://t.me/shatalova_alina', '_blank')}
              >
                записаться на занятие
              </Button>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                  <p><span className="font-bold">-10 %</span> на абонемент</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                  <p><span className="font-bold">персональные</span> тренировки с наставником, в комфортной психологической атмосфере</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                  <p><span className="font-bold">исправляем асимметрию:</span> кривошея, привычный поворот, научим переворачиваться и ползти</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                  <p><span className="font-bold">авторская</span> методика «Осознанное погружение»</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                  <p><span className="font-bold">используем</span> только физиологичные и эффективные упражнения. мы не притапливаем и не вертим детей в воде. они ныряют сами и плывут</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                  <p><span className="font-bold">опытные</span> тренеры в команду «ПЛЮХбурга» не попадают просто так. только лучшие из лучших</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/eacdcf2f-19c9-4d20-b040-35bebd611835/bucket/50d5a0ac-201c-41c5-894c-f14f674ca2ec.jpg"
                alt="Детское плавание"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-center mb-12">
            ПОЧЕМУ ВЫБИРАЮТ НАС?
          </h2>
          
          <p className="text-center text-lg mb-8 text-gray-600">Посмотрите видео о нашем бассейне</p>
          
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden shadow-xl border-4 border-primary">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
                  <Icon name="Play" size={36} className="text-white ml-1" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-primary transition-all">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Icon name="Users" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold uppercase mb-3">КОМПЛЕКСНЫЙ ПОДХОД</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Задача комплексного гармоничного развития ребенка
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-primary transition-all">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Icon name="Award" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold uppercase mb-3">ТРЕНЕРСКИЙ СОСТАВ</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Алина с Павлом регулярно ездят на международные конференции, по последним исследованиям в нейропсихологии, чтобы поддерживать актуальность методики
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-primary transition-all">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Icon name="Smile" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold uppercase mb-3">АТМОСФЕРА</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Атмосфера - комфортная среда, дружная команда наставников, проект стал местом силы и высоких вибраций, поэтому наши половцы ходят к нам годами
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-primary transition-all">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Icon name="Target" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold uppercase mb-3">ТРЕНИРОВОЧНЫЙ ПРОЦЕСС</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Гиперперсонализация – процесс в соответствии с темпом ребенка и возможностями ребенка в каждый момент времени
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-16 space-y-8">
            <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold uppercase mb-4 text-primary">ДЕТИ КАКОГО ВОЗРАСТА ПЛАВАЮТ У НАС?</h3>
              <p className="text-gray-700 leading-relaxed">
                Посещать детский бассейн могут малыши от трех недель от дня рождения, до 10 лет
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold uppercase mb-4 text-primary">РАЗМЕРЫ НАШЕГО БАССЕЙНА</h3>
              <p className="text-gray-700 leading-relaxed">
                Малыши 3-6 мес плавают в детском бассейне — 2м×1,5м×60 см, <br />
                Дети от 6 месяцев — Бассейн 3×6м, 26°C
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold uppercase mb-4 text-primary">РАСПИСАНИЕ ЗАНЯТИЙ</h3>
              <p className="text-gray-700 leading-relaxed font-bold text-xl">
                9:00 - 20:00<br />
                Пн - Вс 8:00 - 20:00
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-center mb-4">
            СТОИМОСТЬ ЗАНЯТИЙ
          </h2>
          <p className="text-center text-gray-600 mb-12">Прозрачность занятий от -60% на абонемент после<br/>на первое занятие</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            <div className="bg-accent p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold uppercase mb-2">Пробное<br/>занятие</h3>
                <p className="text-4xl font-black">850₽</p>
                <p className="text-sm">первое занятие</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>остановка хронических слез</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>профилактика ОРВИ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>налаживание ритуалов перед сном</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-black/20 text-xs">
                <p>Создайте <span className="font-bold">стабильный</span> ритуал перед сном</p>
                <p className="font-bold">всего за 30 минут</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-gray-300 shadow-md hover:shadow-xl transition-all">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold uppercase mb-2">4 занятия</h3>
                <p className="text-4xl font-black">7 600₽</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>ватрушки</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>тренировки работы с дыханием</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>тренировки</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-300 text-xs">
                <p>Создайте <span className="font-bold">стабильный</span> ритуал перед сном</p>
                <p className="font-bold">всего за 30 минут</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-gray-300 shadow-md hover:shadow-xl transition-all">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold uppercase mb-2">4 занятия</h3>
                <p className="text-4xl font-black">13 200₽<sup className="text-lg">*</sup></p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>плавание</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>тренировки дыхания</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>тренировка</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-300 text-xs">
                <p>Создайте <span className="font-bold">стабильный</span> ритуал перед сном</p>
                <p className="font-bold">сокро - 30 минут</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-gray-300 shadow-md hover:shadow-xl transition-all">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold uppercase mb-2">Сочный<br/>абонемент<br/>16 занятий</h3>
                <p className="text-4xl font-black">25 650₽<sup className="text-lg">*</sup></p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>ватрушки</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>тренировки</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>массаж от 30 минут</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>налаживание ритуалов перед сном</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-300 text-xs">
                <p>Создайте <span className="font-bold">стабильный</span> ритуал перед сном</p>
                <p className="font-bold">сокро - 34 минуты</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-gray-300 shadow-md hover:shadow-xl transition-all">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold uppercase mb-2">Семейный<br/>абонемент<br/>24 занятия</h3>
                <p className="text-4xl font-black">36 000₽<sup className="text-lg">*</sup></p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>ватрушки</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>тренировки</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>массаж от 30 минут</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">•</span>
                  <span>налаживание ритуалов перед сном</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-300 text-xs">
                <p>Создайте <span className="font-bold">стабильный</span> ритуал перед сном</p>
                <p className="font-bold">сокро - 34 минуты</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-black font-bold text-base md:text-lg px-12 py-6 rounded-md uppercase"
              onClick={() => window.open('https://t.me/shatalova_alina', '_blank')}
            >
              получить информацию
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-center mb-12">
            ОТЗЫВЫ
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {[
              {
                name: "MarinellaSS",
                text: "Ребята спать все с психологами и невропатологами и недопытаемся выяснить к идеализации ребенка и психическое здоровье важнее физического",
              },
              {
                name: "sofya_kondrasss",
                text: "Родителям моих детей, лучших воспитателей, педагогов собственнейших, высококатегоричных. подарки семеновий",
              },
              {
                name: "Vera Antalievaya",
                text: "Приветик! Василиса не меньше поющийся (целую высокой) актерского темперамента!",
              },
              {
                name: "Дарина",
                text: "Опустите ликов пища крайне адаптилась и частичек ватутка ждала полная искуснея это навсгоголь",
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {review.name[0]}
                  </div>
                  <p className="font-bold text-sm">{review.name}</p>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">
                КАК НАС НАЙТИ С КАРТОЙ
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-bold">Адрес:</p>
                    <p className="text-gray-700">г. Екатеринбург, ул. Кольцевая 46</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-bold">Телефон:</p>
                    <p className="text-gray-700">+7 (982) 63 22 152</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">
                ЗАПИСАТЬСЯ<br/>ПО ВОТСАП
              </h2>
              <p className="text-gray-700 mb-6">Запишитесь на занятие прямо сейчас</p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-bold text-base md:text-lg px-12 py-6 rounded-md uppercase w-full md:w-auto"
                onClick={() => window.open('https://t.me/shatalova_alina', '_blank')}
              >
                +7 (982) 63 22 122
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-center mb-8">
              О ТРЕНЕРСКОМ СОСТАВЕ
            </h2>
            
            <div className="bg-white p-8 rounded-lg border-2 border-gray-200 shadow-sm space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Шаталова Алина вместе со своим мужем Павлом, в далеком 2016 году открыли первый филиал «ПЛЮХбурга». Сейчас Алина является одним из самых востребованных спикеров в мире грудничкового и раннего плавания и автором методики «осознанное погружение» которая перевернула мир раннего плавания и заставила всех тренеров задуматься об устаревших методах работы. Алина лично стажирует каждого тренера в команду, чтобы маленькие половцы получали самое лучшее от занятий в бассейне.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Наши тренеры - это тренеры с которыми ваш ребенок будет сравнивать всех последующих, потому что мы задаем высокую планку. Наши тренеры - наставники, любящие и уважающие детей.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black uppercase mb-4">
              Готовы начать?
            </h2>
            <p className="text-lg mb-6 opacity-90">Запишитесь на первое занятие со скидкой 60%</p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-black font-bold text-base md:text-lg px-12 py-6 rounded-md uppercase"
              onClick={() => window.open('https://t.me/shatalova_alina', '_blank')}
            >
              Записаться сейчас
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3">ПЛЮХбург</h3>
              <p className="text-sm text-gray-400">Детский бассейн для малышей от 3 недель до 10 лет</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Контакты</h3>
              <p className="text-sm text-gray-400">+7 (982) 63 22 152</p>
              <p className="text-sm text-gray-400">г. Екатеринбург, ул. Кольцевая 46</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Режим работы</h3>
              <p className="text-sm text-gray-400">Пн-Вс: 8:00 - 20:00</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
            <p>© 2024 ПЛЮХбург. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
