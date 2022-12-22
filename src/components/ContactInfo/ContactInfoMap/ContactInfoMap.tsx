import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import './ReactYandexMaps.scss';

import activeMark from 'assets/icons/geomarker-active.svg';
import defaultMark from 'assets/icons/geomarker-default.svg';
import { LanguageContext } from 'contexts/LanguageContext';
import React, { useContext, useMemo } from 'react';
import { IContactInfoMapProps } from 'types/ContactInfoProps/ContactInfoMapProps/IContactInfoMapProps';

import styles from './ContactInfoMap.module.scss';

/**
 * Компонент интерактивной карты
 */
export const ContactInfoMap: React.FC<IContactInfoMapProps> = ({ activeAddressId, setActiveAddressId, addresses }) => {
  const languageContext = useContext(LanguageContext);

  const placemarkEventsHandler =
    (id: number) =>
    (ref: any): void => {
      ref?.events.add('click', () => {
        setActiveAddressId(id);
      });
    };

  const mappedPlacemarks = useMemo(
    () =>
      addresses.map((a) => (
        <Placemark
          key={a.id}
          instanceRef={placemarkEventsHandler(a.id)}
          geometry={[a.location.lat, a.location.lon]}
          options={{
            iconLayout: 'default#image',
            iconImageSize: [50, 50],
            iconImageHref: activeAddressId === a.id ? activeMark : defaultMark,
          }}
        />
      )),
    [activeAddressId],
  );

  return (
    <div className={styles.map}>
      <YMaps key={languageContext.language} query={{ lang: `${languageContext.language}_RU` }}>
        <Map
          options={{
            copyrightLogoVisible: false,
            copyrightProvidersVisible: false,
            copyrightUaVisible: false,
          }}
          defaultState={{
            center: [55.325187, 56.993132],
            zoom: 4,
          }}
          className={styles.ymap}
        >
          {mappedPlacemarks}
        </Map>
      </YMaps>
      <span className={styles.topAngles}></span>
      <span className={styles.bottomAngles}></span>
    </div>
  );
};
