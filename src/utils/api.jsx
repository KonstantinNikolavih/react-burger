export const API_URL = {
  api: 'https://norma.nomoreparties.space/api/',
  headers: {
    "Content-Type": "application/json",
  }
}

export const checkRespose = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Что-то пошло не так( Ошибка: ${res.status}`)
  }
}

export const getData = () => {
  return fetch(`${API_URL.api}ingredients`, {
    headers: API_URL.headers
  }).then(checkRespose);
};

export const sendOrder = (setId) => {
  return fetch(`${API_URL.api}orders`, {
    method: "POST",
    headers: API_URL.headers,
    body: JSON.stringify({
      "ingredients": setId,
    }),
  }).then(checkRespose);
};



//почта восстановления пароля
export const getEmailPassword = (email) => {
  return fetch(`${API_URL.api}password-reset`, {
    method: "POST",
    headers: API_URL.headers,
    body: JSON.stringify({
      "email": email,
    }),
  }).then(checkRespose);
};

/* console.log(`Ошибка ${getEmailPassword.setId}`) */

// и сброса пароля
export const getResetPassword = (password, code) => {
  return fetch(`${API_URL.api}password-reset/reset`, {
    method: "POST",
    headers: API_URL.headers,
    body: JSON.stringify({
      "password": password,
      "token": code,
    }),
  }).then(checkRespose);
};



export default { API_URL, checkRespose, sendOrder, getData, getResetPassword };
