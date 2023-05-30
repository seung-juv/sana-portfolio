import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IPortfolio } from '../interfaces/portfolios.interface';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '#models/users/entities/users.entity';

@Entity({ name: 'portfolios' })
export class Portfolio implements IPortfolio {
  @PrimaryGeneratedColumn()
  @ApiProperty({ type: String })
  id: string;

  @ManyToOne(() => User, (user) => user.id, { nullable: false })
  user: User;

  @Column({ type: 'text', nullable: true })
  thumbnail: string;

  @Column({ type: 'text', nullable: true })
  image: string;

  @Column({ type: 'text', nullable: true })
  image1: string;

  @Column({ type: 'text', nullable: true })
  image2: string;

  @Column({ type: 'text', nullable: true })
  image3: string;

  @Column({ type: 'text', nullable: true })
  image4: string;

  @Column({ type: 'text', nullable: true })
  image5: string;

  @Column({ type: 'text', nullable: true })
  image6: string;

  @Column({ type: 'text', nullable: true })
  image7: string;

  @Column({ type: 'text', nullable: true })
  image8: string;

  @Column({ type: 'text', nullable: true })
  image9: string;

  @Column({ type: 'text', nullable: true })
  image10: string;

  @Column({ type: 'text', nullable: false })
  @ApiProperty({ type: String })
  category: string;

  @Column({ type: 'text', nullable: false })
  @ApiProperty({ type: String })
  title: string;

  @Column({ type: 'text', nullable: true })
  @ApiProperty({ type: String })
  description: string;

  @Column({ type: 'text', nullable: true })
  @ApiProperty({ type: String })
  size: string;

  @Column({ type: 'text', nullable: true })
  @ApiProperty({ type: String })
  program: string;

  @Column({ type: 'text', nullable: true })
  @ApiProperty({ type: String })
  etc: string;

  @Column({ type: 'text', nullable: true })
  @ApiProperty({ type: String })
  contents: string;

  @Column({ name: 'redirect_url', type: 'text', nullable: true })
  @ApiProperty({ type: String })
  redirectUrl: string;

  @Column({ name: 'youtube_id', type: 'text', nullable: true })
  @ApiProperty({ type: String })
  youtubeId: string;

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
