import React, { useMemo } from 'react';

import { ContactInfoAddress } from './ContactInfoAddress/ContactInfoAddress';
import styles from './ContactInfoAddresses.module.scss';

import { IContactInfoAddressesProps } from '../../../types/ContactInfoProps/ContactInfoAddressesProps/IContactInfoAddressesProps';

export const ContactInfoAddresses: React.FC<IContactInfoAddressesProps> = ({
  contacts,
  activeAddressId,
  setActiveAddressId,
}) => {
  const mappedAddresses = useMemo(
    () =>
      contacts.map((c) => (
        <ContactInfoAddress
          key={c.id}
          name={c.ru.name}
          addresses={c.ru.addresses}
          activeAddressId={activeAddressId}
          setActiveAddressId={setActiveAddressId}
        />
      )),
    [activeAddressId],
  );

  return (
    <address className={styles.wrapper}>
      <ul className={styles.addresses}>{mappedAddresses}</ul>
    </address>
  );
};
