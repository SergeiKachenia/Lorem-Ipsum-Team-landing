import cn from 'classnames';
import FeedbackForm from 'components/FeedbackForm/FeedbackForm';

import React, { useState } from 'react';

import styles from './PopUp.module.scss';

const PopUp: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!isOpen)} className={cn(styles.popup_btn)}>
        Форма обратной связи с нами
      </button>
      {isOpen && <FeedbackForm closeForm={() => setOpen(false)}></FeedbackForm>}
    </div>
  );
};

export default PopUp;
