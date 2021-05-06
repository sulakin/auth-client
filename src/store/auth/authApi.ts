import { requestApi } from '../../shared/utils';

export const authApiLogin = (email: string, password: string) => {
  return requestApi('auth/login', { email, password });
};

export const authApiRegister = (email: string, password: string) => {
  return requestApi('auth/register', { email, password });
};

export const authApiForgot = (email: string) => {
  return requestApi('auth/forgot', { email });
};

export const authApiReset = (confirm_token: string, password: string) => {
  return requestApi('auth/reset', { confirm_token, password });
};

export const authApiConfirm = (token: string) => {
  return requestApi('auth/confirm', { token });
};

export const authApiConnect = (code: string, provider: string) => {
  return requestApi(`auth/connect/${provider}`, { code });
};
