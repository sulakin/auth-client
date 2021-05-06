export interface ForgotState {
  loading: boolean;
  error: boolean;
  message: string;
}

export enum ForgotActionTypes {
  FORGOT_FETCH = 'AUTH/FORGOT_FETCH',
  FORGOT_FETCH_SUCCESS = 'AUTH/FORGOT_FETCH_SUCCESS',
  FORGOT_FETCH_ERROR = 'AUTH/FORGOT_FETCH_ERROR',
}

interface ForgotFetchRequestAction {
  type: ForgotActionTypes.FORGOT_FETCH;
}

interface ForgotFetchSuccessAction {
  type: ForgotActionTypes.FORGOT_FETCH_SUCCESS;
  payload: {
    message: string;
  };
}

interface ForgotFetchErrorAction {
  type: ForgotActionTypes.FORGOT_FETCH_ERROR;
  payload: {
    message: string;
  };
}

export type ForgotAction =
  | ForgotFetchRequestAction
  | ForgotFetchSuccessAction
  | ForgotFetchErrorAction;
