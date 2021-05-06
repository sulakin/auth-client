export interface ConfirmState {
  loading: boolean;
  error: boolean;
  message: string;
}

export enum ConfirmActionTypes {
  CONFIRM_FETCH = 'AUTH/CONFIRM_FETCH',
  CONFIRM_FETCH_SUCCESS = 'AUTH/CONFIRM_FETCH_SUCCESS',
  CONFIRM_FETCH_ERROR = 'AUTH/CONFIRM_FETCH_ERROR',
}

interface ConfirmFetchRequestAction {
  type: ConfirmActionTypes.CONFIRM_FETCH;
}

interface ConfirmFetchSuccessAction {
  type: ConfirmActionTypes.CONFIRM_FETCH_SUCCESS;
  payload: {
    message: string;
  };
}

interface ConfirmFetchErrorAction {
  type: ConfirmActionTypes.CONFIRM_FETCH_ERROR;
  payload: {
    message: string;
  };
}

export type ConfirmAction =
  | ConfirmFetchRequestAction
  | ConfirmFetchSuccessAction
  | ConfirmFetchErrorAction;
