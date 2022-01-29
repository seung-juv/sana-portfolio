import { IFile } from './files';
import { IUserType } from './user-types';

export interface IUser {
  email: string;
  username: string;
  profile: IFile;
  userType: IUserType;
}
