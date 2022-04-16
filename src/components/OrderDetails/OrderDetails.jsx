import React from "react";
import PropTypes from "prop-types";
import orderDetailsStyle from "../OrderDetails/OrderDetails.module.css";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const OrderDetails = ({ orderNumber, error }) => {
  if (orderNumber) return (
    <div className={orderDetailsStyle.contener}>
      <p className={`text_type_digits-large ${orderDetailsStyle.orderNumb}`}>{orderNumber}</p >
      <p className={`text_type_main-medium ${orderDetailsStyle.indificator}`}>идентификатор заказа</p>
      <a className={orderDetailsStyle.link}>
        <CheckMarkIcon type="primary" />
      </a>
      <p className={`text_type_main-default ${orderDetailsStyle.order}`}>Ваш заказ начали готовить</p>
      <p className={orderDetailsStyle.info}>Дождитесь готовности на орбитальной станции</p>
    </div>
  );
  else return (
    <div className={orderDetailsStyle.contener}>
      <p className={`text_type_digits-large ${orderDetailsStyle.orderNumb}`}>{error}</p >
      <p className={`text_type_main-medium ${orderDetailsStyle.indificator}`}>ошибка заказа</p>
      <p className={`text_type_main-default ${orderDetailsStyle.order}`}>загаз не готовится</p>
      <p className={orderDetailsStyle.info}>повторите попытку</p>
    </div>
  )
};

OrderDetails.propTypes = {
  orderNumber: PropTypes.number,
  error: PropTypes.number,
};

export default OrderDetails;
