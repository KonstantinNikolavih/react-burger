import { Link } from "react-router-dom";
import { NotFound404Style } from "../NotFound404/NotFound404.module.css";


export const NotFound404 = () => {
  return (
<div className={NotFound404Style.contener}>
  <a className={NotFound404Style.item}>
    ошибка 404
  </a>
  <a className={NotFound404Style.Link} href='#' to={'/'}>
    перейдите пожалусто на главную страницу
  </a>
</div>
  )
}

export default NotFound404;
