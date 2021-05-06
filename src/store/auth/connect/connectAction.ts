import { Dispatch } from 'redux';
import { ConnectState, ConnectActionTypes, ConnectAction } from './connectTypes';
import { authApiConnect } from '../authApi';

export const fetchConnect = (code: string, provider: string) => {
  return async (dispatch: Dispatch<ConnectAction>) => {
    dispatch({ type: ConnectActionTypes.CONNECT_FETCH });

    const response: ConnectState = await authApiConnect(code, provider);
    const { error, token, message, email } = response;

    if (error) {
      return dispatch({
        type: ConnectActionTypes.CONNECT_FETCH_ERROR,
        payload: { message },
      });
    }

    dispatch({
      type: ConnectActionTypes.CONNECT_FETCH_SUCCESS,
      payload: { message, token, provider, email },
    });
  };
};
