import { deleteEmptyProperty, trimObjectValues } from '@/utils/common';

export const trimRequestInterceptors: [any, any] = [
  (config: any) => {
    if (config.method === 'get') {
      trimObjectValues(config.params);
      deleteEmptyProperty(config.params);
    } else if (config.method === 'post') {
      trimObjectValues(config.data);
      deleteEmptyProperty(config.data);
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
];
