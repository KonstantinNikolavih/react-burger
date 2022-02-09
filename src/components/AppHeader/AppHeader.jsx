import React from "react";

import headerStyle from '../AppHeader/AppHeader.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon, ListIcon, ProfileIcon, } from '@ya.praktikum/react-developer-burger-ui-components';

export function AppHeader() {
  return (
    <header className={headerStyle.header}>
      <nav className={headerStyle.linkHeader}>
        <a className={headerStyle.itemHeader}>
          <BurgerIcon />
          <p className={headerStyle.textHeader}>Конструктор</p>

        </a>
        <a className={` ${headerStyle.itemHeader} ${headerStyle.colorHeader}`}>
          <ListIcon type='secondary'></ListIcon>
          <p className={headerStyle.textHeader}>Лента заказов</p>
        </a>
      </nav>
      <Logo />
      <a className={` ${headerStyle.itemHeader} ${headerStyle.colorHeader}`}>
        <ProfileIcon type='secondary'></ProfileIcon>
        <p className={headerStyle.textHeader}>Личный кабинет</p>
      </a>
    </header>
  )
}
export default AppHeader;
