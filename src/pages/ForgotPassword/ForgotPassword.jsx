import { createRef } from "react";
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Route, Redirect, useLocation } from 'react-router-dom';
import styles from '../ForgotPassword/ForgotPassword.module.css';

export function ForgotPassword() {
  /* const dispatch = useDispatch() */
  /* const location = useLocation() */

  /* const { user } = useSelector(state => state.userProfil); */

  const mailInput = createRef();
  const passwordInput = createRef();



  return (
    <>
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <h2 className={styles.heading}>Восстановление пароля</h2>
          <Input name='E-mail' placeholder='Укажите e-mail' /* value={password} */ className={styles.text}> Пароль
          </Input>
          <Button /* disabled={value === '' && email === '' && password === ''} */ className={styles.button}>Восстановить</Button>
        </form>
        <p className={styles.contener}>
          <a className={styles.register}>Вспомнили пароль?<Link className={styles.link} href='#' to='/Login'>Войти</Link></a>
        </p>
      </div>
    </>
  );
}

export default ForgotPassword;
