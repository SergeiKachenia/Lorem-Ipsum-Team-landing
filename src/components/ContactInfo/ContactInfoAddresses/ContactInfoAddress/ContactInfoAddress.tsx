import cn from 'classnames';
import React from 'react';

import styles from './ContactInfoAddress.module.scss';

import { IContactInfoAddressProps } from '../../../../types/ContactInfoProps/ContactInfoAddressesProps/ContactInfoAddressProps/IContactInfoAddressProps';

export const ContactInfoAddress: React.FC<IContactInfoAddressProps> = ({
  name,
  addresses,
  activeAddressId,
  setActiveAddressId,
}) => {
  const setActiveAddressHandler = (id: number) => () => {
    setActiveAddressId(id);
  };

  return (
    <li className={styles.wrapper}>
      <div className={styles.name}>{name}</div>
      <div className={styles.addresses}>
        {addresses.map((a) => (
          <div
            key={a.id}
            className={cn([styles.address, { [styles.active]: activeAddressId === a.id }])}
            onClick={setActiveAddressHandler(a.id)}
          >
            {a.address}
          </div>
        ))}
      </div>
    </li>
  );
};
