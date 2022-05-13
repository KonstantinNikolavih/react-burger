import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Route, Redirect, useLocation } from 'react-router-dom';
import styles from '../Login/Login.module.css';

export function Login() {
  /* const dispatch = useDispatch() */
  const location = useLocation()

  /* const { user } = useSelector(state => state.userProfil); */


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
          <h1 className={styles.heading}>Вход</h1>
        </form>
      </div>
      <div className={styles.contener}>
        <a className={styles.register} href='#' to={'/'}>Вы — новый пользователь?<Link></Link></a>
        <a className={styles.resetPassword} href='#' to={'/'}>Забыли пароль?<Link></Link></a>
      </div>
    </>
  );
}

export default Login;
