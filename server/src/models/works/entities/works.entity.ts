import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IWork } from '../interfaces/works.interface';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '#models/users/entities/users.entity';

@Entity({ name: 'works' })
export class Work implements IWork {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ type: String })
  id: string;

  @ManyToOne(() => User, (user) => user.id, { nullable: false })
  @JoinColumn({ name: 'user', referencedColumnName: 'id' })
  @ApiProperty({ type: () => User })
  user: User;

  @Column({
    name: 'is_active',
    type: 'boolean',
    default: false,
    nullable: false,
  })
  @ApiProperty({ type: Boolean })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty({ type: Boolean })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  @ApiProperty({ type: Boolean })
  updatedAt: Date;
}
