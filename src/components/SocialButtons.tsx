import React from 'react';
import { useTranslation } from 'react-i18next';
import { linkFacebook, linkGoogle, linkVK } from '../shared/constants';
import ico_fb from '../assets/images/facebook.svg';
import ico_gl from '../assets/images/google.svg';
import ico_vk from '../assets/images/vk.svg';

export const SocialButtons: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="social">
      <div className="social__title">{t('Sign in with social media')}</div>
      <div className="social__links">
        <a href={linkFacebook} className="social__btn social__btn--fb">
          <img src={ico_fb} alt="Facebook" />
        </a>
        <a href={linkGoogle} className="social__btn social__btn--gl">
          <img src={ico_gl} alt="Google" />
        </a>
        <a href={linkVK} className="social__btn social__btn--vk">
          <img src={ico_vk} alt="vk" />
        </a>
      </div>
    </div>
  );
};
