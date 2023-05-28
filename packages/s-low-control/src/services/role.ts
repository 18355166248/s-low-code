import $axios from "./$axios";

export function getRoleList() {
  return $axios.get("/roles");
}
