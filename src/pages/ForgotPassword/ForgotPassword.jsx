import { createRef, useState } from "react";
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Route, Redirect, useLocation } from 'react-router-dom';
import styles from '../ForgotPassword/ForgotPassword.module.css';
import { getEmailPassword } from "../../utils/api.jsx";


export function ForgotPassword() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState(null);
  /* const location = useLocation() */

  /* const { user } = useSelector(state => state.userProfil); */

  const mailInput = createRef();
  const passwordInput = createRef();


  const handleCloseMail = (el) => {
    el.preventDefault();
    setEmail(el.target.value)
  }


  const handleClose = (el) => {
    el.preventDefault();
    if (email) {
      dispatch(getEmailPassword(email))
    }
  }
  console.log(getEmailPassword)
  console.log(handleClose)
  /* getResetPassword */

  return (
    <>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={handleClose}>
          <h2 className={styles.heading}>Восстановление пароля</h2>
          <Input name='E-mail' placeholder='Укажите e-mail' onChange={el => handleCloseMail(el)}/* value={password} */ className={styles.text}> Пароль
          </Input>
          <Button onClick={(el) => handleClose(el)}/* disabled={value === '' && email === '' && password === ''} */ className={styles.button}>Восстановить</Button>
        </form>
        <p className={styles.contener}>
          <a className={styles.register}>Вспомнили пароль?<Link className={styles.link} href='#' to='/Login'>Войти</Link></a>
        </p>
      </div>
    </>
  );
}

export default ForgotPassword;
