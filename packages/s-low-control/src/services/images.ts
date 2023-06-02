import $axios from "./$axios";
import { PAGINATION_DTO } from "./types/pagination";

export function getImagesList(params: PAGINATION_DTO) {
  return $axios.get("/upload/list", { params });
}
