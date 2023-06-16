export interface GET_PROJECT_DTO {
  PARAMS: {
    name?: string;
  };
  RESPONSE: {};
}

export interface PROJECT_DTO {
  PARAMS: {
    id?: string;
    name: string;
    description: string;
    code?: any;
  };
  RESPONSE: {};
}


export interface PROJECT_CODE_DTO {
  PARAMS: {
    id: string;
    name: string;
    description: string;
    code: any;
  };
  RESPONSE: {};
}

export interface DELETE_PROJECT_DTO {
  PARAMS: {
    id: number;
  };
  RESPONSE: {};
}
