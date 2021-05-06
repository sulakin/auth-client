import React from 'react';

export interface IContentMessageProps {
  show: boolean;
  error: boolean;
  message: string;
}

export const ContentMessage: React.FC<IContentMessageProps> = ({ show, error, message }) => {
  return (
    <>
      {show && message && (
        <div className={`content__message content__message--${error ? 'error' : 'success'}`}>
          {message}
        </div>
      )}
    </>
  );
};
