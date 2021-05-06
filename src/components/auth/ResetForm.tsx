import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParam } from '../../hooks/useSearchParam';
import { Loader } from '../Loader';

export interface IResetFormProps {
  loading: boolean;
  fetchReset: (confirm_token: string, password: string) => void;
}

export const ResetForm: React.FC<IResetFormProps> = ({ loading, fetchReset }) => {
  const { t } = useTranslation();
  const confirm_token = useSearchParam('token');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isMatch, setIsMatch] = useState(true);

  const resetHandler = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent> | React.KeyboardEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    if (password === repeatPassword && confirm_token) {
      setIsMatch(true);
      fetchReset(confirm_token, password);
    } else {
      setIsMatch(false);
    }
  };

  if (!confirm_token) {
    return (
      <div className="content__message content__message--error">
        {t('The link is invalid or out of date')}
      </div>
    );
  }

  return (
    <>
      {!isMatch && (
        <div className="content__message content__message--error">{t('Password mismatch')}</div>
      )}

      <form
        onKeyPress={(e) => {
          if (e.key === 'Enter') resetHandler(e);
        }}
      >
        {loading && <Loader />}

        <input
          value={password}
          type="password"
          name="password"
          disabled={loading}
          placeholder={t('New password')}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          value={repeatPassword}
          type="password"
          name="repeatPassword"
          placeholder={t('Repeat password')}
          disabled={loading}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />

        <input
          type="submit"
          value={`${t('Save password')}`}
          disabled={loading}
          onClick={(e) => resetHandler(e)}
        />
      </form>
    </>
  );
};
