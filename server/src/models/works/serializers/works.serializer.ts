import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IWork } from '../interfaces/works.interface';
import { ModelEntity } from '#common/serializers/model.serializer';
import { User } from '#models/users/entities/users.entity';

export const defaultWorkGroupsForSerializing: string[] = ['work.timestamps'];

export const allWorkGroupsForSerializing: string[] = [
  ...defaultWorkGroupsForSerializing,
  'work.is_active',
];

export class WorkEntity extends ModelEntity implements IWork {
  @ApiProperty({ type: () => User })
  user: User;

  @Expose({ groups: ['work.is_active'] })
  @ApiProperty({ type: Boolean })
  isActive: boolean;

  @Expose({ groups: ['work.timestamps'] })
  @ApiProperty({ type: Date })
  createdAt: Date;

  @Expose({ groups: ['work.timestamps'] })
  @ApiProperty({ type: Date })
  updatedAt: Date;
}
