import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import React from 'react';

import styles from './ContactInfoMap.module.scss';

import activeMark from '../../../assets/icons/geomarker-active.svg';
import defaultMark from '../../../assets/icons/geomarker-default.svg';
import { Address, Contacts } from '../ContactInfo';

interface props {
  contacts: Contacts;
  activeAddressId: number;
  setActiveAddressId: (id: number) => void;
  addresses: Address[];
}

export const ContactInfoMap: React.FC<props> = ({ contacts, activeAddressId, setActiveAddressId, addresses }) => {
  return (
    <div className={styles.map}>
      <YMaps>
        <Map
          defaultState={{
            center: [55.325187, 56.993132],
            zoom: 4,
          }}
          width={'100%'}
          height={'100%'}
        >
          {addresses.map((a) => (
            <Placemark
              key={a.id}
              instanceRef={(ref: any) => {
                ref?.events.add('click', () => {
                  setActiveAddressId(a.id);
                });
              }}
              geometry={[a.location.lat, a.location.lon]}
              options={{
                iconLayout: 'default#image',
                iconImageSize: [50, 50],
                iconImageHref: activeAddressId === a.id ? activeMark : defaultMark,
              }}
            />
          ))}
        </Map>
      </YMaps>
    </div>
  );
};
