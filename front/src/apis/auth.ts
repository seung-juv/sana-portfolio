import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { api } from './index';

export interface PostAuthLoginRequestBody {
  username: string;
  password: string;
}

export interface Token {
  access_token: string | null;
  refresh_token: string | null;
}

export function postAuthLogin(
  data: PostAuthLoginRequestBody,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<Token>> {
  const endpoint = '/api/auth/login';
  return api.post(endpoint, data, config);
}
