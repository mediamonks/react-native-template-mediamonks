import { AxiosRequestConfig } from 'axios';
import apiInstance from './consumer';

interface Props extends AxiosRequestConfig {
  endpoint: string;
  body?: {} | null;
}

/**
 *
 * @param method
 * @param actionType
 * @param endpoint
 * @param params
 * @param body
 */
export const apiRequest = ({ method, endpoint, params = null, body = null, headers = {} }: Props) =>
  apiInstance
    .request({
      url: endpoint,
      headers: {
        ...apiInstance.defaults.headers,
        ...headers,
      },
      method,
      params,
      data: body,
    })
    .then(response => response)
    .catch(error => {
      if (error.response) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error.message);
    });
/**
 * Wrapper actions for API Requests
 */
export const apiGet = ({ endpoint, headers, params, body }: Props) =>
  apiRequest({
    method: 'GET',
    endpoint,
    headers,
    params,
    body,
  });

export const apiPost = ({ endpoint, headers, params, body }: Props) =>
  apiRequest({
    method: 'POST',
    endpoint,
    headers,
    params,
    body,
  });

export const apiPut = ({ endpoint, headers, params, body }: Props) =>
  apiRequest({
    method: 'PUT',
    endpoint,
    headers,
    params,
    body,
  });

export const apiDelete = ({ endpoint, headers, params, body }: Props) =>
  apiRequest({
    method: 'DELETE',
    endpoint,
    headers,
    params,
    body,
  });
