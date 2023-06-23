import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/globalStyles.js';
import { AuthProvider } from './features/authentication/context/index.jsx';
import { ThemeProvider } from 'styled-components';
import { themes } from './styles/themes.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={ '/money-sage/' }>
      <ThemeProvider theme={ themes.colors }>
        <AuthProvider>
          <GlobalStyles/>
          <App/>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
