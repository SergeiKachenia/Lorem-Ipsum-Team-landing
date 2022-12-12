import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import React from 'react';

import styles from './ContactInfoMap.module.scss';

import activeMark from '../../../assets/icons/geomarker-active.svg';
import defaultMark from '../../../assets/icons/geomarker-default.svg';
import { IContactInfoMapProps } from '../../../types/ContactInfoProps/ContactInfoMapProps/IContactInfoMapProps';

export const ContactInfoMap: React.FC<IContactInfoMapProps> = ({ activeAddressId, setActiveAddressId, addresses }) => {
  return (
    <div className={styles.map}>
      <YMaps>
        <Map
          defaultState={{
            center: [55.325187, 56.993132],
            zoom: 4,
          }}
          className={styles.ymap}
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
