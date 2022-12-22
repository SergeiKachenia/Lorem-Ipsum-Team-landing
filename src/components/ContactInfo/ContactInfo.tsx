import React, { useMemo, useState } from 'react';

import { IAddress } from 'types/IContact';

import { contacts } from 'constants/mock';

import styles from './ContactInfo.module.scss';
import { ContactInfoAddresses } from './ContactInfoAddresses/ContactInfoAddresses';
import { MemoizedContactInfoHeader } from './ContactInfoHeader/ContactInfoHeader';
import { ContactInfoMap } from './ContactInfoMap/ContactInfoMap';

/**
 * Компонент секции контактной информации
 */
export const ContactInfo: React.FC = () => {
  const addresses = useMemo(
    () =>
      contacts.reduce((acc: IAddress[], contact) => {
        acc = [...acc, ...contact.ru.addresses];
        return acc;
      }, []),
    [contacts],
  );

  const [activeAddressId, setActiveAddressId] = useState(addresses[0].id);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <MemoizedContactInfoHeader />
        <div className={styles.content}>
          <ContactInfoAddresses
            contacts={contacts}
            activeAddressId={activeAddressId}
            setActiveAddressId={setActiveAddressId}
          />
          <ContactInfoMap
            activeAddressId={activeAddressId}
            setActiveAddressId={setActiveAddressId}
            addresses={addresses}
          />
        </div>
      </div>
    </div>
  );
};
