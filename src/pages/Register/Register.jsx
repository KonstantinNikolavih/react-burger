import { createRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../Register/Register.module.css';
import { Link } from 'react-router-dom';
/* import { postRegister } from '../../../services/api'; */
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';


export function Register() {
  /* const dispatch = useDispatch() */
  /* const location = useLocation() */
  const nameInput = createRef();
  const mailInput = createRef();
  const passwordInput = createRef();

  const inputClickName = (el) => {
    el.preventDefault(el.terget.value);
  }

  const inputClickEmail = (el) => {
    el.preventDefault(el.terget.value);
  }

  const inputClickPassword = (el) => {
    el.preventDefault(el.terget.value);
  }



  return (
    <>
      <div className={styles.contener}>
        <h2 className={styles.heading}>Регистрация</h2>
        <form className={styles.form}>
          {/* <div className={styles.input}> */}
          <Input name='name' placeholder='Имя'/*  value={email} */ onChange={inputClickName} className={styles.text}>Имя
          </Input>
          <Input name='E-mail' placeholder='E-mail'/*  value={email} */ onChange={inputClickEmail} className={styles.text}>Логин
          </Input>
          <Input name='password' placeholder='Пароль' /* value={password} */ onChange={inputClickPassword} className={styles.text}>Пароль
          </Input>
          <Button /* disabled={value === '' && email === '' && password === ''} */ className={styles.button}>Зарегистрироваться</Button>
          {/*  </div> */}
        </form>
        <div className={styles.item}>
          <p className={styles.enter}>Уже зарегистрировались? <Link to={'/Login'} className={styles.link}>Войти</Link></p>
        </div>
      </div>
    </>
  );
}

export default Register;
