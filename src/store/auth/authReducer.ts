import { combineReducers } from 'redux';
import { loginReducer } from './login/loginReducer';
import { registerReducer } from './register/registerReducer';
import { forgotReducer } from './forgot/forgotReducer';
import { resetReducer } from './reset/resetReducer';
import { confirmReducer } from './confirm/confirmReducer';
import { connectReducer } from './connect/connectReducer';

export const authReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  forgot: forgotReducer,
  reset: resetReducer,
  confirm: confirmReducer,
  connect: connectReducer,
});

export type AuthState = ReturnType<typeof authReducer>;
