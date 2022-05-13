import React from "react";
import headerStyle from '../AppHeader/AppHeader.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon, ListIcon, ProfileIcon, } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, } from 'react-router-dom';

export function AppHeader() {
  return (
    <header className={headerStyle.header}>
      <nav className={headerStyle.linkHeader}>

        <Link to='/' href='#' className={headerStyle.itemHeader}>
          <BurgerIcon />
          <p className={`text_type_main-default ${headerStyle.textHeader}`}>Конструктор</p>
        </Link>
        <Link to='/NotFound404'  className={` ${headerStyle.itemHeader} ${headerStyle.colorHeader}`}>
          <ListIcon type='secondary'></ListIcon>
          <p className={` text_type_main-default ${headerStyle.textHeader} ${headerStyle.colorHeader}`}>Лента заказов</p>
        </Link>
      </nav>
      <Logo />
      <Link to='/Login' href='#' className={` ${headerStyle.itemHeader} ${headerStyle.colorHeader}`}>
        <ProfileIcon type='secondary'></ProfileIcon>
        <p className={`text_type_main-default ${headerStyle.textHeader} ${headerStyle.colorHeader}`}>Личный кабинет</p>
      </Link>
    </header>
  )
}
export default AppHeader;
