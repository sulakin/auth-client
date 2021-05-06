import { LoginState, LoginActionTypes, LoginAction } from './loginTypes';

const initialState: LoginState = {
  loading: false,
  error: false,
  message: '',
  token: '',
};

export const loginReducer = (state = initialState, action: LoginAction): LoginState => {
  switch (action.type) {
    case LoginActionTypes.LOGIN_FETCH:
      return { loading: true, error: false, token: '', message: '' };
    case LoginActionTypes.LOGIN_FETCH_SUCCESS:
      return { loading: false, error: false, ...action.payload };
    case LoginActionTypes.LOGIN_FETCH_ERROR:
      return { loading: false, error: true, token: '', ...action.payload };
    case LoginActionTypes.LOGIN_CLEAR:
      return { ...initialState };
    default:
      return state;
  }
};
