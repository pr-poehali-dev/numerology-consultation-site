import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Icon from "@/components/ui/icon"

const Index = () => {
  const services = [
    {
      title: "Персональная нумерологическая карта",
      description: "Подробный анализ вашей жизненной программы через числа рождения",
      price: "3500₽",
      duration: "90 мин",
      features: ["Число судьбы", "Жизненные циклы", "Скрытые таланты", "Рекомендации"]
    },
    {
      title: "Совместимость партнеров",
      description: "Анализ отношений и совместимости через нумерологию",
      price: "2800₽", 
      duration: "60 мин",
      features: ["Совместимость чисел", "Зоны роста", "Рекомендации", "Прогноз"]
    },
    {
      title: "Нумерология имени",
      description: "Влияние имени и фамилии на вашу судьбу и характер",
      price: "2200₽",
      duration: "45 мин", 
      features: ["Анализ имени", "Влияние на характер", "Коррекция", "Подбор имени"]
    },
    {
      title: "Финансовая нумерология",
      description: "Раскройте денежные потоки и найдите пути к процветанию",
      price: "4000₽",
      duration: "75 мин",
      features: ["Денежные числа", "Благоприятные даты", "Стратегия", "Блоки"]
    },
    {
      title: "Детская нумерология",
      description: "Понимание особенностей ребенка через числа рождения",
      price: "2500₽",
      duration: "60 мин",
      features: ["Характер ребенка", "Таланты", "Обучение", "Воспитание"]
    },
    {
      title: "Кармическая нумерология",
      description: "Проработка кармических задач и прошлых воплощений",
      price: "5000₽",
      duration: "120 мин",
      features: ["Кармические долги", "Прошлые жизни", "Уроки", "Исцеление"]
    }
  ]

  const testimonials = [
    {
      name: "Анна К.",
      text: "Открыла для себя невероятные грани личности! Консультация помогла понять мою жизненную миссию.",
      service: "Персональная карта"
    },
    {
      name: "Михаил Р.",
      text: "Анализ совместимости спас наши отношения. Теперь мы понимаем друг друга намного лучше.",
      service: "Совместимость"
    },
    {
      name: "Елена В.",
      text: "Финансовая нумерология дала четкий план действий. Доходы выросли в 3 раза за полгода!",
      service: "Финансы"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Star" className="text-primary-foreground" size={20} />
            </div>
            <span className="text-2xl font-bold text-primary" style={{fontFamily: "'Playfair Display', serif"}}>
              Нумеролог
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">Обо мне</a>
            <a href="#reviews" className="text-gray-700 hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Записаться
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Записаться на консультацию</DialogTitle>
                <DialogDescription>
                  Заполните форму и я свяжусь с вами в течение 2 часов
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (999) 999-99-99" />
                </div>
                <div>
                  <Label htmlFor="service">Услуга</Label>
                  <select className="w-full px-3 py-2 border rounded-md">
                    <option>Персональная нумерологическая карта</option>
                    <option>Совместимость партнеров</option>
                    <option>Нумерология имени</option>
                    <option>Финансовая нумерология</option>
                    <option>Детская нумерология</option>
                    <option>Кармическая нумерология</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="message">Дополнительная информация</Label>
                  <Textarea id="message" placeholder="Расскажите о ваших вопросах..." />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Отправить заявку
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-secondary text-secondary-foreground">Профессиональная нумерология</Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 animate-fade-in" 
              style={{fontFamily: "'Playfair Display', serif"}}>
            Откройте своё <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              предназначение
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Получите глубокие понимания о своей жизни через древнюю мудрость чисел. 
            Узнайте свои скрытые таланты, жизненную миссию и пути к успеху.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg animate-scale-in">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на консультацию
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Записаться на консультацию</DialogTitle>
                  <DialogDescription>
                    Заполните форму и я свяжусь с вами в течение 2 часов
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="hero-name">Имя</Label>
                    <Input id="hero-name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="hero-phone">Телефон</Label>
                    <Input id="hero-phone" placeholder="+7 (999) 999-99-99" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Отправить заявку
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              <Icon name="Play" className="mr-2" size={20} />
              Узнать больше
            </Button>
          </div>
          
          {/* Floating symbols */}
          <div className="relative">
            <div className="absolute -top-20 left-1/4 animate-float opacity-20">
              <Icon name="Star" size={40} className="text-primary" />
            </div>
            <div className="absolute -top-16 right-1/3 animate-float opacity-30" style={{animationDelay: '1s'}}>
              <Icon name="Circle" size={32} className="text-secondary" />
            </div>
            <div className="absolute -top-12 left-2/3 animate-float opacity-25" style={{animationDelay: '2s'}}>
              <Icon name="Triangle" size={36} className="text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
            Мои услуги
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Каждая консультация — это индивидуальный подход и глубокий анализ ваших чисел судьбы
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg font-semibold text-primary mb-2">
                    {service.title}
                  </CardTitle>
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                    {service.duration}
                  </Badge>
                </div>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" size={16} className="text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Записаться
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Записаться: {service.title}</DialogTitle>
                        <DialogDescription>
                          Стоимость: {service.price} • Длительность: {service.duration}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor={`name-${index}`}>Имя</Label>
                          <Input id={`name-${index}`} placeholder="Ваше имя" />
                        </div>
                        <div>
                          <Label htmlFor={`phone-${index}`}>Телефон</Label>
                          <Input id={`phone-${index}`} placeholder="+7 (999) 999-99-99" />
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          Записаться на {service.title.toLowerCase()}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gradient-to-r from-primary/5 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-primary mb-6" style={{fontFamily: "'Playfair Display', serif"}}>
                Обо мне
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Меня зовут <strong>Мария Звездочетова</strong>, и я практикующий нумеролог с 15-летним опытом. 
                Моя миссия — помочь людям раскрыть свой истинный потенциал через древнюю мудрость чисел.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                За годы практики я провела более 3000 консультаций, помогая людям найти свой жизненный путь, 
                улучшить отношения и достичь финансового благополучия.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-gray-600">лет опыта</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary">3000+</div>
                  <div className="text-gray-600">консультаций</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Записаться на консультацию
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Записаться на консультацию</DialogTitle>
                      <DialogDescription>
                        Заполните форму и я свяжусь с вами в течение 2 часов
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="about-name">Имя</Label>
                        <Input id="about-name" placeholder="Ваше имя" />
                      </div>
                      <div>
                        <Label htmlFor="about-phone">Телефон</Label>
                        <Input id="about-phone" placeholder="+7 (999) 999-99-99" />
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Отправить заявку
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button variant="outline">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Задать вопрос
                </Button>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-4">Мои достижения</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Award" className="text-secondary mr-3" size={20} />
                    <span>Сертифицированный мастер нумерологии</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="BookOpen" className="text-secondary mr-3" size={20} />
                    <span>Автор курса "Тайны чисел судьбы"</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Users" className="text-secondary mr-3" size={20} />
                    <span>Преподаватель в школе эзотерики</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Star" className="text-secondary mr-3" size={20} />
                    <span>Рейтинг удовлетворенности 98%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
            Отзывы клиентов
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Реальные истории людей, чья жизнь изменилась благодаря нумерологии
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="animate-fade-in hover:shadow-lg transition-all duration-300"
                  style={{animationDelay: `${index * 0.2}s`}}>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-500 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.service}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6" style={{fontFamily: "'Playfair Display', serif"}}>
              Готовы узнать своё предназначение?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Запишитесь на персональную консультацию и откройте новые грани своей личности
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-4">Контакты</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Icon name="Phone" className="mr-3" size={20} />
                    <span>+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" className="mr-3" size={20} />
                    <span>maria@numerolog.ru</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="MessageCircle" className="mr-3" size={20} />
                    <span>@numerolog_maria</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Clock" className="mr-3" size={20} />
                    <span>Ежедневно с 9:00 до 21:00</span>
                  </div>
                </div>
              </div>
              
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-4">Форматы работы</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Icon name="Video" className="mr-3" size={20} />
                    <span>Онлайн консультации</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="MapPin" className="mr-3" size={20} />
                    <span>Личные встречи в Москве</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="FileText" className="mr-3" size={20} />
                    <span>Письменные расшифровки</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Users" className="mr-3" size={20} />
                    <span>Семейные консультации</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="secondary" className="px-12 py-4 text-lg bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться прямо сейчас
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Записаться на консультацию</DialogTitle>
                  <DialogDescription>
                    Заполните форму и я свяжусь с вами в течение 2 часов
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name">Имя</Label>
                    <Input id="contact-name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone">Телефон</Label>
                    <Input id="contact-phone" placeholder="+7 (999) 999-99-99" />
                  </div>
                  <div>
                    <Label htmlFor="contact-service">Услуга</Label>
                    <select className="w-full px-3 py-2 border rounded-md">
                      <option>Персональная нумерологическая карта</option>
                      <option>Совместимость партнеров</option>
                      <option>Нумерология имени</option>
                      <option>Финансовая нумерология</option>
                      <option>Детская нумерология</option>
                      <option>Кармическая нумерология</option>
                    </select>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Отправить заявку
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">&copy; 2024 Мария Звездочетова. Все права защищены.</p>
          <p className="text-gray-400 text-sm">
            Нумерология • Консультации • Обучение
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Index