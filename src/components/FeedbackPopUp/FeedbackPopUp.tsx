import cn from 'classnames';
import { TextLocales } from 'components/common/TextLocales/TextLocales';
import FeedbackForm from 'components/FeedbackPopUp/FeedbackForm/FeedbackForm';

import React, { useState } from 'react';

import { locales } from 'constants/localesModules/ContactInfo';

import styles from './FeedbackPopUp.module.scss';

/**
 * Попап для формы обратной связи
 */
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
