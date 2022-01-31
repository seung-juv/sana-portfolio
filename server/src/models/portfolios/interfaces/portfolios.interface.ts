import { User } from '#models/users/entities/users.entity';
import { File } from '#models/files/entities/files.entity';

export interface IPortfolio {
  user: User;
  thumbnail: File;
  image: File;
  category: string;
  title: string;
  description: string;
  size: string;
  program: string;
  etc: string;
  contents: string;
  redirectUrl: string;
  youtubeId: string;
  startAt: Date;
  endAt: Date;
  isActive: boolean;
}
