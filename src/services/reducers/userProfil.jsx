import { POST_EMAIL_FORGOT_PAGE_SUCCESS, POST_EMAIL_FORGOT_PAGE_FAILED } from "../actions/ingredients.jsx";

export const userProfilReducer = {
  load: false,
  email: '',
  userLoad: false,
  error: null,
  ingredients: [],
  userEmail: 'push' | '',
  name: '',
  postErrorMessage: null,
}

export const userProfil = (state = userProfilReducer, action) => {
  switch (action.type) {
    case POST_EMAIL_FORGOT_PAGE_SUCCESS: {
      return {
        ...state,
        userEmail: 'push',
        userLoad: true,
      }
    }
    case POST_EMAIL_FORGOT_PAGE_FAILED: {
      return {
        ...state,
        postErrorMessage: action.postErrorMessage,
        userLoad: false
      }
    }
    default: {
      return state
    }
  }
}

export default userProfil;
/* export const burgerIngredients = (state = userProfilReducer, action) => {
  switch (action.type) {
    case : {
      return {
        ...state,
        load: true
      };
    }
    case : {
      return {
        ...state,
        ingredients: action.list,
        load: false
      };
    }
    case : {
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
} */
