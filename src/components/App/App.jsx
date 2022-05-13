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
import { /* BrowserRouter as Router, */ Route, useLocation, Switch, useHistory } from 'react-router-dom';
import { Login } from '../../pages/Login/Login';
import { Register } from "../../pages/Register/Register";
import { NotFound404 } from "../../pages/NotFound404/NotFound404";
import { ResetPassword } from "../../pages/ResetPassword/ResetPassword";
import { ForgotPassword } from "../../pages/ForgotPassword/ForgotPassword";

export function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const { load, error } = useSelector(state => state.burgerIngredients)

  const historyAction = history.action === 'PUSH';

  const background = historyAction && location.state && location.state.background;

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
          <Switch location={background || location} >
            <Route path="/" exact={true}>
              <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                <BurgerConstructor />
              </DndProvider>
            </Route>


            {/*  <Router> */}
            <Route path="/Login" exact={true}>
              <Login />
            </Route>

            <Route path="/Register" exact={true}>
              <Register />
            </Route>

            <Route path="/ForgotPassword" exact={true}>
              <ForgotPassword />
            </Route>

            <Route path="/ResetPassword" exact={true}>
              <ResetPassword />
            </Route>

            <Route >
              <NotFound404 path="/" exact={true} />
            </Route>


            {/* ForgotPassword */}
            {/* ResetPassword */}
            {/*   </Router> */}
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
