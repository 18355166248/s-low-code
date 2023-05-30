export interface GET_USER_DTO {
  PARAMS: {
    userName?: string;
  };
  RESPONSE: {};
}

export interface USER_DTO {
  PARAMS: {
    id?: string;
    userName: string;
    password: string;
    roles: Role[];
  };
  RESPONSE: {};
}

export interface DELETE_USER_DTO {
  PARAMS: {
    id: number;
  };
  RESPONSE: {};
}
