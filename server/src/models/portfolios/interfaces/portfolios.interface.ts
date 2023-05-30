import { User } from '#models/users/entities/users.entity';

export interface IPortfolio {
  user: User;
  thumbnail: string;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
  image7: string;
  image8: string;
  image9: string;
  image10: string;
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
