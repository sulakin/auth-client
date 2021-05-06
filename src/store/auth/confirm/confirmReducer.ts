import { ConfirmState, ConfirmActionTypes, ConfirmAction } from './confirmTypes';

const initialState: ConfirmState = {
  loading: false,
  error: false,
  message: '',
};

export const confirmReducer = (state = initialState, action: ConfirmAction): ConfirmState => {
  switch (action.type) {
    case ConfirmActionTypes.CONFIRM_FETCH:
      return { loading: true, error: false, message: '' };
    case ConfirmActionTypes.CONFIRM_FETCH_SUCCESS:
      return { loading: false, error: false, ...action.payload };
    case ConfirmActionTypes.CONFIRM_FETCH_ERROR:
      return { loading: false, error: true, ...action.payload };
    default:
      return state;
  }
};
