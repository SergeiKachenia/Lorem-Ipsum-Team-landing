import cn from 'classnames';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { useFormik } from 'formik';

import React, { useContext, useState } from 'react';

import { MdClose } from 'react-icons/md';
import uuid from 'react-uuid';
import { ICloseForm } from 'types/ICloseFormProps';
import * as Yup from 'yup';

import styles from './FeedbackForm.module.scss';

import { locales } from '../../constants/modulesLocales/FeedbackForm';
import { LanguageContext } from '../../contexts/LanguageContext';
import { app } from '../../firebase';
import { TextLocales } from '../common/TextLocales/TextLocales';

const FeedbackForm: React.FC<ICloseForm> = ({ closeForm }) => {
  const [buttonPressed, setPressed] = useState(false);
  const [resultMessage, setMessage] = useState('');

  const languageContext = useContext(LanguageContext);

  const db = getFirestore(app);

  try {
    const docRef = await addDoc(collection(db, 'replies'), {
      name: 'testAdding',
      email: 'add@test.com',
      message: 'message',
      dataTreat: ['on'],
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      dataTreat: [],
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required(locales.EnterYourName[languageContext.language])
        .max(30, locales.NameTooLong[languageContext.language]),
      email: Yup.string()
        .required(locales.EnterYourEmail[languageContext.language])
        .email(locales.IncorrectEmail[languageContext.language]),
      message: Yup.string().required(locales.MessageCantBeEmpty[languageContext.language]),
      dataTreat: Yup.array().min(1),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
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
        resetForm();
      } catch (err) {
        setMessage('Failed send your data(');
        console.log(err);
      }
      setSubmitting(false);
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
      <div className={styles.container}>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <MdClose className={styles.closeBtn} onClick={closeForm}></MdClose>
          <h2 className={styles.title}>
            <TextLocales locale={(l) => locales.ContactUsForm[l]} />
          </h2>
          <div className={styles.field}>
            <label className={cn(styles.label)}>
              <TextLocales locale={(l) => locales.WhatIsYourName[l]} />
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
          <span
            className={cn(styles.errorSpan, {
              [styles.validError]: !hasError('name'),
            })}
          >
            {hasError('name') ? '' : formik.errors.name}
          </span>
          <div className={styles.field}>
            <label className={cn(styles.label)}>
              <TextLocales locale={(l) => locales.YourEmail[l]} />
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
          <span
            className={cn(styles.errorSpan, {
              [styles.validError]: !hasError('email'),
            })}
          >
            {hasError('email') ? '' : formik.errors.email}
          </span>
          <div className={styles.field}>
            <label className={cn(styles.label)}>
              <TextLocales locale={(l) => locales.YourMessage[l]} />
            </label>
            <textarea
              name='message'
              rows={5}
              className={cn(styles.input, styles.textarea)}
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
              {hasError('dataTreat') ? (
                <TextLocales locale={(l) => locales.ApprovalProcessingPersonalData[l]} />
              ) : (
                formik.errors.dataTreat
              )}
            </label>
          </div>
          <button
            className={styles.send_btn}
            type='submit'
            disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}
          >
            <TextLocales locale={(l) => locales.Send[l]} />
          </button>
        </form>
      </div>
      <span className={cn(styles.hiddenMessage, { [styles.resultMessage]: buttonPressed })}>{resultMessage}</span>
    </div>
  );
};

export default FeedbackForm;
