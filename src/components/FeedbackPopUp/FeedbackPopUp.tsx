import cn from 'classnames';
import FeedbackForm from 'components/FeedbackForm/FeedbackForm';

import React, { useState } from 'react';

import styles from './FeedbackPopUp.module.scss';

const FeedbackPopUp: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const setPopUpVisible = (): void => {
    setOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={setPopUpVisible} className={cn(styles.popup_btn)}>
        Написать нам
      </button>
      {isOpen && <FeedbackForm closeForm={setPopUpVisible}></FeedbackForm>}
    </div>
  );
};

export default FeedbackPopUp;
