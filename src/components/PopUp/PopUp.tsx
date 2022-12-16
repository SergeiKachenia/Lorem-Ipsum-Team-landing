import cn from 'classnames';
import FeedbackForm from 'components/FeedbackForm/FeedbackForm';

import React, { useState } from 'react';

import styles from './PopUp.module.scss';

const PopUp: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const setPopUpVisible = (): void => {
    setOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={setPopUpVisible} className={cn(styles.popup_btn)}>
        Форма обратной связи с нами
      </button>
      {isOpen && <FeedbackForm closeForm={setPopUpVisible}></FeedbackForm>}
    </div>
  );
};

export default PopUp;
