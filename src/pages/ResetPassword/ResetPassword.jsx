import { createRef, useState } from "react";
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Route, Redirect, useLocation } from 'react-router-dom';
import styles from '../ResetPassword/ResetPassword.module.css';

export function ResetPassword() {
  /* const dispatch = useDispatch() */
  /* const location = useLocation() */

  /* const { user } = useSelector(state => state.userProfil); */

  const [password, setPassword] = useState(null);
  const [Value, setValue] = useState(null);



/*   const inputClickEmail = (el) => {
    el.preventDefault(el.terget.value);
  }

  const inputClickPassword = (el) => {
    el.preventDefault(el.terget.value);
  }
 */


  return (
    <>
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <h2 className={styles.heading}>Восстановление пароля</h2>
          <Input name='E-mail' placeholder='Укажите e-mail' /* value={password} */ className={styles.text}> Пароль
          </Input>
          <Input name='cod' placeholder='Введите код из письма'/*  value={email} */ className={styles.text}>Логин
          </Input>
          <Button /* disabled={value === '' && email === '' && password === ''} */ className={styles.button}>Сохранить</Button>
        </form>
        <p className={styles.contener}>
          <a className={styles.register}>Вспомнили пароль?<Link className={styles.link} href='#' to='/Login'>Войти</Link></a>
        </p>
      </div>
    </>
  );
}

export default ResetPassword;
