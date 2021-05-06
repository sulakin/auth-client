export interface LoginState {
  loading: boolean;
  error: boolean;
  message: string;
  token: string;
}

export enum LoginActionTypes {
  LOGIN_FETCH = 'AUTH/LOGIN_FETCH',
  LOGIN_FETCH_SUCCESS = 'AUTH/LOGIN_FETCH_SUCCESS',
  LOGIN_FETCH_ERROR = 'AUTH/LOGIN_FETCH_ERROR',
  LOGIN_CLEAR = 'AUTH/LOGIN_CLEAR',
}

interface LoginFetchRequestAction {
  type: LoginActionTypes.LOGIN_FETCH;
}

interface LoginFetchSuccessAction {
  type: LoginActionTypes.LOGIN_FETCH_SUCCESS;
  payload: {
    message: string;
    token: string;
  };
}

interface LoginFetchErrorAction {
  type: LoginActionTypes.LOGIN_FETCH_ERROR;
  payload: {
    message: string;
  };
}

interface LoginClearAction {
  type: LoginActionTypes.LOGIN_CLEAR;
}

export type LoginAction =
  | LoginFetchRequestAction
  | LoginFetchSuccessAction
  | LoginFetchErrorAction
  | LoginClearAction;
