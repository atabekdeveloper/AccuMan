export interface IUserState {
  modalShow: boolean;
  paramsForm: TUserItem | null;
}
export type TUserItem = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: 'male' | 'female';
  email: string;
  phone: string;
  birthDate: string;
  image: string;
};
