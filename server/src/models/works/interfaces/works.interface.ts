import { User } from '#models/users/entities/users.entity';

export interface IWork {
  user: User;
  isActive: boolean;
}
