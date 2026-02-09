import { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

const ReviewsAndContacts = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const images = [
    { src: "https://cdn.poehali.dev/files/eba23ff6-51a6-4fc7-8f85-c77cf7b3d9b6.JPG", alt: "Ребенок плавает" },
    { src: "https://cdn.poehali.dev/files/a7f0641f-0bc2-4d27-b60d-46e5cc676739.JPG", alt: "Ребенок в бассейне" },
    { src: "https://cdn.poehali.dev/files/54058c6e-de1c-4741-b9e2-3b05bc17edc5.JPG", alt: "Занятие в бассейне" },
    { src: "https://cdn.poehali.dev/files/cd5c5596-71c7-4206-8e33-a0e56fa0ede8.JPG", alt: "Детское плавание" },
    { src: "https://cdn.poehali.dev/files/6fcfd906-be8e-408d-8a9a-c3053846ee54.JPG", alt: "Ребенок с тренером" },
    { src: "https://cdn.poehali.dev/files/e6dcb0a9-f0ee-4aec-8ec4-653ead4a897d.JPG", alt: "Малыш под водой" },
    { src: "https://cdn.poehali.dev/files/8a1e5a47-e895-4194-8df2-e3aac6f143f6.JPG", alt: "Мама с малышом" },
    { src: "https://cdn.poehali.dev/files/48f874e3-9755-49e7-96c6-0519be655929.JPG", alt: "Малыш ныряет" },
    { src: "https://cdn.poehali.dev/files/c8725787-0a78-4ef8-a6d3-5da717dd2f40.JPG", alt: "Девочка-русалка" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

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
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <img 
                  src={images[currentImage].src}
                  alt={images[currentImage].alt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-6 uppercase text-center">Оставьте заявку</h3>
              
              <form className="space-y-4" onSubmit={async (e: FormEvent) => {
                e.preventDefault();
                setIsSubmitting(true);
                setSubmitMessage('');
                
                try {
                  const response = await fetch('https://functions.poehali.dev/d8142347-1562-42b2-aad1-b697495e3294', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                  });
                  
                  const result = await response.json();
                  
                  if (response.ok) {
                    setSubmitMessage('✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
                    setFormData({ name: '', phone: '', email: '', message: '' });
                  } else {
                    setSubmitMessage('❌ ' + (result.message || result.error || 'Ошибка отправки'));
                  }
                } catch (error) {
                  setSubmitMessage('❌ Ошибка связи с сервером');
                } finally {
                  setIsSubmitting(false);
                }
              }}>
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <Input 
                    type="text" 
                    placeholder="Введите ваше имя" 
                    className="w-full" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон</label>
                  <Input 
                    type="tel" 
                    placeholder="+7 (___) ___-__-__" 
                    className="w-full"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Email (необязательно)</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="w-full"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Сообщение (необязательно)</label>
                  <Input 
                    type="text" 
                    placeholder="Например: Имя и возраст ребёнка" 
                    className="w-full"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                
                {submitMessage && (
                  <p className={`text-sm text-center font-medium ${submitMessage.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>
                    {submitMessage}
                  </p>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-full text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Заполняя данные, вы даете согласие на обработку персональных данных
                </p>
              </form>
              </div>
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
                href="https://vk.com/pluhburg_ekb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition"
              >
                <svg width="40" height="40" viewBox="0 0 48 48" fill="currentColor">
                  <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm9.5 24.5h-2.8c-.9 0-1.2-.7-2.8-2.3-1.4-1.4-2.1-1.6-2.4-1.6-.5 0-.7.2-.7.9v2.1c0 .6-.2.9-1.6.9-2.4 0-5.1-1.5-7-4.2-2.8-4-3.6-7-3.6-7.6 0-.3.2-.6.9-.6h2.8c.6 0 .9.3 1.1.9.9 2.6 2.4 4.9 3 4.9.2 0 .4-.1.4-.8v-3.1c-.1-1.4-.8-1.5-.8-2 0-.2.2-.5.5-.5h4.4c.5 0 .7.3.7.8v4.2c0 .5.2.7.4.7.2 0 .5-.2 1.1-.8 1.8-2 3-5.1 3-5.1.2-.3.4-.6 1-.6h2.8c.8 0 1 .4.8.9-.3 1.4-3.6 6.1-3.6 6.1-.3.4-.3.6 0 1.1.2.3.9.9 1.4 1.5 1 1 1.7 1.8 1.9 2.4.2.6-.1.9-.7.9z"/>
                </svg>
              </a>
              <a 
                href="https://t.me/+79826322152"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition"
              >
                <Icon name="MessageSquare" size={40} />
              </a>
            </div>

            <img 
              src="https://cdn.poehali.dev/projects/eacdcf2f-19c9-4d20-b040-35bebd611835/bucket/7296364e-6f2a-40a7-a557-cbd06cbd21af.PNG"
              alt="ПЛЮХбург"
              className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto mb-6"
            />
            
            <div className="text-5xl md:text-6xl font-black text-white uppercase mb-8" style={{fontFamily: 'Oswald, Arial, sans-serif'}}>
              ДЕТСКИЙ БАССЕЙН<br />ПЛЮХБУРГ
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <Link to="/privacy-policy" className="text-white/60 hover:text-primary transition underline">
                Политика конфиденциальности
              </Link>
              <span className="hidden sm:inline text-white/40">•</span>
              <Link to="/personal-data-agreement" className="text-white/60 hover:text-primary transition underline">
                Согласие на обработку персональных данных
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-8 right-8 z-50">
        <a 
          href="tel:+79826322152"
          className="w-16 h-16 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
        >
          <Icon name="Phone" size={28} className="text-white" />
        </a>
      </div>
    </>
  );
};

export default ReviewsAndContacts;