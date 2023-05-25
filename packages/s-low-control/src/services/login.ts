import $axios from "./$axios";
import { LOGIN_DTO } from "./types/login";

export function signIn(
  data: LOGIN_DTO["params"]
): Promise<LOGIN_DTO["Response"]> {
  return $axios.post("/auth/signIn", data);
}

export function signOut(data: Pick<LOGIN_DTO["params"], "userName">) {
  return $axios.post("/auth/signOut", data);
}
