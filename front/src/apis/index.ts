import axios from 'axios';
import { Token } from '#apis/auth';

export const TOKEN_TYPE = 'Bearer';

export const TOKEN_STORE_KEY = 'token';

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const api = axios.create({
  baseURL,
});

export function setToken(data?: Token | null): void {
  if (data?.access_token) {
    api.defaults.headers.common.authorization = `${TOKEN_TYPE} ${data.access_token}`;
    window.localStorage.setItem(TOKEN_STORE_KEY, JSON.stringify(data));
  } else {
    delete api.defaults.headers.common.authorization;
    window.localStorage.removeItem(TOKEN_STORE_KEY);
  }
}
