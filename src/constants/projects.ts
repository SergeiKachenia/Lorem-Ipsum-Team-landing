import { IProjectInfo } from 'types/IProject';

export const projectsInfo: IProjectInfo[] = [
  {
    id: 1,
    imagesUrls: [
      'https://cdn.dribbble.com/users/5215825/screenshots/14628486/instagram___1_2x_4x.png',
      'https://cdn.dribbble.com/users/5215825/screenshots/14628486/instagram___1_2x_4x.png',
    ],
    ru: {
      title: 'Weather App',
      author: {
        id: 1,
        avatarUrl: '/images/c2f62b777219cb6f60afe4b1bfc0eb24.png',
        name: 'Афанасьев Артем',
      },
      date: '21:32 21/11/2022',
      target: 'Академия Яндекс',
      stack: [
        { id: 1, technology: 'HTML' },
        { id: 2, technology: 'CSS' },
        { id: 3, technology: 'JS' },
      ],
      description:
        'Веб-приложение для погоды. В нем отображается информация о погоде в определенном месте (например, в городе, районе, области, стране). Веб-страница содержит список городов с отображением данных о погоде для каждого города. Также есть возможность выбрать город и просмотреть информацию о погоде за несколько дней. Для каждого города отображаются данные о температуре, влажности, скорости ветра, облачности, осадках, количестве выпадающих осадков. При выборе города отображается карта с соответствующим ему местоположением.',
      link: 'https://weatherapp.com/',
    },
    en: {
      title: 'Weather App',
      author: {
        id: 1,
        avatarUrl: '/images/c2f62b777219cb6f60afe4b1bfc0eb24.png',
        name: 'Afanasev Artem',
      },
      date: '21:32 21/11/2022',
      target: 'Yandex Academy',
      stack: [
        { id: 1, technology: 'HTML' },
        { id: 2, technology: 'CSS' },
        { id: 3, technology: 'JS' },
      ],
      description:
        'Web application for weather. It displays information about the weather in a certain place (for example, in a city, district, region, country). The web page contains a list of cities displaying weather data for each city. It is also possible to select a city and view weather information for several days. For each city, data on temperature, humidity, wind speed, clouds, precipitation, and the amount of precipitation are displayed. When you select a city, a map with its corresponding location is displayed.',
      link: 'https://weatherapp.com/',
    },
  },
  {
    id: 2,
    imagesUrls: ['/images/project2-1.png', '/images/project2-2.png'],
    ru: {
      title: 'MonoEat',
      author: {
        id: 2,
        avatarUrl: '/images/4e5ae8d6-9449-459a-b807-07a8c82ee8f8.png',
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
        avatarUrl: '/images/4e5ae8d6-9449-459a-b807-07a8c82ee8f8.png',
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
    imagesUrls: ['https://i.imgur.com/wch9nyh.png'],
    ru: {
      title: 'Веб-приложение для загрузки пользовательского контента',
      author: {
        id: 3,
        avatarUrl: '/images/eb4e103b-d9e7-4ab9-a032-63abc3a7eaef.png',
        name: 'Устинов Александр',
      },
      date: '12:10 03/08/2021',
      target: 'IronTubeGames',
      stack: [
        { id: 1, technology: 'HTML' },
        { id: 2, technology: 'CSS' },
        { id: 3, technology: 'jQuery' },
        { id: 4, technology: 'PHP' },
        { id: 5, technology: 'JavaScript' },
      ],
      description: `Проект был создан для игры Evertech Sandbox. Основное предназначение - упростить процесс загрузки пользовательского контента во внутриигровой каталог.
      Backend составляющая была написана на чистом PHP, также как и панель управления. Весь процесс загрузки контента автоматизирован, от модерации требуется лишь одобрять/отклонять заявки.
      Загружаемый контент проверяется на наличие специальных файлов, для избежания загрузки не имеющих отношения к игре файлов.`,
      link: 'https://upload.irontubegames.com',
    },
    en: {
      title: 'Web application for downloading user content',
      author: {
        id: 3,
        avatarUrl: '/images/eb4e103b-d9e7-4ab9-a032-63abc3a7eaef.png',
        name: 'Ustinov Aleksandr',
      },
      date: '12:10 03/08/2021',
      target: 'IronTubeGames',
      stack: [
        { id: 1, technology: 'HTML' },
        { id: 2, technology: 'CSS' },
        { id: 3, technology: 'jQuery' },
        { id: 4, technology: 'PHP' },
        { id: 5, technology: 'JavaScript' },
      ],
      description: `The project was created for the Evertech Sandbox game. The main purpose is to simplify the process of uploading user content to the in-game catalog.
 The backend component was written in pure PHP, as well as the control panel. The whole process of uploading content is automated, moderation is only required to approve/reject applications.
 The downloaded content is checked for the presence of special files to avoid downloading files unrelated to the game.`,
      link: 'https://upload.irontubegames.com',
    },
  },
  {
    id: 4,
    imagesUrls: ['https://assets.materialup.com/uploads/ddee5e43-4aea-4c63-abf4-b08f7233d98c/preview.png'],
    ru: {
      title: 'Веб-мессенджер',
      author: {
        id: 1,
        avatarUrl: '/images/c2f62b777219cb6f60afe4b1bfc0eb24.png',
        name: 'Афанасьев Артем',
      },
      date: '21:32 21/11/2022',
      target: 'Академия Яндекс',
      stack: [
        { id: 1, technology: 'HTML' },
        { id: 2, technology: 'CSS' },
        { id: 3, technology: 'JS' },
        { id: 4, technology: 'Tailwind' },
      ],
      description:
        'Веб-мессенджер, разработанный для того, чтобы помочь пользователям общаться с друзьями и семьей на расстоянии. Мы представляем чат-приложение, которое можно использовать на нескольких устройствах. С помощью чата вы можете отправлять сообщения и изображения в чате, а также делиться фотографиями, ссылками на веб-страницы и многое другое. Вы можете также просматривать видео-сообщения и добавлять свои собственные фотографии.',
      link: 'https://truechat.com/',
    },
    en: {
      title: 'Web Messenger',
      author: {
        id: 1,
        avatarUrl: '/images/c2f62b777219cb6f60afe4b1bfc0eb24.png',
        name: 'Afanasev Artem',
      },
      date: '21:32 21/11/2022',
      target: 'Yandex Academy',
      stack: [
        { id: 1, technology: 'HTML' },
        { id: 2, technology: 'CSS' },
        { id: 3, technology: 'JS' },
        { id: 4, technology: 'Tailwind' },
      ],
      description:
        'A web messenger designed to help users communicate with friends and family at a distance. We present a chat application that can be used on multiple devices. With the chat, you can send messages and images in the chat, as well as share photos, links to web pages and much more. You can also view video messages and add your own photos.',
      link: 'https://truechat.com/',
    },
  },
  {
    id: 5,
    imagesUrls: ['/images/project5-1.jpg'],
    ru: {
      title: 'SoftChat',
      author: {
        id: 2,
        avatarUrl: '/images/4e5ae8d6-9449-459a-b807-07a8c82ee8f8.png',
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
        avatarUrl: '/images/4e5ae8d6-9449-459a-b807-07a8c82ee8f8.png',
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
    imagesUrls: ['https://i.imgur.com/L4qvf08.png', 'https://i.imgur.com/zrKySP9.png'],
    ru: {
      title: 'Сайт команды Lorem Ipsum Team',
      author: {
        id: 3,
        avatarUrl: '/images/eb4e103b-d9e7-4ab9-a032-63abc3a7eaef.png',
        name: 'Устинов Александр',
      },
      date: '21:32 21/11/2022',
      target: 'Академия Яндекса',
      stack: [
        { id: 1, technology: 'React' },
        { id: 2, technology: 'TypeScript' },
        { id: 3, technology: 'SCSS' },
      ],
      description: `Сайт-визитка для команды Lorem Ipsum Team.
        Основной идеей был монотонный, но в тоже время интересный дизайн, без каких-либо перегруженных элементов. Для более удобной разработки цвета элементов хранились в переменных, благодаря чему удалось существенно сократить время затраченное на создание темной версии сайта. Аналогично переменным в SCSS, цвета на макете были также распределены на одноименные стили. Такой подход позволил корректировать цвета в режиме реального времени без вноса постоянных правок в код.
        Фреймворком для разработки был выбран React, из-за его распространённости и наличия опыта использования оного у членов команды. Для удобства было принято решение использовать TypeScript вместо JavaScript, это позволило избежать большинство ошибок и непредсказуемых ситуаций.
        Разработка проекта занял в районе 3-ех недель.`,
      link: 'https://example.com/',
    },
    en: {
      title: 'Landing for the Lorem Ipsum team',
      author: {
        id: 3,
        avatarUrl: '/images/eb4e103b-d9e7-4ab9-a032-63abc3a7eaef.png',
        name: 'Ustinov Aleksandr',
      },
      date: '21:32 21/11/2022',
      target: 'Yandex Academy',
      stack: [
        { id: 1, technology: 'React' },
        { id: 2, technology: 'TypeScript' },
        { id: 3, technology: 'SCSS' },
      ],
      description: `Landing for the Lorem Ipsum team.
 The main idea was a monotonous, but at the same time interesting design, without any overloaded elements. For more convenient development, the colors of the elements were stored in variables, thanks to which it was possible to significantly reduce the time spent on creating a dark version of the site. Similar to the variables in SCSS, the colors on the layout were also distributed into styles of the same name. This approach made it possible to adjust colors in real time without making permanent edits to the code.
 React was chosen as the framework for development, because of its prevalence and the experience of using it among team members. For convenience, it was decided to use TypeScript instead of JavaScript, this made it possible to avoid most errors and unpredictable situations.
 The development of the project took around 3 weeks.`,
      link: 'https://example.com/',
    },
  },
  {
    id: 7,
    imagesUrls: [
      'https://cdn.dribbble.com/userupload/2809295/file/original-8915e292e820efb7f6025db0e7241571.png?compress=1&resize=1024x768',
    ],
    ru: {
      title: 'Мебельный магазин',
      author: {
        id: 1,
        avatarUrl: '/images/c2f62b777219cb6f60afe4b1bfc0eb24.png',
        name: 'Афанасьев Артем',
      },
      date: '21:32 21/11/2022',
      target: 'WoodSide',
      stack: [
        { id: 1, technology: 'HTML' },
        { id: 2, technology: 'CSS3' },
        { id: 3, technology: 'JS' },
      ],
      description:
        'Сайт разработан для мебельного магазина WoodSide. Основной идеей было показать клиентам, что мебель из дерева может быть красивой и удобной. Дизайн в классическом стиле с нотками модерна. Использовались только натуральные материалы: дерево, металл, кожа. Каждый элемент интерьера сделан вручную. Все фотографии мебели можно увеличить и рассмотреть детали. Сайт был доступен в мобильных браузерах. Сделали адаптивную верстку с использованием CSS3 и JS. В дизайне использовались 3D-модели.',
      link: 'https://woodside.com/',
    },
    en: {
      title: 'Furniture store',
      author: {
        id: 1,
        avatarUrl: '/images/c2f62b777219cb6f60afe4b1bfc0eb24.png',
        name: 'Afanasev Artem',
      },
      date: '21:32 21/11/2022',
      target: 'WoodSide',
      stack: [
        { id: 1, technology: 'HTML' },
        { id: 2, technology: 'CSS3' },
        { id: 3, technology: 'JS' },
      ],
      description:
        'The site is designed for the WoodSide furniture store. The main idea was to show customers that wooden furniture can be beautiful and comfortable. Design in a classic style with a touch of Art Nouveau. Only natural materials were used: wood, metal, leather. Each element of the interior is made by hand. All photos of furniture can be enlarged and details can be considered. The site was available in mobile browsers. We made adaptive layout using CSS3 and JS. 3D models were used in the design.',
      link: 'https://woodside.com/',
    },
  },
  {
    id: 8,
    imagesUrls: ['/images/project8-1.png'],
    ru: {
      title: 'Сайт-визитка Danxay',
      author: {
        id: 2,
        avatarUrl: '/images/4e5ae8d6-9449-459a-b807-07a8c82ee8f8.png',
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
        avatarUrl: '/images/4e5ae8d6-9449-459a-b807-07a8c82ee8f8.png',
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
    imagesUrls: [
      'https://sun9-76.userapi.com/impg/Wt6mECyFWuBMrXBGjccyJCrSq8Ft4i_YZv0ZOA/ZdIdxW7bd8Y.jpg?size=2000x2000&quality=96&sign=58b47ad1003188186c783ca8af92efc6&type=album',
    ],
    ru: {
      title: 'Lejics',
      author: {
        id: 3,
        avatarUrl: '/images/eb4e103b-d9e7-4ab9-a032-63abc3a7eaef.png',
        name: 'Устинов Александр',
      },
      date: '20:40 20/12/2018',
      target: 'Персональный проект',
      stack: [
        { id: 1, technology: 'Node.js' },
        { id: 2, technology: 'JavaScript' },
      ],
      description: `Самописный язык программирования, создавался в качестве эксперимента. Поддерживает базовые команды, разноцветный текст, запуск через команду в консоли.`,
      link: 'https://github.com/AnimeLore/Lejics',
    },
    en: {
      title: 'Lejics',
      author: {
        id: 3,
        avatarUrl: '/images/eb4e103b-d9e7-4ab9-a032-63abc3a7eaef.png',
        name: 'Ustinov Aleksandr',
      },
      date: '20:40 20/12/2018',
      target: 'Personal project',
      stack: [
        { id: 1, technology: 'Node.js' },
        { id: 2, technology: 'JavaScript' },
      ],
      description: `A self-written programming language, created as an experiment. Supports basic commands, multi-colored text, launch via a command in the console.`,
      link: 'https://github.com/AnimeLore/Lejics',
    },
  },
];
