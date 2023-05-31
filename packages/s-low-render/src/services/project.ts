import $axios from "./$axios";
import {
  DELETE_PROJECT_DTO,
  GET_PROJECT_DTO,
  PROJECT_CODE_DTO,
  PROJECT_DTO,
} from "./types/project";

export function getProjectList(params: GET_PROJECT_DTO["PARAMS"]) {
  return $axios.get("/project", { params });
}

export function getProject(id: string | number) {
  return $axios.get(`/project/${id}`);
}

export function createProject(
  data: PROJECT_DTO["PARAMS"]
): Promise<PROJECT_DTO["RESPONSE"]> {
  return $axios.post("/project", data);
}

export function updateProject(
  data: PROJECT_DTO["PARAMS"]
): Promise<PROJECT_DTO["RESPONSE"]> {
  return $axios.patch(`/project/${data.id}`, data);
}

export function updateProjectCode(
  data: PROJECT_CODE_DTO["PARAMS"]
): Promise<PROJECT_CODE_DTO["RESPONSE"]> {
  return $axios.patch(`/project/code/${data.id}`, data);
}

export function deleteProject(data: DELETE_PROJECT_DTO["PARAMS"]) {
  return $axios.delete(`/project/${data.id}`);
}
