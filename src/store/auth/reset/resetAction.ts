import { Dispatch } from 'redux';
import { ResetState, ResetActionTypes, ResetAction } from './resetTypes';
import { authApiReset } from '../authApi';

export const fetchReset = (confirm_token: string, password: string) => {
  return async (dispatch: Dispatch<ResetAction>) => {
    dispatch({ type: ResetActionTypes.RESET_FETCH });

    const response: ResetState = await authApiReset(confirm_token, password);
    const { error, token, message } = response;

    if (error) {
      return dispatch({
        type: ResetActionTypes.RESET_FETCH_ERROR,
        payload: { message },
      });
    }

    dispatch({ type: ResetActionTypes.RESET_FETCH_SUCCESS, payload: { message, token } });
  };
};
