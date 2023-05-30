import { UserType } from '#models/user-types/entities/user-types.entity';

export interface IUser {
  email: string;
  username: string;
  password: string;
  profile: string;
  accountAccessFailCount: number;
  userType: UserType;
  isActive: boolean;
}
