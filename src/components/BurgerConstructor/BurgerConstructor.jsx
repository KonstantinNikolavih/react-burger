import { React, useRef, useState, useContext, useMemo, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import burgerComposition from "../BurgerConstructor/BurgerConstructor.module.css";
import { DragIcon, ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { HANDLE_CLOSE_ORDER_MODAL, ADD_INGREDIENT_INSIDE_CONSTRUCTOR, TOGGLE_BUN_INSIDE_CONSTRUCTOR, } from '../../services/actions/ingredients';
import { v4 as uuidv4 } from 'uuid';
import { BurgerConstructorIngredient } from '../BurgerConstructorIngredient/BurgerConstructorIngredient.jsx';
import { useSelector, useDispatch } from "react-redux";
import { useDrop, useDrag } from "react-dnd";
import { getIngredients } from "../../services/actions/ingredients.jsx";

const BurgerConstructor = () => {
  const dispatch = useDispatch();

  const error = useSelector(state => state.order.error);
  const listIngredients = useSelector(state => state.burgerIngredients.ingredients);
  const orderNumber = useSelector(state => state.order.orderNumber);
  const ingredientsConst = useSelector(state => state.burgerConstructor.ingredientsConst);

  const addItem = (item) => {
    const drop = listIngredients.find(list => list._id === item.id)

    if (bun && drop.type === 'bun') {
      dispatch({
        type: TOGGLE_BUN_INSIDE_CONSTRUCTOR,
        ingredient: drop
      })
    }
    else {
      dispatch({
        type: ADD_INGREDIENT_INSIDE_CONSTRUCTOR,
        ingredient: {
          ...drop,
          uid: uuidv4()
        }
      })
    }
  };

  const array = useMemo(() => ingredientsConst.filter(list => list.type !== 'bun'), [ingredientsConst]);
  const bun = useMemo(() => ingredientsConst.find(list => list.type === 'bun'), [ingredientsConst]);
  const sum = useMemo(() => (bun ? bun.price : 0) * 2 + array.reduce((acc, elem) => acc + elem.price, 0), [bun, array]);

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item) {
      addItem(item);
    },
  });

  const fillingBurger = ({ image, name, price, _id, uid }) => {
    return (
      <li key={uid} className={burgerComposition.item}>
        <BurgerConstructorIngredient
          name={name}
          image={image}
          price={price}
          id={_id}
          uid={uid}
        />
      </li>
    );
  };

  const bunIngredient = ({ image, name, price, uid }, type) => {
    return (
      <li key={uid} className={burgerComposition.list}>
        <ConstructorElement
          type={type}
          isLocked={true}
          text={name}
          price={price}
          thumbnail={image}
        />
      </li>
    )
  };

  const openModal = () => {
    const totalIds = ingredientsConst.map((el) => el._id);
    if (totalIds.length) {
      dispatch(getIngredients(totalIds));
    }
  };

  const closeModal = () => {
    dispatch({
      type: HANDLE_CLOSE_ORDER_MODAL
    })
  };

  return (
    <>
      <div ref={dropTarget} >
        <div className={burgerComposition.burgerComposition}>
          <div className={burgerComposition.bunTop}>
            {bun && bunIngredient(bun, 'top')}
          </div>
          <ul className={burgerComposition.container}>
            <div className={`pt-10 ${burgerComposition.burgerScrol}`}>
              {array.map(fillingBurger)}
            </div>
          </ul>
          <div className={burgerComposition.bunBottom}>
            {bun && (bunIngredient(bun, 'bottom')
            )}
          </div>
          <div className={`pt-10 pr-10 pl-10 ${burgerComposition.button}`}>
            <a className={burgerComposition.priceBurger}>{sum}</a>
            <div className={burgerComposition.ikonBurger}>
              <CurrencyIcon type="primary" />
            </div>
            <Button onClick={openModal} type="primary" size="medium">
              Оформить заказ
            </Button>
          </div>
        </div>
      </div>
      {((orderNumber || error) &&
        <Modal onClose={closeModal}>
          <OrderDetails orderNumber={orderNumber} error={error} />
        </Modal>
      )}
    </>
  )
}

export default BurgerConstructor;
