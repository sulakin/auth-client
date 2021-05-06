import { UserState, UserActionTypes, UserAction } from './userTypes';

const initialState: UserState = {
  token: null,
  email: null,
  provider: null,
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return { ...state, ...action.payload };
    case UserActionTypes.LOGOUT:
      return { ...initialState };
    default:
      return { ...state };
  }
};
