import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useFetchStatus } from '../../hooks/useFetchStatus';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { LangSwitcher } from '../../components/LangSwitcher';
import { LoginForm, ILoginFormProps } from '../../components/auth/LoginForm';
import { ContentMessage, IContentMessageProps } from '../../components/ContentMessage';
import { SocialButtons } from '../../components/SocialButtons';
import { Requirements } from '../../components/requirements';

export const Login: React.FC = () => {
  const { t } = useTranslation();
  const { fetchLogin, login, clearLogin } = useActions();
  const { loading, error, message, token } = useTypedSelector((state) => state.auth.login);
  const { send, success } = useFetchStatus(loading, error, message);
  const loginFormProps: ILoginFormProps = {
    loading,
    token,
    login,
    clearLogin,
    fetchLogin,
  };

  const contentMessageProps: IContentMessageProps = {
    show: send,
    error,
    message,
  };

  return (
    <div className="content content__auth content__auth--login">
      <LangSwitcher />

      <div className="block">
        <h1>{t('Sign in')}</h1>

        <ContentMessage {...contentMessageProps} />

        {!success && (
          <>
            <LoginForm {...loginFormProps} />
            <SocialButtons />
          </>
        )}

        <div className="content__links">
          <Link to="/forgot">{t('Forgot your password?')}</Link>
          <Link to="/register">{t('Register here')}</Link>
        </div>
      </div>

      <Requirements />
    </div>
  );
};
