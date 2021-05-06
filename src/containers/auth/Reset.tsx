import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useFetchStatus } from '../../hooks/useFetchStatus';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { LangSwitcher } from '../../components/LangSwitcher';
import { ResetForm, IResetFormProps } from '../../components/auth/ResetForm';
import { ContentMessage, IContentMessageProps } from '../../components/ContentMessage';

export const Reset: React.FC = () => {
  const { t } = useTranslation();
  const { fetchReset } = useActions();
  const { loading, error, message } = useTypedSelector((state) => state.auth.reset);
  const { send, success } = useFetchStatus(loading, error, message);

  const resetFormProps: IResetFormProps = {
    loading,
    fetchReset,
  };

  const contentMessageProps: IContentMessageProps = {
    show: send,
    error,
    message,
  };

  return (
    <div className="content content__auth content__auth--reset">
      <LangSwitcher />

      <div className="block">
        <h1>{t('Password reset')}</h1>

        <ContentMessage {...contentMessageProps} />

        {!success && <ResetForm {...resetFormProps} />}

        <div className="content__links">
          <Link to="/">{t('Sign in')}</Link>
        </div>
      </div>
    </div>
  );
};
