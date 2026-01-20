import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 text-center">
          <div className="text-sm text-gray-600 space-y-1">
            <p className="font-semibold text-primary">детский бассейн «ПЛЮХбург»</p>
            <a href="tel:+79826322152" className="hover:text-primary transition">
              +7 (982) 63 22 152
            </a>
            <p>г. Екатеринбург, ул. Кольцевая 46</p>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-blue-50 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in leading-tight">
            ЗАПИШИТЕ РЕБЕНКА НА ПЛАВАНИЕ<br />И ПОЛУЧИТЕ{" "}
            <span className="text-accent">-60%</span><br />НА ПЕРВОЕ ЗАНЯТИЕ
          </h1>
          
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6 mb-8 animate-slide-up"
            onClick={() => window.open('https://t.me/your_chat', '_blank')}
          >
            Записаться на занятие
          </Button>

          <div className="max-w-3xl mx-auto text-left space-y-3 text-gray-700">
            <div className="flex items-start gap-3">
              <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
              <p><strong className="text-accent">-10% на абонемент</strong></p>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
              <p>персональные тренировки один на один с тренером. занятия выстраиваются исходя из потребностей вашего ребенка</p>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
              <p>исправляем асимметрию: кривошея, привычный поворот. научим переворачиваться и ползти</p>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
              <p>авторская методика «Осознанное погружение». Без слез, стресса, в игровой форме научим не только плавать, но и дисциплине, выполнению инструкций с уважением к личности ребенка.</p>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
              <p>используем только физиологичные и эффективные упражнения. мы не притапливаем и не вертим детей в воде. они ныряют сами и плывут.</p>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
              <p>опытные тренеры. в команду «ПЛЮХбурга» не попадают просто так. только лучшие из лучших</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
            ПОЧЕМУ ВЫБИРАЮТ НАС?
          </h2>
          <p className="text-lg text-gray-600 mb-8">Посмотрите видео о нашем бассейне</p>
          
          <div className="max-w-4xl mx-auto mb-12 aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <Icon name="Play" size={64} className="text-primary" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
            <Card className="border-2 border-primary/20 hover:shadow-lg transition">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Users" className="text-primary" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900">КОМПЛЕКСНЫЙ ПОДХОД</h3>
                </div>
                <p className="text-gray-700">
                  Мы работаем в связке с родителями, обучая ребенка не только плаванию, но и помогая ему развиваться личностно, во время осваивая двигательные навыки.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-lg transition">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Award" className="text-accent" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900">ТРЕНЕРСКИЙ СОСТАВ</h3>
                </div>
                <p className="text-gray-700">
                  Шаталова Алина вместе со своим мужем Павлом, в далеком 2016 году открыли первый филиал «ПЛЮХбурга». Сейчас Алина является одним из самых востребованных спикеров в мире грудничкового и раннего плавания и автором методики «осознанное погружение» которая перевернула мир раннего плавания и заставила всех тренеров задуматься об устаревших методах работы.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-lg transition">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Heart" className="text-accent" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900">АТМОСФЕРА</h3>
                </div>
                <p className="text-gray-700">
                  Смех, улыбки и радость - каждое занятие. Наши половцы ходят к нам годами.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-lg transition">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Target" className="text-primary" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900">ТРЕНИРОВОЧНЫЙ ПРОЦЕСС</h3>
                </div>
                <p className="text-gray-700">
                  Тренеры уделяют внимание каждой детали, поэтому наши дети с легкостью поступают в спортивные школы и получают навык плавания на всю жизнь
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">ДЕТИ КАКОГО ВОЗРАСТА ПЛАВАЮТ У НАС?</h3>
              <p className="text-gray-700">к самым маленьким мы выезжаем на дом. а вот с 2 месяцев до 10 лет уже можно плавать в нашем теплом и чистом бассейне.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">РАЗМЕРЫ НАШЕГО БАССЕЙНА</h3>
              <p className="text-gray-700">ширина нашего бассейна 3 метра, длина 6 м. Теплая вода - 33С и небольшие размеры позволяют нам эффективно заниматься с детьми раннего грудного и дошкольного, школьного возраста. Так как дети чувствуют себя комфортно и уютно для изучения базовых навыков.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">РАСПИСАНИЕ ЗАНЯТИЙ</h3>
              <p className="text-gray-700 mb-4">мы работаем с 9:00 до 20:00 каждый день. узнать о наличии свободных окон и закреплении за вами постоянного времени нужно уточнять у администратора.</p>
              <Button 
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://t.me/your_chat', '_blank')}
              >
                Получить информацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            СТОИМОСТЬ ЗАНЯТИЙ
          </h2>
          <p className="text-center text-xl text-accent font-semibold mb-12">
            запишитесь на первую пробную тренировку -60%
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 border-accent hover:shadow-xl transition">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-accent mb-2">Пробное занятие</h3>
                <p className="text-3xl font-bold text-gray-900 mb-2">850 ₽</p>
                <p className="text-sm text-gray-500 line-through mb-4">вместо 2200 рублей</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>консультация</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>диагностика</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>занятие</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>построение плана дальнейшего тренировочного процесса</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-xl transition">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">4 занятия</h3>
                <p className="text-3xl font-bold text-gray-900 mb-2">7 600 ₽</p>
                <p className="text-sm text-gray-500 mb-4">со скидкой 6840 рублей*</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>10% скидка многодетным, инвалидам</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>персональная работа с тренером</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>индивидуальный подход</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>срок действия 30 дней</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-xl transition">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">8 занятий</h3>
                <p className="text-3xl font-bold text-gray-900 mb-2">13 590 ₽*</p>
                <p className="text-sm text-gray-500 mb-4">со скидкой 10%</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>персональная работа с тренером</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>индивидуальный подход</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>регулярные тренировки 2 раза в неделю</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>срок действия абонемента 35 дней</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-xl transition">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">24 занятия</h3>
                <p className="text-3xl font-bold text-gray-900 mb-2">37 200 ₽*</p>
                <p className="text-sm text-gray-500 mb-4">со скидкой 10%</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>персональная работа с тренером</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>индивидуальный подход</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>регулярные тренировки 2-3 раза в неделю</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>срок действия абонемента 90 дней</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-xl transition">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Семейный 16 занятий</h3>
                <p className="text-3xl font-bold text-gray-900 mb-2">25 650 ₽*</p>
                <p className="text-sm text-gray-500 mb-4">для 2+ детей</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>для семей с 2 и более детьми</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>каждый ребенок плавает со своим тренером</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>экономия времени. 2 ребенка плавают одновременно</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>срок действия абонемента 35 дней</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-xl transition">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Семейный 24 занятия</h3>
                <p className="text-3xl font-bold text-gray-900 mb-2">36 000 ₽*</p>
                <p className="text-sm text-gray-500 mb-4">для 2+ детей</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>для семей с 2 и более детьми</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>каждый ребенок плавает со своим тренером</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>регулярные тренировки 2-3 раза в неделю</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>срок действия абонемента 60 дней</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            ОТЗЫВЫ
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="hover:shadow-lg transition">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  </div>
                  <p className="text-gray-700 mb-3">
                    Отличный бассейн для детей! Профессиональные тренеры, комфортная температура воды. Ребенок занимается с удовольствием!
                  </p>
                  <p className="font-semibold text-gray-900">Мария К.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            КАК НАС НАЙТИ
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
              <Icon name="MapPin" size={64} className="text-primary" />
            </div>
            <p className="text-center text-lg text-gray-700 mb-8">
              г. Екатеринбург, ул. Кольцевая 46
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Форма обратной связи
            </h2>
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Ваше имя
                    </label>
                    <Input placeholder="Введите ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Телефон
                    </label>
                    <Input type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Сообщение
                    </label>
                    <Textarea placeholder="Ваш вопрос или пожелание" rows={4} />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">детский бассейн «ПЛЮХбург»</h3>
          <p className="mb-2">г. Екатеринбург, ул. Кольцевая 46</p>
          <a href="tel:+79826322152" className="text-accent hover:text-accent/80 transition text-lg font-semibold mb-6 inline-block">
            +7 (982) 63 22 152
          </a>
          <div className="mt-8">
            <Button 
              className="bg-accent hover:bg-accent/90 mb-4"
              onClick={() => window.open('https://t.me/your_chat', '_blank')}
            >
              Записаться в Telegram
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
