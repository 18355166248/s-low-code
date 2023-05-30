import $axios from "./$axios";
import { PAGINATION_DTO } from "./types/pagination";
import { USER_DTO, DELETE_USER_DTO, GET_USER_DTO } from "./types/user";

export function getUserList(params: GET_USER_DTO["PARAMS"] & PAGINATION_DTO) {
  return $axios.get("/user", { params });
}

export function createUser(
  data: USER_DTO["PARAMS"]
): Promise<USER_DTO["RESPONSE"]> {
  return $axios.post("/user", data);
}

export function updateUser(
  data: USER_DTO["PARAMS"]
): Promise<USER_DTO["RESPONSE"]> {
  return $axios.patch(`/user/${data.id}`, data);
}

export function deleteUser(data: DELETE_USER_DTO["PARAMS"]) {
  return $axios.delete(`/user/${data.id}`);
}
