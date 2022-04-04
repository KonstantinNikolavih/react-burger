import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { CurrencyIcon, Tab, Counter, } from '@ya.praktikum/react-developer-burger-ui-components';
import gatherBurger from './BurgerIngredients.module.css';
import Modal from "../Modal/Modal";
import { PropTypesData } from '../../utils/PropTypes.jsx';
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from '../IngredientDetails/IngredientDetails';

export function BurgerIngredients(props) {
  const [isModal, setIsModal] = useState(null);

  const openModal = () => {
    setIsModal(true)
  }

  const closeModal = () => {
    setIsModal(false);
  };

  const buns = props.data.filter((ingredient) => ingredient.type === 'bun');
  const sauces = props.data.filter((ingredient) => ingredient.type === 'sauce');
  const fillings = props.data.filter((ingredient) => ingredient.type === 'main');
  const [current, setCurrent] = React.useState('buns')

  return (
    <section className={gatherBurger.gatherBurger}>
      <h1 className={` text_type_main-large ${gatherBurger.titleGatherBurger}`}>Соберите бургер</h1>
      <div className={`${gatherBurger.gatherBurgerTab}  text_type_main-small `}>
        <Tab value='buns' active={current === 'buns'} onClick={setCurrent}>Булки</Tab>
        <Tab value='sauces' active={current === 'sauces'} onClick={setCurrent}>Соусы</Tab>
        <Tab value='fillings' active={current === 'fillings'} onClick={setCurrent}>Начинки</Tab>
      </div>
      <div className={`pt-10 ${gatherBurger.burgerScrol}`}>
        <h2 className={`text_type_main-medium ${gatherBurger.textBurger}`}>Булки</h2>
        <div className={gatherBurger.bunsBurger}>
          <div className={gatherBurger.grid}>
            {buns.map((props) => (
              <IngredientTab key={props._id + "_buns"} list={props} />
            ))}
          </div>
        </div>
        <h2 className={`pt-10 text_type_main-medium ${gatherBurger.textBurger}`}>Соусы</h2>
        <div className={gatherBurger.saucesBurger}>
          <div className={gatherBurger.grid}>
            {sauces.map((props) => (
              <IngredientTab key={props._id + "_sauce"} list={props} />
            ))}
          </div>
        </div>
        <h2 className={`pt-10 text_type_main-medium ${gatherBurger.textBurger}`}>Начинки</h2>
        <div className={gatherBurger.fillingsBurger}>
          <div className={gatherBurger.grid}>
            {fillings.map((props) => (
              <IngredientTab key={props._id + "_fillings"} list={props} />
            ))}
          </div>
        </div>
      </div>
      {isModal && (
        <Modal onClick={closeModal}>
          <IngredientDetails {...isModal} />
        </Modal>
      )}
    </section>
  )
}

const IngredientTab = ({ list }) => {
  const [isModal, setIsModal] = useState(null);

  const openModal = item => {
    setIsModal(item)
  }

  const closeModal = () => {
    setIsModal(false);
  };
  return (
    <section>
      <div onClick={() => openModal(list)} className={gatherBurger.item}>
        <div className={gatherBurger.number}>
          <Counter count={1} size="default" />
        </div>
        {/*  <h2 className={gatherBurger.title}>{list.title}</h2> */}
        <img className='pl-4' src={list.image} alt={list.name} />
        <div className={gatherBurger.list}>
          <p className={`text_type_digits-default ${gatherBurger.price}`}>{list.price}</p>
          <CurrencyIcon type={"primary"} />
        </div>
        <p className={` text_type_main-medium ${gatherBurger.nameIgridient}`}>{list.name}</p>
      </div>
      {isModal && (
        <Modal
          title="Детали ингредиента"
          onClose={closeModal}>
          <IngredientDetails {...isModal} />
        </Modal>
      )}
    </section>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypesData).isRequired,
};

export default BurgerIngredients;
