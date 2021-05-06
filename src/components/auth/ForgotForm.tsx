import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader } from '../Loader';

export interface IForgotFormProps {
  loading: boolean;
  fetchForgot: (email: string) => void;
}

export const ForgotForm: React.FC<IForgotFormProps> = ({ loading, fetchForgot }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const forgotHandler = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent> | React.KeyboardEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    fetchForgot(email);
  };

  return (
    <form
      onKeyPress={(e) => {
        if (e.key === 'Enter') forgotHandler(e);
      }}
    >
      {loading && <Loader />}

      <div className="content__title">{t('To restore access enter your email')}</div>

      <input
        value={email}
        type="text"
        name="email"
        disabled={loading}
        placeholder={t('Email')}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="submit"
        value={`${t('Send')}`}
        disabled={loading}
        onClick={(e) => forgotHandler(e)}
      />
    </form>
  );
};
