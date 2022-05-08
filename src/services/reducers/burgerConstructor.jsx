import { ADD_INGREDIENT_INSIDE_CONSTRUCTOR, REMOVE_INGREDIENT_INSIDE_CONSTRUCTOR, TOGGLE_BUN_INSIDE_CONSTRUCTOR, CHANGE_INGREDIENT_POSITION, } from "../actions/ingredients";

const burgerConstructorReducer = {
  ingredientsConst: []
};

export const burgerConstructor = (state = burgerConstructorReducer, action) => {
  switch (action.type) {
    case ADD_INGREDIENT_INSIDE_CONSTRUCTOR: {
      if (action.ingredient.type === 'bun') {
        return {
          ...state,
          ingredientsConst: [
            action.ingredient,
            ...state.ingredientsConst
          ]
        }
      }
      else {
        return {
          ...state,
          ingredientsConst: [
            ...state.ingredientsConst,
            action.ingredient
          ]
        }
      }
    }
    case REMOVE_INGREDIENT_INSIDE_CONSTRUCTOR: {
      return {
        ...state,
        ingredientsConst: [...state.ingredientsConst].filter((item) => item.uid !== action.uid)
      }
}
    case TOGGLE_BUN_INSIDE_CONSTRUCTOR: {
      return {
        ...state,
        ingredientsConst: [...state.ingredientsConst].map(item => item.type === 'bun' ? action.ingredient : item)
      }
    }
    case CHANGE_INGREDIENT_POSITION: {
      return {
        ...state,
        ingredientsConst: [...state.ingredientsConst].map((item) => {
          if (item.uid === action.dragUid) {
            return [...state.ingredientsConst].find(
              (item) => item.uid === action.hoverUid
            );
          } else if (item.uid === action.hoverUid) {
            return [...state.ingredientsConst].find(
              (item) => item.uid === action.dragUid
            );
          } else return item;
        }),
      };
    }
    default: {
      return state
    }
  }
}
