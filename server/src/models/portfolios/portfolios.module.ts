import { Module } from '@nestjs/common';
import { PortfoliosService } from './portfolios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortfoliosRepository } from './portfolios.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PortfoliosRepository])],
  providers: [PortfoliosService],
  exports: [PortfoliosService],
})
export class PortfoliosModule {}
