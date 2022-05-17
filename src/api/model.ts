export interface loginResModel {
  token: string;
  role?: 'admin'
}

export interface GetInfoModel {
  email: string;
  name: string;
  introduction: string;
  phone: string;
  address: string;
}
