export interface ResetState {
  loading: boolean;
  error: boolean;
  message: string;
  token: string;
}

export enum ResetActionTypes {
  RESET_FETCH = 'AUTH/RESET_FETCH',
  RESET_FETCH_SUCCESS = 'AUTH/RESET_FETCH_SUCCESS',
  RESET_FETCH_ERROR = 'AUTH/RESET_FETCH_ERROR',
}

interface ResetFetchRequestAction {
  type: ResetActionTypes.RESET_FETCH;
}

interface ResetFetchSuccessAction {
  type: ResetActionTypes.RESET_FETCH_SUCCESS;
  payload: {
    message: string;
    token: string;
  };
}

interface ResetFetchErrorAction {
  type: ResetActionTypes.RESET_FETCH_ERROR;
  payload: {
    message: string;
  };
}

export type ResetAction = ResetFetchRequestAction | ResetFetchSuccessAction | ResetFetchErrorAction;
