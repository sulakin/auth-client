import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';
import { Loader } from './components/Loader';
import './assets/scss/style.scss';

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes />
      </Router>
    </Suspense>
  );
};

export default App;
