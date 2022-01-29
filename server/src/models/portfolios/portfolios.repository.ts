import { NotFoundException } from '@nestjs/common';
import { EntityRepository, DeepPartial } from 'typeorm';
import { Portfolio } from './entities/portfolios.entity';
import { ModelRepository } from '../model.repository';
import {
  allPortfolioGroupsForSerializing,
  PortfolioEntity,
} from './serializers/portfolios.serializer';
import {
  classToPlain,
  ClassTransformOptions,
  plainToClass,
} from 'class-transformer';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@EntityRepository(Portfolio)
export class PortfoliosRepository extends ModelRepository<
  Portfolio,
  PortfolioEntity
> {
  transform(model: Portfolio): PortfolioEntity {
    const tranformOptions: ClassTransformOptions = {
      groups: allPortfolioGroupsForSerializing,
    };
    return plainToClass(
      PortfolioEntity,
      classToPlain(model, tranformOptions),
      tranformOptions,
    );
  }
  transformMany(models: Portfolio[]): PortfolioEntity[] {
    return models.map((model) => this.transform(model));
  }
}
