import { IContact } from 'types/IContact';
import { ITeamMember } from 'types/ITeamMember';

export const mockTeamMembers: ITeamMember[] = [
  {
    uuid: '4e5ae8d6-9449-459a-b807-07a8c82ee8f8',
    name: 'Дрягин Даниил',
    stackList: [{ id: 1, technology: 'HTML' }],
    vkLink: '',
    gitHubLink: '',
    desc: 'Рассказ о себе. Lorem ipsum dolor amet consectetur. Duis sed velit libero urna vivamus sem sit. Penatibus enim iaculis malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus enim ac ullamcorper.',
  },
  {
    uuid: 'bf7095e0-dc74-4814-bf6a-239b4756214d',
    name: 'Хамуева Дарья',
    stackList: [{ id: 1, technology: 'HTML' }],
    vkLink: '',
    gitHubLink: '',
    desc: 'Рассказ о себе. Lorem ipsum dolor amet consectetur. Duis sed velit libero urna vivamus sem sit. Penatibus enim iaculis malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus enim ac ullamcorper.',
  },
  {
    uuid: 'eb4e103b-d9e7-4ab9-a032-63abc3a7eaef',
    name: 'Устинов Александр',
    stackList: [{ id: 1, technology: 'HTML' }],
    vkLink: '',
    gitHubLink: '',
    desc: 'Рассказ о себе. Lorem ipsum dolor amet consectetur. Duis sed velit libero urna vivamus sem sit. Penatibus enim iaculis malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus enim ac ullamcorper.',
  },
  {
    uuid: '4366c906-ad8a-48a0-8ec2-ac6dc643a373',
    name: 'Афанасьев Артем',
    stackList: [{ id: 1, technology: 'HTML' }],
    vkLink: '',
    gitHubLink: '',
    desc: 'Рассказ о себе. Lorem ipsum dolor amet consectetur. Duis sed velit libero urna vivamus sem sit. Penatibus enim iaculis malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus enim ac ullamcorper.',
  },
  {
    uuid: '5e31d6e5-08d6-4e59-8411-c0eda4d6a3fb',
    name: 'Сергей',
    stackList: [{ id: 1, technology: 'HTML' }],
    vkLink: '',
    gitHubLink: '',
    desc: 'Рассказ о себе. Lorem ipsum dolor amet consectetur. Duis sed velit libero urna vivamus sem sit. Penatibus enim iaculis malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus enim ac ullamcorper.',
  },
];

export const contacts: IContact[] = [
  {
    id: 1,
    name: 'Афанасьев Артем',
    addresses: [],
  },
  {
    id: 2,
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
  {
    id: 3,
    name: 'Устинов Александр',
    addresses: [],
  },
  {
    id: 4,
    name: 'Хамуева Дарья',
    addresses: [],
  },
  {
    id: 5,
    name: 'Сергей Каченя',
    addresses: [],
  },
];
