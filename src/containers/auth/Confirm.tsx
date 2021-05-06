import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useSearchParam } from '../../hooks/useSearchParam';
import { useActions } from '../../hooks/useActions';
import { LangSwitcher } from '../../components/LangSwitcher';
import { ContentMessage, IContentMessageProps } from '../../components/ContentMessage';

export const Confirm: React.FC = () => {
  const { t } = useTranslation();
  const token = useSearchParam('token');
  const { fetchConfirm } = useActions();
  const { loading, message, error } = useTypedSelector((state) => state.auth.confirm);

  useEffect(() => {
    if (token) {
      fetchConfirm(token);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const contentMessageProps: IContentMessageProps = {
    show: !loading,
    error,
    message,
  };

  return (
    <div className="content content__auth content__auth--login">
      <LangSwitcher />

      <div className="block">
        <h1>{t('Confirmation of registration')}</h1>

        {loading && <div className="content__message">{t('Please wait...')}</div>}

        <ContentMessage {...contentMessageProps} />

        <div className="content__links">
          <Link to="/">{t('Sign in')}</Link>
        </div>
      </div>
    </div>
  );
};
