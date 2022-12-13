import { IContact } from '../types/IContact';

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
