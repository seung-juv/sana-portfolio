import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { api } from '#apis/index';

export interface IFile {
  id: string;
  uri: string;
  filename: string;
  mimetype: string;
}

export function postFilesUpload(data: FormData, config?: AxiosRequestConfig): Promise<AxiosResponse<IFile>> {
  const endpoint = '/files/upload';
  return api.post(endpoint, data, config);
}
