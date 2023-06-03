import $axios from "./$axios";
import { PAGINATION_DTO } from "./types/pagination";

export function getImagesList(params: PAGINATION_DTO) {
  return $axios.get("/upload/list", { params });
}

export function uploadFile(data: File) {
  return $axios.post("/upload/file", data, {
    headers: {
      "Content-Type": "mutlipart/form-data",
    },
  });
}
export function uploadFiles(data: File[]) {
  return $axios.post("/upload/files", data, {
    headers: {
      "Content-Type": "mutlipart/form-data",
    },
  });
}
