import { ApiProperty } from '@nestjs/swagger';
import { File } from '#models/files/entities/files.entity';

export class CreatePortfolioDto {
  @ApiProperty({ type: () => File })
  thumbnail: File;

  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String })
  subTitle: string;

  @ApiProperty({ type: String })
  url: string;

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

  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String })
  subTitle: string;

  @ApiProperty({ type: String })
  url: string;

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