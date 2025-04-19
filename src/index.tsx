import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app.tsx';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { fetchOffersAction } from './store/api-action.ts';
import { ErrorMessage } from './components/error-message/error-message';

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage/>
      <App/>
    </Provider>
  </React.StrictMode>
);


