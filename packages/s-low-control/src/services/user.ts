import $axios from "./$axios";
import { USER_DTO, DELETE_USER_DTO } from "./types/user";

export function getUserList() {
  return $axios.get("/user");
}

export function createUser(data: USER_DTO["PARAMS"]): USER_DTO["RESPONSE"] {
  return $axios.post("/user", data);
}

export function updateUser(data: USER_DTO["PARAMS"]): USER_DTO["RESPONSE"] {
  return $axios.patch(`/user/${data.id}`, data);
}

export function deleteUser(data: DELETE_USER_DTO["PARAMS"]) {
  return $axios.delete(`/user/${data.id}`);
}
