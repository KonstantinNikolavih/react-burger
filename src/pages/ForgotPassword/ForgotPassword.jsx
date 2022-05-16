import { useEffect } from 'react';
import { createRef, useState } from "react";
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Route, Redirect, useLocation, useHistory } from 'react-router-dom';
import styles from '../ForgotPassword/ForgotPassword.module.css';
import { getEmailPassword } from "../../utils/api.jsx";
import { postErrorMessage, userEmail, userLoad } from "../../services/reducers/userProfil";


export function ForgotPassword() {
  const dispatch = useDispatch()
  const history = useHistory();
  const [email, setEmail] = useState(null);



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

    return (
      <>
        <div className={styles.wrapper}>
          <form className={styles.form} onSubmit={handleClose}>
            <h2 className={styles.heading}>Восстановление пароля</h2>
            <Input name='email' placeholder='Укажите e-mail' size={'default'} onChange={el => handleCloseMail(el)}/* value={password} */ className={styles.text}> Пароль
            </Input>
            <Button onClick={(el) => handleClose(el)} className={styles.button}>Восстановить</Button>
          </form>
          <p className={styles.contener}>
            <a className={styles.register}>Вспомнили пароль?<Link className={styles.link} href='#' to='/Login'>Войти</Link></a>
          </p>
        </div>
      </>
    );
  }

export default ForgotPassword;
