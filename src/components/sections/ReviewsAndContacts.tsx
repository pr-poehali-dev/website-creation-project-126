import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

const ReviewsAndContacts = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase text-black" style={{fontFamily: 'Oswald, Arial, sans-serif'}}>Что о нас говорят</h2>
          
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
            <a 
              href="https://yandex.ru/maps/org/plyukhburg/109039810472/"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
            >
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=60.597465%2C56.838011&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzExNTM2NBJy0KDQvtGB0YHQuNGPLCDQldC60LDRgtC10YDQuNC90LHRg9GA0LMsINGD0LvQuNGG0LAg0JrQvtC70YzRhtC10LLQsNGPLCA0NiIKDQF1QkIVAyhbQg%2C%2C&z=16"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{position: 'relative', pointerEvents: 'none'}}
              />
              <div className="absolute inset-0 bg-transparent group-hover:bg-primary/10 transition-colors flex items-center justify-center">
                <div className="bg-primary text-white px-6 py-3 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
                  Открыть в Яндекс.Картах
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase text-black" style={{fontFamily: 'Oswald, Arial, sans-serif'}}>Запишитесь на пробное занятие</h2>
          
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
            <button onClick={() => window.scrollTo({ top: document.getElementById('contacts')?.offsetTop, behavior: 'smooth' })} className="text-white/80 hover:text-primary transition text-lg mb-8">
              Наши контакты
            </button>

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
                href="https://instagram.com/_shatalova_alina_?igshid=MjkzY2Y1YTY=" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition"
              >
                <Icon name="Instagram" size={40} />
              </a>
              <a 
                href="http://www.youtube.com/@Alina_Shatalova" 
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