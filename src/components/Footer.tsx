import React from 'react';
import { LangSwitcher } from './LangSwitcher';
import { Requirements } from './requirements';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <span className="footer__left">
        Copyright © 2021 <a href="https://github.com/sulakin">Sulakin Vadim</a>
        <LangSwitcher />
      </span>

      <Requirements />
    </footer>
  );
};
