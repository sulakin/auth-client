import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const PageNotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="page page--404">
      <span className="error error--404">404</span>
      <h1>{t('Page not found')}</h1>
      <span>
        {t('Go')} <Link to="/">{t('to home page')}</Link>
      </span>
    </div>
  );
};
