import cn from 'classnames';
import { useFormik } from 'formik';

import React, { useState } from 'react';

import { MdClose } from 'react-icons/md';
import uuid from 'react-uuid';
import { ICloseForm } from 'types/ICloseFormProps';
import * as Yup from 'yup';

import styles from './FeedbackForm.module.scss';

const FeedbackForm: React.FC<ICloseForm> = ({ closeForm }) => {
  const [buttonPressed, setPressed] = useState(false);
  const [resultMesage, setMessage] = useState('');
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
    onSubmit: async (values) => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            title: 'contact form',
            body: values,
            userId: uuid(),
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        const respJson = await response.json();
        setMessage('Your data is send to server!');
        console.log(respJson);
      } catch (err) {
        setMessage('Failed send your data(');
        console.log(err);
      }
      setPressed(true);
      setTimeout(() => {
        setPressed(false);
        setMessage('');
      }, 3000);
    },
  });
  const hasError = (fieldName: keyof typeof formik.touched | keyof typeof formik.errors): boolean =>
    !(formik.touched[fieldName] !== undefined && formik.errors[fieldName] !== undefined);

  return (
    <div className={styles.wrapper}>
      <div className={styles.background} onClick={closeForm}></div>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <MdClose className={styles.closeBtn} onClick={closeForm}></MdClose>
        <h2 className={styles.title}>Форма для связи с нами</h2>
        <div className={styles.field}>
          <label className={cn(styles.label)}>Как вас зовут</label>
          <input
            name='name'
            type='text'
            className={styles.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </div>
        <span
          className={cn(styles.errorSpan, {
            [styles.validError]: !hasError('name'),
          })}
        >
          {hasError('name') ? '' : formik.errors.name}
        </span>
        <div className={styles.field}>
          <label className={cn(styles.label)}>Ваш email</label>
          <input
            name='email'
            type='email'
            className={styles.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        <span
          className={cn(styles.errorSpan, {
            [styles.validError]: !hasError('email'),
          })}
        >
          {hasError('email') ? '' : formik.errors.email}
        </span>
        <div className={styles.field}>
          <label className={cn(styles.label)}>Ваше сообщение</label>
          <textarea
            name='message'
            rows={5}
            className={styles.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
        </div>
        <span
          className={cn(styles.errorSpan, {
            [styles.validError]: !hasError('message'),
          })}
        >
          {hasError('message') ? '' : formik.errors.message}
        </span>
        <div className={styles.data_check}>
          <input
            id='dataTreat'
            name='dataTreat'
            type='checkbox'
            className={styles.checkbox}
            onChange={formik.handleChange}
          />
          <label htmlFor='dataTreat' className={styles.data_check__label}>
            {hasError('dataTreat') ? 'Даю согласие на обработку персональных данных' : formik.errors.dataTreat}
          </label>
        </div>
        <button className={styles.send_btn} type='submit' disabled={!(formik.isValid && formik.dirty)}>
          Отправить
        </button>
      </form>
      <span className={cn(styles.hiddenMessage, { [styles.resultMesage]: buttonPressed })}>{resultMesage}</span>
    </div>
  );
};

export default FeedbackForm;
