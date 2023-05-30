import { ApiProperty } from '@nestjs/swagger';

export class CreatePortfolioDto {
  @ApiProperty({ type: String })
  thumbnail: string;

  @ApiProperty({ type: String })
  image: string;

  @ApiProperty({ type: String })
  image1: string;

  @ApiProperty({ type: String })
  image2: string;

  @ApiProperty({ type: String })
  image3: string;

  @ApiProperty({ type: String })
  image4: string;

  @ApiProperty({ type: String })
  image5: string;

  @ApiProperty({ type: String })
  image6: string;

  @ApiProperty({ type: String })
  image7: string;

  @ApiProperty({ type: String })
  image8: string;

  @ApiProperty({ type: String })
  image9: string;

  @ApiProperty({ type: String })
  image10: string;

  @ApiProperty({ type: String })
  category: string;

  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String })
  description: string;

  @ApiProperty({ type: String })
  size: string;

  @ApiProperty({ type: String })
  program: string;

  @ApiProperty({ type: String })
  etc: string;

  @ApiProperty({ type: String })
  contents: string;

  @ApiProperty({ type: String })
  redirectUrl: string;

  @ApiProperty({ type: String })
  youtubeId: string;

  @ApiProperty({ type: Date })
  startAt: Date;

  @ApiProperty({ type: Date })
  endAt: Date;

  @ApiProperty({
    type: Boolean,
    default: false,
  })
  isActive: boolean;
}

export class UpdatePorfolioDto {
  @ApiProperty({ type: String })
  thumbnail: string;

  @ApiProperty({ type: String })
  image: string;

  @ApiProperty({ type: String })
  image1: string;

  @ApiProperty({ type: String })
  image2: string;

  @ApiProperty({ type: String })
  image3: string;

  @ApiProperty({ type: String })
  image4: string;

  @ApiProperty({ type: String })
  image5: string;

  @ApiProperty({ type: String })
  image6: string;

  @ApiProperty({ type: String })
  image7: string;

  @ApiProperty({ type: String })
  image8: string;

  @ApiProperty({ type: String })
  image9: string;

  @ApiProperty({ type: String })
  image10: string;

  @ApiProperty({ type: String })
  category: string;

  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String })
  description: string;

  @ApiProperty({ type: String })
  size: string;

  @ApiProperty({ type: String })
  program: string;

  @ApiProperty({ type: String })
  etc: string;

  @ApiProperty({ type: String })
  contents: string;

  @ApiProperty({ type: String })
  redirectUrl: string;

  @ApiProperty({ type: String })
  youtubeId: string;

  @ApiProperty({ type: Date })
  startAt: Date;

  @ApiProperty({ type: Date })
  endAt: Date;

  @ApiProperty({
    type: Boolean,
    default: false,
  })
  isActive: boolean;
}
