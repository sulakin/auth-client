import React from 'react';

export interface IModalProps {
  show: boolean;
  text?: string;
  component?: any;
  title?: string;
  width?: number;
  closeOverlay?: boolean;
  close?: () => void;
}

export const Modal: React.FC<IModalProps> = ({
  show,
  text,
  title,
  component: Component,
  width = 800,
  closeOverlay = true,
  close,
}) => {
  return show ? (
    <div className="modal">
      <div className="modal__overlay">
        <div className="modal__wrapper" style={{ width: `${width}px` }}>
          {close && (
            <span className="modal__close" onClick={close}>
              x
            </span>
          )}

          {title && <h1>{title}</h1>}

          <div className="modal__content">
            {Component && <Component />}
            {text && text}
          </div>
        </div>

        {closeOverlay && <div className="modal__overlay" onClick={close}></div>}
      </div>
    </div>
  ) : (
    <></>
  );
};
