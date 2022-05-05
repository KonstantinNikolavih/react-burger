import React, { useRef } from "react";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CHANGE_INGREDIENT_POSITION, REMOVE_INGREDIENT_INSIDE_CONSTRUCTOR } from "../../services/actions/ingredients";
import { useSelector, useDispatch } from "react-redux";
import { useDrop, useDrag } from "react-dnd";
import PropTypes from "prop-types"
export const BurgerConstructorIngredient = ({ name, image, price, uid }) => {
  const dispatch = useDispatch()

  const [, dragRef] = useDrag({
    type: 'constructor-item',
    item: { uid }
  });

  const [, dropRef] = useDrop({
    accept: 'constructor-item',
    hover: (item) => {
      dispatch({
        type: CHANGE_INGREDIENT_POSITION,
        dragUid: item.uid,
        hoverUid: uid
      })
    }
  });

   function dragDropList(el) {
    dragRef(el)
    dropRef(el)
  }

  const deleteIngredient = (uid) => {
    dispatch({
      type: REMOVE_INGREDIENT_INSIDE_CONSTRUCTOR,
      uid: uid
    })
  };

  return (
    <div ref={dragDropList} >
      <DragIcon type="primary" />
      <ConstructorElement
        isLocked={false}
        text={name}
        price={price}
        thumbnail={image}
        closeIngredient={() => deleteIngredient(uid)}
      />
    </div>
  );
};

BurgerConstructorIngredient.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  uid: PropTypes.string.isRequired
};
