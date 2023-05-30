import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AxiosPaginatedRequestConfig, PaginatedDto } from '#apis/apis';
import { IUser } from '#apis/users';
import { api } from '#apis/index';

export interface IPortfolio {
  id: string;
  user: IUser;
  thumbnail: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
  image7: string;
  image8: string;
  image9: string;
  image10: string;
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
  thumbnail: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
  image7: string;
  image8: string;
  image9: string;
  image10: string;
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

export interface UpdatePortfolioDto {
  thumbnail: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
  image7: string;
  image8: string;
  image9: string;
  image10: string;
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

export function createPortfolio(createPortfolioDto: CreatePortfolioDto): Promise<AxiosResponse<IPortfolio>> {
  const endpoint = '/api/portfolios';
  return api.post(endpoint, createPortfolioDto);
}

export function getPortfolio(id: string, config?: AxiosRequestConfig): Promise<AxiosResponse<IPortfolio>> {
  const endpoint = `/api/portfolios/${id}`;
  return api.get(endpoint, config);
}

export function getPortfolios(config: AxiosPaginatedRequestConfig): Promise<AxiosResponse<PaginatedDto<IPortfolio>>> {
  const endpoint = '/api/portfolios';
  return api.get(endpoint, config);
}

export function updatePortfolio(
  id: string,
  updatePortfolioDto: UpdatePortfolioDto,
): Promise<AxiosResponse<IPortfolio>> {
  const endpoint = `/api/portfolios/${id}`;
  return api.put(endpoint, updatePortfolioDto);
}
