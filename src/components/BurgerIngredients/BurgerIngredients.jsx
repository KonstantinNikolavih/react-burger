import React, { useState, useMemo, useCallback, useRef, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import { CurrencyIcon, Tab, Counter, } from '@ya.praktikum/react-developer-burger-ui-components';
import gatherBurger from './BurgerIngredients.module.css';
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { useSelector, useDispatch } from "react-redux";
import { ADD_INGREDIENT_DETAILS, REMOVE_INGREDIENT_DETAILS } from "../../services/actions/ingredients";
import { getId } from "../../services/actions/ingredients.jsx";

export function BurgerIngredients() {
  const dispatch = useDispatch();

  const { ingredients } = useSelector(state => state.burgerIngredients);
  const { IngredientDetails } = useSelector(state => state.ingredientDetails);

  const bunsTab = useRef();
  const saucesTab = useRef();
  const fillingsTab = useRef();
  const [current, setCurrent] = useState("buns");

  const buns = useMemo(() => ingredients.filter((ingredient) => ingredient.type === 'bun'), [ingredients]);
  const sauces = useMemo(() => ingredients.filter((ingredient) => ingredient.type === 'sauce'), [ingredients]);
  const fillings = useMemo(() => ingredients.filter((ingredient) => ingredient.type === 'main'), [ingredients]);

  const selectedIngredient = (selectIngredientId) => {
    return ingredients.find(el => el._id === selectIngredientId);
  };

  const openModal = (id) => {
    dispatch({
      type: ADD_INGREDIENT_DETAILS,
      IngredientDetails: selectedIngredient(id),
    })
  };

  const closeModal = () => {
    dispatch({
      type: REMOVE_INGREDIENT_DETAILS,
      IngredientDetails: null,
    })
  };

  const itelIngredient = ({ image, name, price, _id }) => (
    <li className={gatherBurger.ingridientsList} id={_id} onClickCapture={() => openModal(_id)} key={_id} >
      <IngredientTab image={image} name={name} price={price} id={_id} />
    </li>
  );

  const iventScroll = (el) => {
    const tabPosition = el.target.getBoundingClientRect().top
    const saucesTabPosition = { top: saucesTab.current.getBoundingClientRect().top, bottom: saucesTab.current.getBoundingClientRect().bottom }
    const bunsTabPosition = { top: bunsTab.current.getBoundingClientRect().top, bottom: bunsTab.current.getBoundingClientRect().bottom }
    const fillingsTabPosition = { top: fillingsTab.current.getBoundingClientRect().top, bottom: fillingsTab.current.getBoundingClientRect().bottom }

    if (bunsTabPosition.top <= tabPosition && bunsTabPosition.bottom > tabPosition) {
      setCurrent('buns')
    } else if (saucesTabPosition.top <= tabPosition && saucesTabPosition.bottom > tabPosition) {
      setCurrent('sauces')
    } else if (fillingsTabPosition.top <= tabPosition && fillingsTabPosition.bottom > tabPosition) {
      setCurrent('main')
    }
  }

  function burgerTab(element) {
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className={gatherBurger.gatherBurger}>
      <h1 className={` text_type_main-large ${gatherBurger.titleGatherBurger}`}>Соберите бургер</h1>
      <div className={`${gatherBurger.gatherBurgerTab}  text_type_main-small `}>
        <Tab value='buns' active={current === 'buns'} onClick={(value) => {
          setCurrent(value); burgerTab(bunsTab.current)
        }}>Булки</Tab>
        <Tab value='sauces' active={current === 'sauces'} onClick={(value) => {
          setCurrent(value); burgerTab(saucesTab.current)
        }}>Соусы</Tab>
        <Tab value='main' active={current === 'main'} onClick={(value) => {
          setCurrent(value); burgerTab(fillingsTab.current)
        }}>Начинки</Tab>
      </div>
      <div className={`pt-10 ${gatherBurger.burgerScrol}`} onScroll={(event) => { iventScroll(event) }}>
        <div ref={bunsTab}>
          <h2 className={`text_type_main-medium ${gatherBurger.textBurger}`}>Булки</h2>
          <div className={gatherBurger.bunsBurger}>
            <div className={gatherBurger.grid}>
              {buns.map(itelIngredient)}
            </div>
          </div>
        </div>
        <div ref={saucesTab}>
          <h2 className={`pt-10 text_type_main-medium ${gatherBurger.textBurger}`}>Соусы</h2>
          <div className={gatherBurger.saucesBurger}>
            <div className={gatherBurger.grid}>
              {sauces.map(itelIngredient)}
            </div>
          </div>
        </div>
        <div ref={fillingsTab}>
          <h2 className={`pt-10 text_type_main-medium ${gatherBurger.textBurger}`}>Начинки</h2>
          <div className={gatherBurger.fillingsBurger}>
            <div className={gatherBurger.grid}>
              {fillings.map(itelIngredient)}
            </div>
          </div>
        </div>
      </div>
      {IngredientDetails && (
        <Modal onClick={closeModal}>
          <IngredientDetails {...IngredientDetails} />
        </Modal>
      )}
    </section>
  )
}

const IngredientTab = ({ image, name, price, id }) => {
  const [isModal, setIsModal] = useState(null);

  const ingredientsConst = useSelector(state => state.burgerConstructor.ingredientsConst)

  const sum = useMemo(() =>
    ingredientsConst.reduce((acc, el) => el._id === id ? acc + 1 : acc, 0), [ingredientsConst]
  );
  console.log(ingredientsConst)

  const [{ opacity }, dragRef] = useDrag({
    type: 'ingredient',
    item: { id },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.2 : 1,
    })
  });

  const openModal = item => {
    setIsModal(item)
  }

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <section>
      <div ref={dragRef} onClick={() => openModal()} className={gatherBurger.item} style={{ opacity }}>
        <div className={gatherBurger.number}>
          {sum > 0 && <Counter count={sum} size="default" />}
        </div>
        <img className='pl-4' src={image} alt={name} />
        <div className={gatherBurger.list}>
          <p className={`text_type_digits-default ${gatherBurger.price}`}>{price}</p>
          <CurrencyIcon type={"primary"} />
        </div>
        <p className={` text_type_main-medium ${gatherBurger.nameIgridient}`}>{name}</p>
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

export default BurgerIngredients;
