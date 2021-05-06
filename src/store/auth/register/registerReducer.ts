import { RegisterState, RegisterActionTypes, RegisterAction } from './registerTypes';

const initialState: RegisterState = {
  loading: false,
  error: false,
  message: '',
  token: '',
};

export const registerReducer = (state = initialState, action: RegisterAction): RegisterState => {
  switch (action.type) {
    case RegisterActionTypes.REGISTER_FETCH:
      return { loading: true, error: false, message: '', token: '' };
    case RegisterActionTypes.REGISTER_FETCH_SUCCESS:
      return { loading: false, error: false, ...action.payload };
    case RegisterActionTypes.REGISTER_FETCH_ERROR:
      return { loading: false, error: true, token: '', ...action.payload };
    default:
      return state;
  }
};
