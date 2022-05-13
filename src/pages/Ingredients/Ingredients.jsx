import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import styles from '../Ingredients/Ingredients.module.css';

export function IngredientId() {
  const { id } = useParams();






  return (
    <>
      <div className={styles.contener}>
        <p className={styles.text}>Детали ингредиента</p>
      </div>
    </>
  )
}
