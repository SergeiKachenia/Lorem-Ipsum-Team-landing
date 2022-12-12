import cn from 'classnames';
import React from 'react';

import styles from './ContactInfoAddress.module.scss';

import { Address } from '../../ContactInfo';

interface props {
  name: string;
  addresses: Address[];
  activeAddressId: number;
  setActiveAddressId: (id: number) => void;
}

export const ContactInfoAddress: React.FC<props> = ({ name, addresses, activeAddressId, setActiveAddressId }) => {
  return (
    <li>
      <div className={styles.name}>{name}</div>
      <div className={styles.addresses}>
        {addresses.map((a) => (
          <div
            key={a.id}
            className={cn([styles.address, { [styles.active]: activeAddressId === a.id }])}
            onClick={() => {
              setActiveAddressId(a.id);
            }}
          >
            {a.address}
          </div>
        ))}
      </div>
    </li>
  );
};
