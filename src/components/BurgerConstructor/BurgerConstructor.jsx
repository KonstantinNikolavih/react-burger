import { React, useState } from "react";
import burgerComposition from "../BurgerConstructor/BurgerConstructor.module.css";
import { DragIcon, ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";

const BurgerConstructor = (props) => {
  const [isModal, setIsModal] = useState(false);
  const propss = props.data.filter((item) => item.type !== 'bun')

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };


  return (
    <section className={burgerComposition.burgerComposition}>
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
            {propss.map((props) => (
              <div key={props._id} className={burgerComposition.link}>
                <p className={burgerComposition.DragIcon}>
                  <DragIcon type="secondary" />
                </p>
                <ConstructorElement
                  text={props.name}
                  thumbnail={props.image}
                  price={props.price} />
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
        <p className={burgerComposition.ikonBurger}>
          <CurrencyIcon type="secondary" />
        </p>
        <Button onClick={openModal} type="primary" size="medium">
          Нажми на меня
        </Button>
      </div>
      {isModal &&
        <Modal onClick={closeModal}>
          <OrderDetails />
        </Modal>
      }
    </section>
  )
}

export default BurgerConstructor;
