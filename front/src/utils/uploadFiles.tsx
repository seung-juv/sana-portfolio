import axios, { AxiosResponse } from 'axios';

interface IFile {
  id: string;
  uri: string;
  path: string;
  filename: string;
  mimetype: string;
  size: number;
  createdAt: string;
}

function uploadFiles(file: File): Promise<AxiosResponse<IFile>> {
  const formData = new FormData();
  formData.append('file', file);
  return axios.post<IFile>('https://storage.seung-ju.com/api/storages', formData);
}

export default uploadFiles;
