import React from "react";

import App from '../App';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import {BurgerIcon, ListIcon, ProfileIcon, } from '@ya.praktikum/react-developer-burger-ui-components';
import {hederStyle, textHeader, itemHeader, } from '../AppHeader/AppHeader.css';


function AppHeader() {
  return (
    <header className='hederStyle'>
      <div className='linkHeader'>
        <a className='itemHeader'>
          <BurgerIcon/>
          <p className='textHeader'>Конструктор</p>

        </a>
        <a className='itemHeader colorHeader'>
          <ListIcon type='secondary'></ListIcon>
          <p className='textHeader'>Лента заказов</p>
        </a>
      </div>
      <Logo />
      <a className='itemHeader colorHeader'>
        <ProfileIcon type='secondary'></ProfileIcon>
        <p className='textHeader'>Личный кабинет</p>
      </a>
    </header>
  )
}


export default AppHeader;
