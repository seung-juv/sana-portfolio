import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IPortfolio } from '../interfaces/portfolios.interface';
import { ModelEntity } from '#common/serializers/model.serializer';
import { User } from '#models/users/entities/users.entity';
import { File } from '#models/files/entities/files.entity';

export const defaultPortfolioGroupsForSerializing: string[] = [
  'portfolio.timestamps',
];

export const allPortfolioGroupsForSerializing: string[] = [
  ...defaultPortfolioGroupsForSerializing,
  'portfolio.is_active',
];

export class PortfolioEntity extends ModelEntity implements IPortfolio {
  @ApiProperty({ type: () => User })
  user: User;

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

  @Expose({ groups: ['portfolio.is_active'] })
  @ApiProperty({ type: Boolean })
  isActive: boolean;

  @Expose({ groups: ['portfolio.timestamps'] })
  @ApiProperty({ type: Date })
  createdAt: Date;

  @Expose({ groups: ['portfolio.timestamps'] })
  @ApiProperty({ type: Date })
  updatedAt: Date;
}
