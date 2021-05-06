export interface UserState {
  token: string | null;
  email?: string | null;
  provider?: string | null;
}

export enum UserActionTypes {
  LOGIN = 'USER/LOGIN',
  LOGOUT = 'USER/LOGOUT',
}

interface UserLoginAction {
  type: UserActionTypes.LOGIN;
  payload: {
    token: string;
    email?: string;
    provider?: string | null;
  };
}

interface UserLogoutAction {
  type: UserActionTypes.LOGOUT;
}

export type UserAction = UserLoginAction | UserLogoutAction;
