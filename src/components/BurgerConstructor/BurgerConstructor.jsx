import { React, useState, useContext, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import burgerComposition from "../BurgerConstructor/BurgerConstructor.module.css";
import { DragIcon, ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { PropTypesData } from '../../utils/PropTypes';
import { BurgerContext } from "../../utils/BurgerContext.jsx";
import { sendOrder } from "../../utils/api";

export const BurgerConstructor = () => {
  const [isModal, setIsModal] = useState(false);
  const [room, setRoom] = useState(null);
  const [error, setError] = useState(null);
  const [id, setId] = useState(false);
  const [sum, setSum] = useState(null);

  const { ingredients } = useContext(BurgerContext);
  const array = useMemo(() => ingredients.filter((item) => item.type !== 'bun'));
  const bun = useMemo(() => ingredients.find(item => item.type === 'bun'));

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  console.log(ingredients)

  useEffect(() => {
    bun &&
      setSum(
        array.reduce((acc, el) => acc + el.price, 0) + bun.price * 2
      );
    bun && setId([].concat(bun._id).concat(array.map((el) => el._id)));
  }, [ingredients, bun]);

  const sendOrderId = () => {
    sendOrder(ingredients)
      .then((replyObj) => {
        setRoom(replyObj);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        openModal();
      });
  };

  return (
    <>
      <div className={burgerComposition.burgerComposition}>
        {bun && (
          <div className={burgerComposition.bunTop}>
            <ConstructorElement
              key={"top"}
              type={'top'}
              isLocked={true}
              text={`${bun.name} (верх)`}
              thumbnail={bun.image}
              price={bun.price} />
          </div>
        )}
        <ul className={burgerComposition.container}>
          <div className={`pt-10 ${burgerComposition.burgerScrol}`}>
            <li className={burgerComposition.item}>
              {array.map((props) => (
                <div key={props._id} className={burgerComposition.link}>
                  <p className={burgerComposition.DragIcon}>
                    <DragIcon type="secondary" />
                  </p>
                  <ConstructorElement
                    isLocked={false}
                    text={props.name}
                    thumbnail={props.image}
                    price={props.price}
                  />
                </div>
              ))}
            </li>
          </div>
        </ul>
        {bun && (
          <div className={burgerComposition.bunBottom}>
            <ConstructorElement
              key={"bottom"}
              type={'bottom'}
              isLocked={true}
              text={`${bun.name} (низ)`}
              thumbnail={bun.image}
              price={bun.price} />
          </div>
        )}
        <div className={`pt-10 pr-10 pl-10 ${burgerComposition.button}`}>
          <a className={burgerComposition.priceBurger}>{sum}</a>
          <div className={burgerComposition.ikonBurger}>
            <CurrencyIcon type="primary" />
          </div>
          <Button onClick={sendOrderId} type="primary" size="medium">
            Оформить заказ
          </Button>
        </div>
      </div>
      {isModal &&
        <Modal onClose={closeModal}>
          <OrderDetails orderNumber={room.order.number} error={error} />
        </Modal>
      }
    </>
  )
}

export default BurgerConstructor;
