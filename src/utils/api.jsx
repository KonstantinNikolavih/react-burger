export const API_URL = {
  api: 'https://norma.nomoreparties.space/api/',
  headers: {
    "Content-Type": "application/json",
  }
}
export const resCheck = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Что-то пошло не так( Ошибка: ${res.status}`)
  }
}

export const setOrder = (setId) => {
  return fetch(`${API_URL.api}orders`, {
    method: "POST",
    headers: API_URL.headers,
    body: JSON.stringify({
      "ingredients": setId,
    }),
  }).then(resCheck);
};

export default { API_URL, resCheck, setOrder };
