import { Routes, Route } from 'react-router-dom';
import { Home, Authentication } from '../pages';
import { ThemeProvider } from 'styled-components';
import { themes } from '../styles/themes.js';
import { AuthProvider } from '../features/authentication/context/index.jsx';
import { PrivateRoutes } from './PrivateRoutes.jsx';
import { ConfirmSignUp } from '../pages/ConfirmSignUp/index.jsx';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={ themes.colors }>
        <Routes>
          <Route path="/authentication" element={ <Authentication/> }/>
          <Route path="/authentication/register-confirmation" element={ <ConfirmSignUp/> }/>
          <Route path="/" element={ <PrivateRoutes/> }>
            <Route path="/" element={ <Home/> }/>
          </Route>
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
