import $axios from "./$axios";
import { PAGINATION_DTO } from "./types/pagination";
import { REMOTE_COMP_DTO } from "./types/remoteComp";

export function getRemoteCompList(params: PAGINATION_DTO) {
  return $axios.get("/remote-comp", { params });
}

export function createRemoteComp(
  data: REMOTE_COMP_DTO["PARAMS"]
): Promise<REMOTE_COMP_DTO["RESPONSE"]> {
  return $axios.post("/remote-comp", data);
}

export function createRemoteCompVersion(
  data: REMOTE_COMP_DTO["PARAMS"],
  id?: number
): Promise<REMOTE_COMP_DTO["RESPONSE"]> {
  return $axios.patch(`/remote-comp${id ? `/${id}` : ""}`, data);
}
