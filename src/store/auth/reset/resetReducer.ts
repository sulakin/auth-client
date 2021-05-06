import { ResetState, ResetActionTypes, ResetAction } from './resetTypes';

const initialState: ResetState = {
  loading: false,
  error: false,
  message: '',
  token: '',
};

export const resetReducer = (state = initialState, action: ResetAction): ResetState => {
  switch (action.type) {
    case ResetActionTypes.RESET_FETCH:
      return { loading: true, error: false, token: '', message: '' };
    case ResetActionTypes.RESET_FETCH_SUCCESS:
      return { loading: false, error: false, ...action.payload };
    case ResetActionTypes.RESET_FETCH_ERROR:
      return { loading: false, error: true, token: '', ...action.payload };
    default:
      return state;
  }
};
