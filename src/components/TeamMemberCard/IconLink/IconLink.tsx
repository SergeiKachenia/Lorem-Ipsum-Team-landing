import React from 'react';

import styles from './IconLink.module.scss';

import { IIconLinkProps } from '../../../types/TeamMemberCardProps/LinkIconProps/IIconLinkProps';

const IconLink: React.FC<IIconLinkProps> = ({ IconEl, href }) => {
  return (
    <a className={styles.iconLink} href={href}>
      <IconEl />
    </a>
  );
};

export default IconLink;
