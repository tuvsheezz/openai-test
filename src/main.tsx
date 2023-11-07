import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApiKeyContextProvider } from './contexts/ApiKeyProvider';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { TitleContextProvider } from './contexts/PageTitleProvider';
import { AppThemeProvider } from './contexts/AppThemeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <ApiKeyContextProvider>
        <BrowserRouter>
          <TitleContextProvider>
            <App />
          </TitleContextProvider>
        </BrowserRouter>
      </ApiKeyContextProvider>
    </AppThemeProvider>
  </React.StrictMode>
);
