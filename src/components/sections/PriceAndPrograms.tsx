import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PriceAndProgramsProps {
  scrollToSection: (id: string) => void;
}

const PriceAndPrograms = ({ scrollToSection }: PriceAndProgramsProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const openBookingDialog = (packageName: string) => {
    setSelectedPackage(packageName);
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('https://functions.poehali.dev/d8142347-1562-42b2-aad1-b697495e3294', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.parentName,
          phone: formData.phone,
          email: formData.email,
          message: `Запись на "${selectedPackage}"\n\nИмя ребёнка: ${formData.childName}\nВозраст ребёнка: ${formData.childAge}`
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
        setFormData({ parentName: '', childName: '', childAge: '', phone: '', email: '' });
        setTimeout(() => {
          setIsDialogOpen(false);
          setSubmitMessage('');
        }, 3000);
      } else {
        setSubmitMessage('❌ ' + (data.message || 'Ошибка отправки'));
      }
    } catch (error) {
      setSubmitMessage('❌ Ошибка отправки. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="price" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase text-black" style={{fontFamily: 'Oswald, Arial, sans-serif'}}>Стоимость занятий</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden border-4 border-black">
              <img 
                src="https://cdn.poehali.dev/projects/eacdcf2f-19c9-4d20-b040-35bebd611835/files/3ec8b4b6-1916-42ce-9361-90c447e2cac0.jpg"
                alt="Осьминог"
                className="absolute -bottom-4 -right-4 w-24 h-24 object-contain opacity-20"
              />
              <div className="absolute top-4 right-4 bg-black text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase">
                -60%
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-4 text-foreground uppercase relative z-10">Пробное занятие</h3>
              <div className="text-5xl font-black text-foreground mb-2" style={{fontFamily: 'Inter, Arial, sans-serif'}}>850₽</div>
              <p className="text-muted-foreground text-base mb-6 line-through font-medium">вместо 2200₽</p>
              <ul className="space-y-3 mb-8 text-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Консультация</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Диагностика</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Занятие</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Построение плана дальнейшего тренировочного процесса</span>
                </li>
              </ul>
              <Button className="w-full bg-black hover:bg-black/90 text-white font-bold rounded-full py-6" onClick={() => openBookingDialog('Пробное занятие')}>
                Записаться
              </Button>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/eacdcf2f-19c9-4d20-b040-35bebd611835/files/3ec8b4b6-1916-42ce-9361-90c447e2cac0.jpg"
                alt="Осьминог"
                className="absolute -bottom-4 -right-4 w-24 h-24 object-contain opacity-20"
              />
              <h3 className="text-2xl font-bold mb-4 uppercase relative z-10">4 занятия</h3>
              <div className="text-5xl font-black text-primary mb-6" style={{fontFamily: 'Inter, Arial, sans-serif'}}>7 600₽</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span><span className="font-semibold text-primary">10% скидка</span> многодетным, инвалидам. Цена со скидкой 6840₽</span>
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
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full py-6" onClick={() => openBookingDialog('4 занятия')}>
                Записаться
              </Button>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/eacdcf2f-19c9-4d20-b040-35bebd611835/files/3ec8b4b6-1916-42ce-9361-90c447e2cac0.jpg"
                alt="Осьминог"
                className="absolute -bottom-4 -right-4 w-24 h-24 object-contain opacity-20"
              />
              <h3 className="text-2xl font-bold mb-4 uppercase relative z-10">8 занятий</h3>
              <div className="text-5xl font-black text-primary mb-6" style={{fontFamily: 'Inter, Arial, sans-serif'}}>13 590₽</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span><span className="font-semibold text-primary">Стоимость со скидкой 10%.</span> Скидка в день покупки пробного и в день последнего занятия с предыдущего абонемента</span>
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
                  <span>Регулярные тренировки 2 раза в неделю</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Срок действия абонемента 35 дней</span>
                </li>
              </ul>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full py-6" onClick={() => openBookingDialog('8 занятий')}>
                Записаться
              </Button>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/eacdcf2f-19c9-4d20-b040-35bebd611835/files/3ec8b4b6-1916-42ce-9361-90c447e2cac0.jpg"
                alt="Осьминог"
                className="absolute -bottom-4 -right-4 w-24 h-24 object-contain opacity-20"
              />
              <h3 className="text-2xl font-bold mb-4 uppercase relative z-10">24 занятия</h3>
              <div className="text-5xl font-black text-primary mb-6" style={{fontFamily: 'Inter, Arial, sans-serif'}}>37 200₽</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span><span className="font-semibold text-primary">Стоимость со скидкой 10%.</span> Скидка в день покупки пробного и в день последнего занятия с предыдущего абонемента</span>
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
                  <span>Регулярные тренировки 2-3 раза в неделю</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Срок действия абонемента 90 дней</span>
                </li>
              </ul>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full py-6" onClick={() => openBookingDialog('24 занятия')}>
                Записаться
              </Button>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/eacdcf2f-19c9-4d20-b040-35bebd611835/files/3ec8b4b6-1916-42ce-9361-90c447e2cac0.jpg"
                alt="Осьминог"
                className="absolute -bottom-4 -right-4 w-24 h-24 object-contain opacity-20"
              />
              <div className="mb-4 relative z-10">
                <span className="text-sm font-bold text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">Семейный</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase relative z-10">16 занятий</h3>
              <div className="text-5xl font-black text-primary mb-6" style={{fontFamily: 'Inter, Arial, sans-serif'}}>25 650₽</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span><span className="font-semibold text-primary">Стоимость со скидкой 10%.</span> Скидка в день покупки пробного и в день последнего занятия с предыдущего абонемента</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Для семей с 2 и более детьми</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Каждый ребенок плавает со своим тренером</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Экономия времени. 2 ребенка плавают одновременно. Мама отдыхает</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Регулярные тренировки 2 раза в неделю</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Срок действия абонемента 35 дней</span>
                </li>
              </ul>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full py-6" onClick={() => openBookingDialog('16 занятий (Семейный)')}>
                Записаться
              </Button>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/eacdcf2f-19c9-4d20-b040-35bebd611835/files/3ec8b4b6-1916-42ce-9361-90c447e2cac0.jpg"
                alt="Осьминог"
                className="absolute -bottom-4 -right-4 w-24 h-24 object-contain opacity-20"
              />
              <div className="mb-4 relative z-10">
                <span className="text-sm font-bold text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">Семейный</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase relative z-10">24 занятия</h3>
              <div className="text-5xl font-black text-primary mb-6" style={{fontFamily: 'Inter, Arial, sans-serif'}}>36 000₽</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span><span className="font-semibold text-primary">Стоимость со скидкой 10%.</span> Скидка в день покупки пробного и в день последнего занятия с предыдущего абонемента</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Для семей с 2 и более детьми</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Каждый ребенок плавает со своим тренером</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Экономия времени. 2 ребенка плавают одновременно. Мама отдыхает</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Регулярные тренировки 2-3 раза в неделю</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Срок действия абонемента 60 дней</span>
                </li>
              </ul>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full py-6" onClick={() => openBookingDialog('24 занятия (Семейный)')}>
                Записаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Запись на занятие</DialogTitle>
            <p className="text-muted-foreground">{selectedPackage}</p>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <Label htmlFor="parentName">Имя родителя *</Label>
              <Input
                id="parentName"
                required
                value={formData.parentName}
                onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                placeholder="Введите ваше имя"
              />
            </div>
            <div>
              <Label htmlFor="childName">Имя ребёнка *</Label>
              <Input
                id="childName"
                required
                value={formData.childName}
                onChange={(e) => setFormData({...formData, childName: e.target.value})}
                placeholder="Введите имя ребёнка"
              />
            </div>
            <div>
              <Label htmlFor="childAge">Возраст ребёнка *</Label>
              <Input
                id="childAge"
                required
                value={formData.childAge}
                onChange={(e) => setFormData({...formData, childAge: e.target.value})}
                placeholder="Например: 3 года"
              />
            </div>
            <div>
              <Label htmlFor="phone">Номер телефона *</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+7 (___) ___-__-__"
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="your@email.com"
              />
            </div>
            {submitMessage && (
              <p className={`text-sm ${submitMessage.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
                {submitMessage}
              </p>
            )}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-full py-6"
            >
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <section id="programm" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="bg-white p-10 rounded-3xl shadow-lg border-2 border-black">
              <h3 className="text-4xl font-bold uppercase mb-6 text-center">Дети какого возраста плавают у нас?</h3>
              <p className="text-xl leading-relaxed text-center">
                К самым маленьким мы выезжаем на дом. А вот с 2 месяцев до 10 лет уже можно плавать в нашем теплом и чистом бассейне.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg border-2 border-black">
              <h3 className="text-4xl font-bold uppercase mb-6 text-center">Размеры нашего бассейна</h3>
              <p className="text-xl leading-relaxed text-center">
                Ширина нашего бассейна 3 метра, длина 6 м. Теплая вода - 33°C и небольшие размеры позволяют нам эффективно заниматься с детьми раннего грудного и дошкольного, школьного возраста. Так как дети чувствуют себя комфортно и уютно для изучения базовых навыков.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg border-2 border-black">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-4 sm:mb-6 text-center">Расписание занятий</h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center mb-6 sm:mb-8">
                Мы работаем с 9:00 до 20:00 каждый день. Узнать о наличии свободных окон и закреплении за вами постоянного времени нужно уточнять у администратора.
              </p>
              <div className="text-left">
                <a 
                  href="https://t.me/+79826322152" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary hover:bg-primary/90 text-white font-bold text-sm sm:text-base md:text-lg px-6 sm:px-12 py-4 sm:py-6 rounded-full shadow-xl w-full sm:w-auto">
                    Получить информацию
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default PriceAndPrograms;