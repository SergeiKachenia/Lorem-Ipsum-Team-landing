import { IContact } from 'types/IContact';
import { ITeamMember } from 'types/ITeamMember';

export const mockTeamMembers: ITeamMember[] = [
  {
    uuid: '4e5ae8d6-9449-459a-b807-07a8c82ee8f8',
    tgLink: 'https://t.me/borchsh',
    gitHubLink: 'https://github.com/Danxay',
    ru: {
      name: 'Дрягин Даниил',
      stackList: [
        { id: 1, technology: 'React' },
        { id: 2, technology: 'TS' },
        { id: 4, technology: 'SCSS' },
        { id: 5, technology: 'Python' },
        { id: 6, technology: 'SQL' },
      ],
      desc: 'Мои основные направления - Frontend и Backend разработка для веб-приложений. Я создаю сайты различной сложности. Проявляю интерес во время рабочих процессов, рад учиться новому и предлагать идеи по улучшению проекта.',
    },
    en: {
      name: 'Dryagin Daniil',
      stackList: [
        { id: 1, technology: 'React' },
        { id: 2, technology: 'TS' },
        { id: 4, technology: 'SCSS' },
        { id: 5, technology: 'Python' },
        { id: 6, technology: 'SQL' },
      ],
      desc: 'My main areas are Frontend and Backend development for web applications. I create websites of varying complexity. I show interest during work processes, I am happy to learn new things and offer ideas for improving the project.',
    },
  },
  {
    uuid: 'eb4e103b-d9e7-4ab9-a032-63abc3a7eaef',
    tgLink: 'https://t.me/aloreoff',
    gitHubLink: 'https://github.com/AnimeLore',
    ru: {
      name: 'Устинов Александр',
      stackList: [
        { id: 1, technology: 'React' },
        { id: 2, technology: 'TS' },
        { id: 3, technology: 'PHP' },
        { id: 4, technology: 'jQuery' },
        { id: 5, technology: 'SQL' },
        { id: 6, technology: 'Vue.js' },
      ],
      desc: 'Разрабатываю различные веб-приложения, увлекаюсь UX/UI-дизайном, учусь и совершенствуюсь. В основном занимаюсь frontend составляющей, люблю писать тесты под hermione. Среднестатистический любитель jQuery.',
    },
    en: {
      name: 'Ustinov Aleksandr',
      stackList: [
        { id: 1, technology: 'React' },
        { id: 2, technology: 'TS' },
        { id: 3, technology: 'PHP' },
        { id: 4, technology: 'jQuery' },
        { id: 5, technology: 'SQL' },
        { id: 6, technology: 'Vue.js' },
      ],
      desc: 'I develop various web applications, I am fond of UX/UI design, I study and improve. I mainly deal with the frontend component, I like to write tests for hermione. Average jQuery enjoyer.',
    },
  },
  {
    uuid: 'c2f62b777219cb6f60afe4b1bfc0eb24',
    tgLink: 'https://t.me/trippl3a',
    gitHubLink: 'https://github.com/Haping61',
    ru: {
      name: 'Афанасьев Артем',
      stackList: [
        { id: 1, technology: 'TS' },
        { id: 2, technology: 'React' },
        { id: 3, technology: 'Redux' },
        { id: 4, technology: 'Python' },
        { id: 5, technology: 'SQL' },
      ],
      desc: 'Разрабатываю Frontend часть веб-приложений. Стараюсь быть вовлечённым в проект, предлагать идеи для новых фичей и совершенствования проекта. Также могу немного поперекладывать json-чики)',
    },
    en: {
      name: 'Afanasev Artem',
      stackList: [
        { id: 1, technology: 'TS' },
        { id: 2, technology: 'React' },
        { id: 3, technology: 'Redux' },
        { id: 4, technology: 'Python' },
        { id: 5, technology: 'SQL' },
      ],
      desc: 'I develop Frontend part of web applications. I try to be involved in the project, offer ideas for new features and improve the project. I can also shift json files a little)',
    },
  },
  {
    uuid: '5e31d6e5-08d6-4e59-8411-c0eda4d6a3fb',
    tgLink: 'https://t.me/belitozz',
    gitHubLink: 'https://github.com/SergeiKachenia',
    ru: {
      name: 'Сергей Каченя',
      stackList: [
        { id: 1, technology: 'TS' },
        { id: 2, technology: 'React' },
        { id: 3, technology: 'Redux' },
        { id: 4, technology: 'Node.js' },
        { id: 5, technology: 'Jest' },
      ],
      desc: 'Учился в Яндекс.Практикуме по направлению "Web developer +". На данный момент работаю в компании "Спраут" как  Frontend разработчик. Люблю веб-разработку в целом и написание интерфейсов особенно. Пытаюсь углубляться в алгоритмы и структуры данных, также улучшаю свои знания в бэкенде.',
    },
    en: {
      name: 'Sergei Kachenia',
      stackList: [
        { id: 1, technology: 'TS' },
        { id: 2, technology: 'React' },
        { id: 3, technology: 'Redux' },
        { id: 4, technology: 'Node.js' },
        { id: 5, technology: 'Jest' },
      ],
      desc: `I studied at Yandex.A workshop in the direction of "Web developer +". At the moment I work in the "Spraut" company as a Frontend developer. I love web development in general and interface development especially. I'm trying to delve into algorithms and data structures, and I'm also improving my knowledge in the backend.`,
    },
  },
];

export const contacts: IContact[] = [
  {
    id: 1,
    ru: {
      name: 'Афанасьев Артем',
      addresses: [
        {
          id: 10,
          address: 'г.Бийск, улица Михаила Кутузова, 9/3',
          location: {
            lat: 52.491805,
            lon: 85.146967,
          },
        },
      ],
    },
    en: {
      name: 'Afanasev Artem',
      addresses: [
        {
          id: 10,
          address: 'Biysk, Mikhail Kutuzov street, 9/3',
          location: {
            lat: 52.491805,
            lon: 85.146967,
          },
        },
      ],
    },
  },
  {
    id: 2,
    ru: {
      name: 'Дрягин Даниил',
      addresses: [
        {
          id: 3,
          address: 'г. Омск, ул. 70 лет Октября, 20/3',
          location: {
            lat: 54.98493,
            lon: 73.321203,
          },
        },
        {
          id: 4,
          address: 'г. Омск, проспект Мира, 11',
          location: {
            lat: 55.026267,
            lon: 73.290889,
          },
        },
      ],
    },
    en: {
      name: 'Dryagin Daniil',
      addresses: [
        {
          id: 3,
          address: 'Omsk, ulitsa 70 let Oktyabrya, 20/3',
          location: {
            lat: 54.98493,
            lon: 73.321203,
          },
        },
        {
          id: 4,
          address: 'Omsk, Mira Avenue, 11',
          location: {
            lat: 55.026267,
            lon: 73.290889,
          },
        },
      ],
    },
  },
  {
    id: 3,
    ru: {
      name: 'Устинов Александр',
      addresses: [
        {
          id: 5,
          address: 'г. Рубцовск, Тракторная улица, 2/6',
          location: {
            lat: 51.525198,
            lon: 81.210483,
          },
        },
        {
          id: 6,
          address: 'г. Рубцовск, Тракторная улица, 17',
          location: {
            lat: 51.533347,
            lon: 81.205145,
          },
        },
      ],
    },
    en: {
      name: 'Ustinov Aleksandr',
      addresses: [
        {
          id: 5,
          address: 'Rubtsovsk, Traktornaya Street, 2/6',
          location: {
            lat: 51.525198,
            lon: 81.210483,
          },
        },
        {
          id: 6,
          address: 'Rubtsovsk, Traktornaya Street, 17',
          location: {
            lat: 51.533347,
            lon: 81.205145,
          },
        },
      ],
    },
  },
  {
    id: 4,
    ru: {
      name: 'Сергей Каченя',
      addresses: [
        {
          id: 7,
          address: 'г. Санкт-Петербург, Колпино, Октябрьская улица, 63',
          location: {
            lat: 59.74001878548699,
            lon: 30.617417128311153,
          },
        },
        {
          id: 8,
          address: 'Тайланд, г. Пхукет, район Раваи, 88/53',
          location: {
            lat: 7.782123206009292,
            lon: 98.3117632381286,
          },
        },
      ],
    },
    en: {
      name: 'Sergei Kachenia',
      addresses: [
        {
          id: 7,
          address: 'Saint-Petersburg city, Kolpino, Oktyabrskaya street, 63',
          location: {
            lat: 59.74001878548699,
            lon: 30.617417128311153,
          },
        },
        {
          id: 8,
          address: 'Thailand, Phuket, Rawai, 88/53',
          location: {
            lat: 7.782123206009292,
            lon: 98.3117632381286,
          },
        },
      ],
    },
  },
];
