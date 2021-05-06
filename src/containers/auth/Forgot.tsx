import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { useFetchStatus } from '../../hooks/useFetchStatus';
import { LangSwitcher } from '../../components/LangSwitcher';
import { ForgotForm, IForgotFormProps } from '../../components/auth/ForgotForm';
import { ContentMessage, IContentMessageProps } from '../../components/ContentMessage';
import { Requirements } from '../../components/requirements';

export const Forgot: React.FC = () => {
  const { t } = useTranslation();
  const { fetchForgot } = useActions();
  const { loading, error, message } = useTypedSelector((state) => state.auth.forgot);
  const { send, success } = useFetchStatus(loading, error, message);

  const forgotFormProps: IForgotFormProps = {
    loading,
    fetchForgot,
  };

  const contentMessageProps: IContentMessageProps = {
    show: send,
    error,
    message,
  };

  return (
    <div className="content content__auth content__auth--forgot">
      <LangSwitcher />

      <div className="block">
        <h1>{t('Access recovery')}</h1>

        {loading && <div className="content__message">{t('Sending email, please wait...')}</div>}

        <ContentMessage {...contentMessageProps} />

        {!success && <ForgotForm {...forgotFormProps} />}

        <div className="content__links">
          <Link to="/">{t('Sign in')}</Link>
        </div>
      </div>

      <Requirements />
    </div>
  );
};
