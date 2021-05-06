import { Dispatch } from 'redux';
import { ConfirmState, ConfirmActionTypes, ConfirmAction } from './confirmTypes';
import { authApiConfirm } from '../authApi';

export const fetchConfirm = (token: string) => {
  return async (dispatch: Dispatch<ConfirmAction>) => {
    dispatch({ type: ConfirmActionTypes.CONFIRM_FETCH });

    const response: ConfirmState = await authApiConfirm(token);
    const { error, message } = response;

    if (error) {
      return dispatch({
        type: ConfirmActionTypes.CONFIRM_FETCH_ERROR,
        payload: { message },
      });
    }

    dispatch({ type: ConfirmActionTypes.CONFIRM_FETCH_SUCCESS, payload: { message } });
  };
};
