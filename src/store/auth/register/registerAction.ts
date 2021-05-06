import { Dispatch } from 'redux';
import { RegisterState, RegisterActionTypes, RegisterAction } from './registerTypes';
import { authApiRegister } from '../authApi';

export const fetchRegister = (email: string, password: string) => {
  return async (dispatch: Dispatch<RegisterAction>) => {
    dispatch({ type: RegisterActionTypes.REGISTER_FETCH });

    const response: RegisterState = await authApiRegister(email, password);
    const { error, token, message } = response;

    if (error) {
      return dispatch({
        type: RegisterActionTypes.REGISTER_FETCH_ERROR,
        payload: { message },
      });
    }

    dispatch({ type: RegisterActionTypes.REGISTER_FETCH_SUCCESS, payload: { message, token } });
  };
};
