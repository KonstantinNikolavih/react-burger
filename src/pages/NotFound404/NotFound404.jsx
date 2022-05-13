/* import { Link } from "react-router-dom"; */
/* import { useSelector, useDispatch } from 'react-redux'; */
import  style  from "../NotFound404/NotFound404.module.css";


export const NotFound404 = () => {
  return (
    <div className={style.contener}>
      <a className={style.item}>ошибка 404</a>
      <a className={style.Link} href='#' to={'/Login'}>перейдите пожалуйста на главную страницу</a>
    </div>
  )
}

export default NotFound404;
