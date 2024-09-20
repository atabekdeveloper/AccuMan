export interface IAuthState {
  token?: string;
}
export type TAuthLogin = {
  username: string;
  password: string;
};
export interface IAuthUserItem {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: 'male' | 'female';
  email: string;
  phone: string;
  birthDate: string;
  image: string;
}
export interface IAuthLoginGet extends IAuthUserItem {
  token: string;
}
