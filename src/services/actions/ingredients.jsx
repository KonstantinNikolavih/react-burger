import { getData, sendOrder } from '../../utils/api';

export const ADD_INGREDIENT_INSIDE_CONSTRUCTOR = 'ADD_INGREDIENT_INSIDE_CONSTRUCTOR';
export const REMOVE_INGREDIENT_INSIDE_CONSTRUCTOR = 'REMOVE_INGREDIENT_INSIDE_CONSTRUCTOR';
export const TOGGLE_BUN_INSIDE_CONSTRUCTOR = 'TOGGLE_BUN_INSIDE_CONSTRUCTOR';
export const CHANGE_INGREDIENT_POSITION = 'CHANGE_INGREDIENT_POSITION';
export const ADD_INGREDIENT_DETAILS = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT_DETAILS = 'REMOVE_INGREDIENT_DETAILS';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_FAILED = 'POST_ORDER_FAILED';
export const HANDLE_CLOSE_ORDER_MODAL = 'HANDLE_CLOSE_ORDER_MODAL';
export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
export const CLEAR_CONSTRUCTOR_ORDER = 'CLEAR_CONSTRUCTOR_ORDER';
export const GET_FEED_REQUEST = 'GET_FEED_REQUEST';
export const GET_FEED_SUCCESS = 'GET_FEED_SUCCESS';
export const GET_FEED_FAILED = 'GET_FEED_FAILED';

// ингридиент
export function getId() {
  return function (dispatch) {
    dispatch({
      type: GET_FEED_REQUEST
    });
    getData()
      .then((res) => {
        dispatch({
          type: GET_FEED_SUCCESS,
          list: res.data
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_FEED_FAILED,
          error: error,
        })
      })
  }
}

// ордер
export function getIngredients(setId) {
  return function (dispatch) {
    dispatch({
      type: POST_ORDER_REQUEST,
    })
    sendOrder(setId)
      .then((res) => {
        dispatch({
          type: POST_ORDER_SUCCESS,
          orderNumber: res.order.number
        })
      })
      .catch((error) => {
        dispatch({
          type: POST_ORDER_FAILED,
          error: error,
        })
      })
  }
}


export const ingredientAction = (ingredient) => ({
  type: TOGGLE_BUN_INSIDE_CONSTRUCTOR,
  ingredient
})

export const ingredientActionUid = (ingredient) => ({
  type: ADD_INGREDIENT_INSIDE_CONSTRUCTOR,
  ingredient
})

export const ingredientActionOrder = () => ({
  type: CLEAR_CONSTRUCTOR_ORDER
});
