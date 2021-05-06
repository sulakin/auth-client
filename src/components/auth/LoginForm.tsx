import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader } from '../Loader';

export interface ILoginFormProps {
  loading: boolean;
  token: string;
  login: (token: string, email: string) => void;
  fetchLogin: (email: string, password: string) => void;
  clearLogin: () => void;
}

export const LoginForm: React.FC<ILoginFormProps> = ({
  loading,
  token,
  login,
  fetchLogin,
  clearLogin,
}) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!!token) {
      login(token, email);
      clearLogin();
    }
  }, [login, token, email, clearLogin]);

  const loginHandler = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent> | React.KeyboardEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    fetchLogin(email, password);
  };

  return (
    <form
      onKeyPress={(e) => {
        if (e.key === 'Enter') loginHandler(e);
      }}
    >
      {loading && <Loader />}
      <input
        value={email}
        type="text"
        name="email"
        disabled={loading}
        placeholder={t('Email')}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        value={password}
        type="password"
        name="password"
        disabled={loading}
        placeholder={t('Password')}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="submit"
        value={`${t('Sign in')}`}
        disabled={loading}
        onClick={(e) => loginHandler(e)}
      />
    </form>
  );
};
