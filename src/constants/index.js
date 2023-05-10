import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from '../assets';

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

export const features = [
  {
    id: 'feature-1',
    icon: star,
    title: 'Rewards',
    content:
      'The best credit cards offer some tantalizing combinations of promotions and prizes',
  },
  {
    id: 'feature-2',
    icon: shield,
    title: '100% Secured',
    content:
      'We take proactive steps make sure your information and transactions are secure.',
  },
  {
    id: 'feature-3',
    icon: send,
    title: 'Balance Transfer',
    content:
      'A balance transfer credit card can save you a lot of money in interest charges.',
  },
];

export const feedback = [
  {
    id: 'feedback-1',
    content:
      'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
    name: 'Herman Jensen',
    title: 'Founder & Leader',
    img: people01,
  },
  {
    id: 'feedback-2',
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: 'Steve Mark',
    title: 'Founder & Leader',
    img: people02,
  },
  {
    id: 'feedback-3',
    content:
      'It is usually people in the money business, finance, and international trade that are really rich.',
    name: 'Kenn Gallagher',
    title: 'Founder & Leader',
    img: people03,
  },
];

export const stats = [
  {
    id: 'stats-1',
    title: 'Пользователей',
    value: '3800+',
  },
  {
    id: 'stats-2',
    title: 'Заказов',
    value: '230+',
  },
  {
    id: 'stats-3',
    title: 'Переводов',
    value: '$230M+',
  },
];

export const footerLinks = [
  {
    title: 'Заказчикам',
    links: [
      {
        name: 'Как сделать заказ',
        link: 'https://www.hoobank.com/content/',
      },
      {
        name: 'Способы оплаты',
        link: 'https://www.hoobank.com/how-it-works/',
      },
      {
        name: 'Возврат товаров',
        link: 'https://www.hoobank.com/create/',
      },
      {
        name: 'Безопасность',
        link: 'https://www.hoobank.com/terms-and-services/',
      },
    ],
  },
  {
    title: 'О компании',
    links: [
      {
        name: 'О Чертиле',
        link: 'https://www.hoobank.com/help-center/',
      },
      {
        name: 'Реквизиты',
        link: 'https://www.hoobank.com/partners/',
      },
      {
        name: 'Контакты',
        link: 'https://www.hoobank.com/suggestions/',
      },
    ],
  },
  {
    title: 'Зарабатывай с нами',
    links: [
      {
        name: 'Стать продавцом',
        link: 'https://www.hoobank.com/help-center/',
      },
      {
        name: 'Вакансии',
        link: 'https://www.hoobank.com/partners/',
      },
      {
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

export const clients = [
  {
    id: 'client-1',
    logo: airbnb,
  },
  {
    id: 'client-2',
    logo: binance,
  },
  {
    id: 'client-3',
    logo: coinbase,
  },
  {
    id: 'client-4',
    logo: dropbox,
  },
];
