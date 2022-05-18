
import { getEmailPassword, getResetPassword } from "../../utils/api";

export const POST_EMAIL_FORGOT_PAGE_SUCCESS = 'POST_EMAIL_FORGOT_PAGE_SUCCESS';
export const POST_EMAIL_FORGOT_PAGE_FAILED = 'POST_EMAIL_FORGOT_PAGE_FAILED';

export const POST_NEW_PASSWORD_SUCCESS = 'POST_NEW_PASSWORD_SUCCESS';
export const POST_NEW_PASSWORD_FAILED = 'POST_NEW_PASSWORD_FAILED';
export const GET_SERVER_REQUEST_RESET = 'GET_SERVER_REQUEST_RESET';

export const GET_SERVER_REQUEST = 'GET_SERVER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED';
export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';
export const AUTH_USER_FAILED = 'AUTH_USER_FAILED';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_FAILED = 'LOGOUT_USER_FAILED';
export const CHANGE_USER_SUCCESS = 'CHANGE_USER_SUCCESS';
export const CHANGE_USER_FAILED = 'CHANGE_USER_FAILED';



export const getServerRequest = () => ({
  type: GET_SERVER_REQUEST
});

export const emailForgotPageSuccess = () => ({
  type: POST_EMAIL_FORGOT_PAGE_SUCCESS
});

export const emailForgotPageFailed = (postErrorMessage) => ({
  type: POST_EMAIL_FORGOT_PAGE_FAILED,
  postErrorMessage
});

export const newPasswordSuccess = () => ({
  type: POST_NEW_PASSWORD_SUCCESS
});

export const newPasswordFailed = (newPasswordError) => ({
  type: POST_NEW_PASSWORD_FAILED,
  newPasswordError
});

export const postEmailFromForgotPage = (email) => {
  return function (dispatch) {
    dispatch(getServerRequest());
    getEmailPassword(email)
      .then((res) => {
        dispatch(emailForgotPageSuccess());
        console.log(email)
      })
      .catch((error) => {
        dispatch(emailForgotPageFailed(error));
      })
  }
}

export const newPasswordAction = (password, value) => {
  return function (dispatch) {
    dispatch(getServerRequest());
    getResetPassword({ password: password, token: value })
      .then((res) => {
        dispatch(newPasswordSuccess());
      })
      .catch((error) => {
        dispatch(newPasswordFailed(error));
      })
  }
}
