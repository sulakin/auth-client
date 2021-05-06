import React from 'react';
import { useTranslation } from 'react-i18next';

export const LangSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  return (
    <div className="lang">
      <input
        type="button"
        className="lang__switcher"
        onClick={() => i18n.changeLanguage(t('lang'))}
        value={`${t('language')}`}
      />
    </div>
  );
};
