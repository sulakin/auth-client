import { Dispatch } from 'redux';
import { UserActionTypes, UserAction } from './userTypes';

export const login = (token: string, email?: string, provider?: string) => async (
  dispatch: Dispatch<UserAction>,
) => {
  dispatch({ type: UserActionTypes.LOGIN, payload: { token, email, provider } });
};

export const logout = () => async (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: UserActionTypes.LOGOUT });
};
