const SLOW_AUTH_TOKEN = "SLOW_AUTH_TOKEN";
const SLOW_USER = "SLOW_USER";

function setToken(token: string) {
  localStorage.setItem(SLOW_AUTH_TOKEN, token);
}

export function getToken() {
  return localStorage.getItem(SLOW_AUTH_TOKEN);
}

export function removeToken() {
  return localStorage.removeItem(SLOW_AUTH_TOKEN);
}

export function getUserStorage() {
  return JSON.parse(localStorage.getItem(SLOW_USER) || "null");
}

export function removeUserStorage() {
  return localStorage.removeItem(SLOW_USER);
}

export function removeAuthStorage() {
  removeToken();
  removeUserStorage();
}
