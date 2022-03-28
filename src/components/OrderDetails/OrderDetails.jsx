import React from "react";
import orderDetailsStyle from "../OrderDetails/OrderDetails.module.css";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const OrderDetails = () => {
  return (
    <div className={orderDetailsStyle.contener}>
      <p className={orderDetailsStyle.orderNumb}>111</p >
      <p className={orderDetailsStyle.indificator}>идентификатор заказа</p>
      <a className={orderDetailsStyle.link}>
        <CheckMarkIcon type="primary" />
      </a>
      <p className={orderDetailsStyle.order}>Ваш заказ начали готовить</p>
      <p className={orderDetailsStyle.info}>Дождитесь готовности на орбитальной станции</p>
    </div>
  );
}

export default OrderDetails;
