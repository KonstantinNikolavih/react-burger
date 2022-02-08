import React from 'react';
import AppHeader from '../components/AppHeader/AppHeader';
import BurgerIngredients from '../components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../components/BurgerConstructor/BurgerConstructor';
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
