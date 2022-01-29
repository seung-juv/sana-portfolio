import { AxiosRequestConfig } from 'axios';

export interface PaginationDto {
  page: number;
  limit?: number;
  offset?: number;
}

export interface PageInfo {
  page: number;
  totalResults: number;
  limit: number;
  offset: number;
  resultsPerPage: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface PaginatedDto<TData> {
  pageInfo: PageInfo;
  results: TData[];
}

export interface AxiosPaginatedRequestConfig extends AxiosRequestConfig {
  params: PaginationDto;
}
