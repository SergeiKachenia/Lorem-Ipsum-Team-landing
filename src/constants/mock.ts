import { IContact } from 'types/IContact';
import { ITeamMember } from 'types/ITeamMember';

export const mockTeamMembers: ITeamMember[] = [
  {
    uuid: '4e5ae8d6-9449-459a-b807-07a8c82ee8f8',
    vkLink: '',
    gitHubLink: '',
    ru: {
      name: 'Дрягин Даниил',
      stackList: [{ id: 1, technology: 'HTML' }],
      desc: 'Рассказ о себе. Lorem ipsum dolor amet consectetur. Duis sed velit libero urna vivamus sem sit. Penatibus enim iaculis malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus enim ac ullamcorper.',
    },
    en: {
      name: 'Dryagin Daniil',
      stackList: [{ id: 1, technology: 'HTML' }],
      desc: 'Рассказ о себе. Lorem ipsum dolor amet consectetur. Duis sed velit libero urna vivamus sem sit. Penatibus enim iaculis malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus enim ac ullamcorper.',
    },
  },
  {
    uuid: 'bf7095e0-dc74-4814-bf6a-239b4756214d',
    vkLink: '',
    gitHubLink: '',
    ru: {
      name: 'Хамуева Дарья',
      stackList: [{ id: 1, technology: 'HTML' }],
      desc: 'Рассказ о себе. Lorem ipsum dolor amet consectetur. Duis sed velit libero urna vivamus sem sit. Penatibus enim iaculis malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus enim ac ullamcorper.',
    },
    en: {
      name: 'Khamueva Daria',
      stackList: [{ id: 1, technology: 'HTML' }],
      desc: 'Рассказ о себе. Lorem ipsum dolor amet consectetur. Duis sed velit libero urna vivamus sem sit. Penatibus enim iaculis malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus enim ac ullamcorper.',
    },
  },
  {
    uuid: 'eb4e103b-d9e7-4ab9-a032-63abc3a7eaef',
    vkLink: '',
    gitHubLink: '',
    ru: {
      name: 'Устинов Александр',
      stackList: [{ id: 1, technology: 'HTML' }],
      desc: 'Рассказ о себе. Lorem ipsum dolor amet consectetur. Duis sed velit libero urna vivamus sem sit. Penatibus enim iaculis malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus enim ac ullamcorper.',
    },
    en: {
      name: 'Ustinov Aleksandr',
      stackList: [{ id: 1, technology: 'HTML' }],
      desc: 'Рассказ о себе. Lorem ipsum dolor amet consectetur. Duis sed velit libero urna vivamus sem sit. Penatibus enim iaculis malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus enim ac ullamcorper.',
    },
  },
  {
    uuid: '4366c906-ad8a-48a0-8ec2-ac6dc643a373',
    vkLink: '',
    gitHubLink: '',
    ru: {
      name: 'Афанасьев Артем',
      stackList: [{ id: 1, technology: 'HTML' }],
      desc: 'Рассказ о себе. Lorem ipsum dolor amet consectetur. Duis sed velit libero urna vivamus sem sit. Penatibus enim iaculis malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus enim ac ullamcorper.',
    },
    en: {
      name: "Afanas'ev Artem",
      stackList: [{ id: 1, technology: 'HTML' }],
      desc: 'Рассказ о себе. Lorem ipsum dolor amet consectetur. Duis sed velit libero urna vivamus sem sit. Penatibus enim iaculis malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus enim ac ullamcorper.',
    },
  },
  {
    uuid: '5e31d6e5-08d6-4e59-8411-c0eda4d6a3fb',
    vkLink: '',
    gitHubLink: '',
    ru: {
      name: 'Сергей Каченя',
      stackList: [{ id: 1, technology: 'HTML' }],
      desc: 'Рассказ о себе. Lorem ipsum dolor amet consectetur. Duis sed velit libero urna vivamus sem sit. Penatibus enim iaculis malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus enim ac ullamcorper.',
    },
    en: {
      name: 'Sergej Kachenya',
      stackList: [{ id: 1, technology: 'HTML' }],
      desc: 'Рассказ о себе. Lorem ipsum dolor amet consectetur. Duis sed velit libero urna vivamus sem sit. Penatibus enim iaculis malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus enim ac ullamcorper.',
    },
  },
];

export const contacts: IContact[] = [
  {
    id: 1,
    ru: {
      name: 'Афанасьев Артем',
      addresses: [],
    },
    en: {
      name: 'Afanas`ev Artem',
      addresses: [],
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
      addresses: [],
    },
    en: {
      name: 'Ustinov Aleksandr',
      addresses: [],
    },
  },
  {
    id: 4,
    ru: {
      name: 'Хамуева Дарья',
      addresses: [],
    },
    en: {
      name: 'Khamueva Daria',
      addresses: [],
    },
  },
  {
    id: 5,
    ru: {
      name: 'Сергей Каченя',
      addresses: [],
    },
    en: {
      name: 'Sergej Kachenya',
      addresses: [],
    },
  },
];
