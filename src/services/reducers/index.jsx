import { combineReducers } from "redux";
import { burgerConstructor } from "../reducers/burgerConstructor";
import { burgerIngredients } from "../reducers/burgerIngredients";
import { ingredientDetails } from "../reducers/ingredients";
import { order } from "../reducers/order";


export const rootReducer = combineReducers({
  burgerIngredients,
  burgerConstructor,
  ingredientDetails,
  order,
});
