import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../Login/Login.module.css';

export function Login() {
  const dispatch = useDispatch()




  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <h1 className={styles.heading}>Вход</h1>
      </form>
    </div>
  );
}

export default LoginPage;
