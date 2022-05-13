/* import { Link } from "react-router-dom"; */
/* import { useSelector, useDispatch } from 'react-redux'; */
import { Link } from "react-router-dom";
import  style  from "../NotFound404/NotFound404.module.css";


export const NotFound404 = () => {
  return (
    <div className={style.contener}>
      <a className={style.item}>ошибка 404</a>
      <Link className={style.link} href='#' to='/'>перейдите пожалуйста на главную страницу</Link>
    </div>
  )
}

export default NotFound404;
