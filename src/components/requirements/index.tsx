import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TermsOfUse } from './TermsOfUse';
import { PrivacyPolicy } from './PrivacyPolicy';
import { IModalProps, Modal } from '../Modal';

export const Requirements: React.FC = () => {
  const { t } = useTranslation();
  const [showTermsOfUse, setShowTermsOfUse] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const propsTermsOfUse: IModalProps = {
    show: showTermsOfUse,
    title: `${t('Privacy Policy')}`,
    component: TermsOfUse,
    close: () => setShowTermsOfUse(false),
  };

  const propsPrivacyPolicy: IModalProps = {
    show: showPrivacyPolicy,
    title: `${t('Terms of Use')}`,
    component: PrivacyPolicy,
    close: () => setShowPrivacyPolicy(false),
  };

  return (
    <>
      <div className="requirements requirements--footer">
        <input
          type="button"
          onClick={() => setShowTermsOfUse(!showTermsOfUse)}
          value={`${t('Privacy Policy')}`}
        />
        <input
          type="button"
          onClick={() => setShowPrivacyPolicy(!showPrivacyPolicy)}
          value={`${t('Terms of Use')}`}
        />
      </div>

      <Modal {...propsTermsOfUse} />
      <Modal {...propsPrivacyPolicy} />
    </>
  );
};
