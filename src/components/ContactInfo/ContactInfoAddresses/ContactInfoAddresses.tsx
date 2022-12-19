import React, { useContext, useMemo } from 'react';

import { ContactInfoAddress } from './ContactInfoAddress/ContactInfoAddress';
import styles from './ContactInfoAddresses.module.scss';

import { LanguageContext } from '../../../contexts/LanguageContext';
import { IContactInfoAddressesProps } from '../../../types/ContactInfoProps/ContactInfoAddressesProps/IContactInfoAddressesProps';

export const ContactInfoAddresses: React.FC<IContactInfoAddressesProps> = ({
  contacts,
  activeAddressId,
  setActiveAddressId,
}) => {
  const languageContext = useContext(LanguageContext);

  const mappedAddresses = useMemo(
    () =>
      contacts.map((c) => (
        <ContactInfoAddress
          key={c.id}
          name={c[languageContext.language].name}
          addresses={c[languageContext.language].addresses}
          activeAddressId={activeAddressId}
          setActiveAddressId={setActiveAddressId}
        />
      )),
    [activeAddressId, languageContext.language],
  );

  return (
    <address className={styles.wrapper}>
      <ul className={styles.addresses}>{mappedAddresses}</ul>
    </address>
  );
};
