import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader } from '../Loader';
import { Modal, IModalProps } from '../Modal';
import { TermsOfUse } from '../requirements/TermsOfUse';
import { PrivacyPolicy } from '../requirements/PrivacyPolicy';

export interface IRegisterFormProps {
  loading: boolean;
  fetchRegister: (email: string, password: string) => void;
}

export const RegisterForm: React.FC<IRegisterFormProps> = ({ loading, fetchRegister }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showTermsOfUse, setShowTermsOfUse] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const propsTermsOfUse: IModalProps = {
    show: showTermsOfUse,
    title: `${t('Terms of Use')}`,
    component: TermsOfUse,
    close: () => setShowTermsOfUse(false),
  };

  const propsPrivacyPolicy: IModalProps = {
    show: showPrivacyPolicy,
    title: `${t('Privacy Policy')}`,
    component: PrivacyPolicy,
    close: () => setShowPrivacyPolicy(false),
  };

  const registerHandler = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent> | React.KeyboardEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    fetchRegister(email, password);
  };

  return (
    <form
      onKeyPress={(e) => {
        if (e.key === 'Enter') registerHandler(e);
      }}
    >
      {loading && <Loader />}

      <input
        value={email}
        type="text"
        name="email"
        disabled={loading}
        placeholder={t('Email')}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        value={password}
        type="password"
        name="password"
        disabled={loading}
        placeholder={t('Password')}
        onChange={(e) => setPassword(e.target.value)}
      />

      <span className="requirements requirements--register">
        {t('By registering, you confirm that you accept our')}{' '}
        <input
          type="button"
          onClick={() => setShowTermsOfUse(!showTermsOfUse)}
          value={`${t('Terms of Use')}`}
        />
        {` ${t('and')} `}
        <input
          type="button"
          onClick={() => setShowPrivacyPolicy(!showPrivacyPolicy)}
          value={`${t('_Privacy Policy')}`}
        />
      </span>

      <Modal {...propsTermsOfUse} />
      <Modal {...propsPrivacyPolicy} />

      <input
        type="submit"
        value={`${t('Register here')}`}
        disabled={loading}
        onClick={(e) => registerHandler(e)}
      />
    </form>
  );
};
