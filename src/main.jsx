import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/globalStyles.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={'/money-sage/'}>
      <GlobalStyles/>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
);
