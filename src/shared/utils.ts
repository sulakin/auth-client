import axios from 'axios';
import { HOST } from './constants';

export const requestApi = (url: string, data: object) => {
  const lang = localStorage.getItem('i18nextLng') || 'en';

  return axios(`${HOST}${url}`, {
    method: 'post',
    headers: { 'Accept-Language': lang },
    data,
  })
    .then(({ data }) => data)
    .catch(({ response }) => {
      return {
        ...response.data,
        message:
          response?.data?.message ||
          (lang === 'ru' ? 'Ошибка сервера, попробуйте позже' : 'Server error, please try later'),
        error: true,
      };
    });
};
