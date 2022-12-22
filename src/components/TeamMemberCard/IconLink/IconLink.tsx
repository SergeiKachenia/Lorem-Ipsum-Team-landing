import React from 'react';

import { IIconLinkProps } from 'types/TeamMemberCardProps/LinkIconProps/IIconLinkProps';

import styles from './IconLink.module.scss';

/**
 * Компонент иконки со ссылкой
 */
const IconLink: React.FC<IIconLinkProps> = ({ IconEl, href }) => {
  return (
    <a className={styles.iconLink} href={href}>
      <IconEl />
    </a>
  );
};

export default IconLink;
