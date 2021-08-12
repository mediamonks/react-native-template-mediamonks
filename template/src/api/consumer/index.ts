import { setup } from 'axios-cache-adapter';
import config from '../../config';
import requestInterceptor from '../interceptors/request';
import responseInterceptor from '../interceptors/response';

/**
 * Create an instance of the api check docs for usage of instance https://github.com/axios/axios
 */
const apiInstance = setup({
  timeout: config.DEFAULT_TIMEOUT,
  cache: {
    // Tell adapter to attempt using response headers
    readHeaders: true,
    // For this example to work we disable query exclusion
    exclude: { query: false },
  },
});

/**
 *
 */
// @ts-ignore
apiInstance.interceptors.request.use(requestInterceptor(apiInstance), error =>
  Promise.reject(error),
);

/**
 *
 */
apiInstance.interceptors.response.use(response => {
  const { url, baseURL } = response.config;
  console.log(
    '%c%s',
    'color: #7CFC00;',
    `Response config: ${url?.replace(baseURL || '', '')}`,
    response,
  );
  return response;
}, responseInterceptor());

export default apiInstance;
