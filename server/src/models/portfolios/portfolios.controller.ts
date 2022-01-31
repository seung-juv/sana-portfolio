import { PaginationDto, PaginatedDto } from './../../common/dtos/paginated.dto';
import { CreatePortfolioDto, UpdatePorfolioDto } from './dto/portfolios.dto';
import {
  ApiQuery,
  ApiTags,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { PortfoliosService } from './portfolios.service';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  SerializeOptions,
  UseInterceptors,
} from '@nestjs/common';
import {
  defaultPortfolioGroupsForSerializing,
  PortfolioEntity,
} from './serializers/portfolios.serializer';
import { UserTypes } from '#common/decorators/metadata/user-types.decorator';

@ApiTags('portfolios')
@Controller('portfolios')
@SerializeOptions({
  groups: defaultPortfolioGroupsForSerializing,
})
export class PortfoliosController {
  constructor(private readonly portfoliosService: PortfoliosService) {}

  @ApiBearerAuth()
  @Post()
  @UserTypes('USER')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreatePortfolioDto,
  })
  async create(
    @Body() createPortfolioDto: CreatePortfolioDto,
    @Req() req,
  ): Promise<PortfolioEntity> {
    return this.portfoliosService.create(createPortfolioDto, req.user);
  }

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOkResponse({
    type: PaginatedDto,
  })
  async getAll(
    @Query() paginationDto: PaginationDto,
  ): Promise<PaginatedDto<PortfolioEntity>> {
    return this.portfoliosService.getAll(paginationDto, ['user', 'thumbnail']);
  }

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOkResponse({
    type: PortfolioEntity,
  })
  @ApiQuery({ name: 'id', type: 'string' })
  async get(@Param('id') id: string): Promise<PortfolioEntity> {
    return this.portfoliosService.get(id, ['user', 'thumbnail', 'image']);
  }

  @Put(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOkResponse({
    type: PortfolioEntity,
  })
  @ApiQuery({ name: 'id', type: 'string' })
  async update(
    @Query('id') id: string,
    @Body() UpdatePorfolioDto: UpdatePorfolioDto,
  ): Promise<PortfolioEntity | null> {
    return this.portfoliosService.update(id, UpdatePorfolioDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiQuery({ name: 'id', type: 'string' })
  async delete(@Query('id') id: string, @Req() req): Promise<boolean> {
    return this.portfoliosService.delete(id, req.user);
  }
}
