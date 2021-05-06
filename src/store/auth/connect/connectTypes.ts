export interface ConnectState {
  loading: boolean;
  error: boolean;
  message: string;
  token: string;
  email: string;
  provider: string;
}

export enum ConnectActionTypes {
  CONNECT_FETCH = 'AUTH/CONNECT_FETCH',
  CONNECT_FETCH_SUCCESS = 'AUTH/CONNECT_FETCH_SUCCESS',
  CONNECT_FETCH_ERROR = 'AUTH/CONNECT_FETCH_ERROR',
}

interface ConnectFetchRequestAction {
  type: ConnectActionTypes.CONNECT_FETCH;
}

interface ConnectFetchSuccessAction {
  type: ConnectActionTypes.CONNECT_FETCH_SUCCESS;
  payload: {
    message: string;
    token: string;
    email: string;
    provider: string;
  };
}

interface ConnectFetchErrorAction {
  type: ConnectActionTypes.CONNECT_FETCH_ERROR;
  payload: {
    message: string;
  };
}

export type ConnectAction =
  | ConnectFetchRequestAction
  | ConnectFetchSuccessAction
  | ConnectFetchErrorAction;
