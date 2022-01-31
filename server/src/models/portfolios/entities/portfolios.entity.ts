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

  @ManyToOne(() => File, (file) => file.id, { nullable: false })
  @JoinColumn({ name: 'thumbnail', referencedColumnName: 'id' })
  @ApiProperty({ type: () => File })
  thumbnail: File;

  @ManyToOne(() => File, (file) => file.id, { nullable: true })
  @JoinColumn({ name: 'image', referencedColumnName: 'id' })
  @ApiProperty({ type: () => File })
  image: File;

  @ManyToOne(() => File, (file) => file.id, { nullable: true })
  @JoinColumn({ name: 'image_1', referencedColumnName: 'id' })
  @ApiProperty({ type: () => File })
  image1: File;

  @ManyToOne(() => File, (file) => file.id, { nullable: true })
  @JoinColumn({ name: 'image_2', referencedColumnName: 'id' })
  @ApiProperty({ type: () => File })
  image2: File;

  @ManyToOne(() => File, (file) => file.id, { nullable: true })
  @JoinColumn({ name: 'image_3', referencedColumnName: 'id' })
  @ApiProperty({ type: () => File })
  image3: File;

  @ManyToOne(() => File, (file) => file.id, { nullable: true })
  @JoinColumn({ name: 'image_4', referencedColumnName: 'id' })
  @ApiProperty({ type: () => File })
  image4: File;

  @ManyToOne(() => File, (file) => file.id, { nullable: true })
  @JoinColumn({ name: 'image_5', referencedColumnName: 'id' })
  @ApiProperty({ type: () => File })
  image5: File;

  @ManyToOne(() => File, (file) => file.id, { nullable: true })
  @JoinColumn({ name: 'image_6', referencedColumnName: 'id' })
  @ApiProperty({ type: () => File })
  image6: File;

  @ManyToOne(() => File, (file) => file.id, { nullable: true })
  @JoinColumn({ name: 'image_7', referencedColumnName: 'id' })
  @ApiProperty({ type: () => File })
  image7: File;

  @ManyToOne(() => File, (file) => file.id, { nullable: true })
  @JoinColumn({ name: 'image_8', referencedColumnName: 'id' })
  @ApiProperty({ type: () => File })
  image8: File;

  @ManyToOne(() => File, (file) => file.id, { nullable: true })
  @JoinColumn({ name: 'image_9', referencedColumnName: 'id' })
  @ApiProperty({ type: () => File })
  image9: File;

  @ManyToOne(() => File, (file) => file.id, { nullable: true })
  @JoinColumn({ name: 'image_10', referencedColumnName: 'id' })
  @ApiProperty({ type: () => File })
  image10: File;


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
