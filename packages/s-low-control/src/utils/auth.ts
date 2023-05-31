import { previewIframeId } from "@/constants";
import { LOGIN_DTO } from "@/services/types/login";

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

function setUserStorage({ user }: LOGIN_DTO["Response"]) {
  localStorage.setItem(SLOW_USER, JSON.stringify(user));
}

export function getUserStorage() {
  return JSON.parse(localStorage.getItem(SLOW_USER) || "null");
}

export function removeUserStorage() {
  return localStorage.removeItem(SLOW_USER);
}

export function setAuthStorage(res: LOGIN_DTO["Response"]) {
  setToken(res.access_token);
  setUserStorage(res);
}

export function removeAuthStorage() {
  removeToken();
  removeUserStorage();
}

// 同步token给子应用
export function syncStorageWithChild() {
  const iframeDom = document.getElementById(previewIframeId);
  (iframeDom as any)?.contentWindow.postMessage(
    {
      even: "updateToken",
      params: getToken(),
    },
    "*"
  );
}
