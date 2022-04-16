import { React, useEffect, useState } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';
import main from './App.module.css';
import { API_URL } from '../../utils/api';
import { BurgerContext } from '../../utils/BurgerContext.jsx'
import { getData } from "../../utils/api.jsx";

export function App() {
  const [ingredients, setIngredients] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData()
      .then(res => setIngredients(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoad(false))
  }, [])

  console.log(`${API_URL.api}ingredients`)

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
          <BurgerContext.Provider value={{ ingredients }}>
            <BurgerIngredients />
            <BurgerConstructor />
          </BurgerContext.Provider>
        </main>
      </>
    );
  }
}

export default App;
