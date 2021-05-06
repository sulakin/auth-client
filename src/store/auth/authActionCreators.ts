import * as LoginActionCreators from './login/loginAction';
import * as RegisterActionCreators from './register/registerAction';
import * as ForgotActionCreators from './forgot/forgotAction';
import * as ResetActionCreators from './reset/resetAction';
import * as ConfirmActionCreators from './confirm/confirmAction';
import * as ConnectActionCreators from './connect/connectAction';

const AuthActionCreators = {
  ...LoginActionCreators,
  ...RegisterActionCreators,
  ...ForgotActionCreators,
  ...ResetActionCreators,
  ...ConfirmActionCreators,
  ...ConnectActionCreators,
};

export default AuthActionCreators;
