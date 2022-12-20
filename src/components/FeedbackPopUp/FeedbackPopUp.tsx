import cn from 'classnames';
import FeedbackForm from 'components/FeedbackForm/FeedbackForm';

import React, { useState } from 'react';

import styles from './FeedbackPopUp.module.scss';

import { locales } from '../../constants/modulesLocales/ContactInfo';
import { TextLocales } from '../common/TextLocales/TextLocales';

const FeedbackPopUp: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const setPopUpVisible = (): void => {
    setOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={setPopUpVisible} className={cn(styles.popup_btn)}>
        <TextLocales locale={(l) => locales.WriteToUs[l]} />
      </button>
      {isOpen && <FeedbackForm closeForm={setPopUpVisible}></FeedbackForm>}
    </div>
  );
};

export default FeedbackPopUp;
