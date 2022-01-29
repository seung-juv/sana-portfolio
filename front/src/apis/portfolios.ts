import { AxiosResponse } from 'axios';
import { AxiosPaginatedRequestConfig, PaginatedDto } from '#apis/apis';
import { IUser } from '#apis/users';
import { IFile } from '#apis/files';
import { api } from '#apis/index';

export interface IPortfolio {
  id: number;
  user: IUser;
  thumbnail: IFile;
  title: string;
  subTitle: string;
  url: string;
  startAt: Date;
  endAt: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export function getPortfolios(config: AxiosPaginatedRequestConfig): Promise<AxiosResponse<PaginatedDto<IPortfolio>>> {
  const endpoint = '/portfolios';
  return api.get(endpoint, config);
}
