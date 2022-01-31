import { UserEntity } from '#models/users/serializers/users.serializer';
import { PortfoliosRepository } from './portfolios.repository';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginatedDto } from '#common/dtos/paginated.dto';
import { PortfolioEntity } from './serializers/portfolios.serializer';
import { CreatePortfolioDto, UpdatePorfolioDto } from './dto/portfolios.dto';
import { PaginationDto } from '#common/dtos/paginated.dto';

@Injectable()
export class PortfoliosService {
  constructor(
    @InjectRepository(PortfoliosRepository)
    private readonly portfoliosRepository: PortfoliosRepository,
  ) {}

  async create(
    createPortfolioDto: CreatePortfolioDto,
    user: UserEntity,
  ): Promise<PortfolioEntity> {
    return await this.portfoliosRepository.createEntity(
      { user, ...createPortfolioDto },
      [
        'user',
        'thumbnail',
        'image1',
        'image2',
        'image3',
        'image4',
        'image5',
        'image6',
        'image7',
        'image8',
        'image9',
        'image10',
      ],
    );
  }

  async getAll(
    paginationDto: PaginationDto,
    relations: string[] = [],
  ): Promise<PaginatedDto<PortfolioEntity>> {
    return await this.portfoliosRepository.getAll({
      where: { isActive: true },
      pagination: {
        pageable: true,
        ...paginationDto,
      },
      order: {
        startAt: 'DESC',
      },
      relations,
    });
  }

  async get(id: string, relations: string[] = []): Promise<PortfolioEntity> {
    return await this.portfoliosRepository.get(id, relations, true);
  }

  async update(
    id: string,
    updatePorfolioDto: UpdatePorfolioDto,
  ): Promise<PortfolioEntity | null> {
    const user = await this.get(id, []);

    if (!Boolean(user)) {
      throw new HttpException('Unregistered User', HttpStatus.UNAUTHORIZED);
    }

    return await this.portfoliosRepository.updateEntity(
      user,
      updatePorfolioDto,
      [
        'user',
        'thumbnail',
        'image1',
        'image2',
        'image3',
        'image4',
        'image5',
        'image6',
        'image7',
        'image8',
        'image9',
        'image10',
      ],
    );
  }

  async delete(id: string, user: UserEntity): Promise<boolean> {
    const portfolio = await this.portfoliosRepository.get(id, ['user'], true);
    if (portfolio.user.id !== user.id) {
      throw new HttpException(`it's not your post.`, HttpStatus.FORBIDDEN);
    }
    const { affected } = await this.portfoliosRepository.delete({ id });
    if (affected < 1) {
      throw new HttpException('operation failed.', HttpStatus.CONFLICT);
    }
    return true;
  }
}
