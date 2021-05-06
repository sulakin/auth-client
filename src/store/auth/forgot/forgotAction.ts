import { Dispatch } from 'redux';
import { ForgotState, ForgotActionTypes, ForgotAction } from './forgotTypes';
import { authApiForgot } from '../authApi';

export const fetchForgot = (email: string) => {
  return async (dispatch: Dispatch<ForgotAction>) => {
    dispatch({ type: ForgotActionTypes.FORGOT_FETCH });

    const response: ForgotState = await authApiForgot(email);
    const { error, message } = response;

    if (error) {
      return dispatch({
        type: ForgotActionTypes.FORGOT_FETCH_ERROR,
        payload: { message },
      });
    }

    dispatch({ type: ForgotActionTypes.FORGOT_FETCH_SUCCESS, payload: { message } });
  };
};
