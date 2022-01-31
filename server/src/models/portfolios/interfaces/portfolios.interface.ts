import { User } from '#models/users/entities/users.entity';
import { File } from '#models/files/entities/files.entity';

export interface IPortfolio {
  user: User;
  thumbnail: File;
  image: File;
  image1: File;
  image2: File;
  image3: File;
  image4: File;
  image5: File;
  image6: File;
  image7: File;
  image8: File;
  image9: File;
  image10: File;
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
