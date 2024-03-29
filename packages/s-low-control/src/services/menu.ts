import $axios from "./$axios";
import { DELETE_MENU_DTO, GET_MENU_DTO, MENU_DTO } from "./types/menu";

export function getMenuList(params: GET_MENU_DTO["PARAMS"]) {
  return $axios.get("/menus", { params });
}

export function createMenu(data: MENU_DTO["PARAMS"]): MENU_DTO["RESPONSE"] {
  return $axios.post("/menus", data);
}

export function updateMenu(data: MENU_DTO["PARAMS"]): MENU_DTO["RESPONSE"] {
  return $axios.patch(`/menus/${data.id}`, data);
}

export function deleteMenu(data: DELETE_MENU_DTO["PARAMS"]) {
  return $axios.delete(`/menus/${data.id}`);
}
