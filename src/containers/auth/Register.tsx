import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useFetchStatus } from '../../hooks/useFetchStatus';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { LangSwitcher } from '../../components/LangSwitcher';
import { RegisterForm, IRegisterFormProps } from '../../components/auth/RegisterForm';
import { SocialButtons } from '../../components/SocialButtons';
import { ContentMessage, IContentMessageProps } from '../../components/ContentMessage';

export const Register: React.FC = () => {
  const { t } = useTranslation();
  const { fetchRegister } = useActions();
  const { loading, error, message } = useTypedSelector((state) => state.auth.register);
  const { send, success } = useFetchStatus(loading, error, message);

  const registerFormProps: IRegisterFormProps = {
    loading,
    fetchRegister,
  };

  const contentMessageProps: IContentMessageProps = {
    show: send,
    error,
    message,
  };

  return (
    <div className="content content__auth content__auth--register">
      <LangSwitcher />

      <div className="block">
        <h1>{t('Register')}</h1>

        <ContentMessage {...contentMessageProps} />

        {!success && (
          <>
            <RegisterForm {...registerFormProps} />
            <SocialButtons />
          </>
        )}

        <div className="content__links">
          <Link to="/">{t('Already registered? Sign in')}</Link>
        </div>
      </div>
    </div>
  );
};
