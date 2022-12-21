import { IProjectInfo } from 'types/IProject';

export const projectsInfo: IProjectInfo[] = [
  {
    id: 1,
    imagesUrls: [
      'https://timeweb.com/media/default/0001/12/74c0bc01b8a8dab8b2b73b649f9a1b9259282e4e.png',
      '/images/defaultProjectImage.png',
    ],
    ru: {
      title: 'Название проекта #1',
      author: {
        id: 1,
        avatarUrl: null,
        name: 'Афанасьев Артем',
      },
      date: '21:32 21/11/2022',
      target: 'Академия Яндекс',
      stack: [
        { id: 1, technology: 'HTML' },
        { id: 2, technology: 'CSS' },
      ],
      description:
        'Краткое описание проекта. Lorem ipsum dolor sit amet consectetur. Senectus sed velit libero urna sem vivamus senectus penatibus turpis. Ut enim neque malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus ullamcorper vivamus. Amet neque aenean gravida maecenas...',
      link: 'https://example.com/',
    },
    en: {
      title: 'Project Name #1',
      author: {
        id: 1,
        avatarUrl: null,
        name: 'Afanas`ev Artem',
      },
      date: '21:32 21/11/2022',
      target: 'Yandex Academy',
      stack: [
        { id: 1, technology: 'HTML' },
        { id: 2, technology: 'CSS' },
      ],
      description:
        'Краткое описание проекта. Lorem ipsum dolor sit amet consectetur. Senectus sed velit libero urna sem vivamus senectus penatibus turpis. Ut enim neque malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus ullamcorper vivamus. Amet neque aenean gravida maecenas...',
      link: 'https://example.com/',
    },
  },
  {
    id: 2,
    imagesUrls: ['/images/project2-1.png', '/images/project2-2.png'],
    ru: {
      title: 'MonoEat',
      author: {
        id: 2,
        avatarUrl: null,
        name: 'Дрягин Даниил',
      },
      date: '21:32 21/05/2022',
      target: 'Ресторан MonoEat',
      stack: [
        { id: 1, technology: 'React' },
        { id: 2, technology: 'JS' },
        { id: 3, technology: 'CSS' },
        { id: 4, technology: 'PHP' },
      ],
      description:
        'Интернет-сервис для ресторана Monoeat. В разработке сайты были использованы технологии React, Redux и PHP для написание бекенда. Функционал сайта представляет из себя магазин, в котором можно заказать блюда из ресторана. На сайте присутствует панель администратора, котором видна вся статистика сервиса и доступно редактирование контента на сайте.',
      link: 'https://monoeat.ru/',
    },
    en: {
      title: 'MonoEat',
      author: {
        id: 2,
        avatarUrl: null,
        name: 'Dryagin Daniil',
      },
      date: '21:32 21/05/2022',
      target: 'MonoEat Restaurant',
      stack: [
        { id: 1, technology: 'React' },
        { id: 2, technology: 'JS' },
        { id: 3, technology: 'CSS' },
        { id: 4, technology: 'PHP' },
      ],
      description:
        'Internet service for the MonoEat restaurant. In the development of the sites, React, Redux and PHP technologies were used to write the backend. The functionality of the site is a store where you can order dishes from a restaurant. There is an admin panel on the site, which shows all the statistics of the service and editing of content on the site is available.',
      link: 'https://monoeat.ru/',
    },
  },
  {
    id: 3,
    imagesUrls: null,
    ru: {
      title: 'Название проекта #3',
      author: {
        id: 3,
        avatarUrl: null,
        name: 'Устинов Александр',
      },
      date: '21:32 21/11/2022',
      target: 'Академия Яндекс',
      stack: [
        { id: 1, technology: 'HTML' },
        { id: 2, technology: 'CSS' },
      ],
      description:
        'Краткое описание проекта. Lorem ipsum dolor sit amet consectetur. Senectus sed velit libero urna sem vivamus senectus penatibus turpis. Ut enim neque malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus ullamcorper vivamus. Amet neque aenean gravida maecenas...',
      link: 'https://example.com/',
    },
    en: {
      title: 'Project Name #3',
      author: {
        id: 3,
        avatarUrl: null,
        name: 'Ustinov Aleksandr',
      },
      date: '21:32 21/11/2022',
      target: 'Yandex Academy',
      stack: [
        { id: 1, technology: 'HTML' },
        { id: 2, technology: 'CSS' },
      ],
      description:
        'Краткое описание проекта. Lorem ipsum dolor sit amet consectetur. Senectus sed velit libero urna sem vivamus senectus penatibus turpis. Ut enim neque malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus ullamcorper vivamus. Amet neque aenean gravida maecenas...',
      link: 'https://example.com/',
    },
  },
  {
    id: 4,
    imagesUrls: null,
    ru: {
      title: 'Название проекта #4',
      author: {
        id: 1,
        avatarUrl: null,
        name: 'Афанасьев Артем',
      },
      date: '21:32 21/11/2022',
      target: 'Академия Яндекс',
      stack: [
        { id: 1, technology: 'HTML' },
        { id: 2, technology: 'CSS' },
      ],
      description:
        'Краткое описание проекта. Lorem ipsum dolor sit amet consectetur. Senectus sed velit libero urna sem vivamus senectus penatibus turpis. Ut enim neque malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus ullamcorper vivamus. Amet neque aenean gravida maecenas...',
      link: 'https://example.com/',
    },
    en: {
      title: 'Project Name #4',
      author: {
        id: 1,
        avatarUrl: null,
        name: 'Afanas`ev Artem',
      },
      date: '21:32 21/11/2022',
      target: 'Yandex Academy',
      stack: [
        { id: 1, technology: 'HTML' },
        { id: 2, technology: 'CSS' },
      ],
      description:
        'Краткое описание проекта. Lorem ipsum dolor sit amet consectetur. Senectus sed velit libero urna sem vivamus senectus penatibus turpis. Ut enim neque malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus ullamcorper vivamus. Amet neque aenean gravida maecenas...',
      link: 'https://example.com/',
    },
  },
  {
    id: 5,
    imagesUrls: ['/images/project5-1.jpg'],
    ru: {
      title: 'SoftChat',
      author: {
        id: 2,
        avatarUrl: null,
        name: 'Дрягин Даниил',
      },
      date: '21:32 11/10/2022',
      target: 'SoftChat',
      stack: [
        { id: 1, technology: 'Node.JS' },
        { id: 2, technology: 'React' },
        { id: 3, technology: 'CSS' },
      ],
      description:
        'В современном мире очень важно развивать свои Soft Skills, мягкие навыки помогают эффективно и самостоятельно действовать в разных рабочих ситуациях и решать проблемы в команде. Наше веб-приложение SoftChat призвано решить проблему развития Soft Skills у человека. SoftChat будет подбирать людей с одинаковыми интересами и настраивать их на беседу между собой с помощью чат-бота.',
      link: 'https://softchat.ru/',
    },
    en: {
      title: 'SoftChat',
      author: {
        id: 2,
        avatarUrl: null,
        name: 'Dryagin Daniil',
      },
      date: '21:32 11/10/2022',
      target: 'SoftChat',
      stack: [
        { id: 1, technology: 'Node.JS' },
        { id: 2, technology: 'React' },
        { id: 3, technology: 'CSS' },
      ],
      description:
        'In the modern world, it is very important to develop your Soft Skills, soft skills help you to act effectively and independently in different work situations and solve problems in a team. Our Softcat web application is designed to solve the problem of Soft Skills development in humans. SoftChat will select people with the same interests and set them up to talk to each other using a chatbot.',
      link: 'https://softchat.ru/',
    },
  },
  {
    id: 6,
    imagesUrls: null,
    ru: {
      title: 'Название проекта #6',
      author: {
        id: 3,
        avatarUrl: null,
        name: 'Устинов Александр',
      },
      date: '21:32 21/11/2022',
      target: 'Академия Яндекс',
      stack: [
        { id: 1, technology: 'HTML' },
        { id: 2, technology: 'CSS' },
      ],
      description:
        'Краткое описание проекта. Lorem ipsum dolor sit amet consectetur. Senectus sed velit libero urna sem vivamus senectus penatibus turpis. Ut enim neque malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus ullamcorper vivamus. Amet neque aenean gravida maecenas...',
      link: 'https://example.com/',
    },
    en: {
      title: 'Project Name #6',
      author: {
        id: 3,
        avatarUrl: null,
        name: 'Ustinov Aleksandr',
      },
      date: '21:32 21/11/2022',
      target: 'Yandex Academy',
      stack: [
        { id: 1, technology: 'HTML' },
        { id: 2, technology: 'CSS' },
      ],
      description:
        'Краткое описание проекта. Lorem ipsum dolor sit amet consectetur. Senectus sed velit libero urna sem vivamus senectus penatibus turpis. Ut enim neque malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus ullamcorper vivamus. Amet neque aenean gravida maecenas...',
      link: 'https://example.com/',
    },
  },
  {
    id: 7,
    imagesUrls: null,
    ru: {
      title: 'Название проекта #7',
      author: {
        id: 1,
        avatarUrl: null,
        name: 'Афанасьев Артем',
      },
      date: '21:32 21/11/2022',
      target: 'Академия Яндекс',
      stack: [
        { id: 1, technology: 'HTML' },
        { id: 2, technology: 'CSS' },
      ],
      description:
        'Краткое описание проекта. Lorem ipsum dolor sit amet consectetur. Senectus sed velit libero urna sem vivamus senectus penatibus turpis. Ut enim neque malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus ullamcorper vivamus. Amet neque aenean gravida maecenas...',
      link: 'https://example.com/',
    },
    en: {
      title: 'Project Name #7',
      author: {
        id: 1,
        avatarUrl: null,
        name: 'Afanas`ev Artem',
      },
      date: '21:32 21/11/2022',
      target: 'Yandex Academy',
      stack: [
        { id: 1, technology: 'HTML' },
        { id: 2, technology: 'CSS' },
      ],
      description:
        'Краткое описание проекта. Lorem ipsum dolor sit amet consectetur. Senectus sed velit libero urna sem vivamus senectus penatibus turpis. Ut enim neque malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus ullamcorper vivamus. Amet neque aenean gravida maecenas...',
      link: 'https://example.com/',
    },
  },
  {
    id: 8,
    imagesUrls: ['/images/project8-1.png'],
    ru: {
      title: 'Сайт-визитка Danxay',
      author: {
        id: 2,
        avatarUrl: null,
        name: 'Дрягин Даниил',
      },
      date: '21:32 01/09/2022',
      target: 'Danxay',
      stack: [
        { id: 1, technology: 'HTML' },
        { id: 2, technology: 'CSS' },
        { id: 3, technology: 'Gulp' },
        { id: 4, technology: 'JS' },
        { id: 5, technology: 'Swiper.js' },
      ],
      description:
        'Сайт-визитка – это небольшой сайт, который содержит информацию о компании, ее услугах, товарах, прайс-лист, каталог продукции, а также контактные данные и другую информацию. Сайт визитка является лучшим способом заявить о своей компании, привлечь новых клиентов и партнеров. Но при этом он не требует значительных финансовых затрат на его создание и продвижение. Как правило, сайт визитка создается в течение одного дня. Для этого необходимо знать точный объем информации, которую вы хотите разместить на сайте.',
      link: 'https://danxay.github.io/',
    },
    en: {
      title: 'Danxay business card website',
      author: {
        id: 2,
        avatarUrl: null,
        name: 'Dryagin Daniil',
      },
      date: '21:32 01/09/2022',
      target: 'Danxay',
      stack: [
        { id: 1, technology: 'HTML' },
        { id: 2, technology: 'CSS' },
        { id: 3, technology: 'Gulp' },
        { id: 4, technology: 'JS' },
        { id: 5, technology: 'Swiper.js' },
      ],
      description:
        'A business card website is a small website that contains information about the company, its services, products, price list, product catalog, as well as contact details and other information. A business card website is the best way to announce your company, attract new customers and partners. But at the same time, it does not require significant financial costs for its creation and promotion. As a rule, a business card website is created within one day. To do this, you need to know the exact amount of information that you want to post on the site.',
      link: 'https://danxay.github.io/',
    },
  },
  {
    id: 9,
    imagesUrls: null,
    ru: {
      title: 'Название проекта #9',
      author: {
        id: 3,
        avatarUrl: null,
        name: 'Устинов Александр',
      },
      date: '21:32 21/11/2022',
      target: 'Академия Яндекс',
      stack: [
        { id: 1, technology: 'HTML' },
        { id: 2, technology: 'CSS' },
      ],
      description:
        'Краткое описание проекта. Lorem ipsum dolor sit amet consectetur. Senectus sed velit libero urna sem vivamus senectus penatibus turpis. Ut enim neque malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus ullamcorper vivamus. Amet neque aenean gravida maecenas...',
      link: 'https://example.com/',
    },
    en: {
      title: 'Project Name #9',
      author: {
        id: 3,
        avatarUrl: null,
        name: 'Ustinov Aleksandr',
      },
      date: '21:32 21/11/2022',
      target: 'Yandex Academy',
      stack: [
        { id: 1, technology: 'HTML' },
        { id: 2, technology: 'CSS' },
      ],
      description:
        'Краткое описание проекта. Lorem ipsum dolor sit amet consectetur. Senectus sed velit libero urna sem vivamus senectus penatibus turpis. Ut enim neque malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus ullamcorper vivamus. Amet neque aenean gravida maecenas...',
      link: 'https://example.com/',
    },
  },
];
