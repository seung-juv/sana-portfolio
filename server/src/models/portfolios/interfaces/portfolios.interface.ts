import { User } from '#models/users/entities/users.entity';
import { File } from '#models/files/entities/files.entity';

export interface IPortfolio {
  user: User;
  thumbnail: File;
  title: string;
  subTitle: string;
  url: string;
  startAt: Date;
  endAt: Date;
  isActive: boolean;
}
