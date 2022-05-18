import { createRef, useState, useEffect } from "react";
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Route, Redirect, useLocation, useHistory } from 'react-router-dom';
import styles from '../ForgotPassword/ForgotPassword.module.css';
import { getEmailPassword } from "../../utils/api.jsx";
/* import { postErrorMessage, userEmail, userLoad } from "../../services/reducers/userProfil"; */
import { RedirectRoute } from "../../components/RedirectRoute/RedirectRoute";
import { postEmailFromForgotPage } from "../../services/actions/userProfil"

export function ForgotPassword() {
  const dispatch = useDispatch()
  const history = useHistory();

  const [email, setEmail] = useState('');
  const location = useLocation()

  const { userLoad, postErrorMessage, userEmail } = useSelector(state => state.userProfil);


  const mailInput = createRef();
  const passwordInput = createRef();


  const handleCloseMail = (e) => {
    /*  e.preventDefault(); */
    setEmail(e.target.value)
  };


  const handleClose = (e) => {
    e.preventDefault();
    if (email) {
      dispatch(postEmailFromForgotPage(email))
    }
  }

  useEffect(() => {
    if (userEmail === 'pushToResetPage') history.push("/reset-password");
  }, [userEmail, history]);

  if (userLoad) {
    return (<Redirect to='/reset-password' />)
  }

  else {
    return (
      <>
        <div className={styles.wrapper}>
          <form action='POST' className={styles.form} onSubmit={handleClose}>
            <h2 className={styles.heading}>Восстановление пароля</h2>
            <Input value={email} name={'email'} placeholder='Укажите e-mail' size={'default'} onChange={handleCloseMail}/* value={password} */ className={styles.text}> Пароль
            </Input>
            <Button disabled={email === ''} size="large" type="primary" className={styles.button}>Восстановить</Button>
          </form>
          <p className={styles.contener}>
            <a className={styles.register}>Вспомнили пароль?<Link className={styles.link} href='#' to='/Login'>Войти</Link></a>
          </p>
          {postErrorMessage &&
            <p className={styles.error}>произошла ошибка ввода, попробуйте в другой раз</p>
          }
        </div>
      </>
    );
  }
}

export default ForgotPassword;
