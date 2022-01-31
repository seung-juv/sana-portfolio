import { AxiosResponse } from 'axios';
import { IFile, postFilesUpload } from '#apis/files';

function uploadFiles(file: File): Promise<AxiosResponse<IFile>> {
  const formData = new FormData();
  formData.append('file', file);
  return postFilesUpload(formData);
}

export default uploadFiles;
