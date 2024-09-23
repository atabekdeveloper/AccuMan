import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { Analytics } from '@vercel/analytics/react';

import { App } from './App';

import { store } from './store';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <Router>
    <Provider store={store}>
      <SnackbarProvider maxSnack={1} dense autoHideDuration={2000}>
        <App />
        <Analytics />
      </SnackbarProvider>
    </Provider>
  </Router>,
);
