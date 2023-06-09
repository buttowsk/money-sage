import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/globalStyles.js';
import { AuthProvider } from './features/authentication/context/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={ '/money-sage/' }>
      <AuthProvider>
        <GlobalStyles/>
        <App/>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
