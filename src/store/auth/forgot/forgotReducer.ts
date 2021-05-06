import { ForgotState, ForgotActionTypes, ForgotAction } from './forgotTypes';

const initialState: ForgotState = {
  loading: false,
  error: false,
  message: '',
};

export const forgotReducer = (state = initialState, action: ForgotAction): ForgotState => {
  switch (action.type) {
    case ForgotActionTypes.FORGOT_FETCH:
      return { loading: true, error: false, message: '' };
    case ForgotActionTypes.FORGOT_FETCH_SUCCESS:
      return { loading: false, error: false, ...action.payload };
    case ForgotActionTypes.FORGOT_FETCH_ERROR:
      return { loading: false, error: true, ...action.payload };
    default:
      return state;
  }
};
