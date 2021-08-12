import { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';
import { getLocalizedString } from '../../utils/LocalizedUtils';

const localizedCopy = (value: string) => getLocalizedString({ key: 'general.errors', value });

export interface AxiosRequestWithRetryConfig extends AxiosRequestConfig {
  _retry: boolean;
}

const responseInterceptor = () => async (error: AxiosError) => {
  console.log('%c%s', 'color: #FF0000;', 'Response ERROR Configuration: ', error, error.message, error?.config, error.response);
  const errorResponse: AxiosResponse | undefined = error?.response;

  if (error.code === 'ECONNABORTED') {
    // TODO handle timeout error
  }
  const originalRequest = error.config as AxiosRequestWithRetryConfig;
  const errorResponseStatus = errorResponse?.status || 0;

  if (errorResponseStatus === 401 && !originalRequest._retry) {
    // TODO handle unauthorized
  }

  // Exclude these status codes from showing an error banner
  if (errorResponseStatus === 404 || (errorResponseStatus >= 300 && errorResponseStatus < 400)) {
    throw Error(localizedCopy('informationNotFound'));
  }
  const errorMessage =
    error?.response?.data?.error?.fields?.[0]?.message ||
    error?.response?.data?.error?.message ||
    localizedCopy('default');

  throw Error(errorMessage);
};

export default responseInterceptor;
