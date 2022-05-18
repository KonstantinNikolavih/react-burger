import { GET_SERVER_REQUEST, LOGOUT_USER_FAILED, REGISTER_USER_SUCCESS, GET_SERVER_REQUEST_RESET, POST_NEW_PASSWORD_FAILED, POST_NEW_PASSWORD_SUCCESS, REGISTER_USER_FAILED, AUTH_USER_SUCCESS, LOGOUT_USER_SUCCESS, AUTH_USER_FAILED, CHANGE_USER_FAILED, CHANGE_USER_SUCCESS, POST_EMAIL_FORGOT_PAGE_SUCCESS, POST_EMAIL_FORGOT_PAGE_FAILED } from "../actions/userProfil.jsx";

export const userProfilReducer = {
  user: {
    name: '',
    email: ''
  },
  load: false,
  userLoad: false,
  userProfile: false,
  registerError: null,
  profileError: null,
  changeProfileResult: null,
  logoutError: null,
  error: null,
  ingredients: [],
  userEmail: '',
  postErrorMessage: null,
  newPasswordError: null,
}

export const userProfil = (state = userProfilReducer, action) => {
  switch (action.type) {
    case GET_SERVER_REQUEST: {
      return {
        ...state,
        userLoad: true,
      }
    }
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        userLoad: false,
        userProfile: true,
      }
    }
    case REGISTER_USER_FAILED: {
      return {
        ...state,
        registerError: `Произошла ошибка регистрации: ${action.registerError}. Обратитесь к администрации.`,
        userLoad: false,
      }
    }
    case AUTH_USER_SUCCESS: {
      return {
        ...state,
        user: {
          email: action.email,
          name: action.name
        },
        userLoad: false,
        userProfile: true,
        authErrorMessage: null,
      }
    }
    case AUTH_USER_FAILED: {
      return {
        ...state,
        profileError: `Произошла ошибка: ${action.profileError}. Проверьте введенные данные или попробуйте авторизоваться позже.`,
        userLoad: false,
      }
    }
    case CHANGE_USER_SUCCESS: {
      return {
        ...state,
        user: {
          email: action.email,
          name: action.name
        },
        isLoading: false,
        changeUserResultMessage: action.changeUserResultMessage,
      }
    }
    case CHANGE_USER_FAILED: {
      return {
        ...state,
        changeProfileResult: `Произошла ошибка: ${action.changeProfileResult}. Повторите попытку позже.`,
        userLoad: false,
      }
    }
    case LOGOUT_USER_SUCCESS: {
      return {
        ...state,
        user: {
          email: '',
          name: ''
        },
        userLoad: false,
        userProfile: false,
      }
    }
    case LOGOUT_USER_FAILED: {
      return {
        ...state,
        logoutError: `Произошла ошибка: ${action.logoutError}.`,
        userLoad: false,
      }
    }
    case CHANGE_USER_SUCCESS: {
      return {
        ...state,
        user: {
          email: action.email,
          name: action.name
        },
        userLoad: false,
        userProfile: true,
      }
    }
    case POST_NEW_PASSWORD_SUCCESS: {
      return {
        ...state,
        userLoad: false,
        userEmail: 'pushToLoginPage'
      }
    }
    case POST_NEW_PASSWORD_FAILED: {
      return {
        ...state,
        userLoad: false,
        newPasswordError: action.newPasswordError,
      }
    }
    case GET_SERVER_REQUEST_RESET: {
      return {
        ...state,
        userLoad: false,
      }
    }
    case POST_EMAIL_FORGOT_PAGE_SUCCESS: {
      return {
        ...state,
        userEmail: 'pushToResetPage',
        userLoad: true
      }
    }
    case POST_EMAIL_FORGOT_PAGE_FAILED: {
      return {
        ...state,
        postErrorMessage: action.postErrorMessage,
        userLoad: false,
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
