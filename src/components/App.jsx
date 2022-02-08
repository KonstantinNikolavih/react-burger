import React from 'react';
import AppHeader from './AppHeader/AppHeader.jsx';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from './BurgerConstructor/BurgerConstructor.jsx';
import main from './App.module.css';
import data from '../utils/data.json';

export function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <main className={main.main}>
        <BurgerIngredients data={data}></BurgerIngredients>
        <BurgerConstructor data={data}></BurgerConstructor>
      </main>
    </div>
  )
}
export default App;
