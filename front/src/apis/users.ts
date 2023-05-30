import { IUserType } from './user-types';

export interface IUser {
  email: string;
  username: string;
  profile: string;
  userType: IUserType;
}
