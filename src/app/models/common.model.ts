export enum LocalStorePath {
  user = 'user',
  accessToken = "accessToken"
}
export interface IOptions<T = number | string | any, U = number | string | any> {
  label: U;
  value: T;
  selected?: boolean;
  data?: any;
  sortOrder?: number;
}
