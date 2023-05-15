import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  send,
  shield,
  star,
  drawing,
  drawinghome,
  cPlusPlus,
  SCAD,
  Autolisp,
  BIM,
} from '../assets';

export const order = [
  {
    id: 'order-1',
    logo: drawing,
    title: 'Чертёж',
    price: '2000-20000 р.',
  },
  {
    id: 'order-2',
    logo: drawinghome,
    title: 'Проектирование здания',
    price: '>50000 р.',
  },
  {
    id: 'order-3',
    logo: cPlusPlus,
    title: 'C++ программа',
    price: '500-5000 р.',
  },
  {
    id: 'order-4',
    logo: Autolisp,
    title: 'Autolisp программа',
    price: '400-10000 р.',
  },
  {
    id: 'order-5',
    logo: SCAD,
    title: 'Проектирование в SCAD',
    price: '1500-30000 р.',
  },
  {
    id: 'order-6',
    logo: BIM,
    title: 'BIM',
    price: '2000-50000 р.',
  },
];

export const currentYear = new Date();

export const navLinks = [
  {
    id: 'home',
    title: 'Главная',
  },
  {
    id: 'features',
    title: 'Преимущества',
  },
  {
    id: 'product',
    title: 'Продукт',
  },
  {
    id: 'clients',
    title: 'Отзывы',
  },
];

export const aboutUs = [
  {
    id: 'feature-1',
    icon: star,
    title: 'Специалисты',
    content:
      'Наши специалисты больше 10 лет работают в их области, решая задачи. И очень любят своё дело!',
  },
  {
    id: 'feature-2',
    icon: shield,
    title: 'Гарантия',
    content:
      'Мы сделали шаги к тому, чтобы ваши данные и переводы были защищены и анонимны.',
  },
  {
    id: 'feature-3',
    icon: send,
    title: 'Обратная связь',
    content:
      'Прислушаемся ко всем вашим пожеланиям, готовы делать правки даже после сданной работы в течении месяца.',
  },
];

export const reviews = [
  {
    id: 'reviews-1',
    content:
      'Надо было успеть сделать чертёж, а время поджимало. За небольшую доплату выручили. Буду обращаться дальше!',
    name: 'Васильева Наталья',
    title: 'Пользователь',
    img: people01,
  },
  {
    id: 'reviews-2',
    content:
      'Наша компания давно искала способ, чтобы проектирование здания было сделано качествено, в нужный срок.',
    name: 'КИК',
    title: 'Компания',
    img: people02,
  },
  {
    id: 'reviews-3',
    content:
      'Всё что мне нужно находится здесь и на высоком уровне. Отвечают быстро и понимают задачу с лёту.',
    name: 'Голубев Владимир',
    title: 'Пользователь',
    img: people03,
  },
];

export const stats = [
  {
    id: 'stats-1',
    title: 'Пользователей',
    value: '1430+',
  },
  {
    id: 'stats-2',
    title: 'Заказов',
    value: '230+',
  },
  {
    id: 'stats-3',
    title: 'Компаний',
    value: '20',
  },
];

export const footerLinks = [
  {
    title: 'Заказчикам',
    links: [
      {
        id: 'li-11',
        name: 'Как сделать заказ',
        link: 'https://www.hoobank.com/content/',
      },
      {
        id: 'li-12',
        name: 'Способы оплаты',
        link: 'https://www.hoobank.com/how-it-works/',
      },
      {
        id: 'li-13',
        name: 'Возврат денег',
        link: 'https://www.hoobank.com/create/',
      },
      {
        id: 'li-14',
        name: 'Безопасность',
        link: 'https://www.hoobank.com/terms-and-services/',
      },
    ],
  },
  {
    title: 'О компании',
    links: [
      {
        id: 'li-21',
        name: 'О Ingenium',
        link: 'https://www.hoobank.com/help-center/',
      },
      {
        id: 'li-22',
        name: 'Реквизиты',
        link: 'https://www.hoobank.com/partners/',
      },
      {
        id: 'li-23',
        name: 'Контакты',
        link: 'https://www.hoobank.com/suggestions/',
      },
    ],
  },
  {
    title: 'Зарабатывай с нами',
    links: [
      {
        id: 'li-31',
        name: 'Стать посредником',
        link: 'https://www.hoobank.com/help-center/',
      },
      {
        id: 'li-32',
        name: 'Вакансии',
        link: 'https://www.hoobank.com/partners/',
      },
      {
        id: 'li-33',
        name: 'Почему именно мы',
        link: 'https://www.hoobank.com/suggestions/',
      },
    ],
  },
];

export const socialMedia = [
  {
    id: 'social-media-1',
    icon: instagram,
    link: 'https://www.google.com/',
  },
  {
    id: 'social-media-2',
    icon: facebook,
    link: 'https://www.google.com/',
  },
  {
    id: 'social-media-3',
    icon: twitter,
    link: 'https://www.google.com/',
  },
  {
    id: 'social-media-4',
    icon: linkedin,
    link: 'https://www.google.com/',
  },
];
