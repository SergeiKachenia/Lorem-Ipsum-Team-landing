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
  const contacts: Contacts = [
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
  ];

  const addresses = contacts.reduce((acc: Address[], contact) => {
    acc = [...acc, ...contact.addresses];
    return acc;
  }, []);

  const [activeAddressId, setActiveAddressId] = useState(addresses[0].id);

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
            addresses={addresses}
          />
        </div>
      </div>
    </section>
  );
};
