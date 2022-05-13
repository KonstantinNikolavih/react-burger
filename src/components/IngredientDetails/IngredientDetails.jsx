import React from "react";
import PropTypes from 'prop-types';
import Modal from "../Modal/Modal";
/* import { useParams } from 'react-router-dom'; */
import IngredientDetailsStyle from '../IngredientDetails/IngredientDetails.module.css';
import PropTypesData from "../../utils/PropTypes"

export function IngredientDetails({ ingredient }) {
  /*   const { id } = useParams(); */
  return (
    <div className={IngredientDetailsStyle.contener}>
      <img className={IngredientDetailsStyle.image} src={ingredient.image}></img>
      <h3 className={`text_type_main-medium ${IngredientDetailsStyle.name}`}>{ingredient.name}</h3>
      <ul className={IngredientDetailsStyle.calories}>
        <li className={`text_type_main-default ${IngredientDetailsStyle.item}`}>Калории, ккал
          <p className={IngredientDetailsStyle.list}>{ingredient.calories}</p>
        </li>
        <li className={IngredientDetailsStyle.item}>Белки, г
          <p className={IngredientDetailsStyle.list}>{ingredient.proteins}</p>
        </li>
        <li className={IngredientDetailsStyle.item}>Жиры, г
          <p className={IngredientDetailsStyle.list}>{ingredient.fat}</p>
        </li>
        <li className={IngredientDetailsStyle.item}>Углеводыб г
          <p className={IngredientDetailsStyle.list}>{ingredient.carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
}

IngredientDetails.propTypes = {
  ingredient: PropTypesData.isRequired,
}

export default IngredientDetails;
