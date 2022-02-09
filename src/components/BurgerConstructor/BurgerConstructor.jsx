import React from "react";
import burgerComposition from './BurgerConstructor.module.css';
import { ConstructorElement, Button, DragIcon, CurrencyIcon, } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor(props) {
  return (
    <section className={burgerComposition.burgerComposition}>
      <div className={burgerComposition.bunTop}>
        <ConstructorElement
          key={"top"}
          type={'top'}
          isLocked={true}
          handleClose={undefined}
          text={`${props.data[0].name} (верх)`}
          thumbnail={props.data[0].image}
          price={props.data[0].price} />
      </div>
      <ul className={burgerComposition.container}>
        <div className={`pt-10 ${burgerComposition.burgerScrol}`}>
          <li className={burgerComposition.item}>
            {props.data.map((props) => (
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
          handleClose={undefined}
          text={`${props.data[0].name} (низ)`}
          thumbnail={props.data[0].image}
          price={props.data[0].price} />
      </div>
      <div className={`pt-10 pr-10 pl-10 ${burgerComposition.button}`}>
        <a className={burgerComposition.priceBurger}>610</a>
        <p className={burgerComposition.ikonBurger}>
          <CurrencyIcon type="secondary" />
        </p>
        <Button type="primary" size="medium">
          Нажми на меня
        </Button>
      </div>
    </section>
  )
}
export default BurgerConstructor
