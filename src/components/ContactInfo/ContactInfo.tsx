import React, { useMemo, useState } from 'react';

import styles from './ContactInfo.module.scss';
import { ContactInfoAddresses } from './ContactInfoAddresses/ContactInfoAddresses';
import { MemoizedContactInfoHeader } from './ContactInfoHeader/ContactInfoHeader';
import { ContactInfoMap } from './ContactInfoMap/ContactInfoMap';

import { contacts } from '../../constants/mock';
import { IAddress } from '../../types/IContact';

export const ContactInfo: React.FC = () => {
  const addresses = useMemo(
    () =>
      contacts.reduce((acc: IAddress[], contact) => {
        acc = [...acc, ...contact.addresses];
        return acc;
      }, []),
    [contacts],
  );

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
            activeAddressId={activeAddressId}
            setActiveAddressId={setActiveAddressId}
            addresses={addresses}
          />
        </div>
      </div>
    </section>
  );
};
