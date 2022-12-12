import React from 'react';

import { ContactInfoAddress } from './ContactInfoAddress/ContactInfoAddress';
import styles from './ContactInfoAddresses.module.scss';

import { Contacts } from '../ContactInfo';

interface props {
  contacts: Contacts;
  activeAddressId: null | number;
  setActiveAddressId: (id: number) => void;
}

export const ContactInfoAddresses: React.FC<props> = ({ contacts, activeAddressId, setActiveAddressId }) => {
  return (
    <address>
      <ul className={styles.addresses}>
        {contacts.map((c) => (
          <ContactInfoAddress
            key={c.id}
            name={c.name}
            addresses={c.addresses}
            activeAddressId={activeAddressId}
            setActiveAddressId={setActiveAddressId}
          />
        ))}
      </ul>
    </address>
  );
};
