import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useSearchParam } from '../../hooks/useSearchParam';
import { useActions } from '../../hooks/useActions';
import { LangSwitcher } from '../../components/LangSwitcher';
import { ContentMessage, IContentMessageProps } from '../../components/ContentMessage';

export const Connect: React.FC = () => {
  const { t } = useTranslation();
  const code = useSearchParam('code');
  const provider = useSearchParam('state');
  const { fetchConnect, login } = useActions();
  const { loading, message, error, token, email } = useTypedSelector((state) => state.auth.connect);
  const history = useHistory();

  useEffect(() => {
    if (!!token) {
      login(token, email, provider);
      history.push('/');
    }
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (code && provider) {
      fetchConnect(code, provider);
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
        <h1>
          {t('Sign in with')} {provider}
        </h1>

        {loading && <div className="content__message">{t('Please wait...')}</div>}

        <ContentMessage {...contentMessageProps} />

        {error && (
          <div className="content__links">
            <Link to="/">{t('Back to sign in')}</Link>
          </div>
        )}
      </div>
    </div>
  );
};
