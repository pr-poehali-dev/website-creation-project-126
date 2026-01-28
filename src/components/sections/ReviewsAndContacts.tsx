import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

const ReviewsAndContacts = () => {
  return (
    <>
      <section className="py-20 bg-primary">
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

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase text-white" style={{fontFamily: 'Oswald, Arial, sans-serif'}}>Что о нас говорят</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
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

            <div className="bg-white p-8 rounded-3xl shadow-lg">
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

            <div className="bg-white p-8 rounded-3xl shadow-lg">
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

            <div className="bg-white p-8 rounded-3xl shadow-lg">
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

      <section id="map" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 uppercase text-white" style={{fontFamily: 'Oswald, Arial, sans-serif'}}>
            КАК НАС НАЙТИ
          </h2>
          <p className="text-center text-white text-lg mb-8">
            г. Екатеринбург,<br />ул. Кольцевая 46
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=60.597465%2C56.838011&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzExNTM2NBJy0KDQvtGB0YHQuNGPLCDQldC60LDRgtC10YDQuNC90LHRg9GA0LMsINGD0LvQuNGG0LAg0JrQvtC70YzRhtC10LLQsNGPLCA0NiIKDQF1QkIVAyhbQg%2C%2C&z=16"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{position: 'relative'}}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase text-white" style={{fontFamily: 'Oswald, Arial, sans-serif'}}>Запишитесь на пробное занятие</h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 uppercase text-center">Оставьте заявку</h3>
              
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
          </div>
        </div>
      </section>

      <footer className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Icon name="Droplets" className="text-primary" size={48} />
              <div>
                <h3 className="text-3xl font-black text-white uppercase" style={{fontFamily: 'Oswald, Arial, sans-serif'}}>ПЛЮХбург</h3>
                <p className="text-sm text-white/70">с 2016 года</p>
              </div>
            </div>

            <nav className="flex flex-col gap-4 mb-8">
              <button className="text-white/80 hover:text-primary transition text-lg">
                Методика обучения
              </button>
              <button className="text-white/80 hover:text-primary transition text-lg">
                Наши контакты
              </button>
            </nav>

            <a 
              href="tel:+79826322152" 
              className="text-4xl md:text-5xl font-black text-white hover:text-primary transition block mb-6"
              style={{fontFamily: 'Oswald, Arial, sans-serif'}}
            >
              +7 (982) 63 22 152
            </a>

            <p className="text-white/70 text-sm mb-8 max-w-2xl mx-auto">
              Подписывайтесь на наши аккаунты в соцсетях, где много новой информации о тренировках и жизни бассейна
            </p>

            <div className="flex items-center justify-center gap-8 mb-12">
              <a 
                href="https://t.me/shatalova_alina" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition"
              >
                <Icon name="MessageCircle" size={40} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition"
              >
                <Icon name="Youtube" size={40} />
              </a>
            </div>

            <div className="mb-8">
              <img 
                src="https://cdn.poehali.dev/projects/eacdcf2f-19c9-4d20-b040-35bebd611835/files/8f19f8f9-f5fd-484f-87a5-120520576aaa.jpg"
                alt="ПЛЮХбург"
                className="w-48 h-48 mx-auto object-contain"
              />
            </div>

            <div className="text-5xl md:text-6xl font-black text-white uppercase mb-8" style={{fontFamily: 'Oswald, Arial, sans-serif'}}>
              ДЕТСКИЙ БАССЕЙН<br />ПЛЮХБУРГ
            </div>

            <button className="text-white/60 hover:text-primary transition text-sm underline">
              Политика конфиденциальности
            </button>
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
    </>
  );
};

export default ReviewsAndContacts;