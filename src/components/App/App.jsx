import { React, useEffect, useState } from 'react';
import PropTypes from "prop-types";
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';
import main from './App.module.css';
import API_URL from '../../utils/api';

export function App() {
  const [ingredients, setIngredients] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);

  const resCheck = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Что-то пошло не так( Ошибка: ${res.status}`)
    }
  }

  useEffect(() => {
    const getData = () => {
      fetch(API_URL)
        .then(resCheck)
        .then(res => setIngredients(res.data))
        .catch(err => setError(err.message))
        .finally(() => setLoad(false))
    }
    getData()
  }, [])


  if (error) {
    return (
      <div>ошибка</div>
    )
  } else if (load) {
    return (
      <div>загрузка</div>
    )
  } else {
    return (
      <>
        <AppHeader />
        <main className={main.main}>
          <BurgerIngredients data={ingredients} />
          <BurgerConstructor data={ingredients} />
        </main>
      </>
    );
  }
}

export default App;
