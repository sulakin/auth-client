import { ConnectState, ConnectActionTypes, ConnectAction } from './connectTypes';

const initialState: ConnectState = {
  loading: false,
  error: false,
  message: '',
  token: '',
  email: '',
  provider: '',
};

export const connectReducer = (state = initialState, action: ConnectAction): ConnectState => {
  switch (action.type) {
    case ConnectActionTypes.CONNECT_FETCH:
      return { loading: true, error: false, token: '', email: '', message: '', provider: '' };
    case ConnectActionTypes.CONNECT_FETCH_SUCCESS:
      return { loading: false, error: false, ...action.payload };
    case ConnectActionTypes.CONNECT_FETCH_ERROR:
      return { loading: false, error: true, token: '', email: '', provider: '', ...action.payload };
    default:
      return state;
  }
};
