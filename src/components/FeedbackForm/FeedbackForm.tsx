import cn from 'classnames';
import { useFormik } from 'formik';

import React from 'react';

import { MdClose } from 'react-icons/md';
import * as Yup from 'yup';

import styles from './FeedbackForm.module.scss';

interface ICloseForm {
  closeForm: () => void;
}

const FeedbackForm: React.FC<ICloseForm> = ({ closeForm }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      dataTreat: [],
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Введите ваше имя').max(30, 'Слишком длинное имя'),
      email: Yup.string().required('Введите ваш email').email('Некорректный email'),
      message: Yup.string().required('Сообщение не может быть пустым'),
      dataTreat: Yup.array().min(1, 'Даю согласие на обработку персональных данных'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const condName = (key: keyof typeof formik.touched | keyof typeof formik.errors): boolean => {
    if (formik.touched[key] !== undefined && formik.errors[key] !== undefined) {
      return false;
    }
    return true;
  };
  const isFormFull =
    Object.values(formik.values).filter((val) => val === '').length === 0 && Object.entries(formik.errors).length === 0;

  return (
    <div className={styles.wrapper}>
      <div className={styles.background}></div>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <MdClose className={styles.closeBtn} onClick={closeForm}></MdClose>
        <h2 className={styles.title}>Форма для связи с нами</h2>
        <div className={styles.field}>
          <label className={cn(styles.label, { [styles.validError]: !condName('name') })}>
            {condName('name') ? 'Как вас зовут' : formik.errors.name}
          </label>
          <input
            name='name'
            type='text'
            className={styles.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </div>
        <div className={styles.field}>
          <label className={cn(styles.label, { [styles.validError]: !condName('email') })}>
            {condName('email') ? 'Ваш email' : formik.errors.email}
          </label>
          <input
            name='email'
            type='email'
            className={styles.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        <div className={styles.field}>
          <label
            className={cn(styles.label, {
              [styles.validError]: !condName('message'),
            })}
          >
            {condName('message') ? 'Ваше сообщение' : formik.errors.message}
          </label>
          <textarea
            name='message'
            rows={5}
            className={styles.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
        </div>
        <div className={styles.data_check}>
          <input name='dataTreat' type='checkbox' className={styles.checkbox} onChange={formik.handleChange} />
          <label className={styles.data_check__label}>
            {condName('dataTreat') ? 'Даю согласие на обработку персональных данных' : formik.errors.dataTreat}
          </label>
        </div>
        <button className={styles.send_btn} type='submit' disabled={!isFormFull}>
          Отправить
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
