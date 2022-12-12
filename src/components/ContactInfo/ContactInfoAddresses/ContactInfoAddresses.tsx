import React from 'react';

import { ContactInfoAddress } from './ContactInfoAddress/ContactInfoAddress';
import styles from './ContactInfoAddresses.module.scss';

import { IContactInfoAddressesProps } from '../../../types/ContactInfoProps/ContactInfoAddressesProps/IContactInfoAddressesProps';

export const ContactInfoAddresses: React.FC<IContactInfoAddressesProps> = ({
  contacts,
  activeAddressId,
  setActiveAddressId,
}) => {
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
