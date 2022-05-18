import { createRef, useState, useEffect } from "react";
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Route, Redirect, useLocation, useHistory } from 'react-router-dom';
import styles from '../ResetPassword/ResetPassword.module.css';
import { newPasswordAction } from "../../services/actions/userProfil"

export function ResetPassword() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const { userLoad, postErrorMessage, userEmail } = useSelector(state => state.userProfil);

  const [password, setPassword] = useState('');
  const [value, setValue] = useState('');


  useEffect(() => {
    if (userEmail === 'pushToLoginPage') history.push('/login');
    else if (userEmail === '') history.push('/reset-password')
  }, [userEmail, history]);

  const inputClickEmail = (e) => {
    setPassword(e.target.value)
  };

  const inputClickPassword = (e) => {
    setValue(e.target.value)
  };

  const newPassword = (e) => {
    e.preventDefault();
    if (password && value) {
      dispatch(newPasswordAction(password, value))
    }
  }

  if (userLoad) {
    return (<Redirect />)
  }

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
        <form action="POST" className={styles.form} onSubmit={newPassword}>
          <h2 className={styles.heading}>Восстановление пароля</h2>
          <Input  value={password} name='E-mail' placeholder='Укажите e-mail' onChange={inputClickEmail}/* value={password} */ className={styles.text}> Пароль
          </Input>
          <Input value={value} name='cod' placeholder='Введите код из письма' onChange={inputClickPassword}/*  value={email} */ className={styles.text}>Логин
          </Input>
          <Button disabled={value === '' && password === ''} className={styles.button}>Сохранить</Button>
        </form>
        <p className={styles.contener}>
          <a className={styles.register}>Вспомнили пароль?<Link className={styles.link} href='#' to='/Login'>Войти</Link></a>
        </p>
      </div>
    </>
  );
}

export default ResetPassword;
