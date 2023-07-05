export interface IGetUserApi {
  id: string;
}
export interface IPotUserApi {
  id: string;
  body: { name: string; email: string };
}
