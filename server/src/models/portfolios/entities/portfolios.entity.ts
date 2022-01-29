import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IPortfolio } from '../interfaces/portfolios.interface';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '#models/users/entities/users.entity';
import { File } from '#models/files/entities/files.entity';

@Entity({ name: 'portfolios' })
export class Portfolio implements IPortfolio {
  @PrimaryGeneratedColumn()
  @ApiProperty({ type: String })
  id: string;

  @ManyToOne(() => User, (user) => user.id, { nullable: false })
  @JoinColumn({ name: 'user', referencedColumnName: 'id' })
  @ApiProperty({ type: () => User })
  user: User;

  @ManyToOne(() => File, (file) => file.id)
  @JoinColumn({ name: 'thumbnail', referencedColumnName: 'id' })
  @ApiProperty({ type: () => File })
  thumbnail: File;

  @Column({ type: 'text', nullable: false })
  @ApiProperty({ type: String })
  title: string;

  @Column({ name: 'sub_title', type: 'text' })
  @ApiProperty({ type: String })
  subTitle: string;

  @Column({ type: 'text', nullable: true })
  @ApiProperty({ type: String })
  url: string;

  @Column({ name: 'start_at', type: 'timestamp' })
  @ApiProperty({ type: Date })
  startAt: Date;

  @Column({ name: 'end_at', type: 'timestamp' })
  @ApiProperty({ type: Date })
  endAt: Date;

  @Column({
    name: 'is_active',
    type: 'boolean',
    default: false,
    nullable: false,
  })
  @ApiProperty({ type: Boolean })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  @ApiProperty({ type: Date })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  @ApiProperty({ type: Date })
  updatedAt: Date;
}
