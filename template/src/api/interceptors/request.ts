import { AxiosRequestConfig } from 'axios';

const requestInterceptor = () => async (config: AxiosRequestConfig & { _retry: boolean }) => {
  console.log('%c%s', 'color: #6699FF;', 'Request Configuration: ', config);
  return config;
};

export default requestInterceptor;
