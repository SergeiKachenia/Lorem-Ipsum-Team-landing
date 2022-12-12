import React, { useState } from 'react';

import styles from './ContactInfo.module.scss';
import { ContactInfoAddresses } from './ContactInfoAddresses/ContactInfoAddresses';
import { MemoizedContactInfoHeader } from './ContactInfoHeader/ContactInfoHeader';
import { ContactInfoMap } from './ContactInfoMap/ContactInfoMap';

interface Location {
  lat: number;
  lon: number;
}
export interface Address {
  id: number;
  address: string;
  location: Location;
}
interface Contact {
  id: number;
  name: string;
  addresses: Address[];
}
export type Contacts = Contact[];

export const ContactInfo: React.FC = () => {
  const [activeAddressId, setActiveAddressId] = useState(null as null | number);

  const contacts: Contacts = [
    // {
    //   id: 1,
    //   name: 'Афанасьев Артем',
    //   addresses: [
    //     {
    //       id: 1,
    //       address: 'г. Москва, Ленинский пр-т, 10',
    //     },
    //     {
    //       id: 2,
    //       address: 'г. Москва, Ленинский пр-т, 10',
    //     },
    //   ],
    // },
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
    // {
    //   id: 3,
    //   name: 'Устинов Александр',
    //   addresses: [
    //     {
    //       id: 5,
    //       address: 'г. Москва, Ленинский пр-т, 10',
    //     },
    //     {
    //       id: 6,
    //       address: 'г. Москва, Ленинский пр-т, 10',
    //     },
    //   ],
    // },
    // {
    //   id: 4,
    //   name: 'Хамуева Дарья',
    //   addresses: [
    //     {
    //       id: 7,
    //       address: 'г. Москва, Ленинский пр-т, 10',
    //     },
    //     {
    //       id: 8,
    //       address: 'г. Москва, Ленинский пр-т, 10',
    //     },
    //   ],
    // },
  ];

  return (
    <section>
      <div className={styles.container}>
        <MemoizedContactInfoHeader />
        <div className={styles.content}>
          <ContactInfoAddresses
            contacts={contacts}
            activeAddressId={activeAddressId}
            setActiveAddressId={setActiveAddressId}
          />
          <ContactInfoMap
            contacts={contacts}
            activeAddressId={activeAddressId}
            setActiveAddressId={setActiveAddressId}
          />
        </div>
      </div>
    </section>
  );
};
