import React, { useRef } from "react";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CHANGE_INGREDIENT_POSITION } from "../../services/actions/ingredients";
import { useSelector, useDispatch } from "react-redux";
import { useDrop, useDrag } from "react-dnd";

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

  return (
    <div ref={dragDropList} >
      <DragIcon type="primary" />
      <ConstructorElement
        isLocked={false}
        text={name}
        price={price}
        thumbnail={image}
      />
    </div>
  );
};
