import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import createAppStore from './store';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const store = createAppStore();

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Provider>,
  document.getElementById('root'),
);
