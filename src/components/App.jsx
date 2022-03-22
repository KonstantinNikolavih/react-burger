import React from 'react';
import AppHeader from '../components/AppHeader/AppHeader';
import BurgerIngredients from '../components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../components/BurgerConstructor/BurgerConstructor';
import main from './App.module.css';
/* import data from '../utils/data.json'; */

import api from '../utils/api.jsx';

export function App() {
  const [ingredients, setIngredients] = React.useState(false);
  const [load, setLoad] = React.useState(true);
  const [error, setError] = React.useState(null);

  const resCheck = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject()
    }
  }

  React.useEffect(() => {
    const getData = () => {
      fetch(api)
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
    )
  }
}

export default App;
