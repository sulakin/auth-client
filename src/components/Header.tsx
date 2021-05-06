import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useHistory } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import ico__logout from '../assets/images/logout.svg';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const { logout } = useActions();
  const history = useHistory();

  return (
    <div className="header">
      <span className="header__menu">
        <NavLink exact to="/">
          {t('Main')}
        </NavLink>
        <NavLink exact to="/profile">
          {t('Profile')}
        </NavLink>
      </span>

      <span
        className="logout"
        onClick={() => {
          logout();
          history.push('/');
        }}
      >
        {t('Logout')} <img src={ico__logout} alt={t('Logout')} />
      </span>
    </div>
  );
};
