import { ADD_INGREDIENT_DETAILS, REMOVE_INGREDIENT_DETAILS } from '../actions/ingredients';

const  ingredientDetailsReducer = {
  ingredientDetails: null
}

export const ingredientDetails = (state = ingredientDetailsReducer, action) => {
  switch(action.type) {
    case ADD_INGREDIENT_DETAILS: {
      return {
        ingredientDetails: action.ingredientDetails,
      }
    }
    case REMOVE_INGREDIENT_DETAILS: {
      return {
        ingredientDetails: null,
      }
    }
    default: {
      return state
    }
  }
}
