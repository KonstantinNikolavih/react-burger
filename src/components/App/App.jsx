import { React, useEffect, } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';
import main from './App.module.css';
import { API_URL } from '../../utils/api';
import { getId } from "../../services/actions/ingredients"
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch, useSelector } from 'react-redux';

// route
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoginPage } from '../../pages/Login.jsx';

export function App() {
  const dispatch = useDispatch();

  const { load, error } = useSelector(state => state.burgerIngredients)

  useEffect(() => {
    dispatch(getId())
  }, [dispatch]);

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
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>

          <Router>
            <Route path="/login" exact={true}>
              <LoginPage />
            </Route>
          </Router>
        </main>
      </>
    );
  }
}

export default App;
