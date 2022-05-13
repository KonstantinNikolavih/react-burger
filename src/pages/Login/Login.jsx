import { createRef } from "react";
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Route, Redirect, useLocation } from 'react-router-dom';
import styles from '../Login/Login.module.css';

export function Login() {
  /* const dispatch = useDispatch() */
  /* const location = useLocation() */

  /* const { user } = useSelector(state => state.userProfil); */

  const mailInput = createRef();
  const passwordInput = createRef();

  const inputClickEmail = (el) => {
    el.preventDefault(el.terget.value);
  }

  const inputClickPassword = (el) => {
    el.preventDefault(el.terget.value);
  }


  /*   useEffect(
      () => {
        if (searchValue) {
          history.replace({ search: `?q=${searchValue}` });
        } else {
          history.replace({ search: '' });
        }
      },
      [searchValue, history, search]
    );  */

  /* if (user) {
    return (
      <Redirect
        to={location.state?.from || '/'}
      />
    );
  } */

  return (
    <>
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <h2 className={styles.heading}>Вход</h2>

            <Input name='E-mail' placeholder='E-mail'/*  value={email} */ onChange={inputClickEmail} className={` ${styles.text} ${styles.input} `}>Логин
            </Input>
            <Input name='password' placeholder='Пароль' /* value={password} */ onChange={inputClickPassword} className={styles.text}> Пароль
            </Input>
            <Button /* disabled={value === '' && email === '' && password === ''} */ className={styles.button}>Вход</Button>

        </form>
        <p className={styles.contener}>
          <a className={styles.register}>Вы — новый пользователь?<Link className={styles.link} href='#' to='/Register'>Зарегистрироваться</Link></a>
          <a className={styles.resetPassword}>Забыли пароль?<Link className={styles.link} href='#' to='/ForgotPassword'>Восстановить пароль</Link></a>
        </p>
      </div>
    </>
  );
}

export default Login;
