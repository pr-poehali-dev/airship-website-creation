import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      name: 'AN-500 Cargo',
      image: 'https://cdn.poehali.dev/projects/de084a4e-f614-4d99-81cf-2d00463fe601/files/ab0fe607-a7aa-4706-b20c-b5eee0be6e0f.jpg',
      payload: '50 тонн',
      range: '2000 км',
      speed: '120 км/ч',
      category: 'Грузовой'
    },
    {
      name: 'AN-300 Passenger',
      image: 'https://cdn.poehali.dev/projects/de084a4e-f614-4d99-81cf-2d00463fe601/files/ab0fe607-a7aa-4706-b20c-b5eee0be6e0f.jpg',
      payload: '100 пассажиров',
      range: '1500 км',
      speed: '110 км/ч',
      category: 'Пассажирский'
    },
    {
      name: 'AN-700 Heavy',
      image: 'https://cdn.poehali.dev/projects/de084a4e-f614-4d99-81cf-2d00463fe601/files/ab0fe607-a7aa-4706-b20c-b5eee0be6e0f.jpg',
      payload: '100 тонн',
      range: '2500 км',
      speed: '100 км/ч',
      category: 'Тяжелый груз'
    }
  ];

  const technologies = [
    {
      icon: 'Wind',
      title: 'Гибридная силовая установка',
      description: 'Комбинация электродвигателей и водородных топливных элементов обеспечивает нулевые выбросы и высокую эффективность'
    },
    {
      icon: 'Shield',
      title: 'Композитные материалы',
      description: 'Современные углеродные композиты снижают вес конструкции на 40% при увеличении прочности'
    },
    {
      icon: 'Zap',
      title: 'Интеллектуальная система управления',
      description: 'ИИ-навигация и автопилот обеспечивают безопасность полета в любых погодных условиях'
    },
    {
      icon: 'Gauge',
      title: 'Активная стабилизация',
      description: 'Векторные двигатели и динамическая балластная система для точного маневрирования'
    }
  ];

  const projects = [
    {
      title: 'Арктический мониторинг',
      description: 'Контракт с Роскосмосом на доставку научного оборудования',
      status: 'В работе',
      year: '2024-2025'
    },
    {
      title: 'Логистика Севморпути',
      description: 'Грузовые перевозки по Северному морскому пути',
      status: 'Запланировано',
      year: '2025'
    },
    {
      title: 'Туристические маршруты',
      description: 'Экскурсионные полеты над природными достопримечательностями',
      status: 'Пилотный проект',
      year: '2024'
    }
  ];

  const documents = [
    { name: 'Сертификат EASA Type Certificate', size: '2.4 MB', type: 'PDF' },
    { name: 'FAA Airworthiness Certificate', size: '1.8 MB', type: 'PDF' },
    { name: 'Технический паспорт AN-500', size: '5.2 MB', type: 'PDF' },
    { name: 'Руководство по эксплуатации', size: '12.1 MB', type: 'PDF' },
    { name: 'ISO 9001:2015 Certification', size: '890 KB', type: 'PDF' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Plane" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-slate-900">АЭРОНОВА</span>
            </div>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('technologies')} className="text-slate-700 hover:text-primary transition-colors">Технологии</button>
              <button onClick={() => scrollToSection('products')} className="text-slate-700 hover:text-primary transition-colors">Продукция</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-700 hover:text-primary transition-colors">Проекты</button>
              <button onClick={() => scrollToSection('documents')} className="text-slate-700 hover:text-primary transition-colors">Документация</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button>Связаться</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Инновации в аэростатике</Badge>
              <h1 className="text-6xl font-bold text-slate-900 leading-tight">
                Дирижабли нового поколения
              </h1>
              <p className="text-xl text-slate-600">
                Революционные технологии для грузовых и пассажирских перевозок. 
                Экологично, экономично, эффективно.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="gap-2">
                  <Icon name="FileText" size={20} />
                  Скачать каталог
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="Play" size={20} />
                  Смотреть видео
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                <div>
                  <div className="text-3xl font-bold text-primary">100т</div>
                  <div className="text-sm text-slate-600">Макс. грузоподъемность</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">2500км</div>
                  <div className="text-sm text-slate-600">Дальность полета</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">0%</div>
                  <div className="text-sm text-slate-600">Выбросы CO₂</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/de084a4e-f614-4d99-81cf-2d00463fe601/files/ab0fe607-a7aa-4706-b20c-b5eee0be6e0f.jpg" 
                alt="Дирижабль Аэронова" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="technologies" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-white/10 text-white hover:bg-white/20 mb-4">Инженерные решения</Badge>
            <h2 className="text-5xl font-bold mb-4">Наши технологии</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Передовые разработки делают наши дирижабли самыми эффективными в мире
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 p-6 hover:bg-slate-750 transition-all hover:scale-105">
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={tech.icon as any} className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{tech.title}</h3>
                <p className="text-slate-300">{tech.description}</p>
              </Card>
            ))}
          </div>
          <div className="mt-16">
            <img 
              src="https://cdn.poehali.dev/projects/de084a4e-f614-4d99-81cf-2d00463fe601/files/8b2960e4-5b21-4e5d-85d6-95f8e68609a8.jpg" 
              alt="Технические чертежи" 
              className="rounded-2xl w-full max-w-4xl mx-auto shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">Модельный ряд</Badge>
            <h2 className="text-5xl font-bold text-slate-900 mb-4">Наша продукция</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Три линейки дирижаблей для различных задач
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-slate-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-white text-slate-900">{product.category}</Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <span className="text-slate-600">Грузоподъемность</span>
                      <span className="font-semibold">{product.payload}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <span className="text-slate-600">Дальность</span>
                      <span className="font-semibold">{product.range}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <span className="text-slate-600">Скорость</span>
                      <span className="font-semibold">{product.speed}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6" variant="outline">
                    Подробнее
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">О компании</Badge>
              <h2 className="text-5xl font-bold text-slate-900 mb-6">Аэронова</h2>
              <p className="text-lg text-slate-600 mb-6">
                Мы создаем будущее грузовых и пассажирских перевозок. Наша команда инженеров 
                и ученых работает над революционными технологиями в области аэростатики.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Основанная в 2019 году, компания быстро стала лидером в разработке экологичных 
                воздушных судов нового типа. Мы сотрудничаем с ведущими научными центрами и 
                авиационными компаниями по всему миру.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-slate-600">Сотрудников</div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-slate-600">Патентов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/de084a4e-f614-4d99-81cf-2d00463fe601/files/d09eece3-4002-47e9-b13e-27b0a236eb53.jpg" 
                alt="Производственный ангар" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">Реализация</Badge>
            <h2 className="text-5xl font-bold text-slate-900 mb-4">Наши проекты</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Активные контракты и перспективные направления
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant={project.status === 'В работе' ? 'default' : 'secondary'}>
                    {project.status}
                  </Badge>
                  <span className="text-sm text-slate-500">{project.year}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-600">{project.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="documents" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">Сертификация</Badge>
            <h2 className="text-5xl font-bold text-slate-900 mb-4">Техническая документация</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Все сертификаты и технические паспорты наших дирижаблей
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="certs" className="bg-white border border-slate-200 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <Icon name="Award" className="text-primary" size={24} />
                    Сертификаты соответствия
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-4">
                    {documents.slice(0, 2).map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Icon name="FileText" className="text-slate-400" size={20} />
                          <div>
                            <div className="font-medium">{doc.name}</div>
                            <div className="text-sm text-slate-500">{doc.size}</div>
                          </div>
                        </div>
                        <Icon name="Download" className="text-primary" size={20} />
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tech" className="bg-white border border-slate-200 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <Icon name="FileText" className="text-primary" size={24} />
                    Технические паспорта
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-4">
                    {documents.slice(2, 4).map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Icon name="FileText" className="text-slate-400" size={20} />
                          <div>
                            <div className="font-medium">{doc.name}</div>
                            <div className="text-sm text-slate-500">{doc.size}</div>
                          </div>
                        </div>
                        <Icon name="Download" className="text-primary" size={20} />
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="quality" className="bg-white border border-slate-200 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <Icon name="ShieldCheck" className="text-primary" size={24} />
                    Система качества
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-4">
                    {documents.slice(4).map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Icon name="FileText" className="text-slate-400" size={20} />
                          <div>
                            <div className="font-medium">{doc.name}</div>
                            <div className="text-sm text-slate-500">{doc.size}</div>
                          </div>
                        </div>
                        <Icon name="Download" className="text-primary" size={20} />
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Badge className="bg-white/10 text-white hover:bg-white/20 mb-4">Свяжитесь с нами</Badge>
              <h2 className="text-5xl font-bold mb-6">Контакты</h2>
              <p className="text-xl text-slate-300 mb-8">
                Готовы обсудить ваш проект? Наша команда ответит на все вопросы.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Головной офис</div>
                    <div className="text-slate-300">Москва, Кутузовский проспект, 36, стр. 1</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <div className="text-slate-300">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-slate-300">info@aeronova.ru</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8 bg-slate-800 border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-white">Отправить сообщение</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Сообщение</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Расскажите о вашем проекте"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Plane" className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold text-white">АЭРОНОВА</span>
            </div>
            <div className="text-center md:text-left">
              <p>© 2024 Аэронова. Все права защищены.</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
