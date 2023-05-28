export interface MENU_DTO {
  PARAMS: {
    id?: string
    name: string;
    path: string;
    order: number;
    acl: string; // 权限控制 CREATE, READ, UPDATE, DELETE, MANAGE
  };
  RESPONSE: {};
}

export interface DELETE_MENU_DTO {
  PARAMS: {
    id: number;
  };
  RESPONSE: {};
}
