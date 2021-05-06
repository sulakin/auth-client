import AuthActionCreators from './auth/authActionCreators';
import * as UserActionCreators from './user/userAction';

const ActionCreators = {
  ...AuthActionCreators,
  ...UserActionCreators,
};

export default ActionCreators;
