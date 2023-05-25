export interface LOGIN_DTO {
  params: {
    userName: string;
    password: string;
  };
  Response: {
    access_token: string;
    user: {
      id: number;
      userName: string;
    };
  };
}
