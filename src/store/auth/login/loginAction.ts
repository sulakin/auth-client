import { Dispatch } from 'redux';
import { LoginState, LoginActionTypes, LoginAction } from './loginTypes';
import { authApiLogin } from '../authApi';

export const fetchLogin = (email: string, password: string) => {
  return async (dispatch: Dispatch<LoginAction>) => {
    dispatch({ type: LoginActionTypes.LOGIN_FETCH });

    const response: LoginState = await authApiLogin(email, password);
    const { error, token, message } = response;

    if (error) {
      return dispatch({
        type: LoginActionTypes.LOGIN_FETCH_ERROR,
        payload: { message },
      });
    }

    dispatch({ type: LoginActionTypes.LOGIN_FETCH_SUCCESS, payload: { message, token } });
  };
};

export const clearLogin = () => {
  return async (dispatch: Dispatch<LoginAction>) => {
    dispatch({ type: LoginActionTypes.LOGIN_CLEAR });
  };
};
