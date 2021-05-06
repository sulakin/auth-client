import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Main: React.FC = () => {
  const { t } = useTranslation();
  const { email, provider } = useTypedSelector((state) => state.user);

  return (
    <div className="page">
      <Header />

      <div className="content content__page">
        <h2>
          {t('Welcome')}, {email?.split('@')[0]}!
        </h2>
        <p>
          {t('Signed in with')} {provider ? `${provider}` : `${t('with email')} ${email}`}
        </p>
      </div>

      <Footer />
    </div>
  );
};
