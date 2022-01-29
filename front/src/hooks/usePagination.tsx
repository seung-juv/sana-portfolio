import React from 'react';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import useFetch from '#hooks/useFetch';
import { AxiosPaginatedRequestConfig, PaginatedDto } from '#apis/apis';

function usePagination<T = any>(
  fetch: (config: AxiosPaginatedRequestConfig) => Promise<AxiosResponse<PaginatedDto<T>>>,
  config: AxiosRequestConfig = {},
) {
  const _fetch = useFetch<PaginatedDto<T>>();
  const [data, setData] = React.useState<Array<T>>([]);
  const { loading } = _fetch;
  const { pageInfo } = _fetch.data ?? {};

  async function loadData() {
    const { page, hasNext } = pageInfo ?? { page: -1 };
    if (loading || hasNext === false) {
      return;
    }

    const _config = { ...config, params: { page: page + 1, ...(config?.params ?? {}) } };

    const { data: responseData } = await _fetch.fetch(fetch(_config));

    setData((prevState) => [...prevState, ...responseData.results]);
  }

  function clear() {
    _fetch.clear();
    setData([]);
  }

  return { pageInfo, data, loadData, clear, loading };
}

export default usePagination;
