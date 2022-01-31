import { AxiosRequestConfig } from 'axios';
import { api } from '#apis/index';

export function getProfile(config?: AxiosRequestConfig) {
  const endpoint = '/profile';
  return api.get(endpoint, config);
}
