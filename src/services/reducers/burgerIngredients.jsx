import { GET_FEED_REQUEST, GET_FEED_SUCCESS, GET_FEED_FAILED } from "../actions/ingredients.jsx";

export const ingredientsReducer = {
  load: false,
  error: null,
  ingredients: [],
}

export const burgerIngredients = (state = ingredientsReducer, action) => {
  switch (action.type) {
    case GET_FEED_REQUEST: {
      return {
        ...state,
        load: true
      };
    }
    case GET_FEED_SUCCESS: {
      return {
        ...state,
        ingredients: action.list,
        load: false
      };
    }
    case GET_FEED_FAILED: {
      return {
        ingredients: [],
        error: action.error,
        load: false
      }
    }
    default: {
      return state
    }
  }
}
