import React from "react";
import {CurrencyIcon, Tab, Counter, } from '@ya.praktikum/react-developer-burger-ui-components';
import  gatherBurger from './BurgerIngredients.module.css';

export function BurgerIngredients(props) {
  const buns = props.data.filter((ingredient) => ingredient.type === 'bun');
  const sauces = props.data.filter((ingredient) => ingredient.type === 'sauce');
  const fillings = props.data.filter((ingredient) => ingredient.type === 'main');
  const [current, setCurrent] = React.useState('buns')

return (
  <section className={gatherBurger.gatherBurger}>
    <h2 className={gatherBurger.titleGatherBurger}>Соберите бургер</h2>
    <div className={gatherBurger.gatherBurgerTab}>
      <Tab value='buns' active={current === 'buns'} onClick={setCurrent}>Булки</Tab>
      <Tab value='sauces' active={current === 'sauces'} onClick={setCurrent}>Соусы</Tab>
      <Tab value='fillings' active={current === 'fillings'} onClick={setCurrent}>Начинки</Tab>
    </div>
    <div className={`pt-10 ${gatherBurger.burgerScrol}`}>
    <h3 className={gatherBurger.textBurger}>Булки</h3>
      <div className={gatherBurger.bunsBurger}>
        <div className={gatherBurger.grid}>
            {buns.map((props, index) => (
              <IngredientTab key={props._id + "_buns"} list={props} />
            ))}
        </div>
      </div>
      <h3 className={`pt-10 ${gatherBurger.textBurger}`}>Соусы</h3>
      <div className={gatherBurger.saucesBurger}>
          <div className={gatherBurger.grid}>
            {sauces.map((props, index) => (
              <IngredientTab key={props._id + "_sauce"} list={props} />
            ))}
          </div>
      </div>
      <h3 className={`pt-10 ${gatherBurger.textBurger}`}>Начинки</h3>
      <div className={gatherBurger.fillingsBurger}>
        <div className={gatherBurger.grid}>
          {fillings.map((props, index) => (
              <IngredientTab key={props._id + "_main"} list={props} />
            ))}
        </div>
      </div>
    </div>
  </section>
  )
}

const IngredientTab = ({ list }) => {
  return (
    <div className={gatherBurger.item}>
      <div className={gatherBurger.number}>
        <Counter count={1} size="default" />
      </div>
      <img className='pl-4' src={list.image} alt={list.name} />
      <div className={gatherBurger.list}>
        <p className={gatherBurger.price}>{list.price}</p>
        <CurrencyIcon type={"primary"} />
      </div>
      <p className={gatherBurger.nameIgridient}>{list.name}</p>
     </div>
  )
}
export default BurgerIngredients;
