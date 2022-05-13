import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Register.module.css';
import { Link } from 'react-router-dom';
import { postRegister } from '../../../services/api';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';


export const Register = () => {
  /* const dispatch = useDispatch() */
  /* const location = useLocation() */



  return (
    <>
      <div className={styles.contener}>
        <form className={styles.form}>
          <div className={styles.input}>
            <Input>

            </Input>
            <Input>

            </Input>
            <Input>

            </Input>
          </div>
          <Button className={styles.button}>

          </Button>
        </form>
        <p className={styles.text}>Уже зарегистрировались? <Link to='/login' className={stylstyleses.link}>Войти</Link></p>
      </div>


    </>
  )
}

export default Register;
