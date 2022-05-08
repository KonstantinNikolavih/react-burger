import React from "react";
import headerStyle from '../AppHeader/AppHeader.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon, ListIcon, ProfileIcon, } from '@ya.praktikum/react-developer-burger-ui-components';

export function AppHeader() {
  return (
    <header className={headerStyle.header}>
      <nav className={headerStyle.linkHeader}>
        <a href='#' className={headerStyle.itemHeader}>
          <BurgerIcon />
          <p className={`text_type_main-default ${headerStyle.textHeader}`}>Конструктор</p>
        </a>
        <a href='#' className={` ${headerStyle.itemHeader} ${headerStyle.colorHeader}`}>
          <ListIcon type='secondary'></ListIcon>
          <p className={` text_type_main-default ${headerStyle.textHeader} ${headerStyle.colorHeader}`}>Лента заказов</p>
        </a>
      </nav>
      <Logo />
      <a href='#' className={` ${headerStyle.itemHeader} ${headerStyle.colorHeader}`}>
        <ProfileIcon type='secondary'></ProfileIcon>
        <p className={`text_type_main-default ${headerStyle.textHeader} ${headerStyle.colorHeader}`}>Личный кабинет</p>
      </a>
    </header>
  )
}
export default AppHeader;
