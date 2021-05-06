export interface RegisterState {
  loading: boolean;
  error: boolean;
  message: string;
  token: string;
}

export enum RegisterActionTypes {
  REGISTER_FETCH = 'AUTH/REGISTER_FETCH',
  REGISTER_FETCH_SUCCESS = 'AUTH/REGISTER_FETCH_SUCCESS',
  REGISTER_FETCH_ERROR = 'AUTH/REGISTER_FETCH_ERROR',
}

interface RegisterFetchRequestAction {
  type: RegisterActionTypes.REGISTER_FETCH;
}

interface RegisterFetchSuccessAction {
  type: RegisterActionTypes.REGISTER_FETCH_SUCCESS;
  payload: {
    message: string;
    token: string;
  };
}

interface RegisterFetchErrorAction {
  type: RegisterActionTypes.REGISTER_FETCH_ERROR;
  payload: {
    message: string;
  };
}

export type RegisterAction =
  | RegisterFetchRequestAction
  | RegisterFetchSuccessAction
  | RegisterFetchErrorAction;
