import React from "react";
import PropTypes from 'prop-types';
import Modal from "../Modal/Modal";
import IngredientDetailsStyle from '../IngredientDetails/IngredientDetails.module.css';

export function IngredientDetails(props) {
  return (
    <div className={IngredientDetailsStyle.contener}>
      <h2 className={IngredientDetailsStyle.details}>Детали ингредиента</h2>
      <img className={IngredientDetailsStyle.image} src={props.image}></img>
      <h3 className={IngredientDetailsStyle.name}>{props.name}</h3>
      <ul className={IngredientDetailsStyle.calories}>
        <li className={IngredientDetailsStyle.item}>Калории, ккал
          <p className={IngredientDetailsStyle.list}>{props.calories}</p>
        </li>
        <li className={IngredientDetailsStyle.item}>Белки, г
          <p className={IngredientDetailsStyle.list}>{props.proteins}</p>
        </li>
        <li className={IngredientDetailsStyle.item}>Жиры, г
          <p className={IngredientDetailsStyle.list}>{props.fat}</p>
        </li>
        <li className={IngredientDetailsStyle.item}>Углеводыб г
          <p className={IngredientDetailsStyle.list}>{props.carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
}

IngredientDetails.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
}

export default IngredientDetails;
