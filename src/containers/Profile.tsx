import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Profile: React.FC = () => {
  const { t } = useTranslation();
  const { email, provider } = useTypedSelector((state) => state.user);

  return (
    <div className="page">
      <Header />

      <div className="content content__page">
        <h2>{t('Profile')}</h2>
        <p>
          <b>{t('Email')}:</b> {email}
        </p>
        {provider && (
          <p>
            <b>{t('Social network')}:</b> {provider}
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};
