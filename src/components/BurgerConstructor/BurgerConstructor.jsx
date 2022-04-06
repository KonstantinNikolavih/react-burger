import { React, useState } from "react";
import PropTypes from "prop-types";
import burgerComposition from "../BurgerConstructor/BurgerConstructor.module.css";
import { DragIcon, ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { PropTypesData } from '../../utils/PropTypes';

export const BurgerConstructor = (props) => {
  const [isModal, setIsModal] = useState(false);
  const array = props.data.filter((item) => item.type !== 'bun')

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <>
      <div className={burgerComposition.burgerComposition}>
        <div className={burgerComposition.bunTop}>
          <ConstructorElement
            key={"top"}
            type={'top'}
            isLocked={true}
            text={`${props.data[0].name} (верх)`}
            thumbnail={props.data[0].image}
            price={props.data[0].price} />
        </div>
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
        <div className={burgerComposition.bunBottom}>
          <ConstructorElement
            key={"bottom"}
            type={'bottom'}
            isLocked={true}
            text={`${props.data[0].name} (низ)`}
            thumbnail={props.data[0].image}
            price={props.data[0].price} />
        </div>
        <div className={`pt-10 pr-10 pl-10 ${burgerComposition.button}`}>
          <a className={burgerComposition.priceBurger}>610</a>
          <div className={burgerComposition.ikonBurger}>
            <CurrencyIcon type="primary" />
          </div>
          <Button onClick={openModal} type="primary" size="medium">
            Оформить заказ
          </Button>
        </div>
      </div>
      {isModal &&
        <Modal onClose={closeModal}>
          <OrderDetails />
        </Modal>
      }
    </>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypesData).isRequired,
};

export default BurgerConstructor;
