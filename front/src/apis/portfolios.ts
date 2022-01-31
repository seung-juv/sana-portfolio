import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AxiosPaginatedRequestConfig, PaginatedDto } from '#apis/apis';
import { IUser } from '#apis/users';
import { IFile } from '#apis/files';
import { api } from '#apis/index';

export interface IPortfolio {
  id: string;
  user: IUser;
  thumbnail: IFile;
  image: IFile;
  category: string;
  title: string;
  description: string;
  size: string;
  program: string;
  etc: string;
  contents: string;
  redirectUrl: string;
  youtubeId: string;
  startAt: Date;
  endAt: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreatePortfolioDto {
  thumbnail: IFile;
  image: IFile;
  category: string;
  title: string;
  description: string;
  size: string;
  program: string;
  etc: string;
  contents: string;
  redirectUrl: string;
  youtubeId: string;
  startAt: Date;
  endAt: Date;
  isActive: boolean;
}

export function getPortfolio(
  id: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<IPortfolio>> {
  const endpoint = `/portfolios/${id}`;
  return api.get(endpoint, config);
}

export function getPortfolios(config: AxiosPaginatedRequestConfig): Promise<AxiosResponse<PaginatedDto<IPortfolio>>> {
  const endpoint = '/portfolios';
  return api.get(endpoint, config);
}

export function createPortfolios(
  createPortfolioDto: CreatePortfolioDto,
): Promise<AxiosResponse<PaginatedDto<IPortfolio>>> {
  const endpoint = '/portfolios';
  return api.post(endpoint, createPortfolioDto);
}
