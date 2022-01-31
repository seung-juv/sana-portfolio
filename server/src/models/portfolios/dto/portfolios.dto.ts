import { ApiProperty } from '@nestjs/swagger';
import { File } from '#models/files/entities/files.entity';

export class CreatePortfolioDto {
  @ApiProperty({ type: () => File })
  thumbnail: File;

  @ApiProperty({ type: () => File })
  image: File;

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
  youtubeUrl: string;

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
  @ApiProperty({ type: () => File })
  thumbnail: File;

  @ApiProperty({ type: () => File })
  image: File;

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
  youtubeUrl: string;

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
