import { Routes, Route, useLocation } from 'react-router-dom';
import { Home, Authentication } from '../pages';
import { ThemeProvider } from 'styled-components';
import { themes } from '../styles/themes.js';
import { AuthContext } from '../features/authentication/context/index.jsx';
import { PrivateRoutes } from './PrivateRoutes.jsx';
import { useContext, useEffect } from 'react';

function App() {
  const { handleGoogleLogin, currentUser, verifyStorage } = useContext(AuthContext);

  let location = useLocation();

  useEffect(() => {
    const values = new URLSearchParams(location.search);
    const state = values.get('state');
    const code = values.get('code');

    if (state && code) {
      handleGoogleLogin(state, code);
    } else {
      verifyStorage();
    }
  }, [location]);

  return (

    <ThemeProvider theme={ themes.colors }>
      <Routes>
        <Route path="/authentication" element={ <Authentication/> }/>
        <Route path="/" element={ <PrivateRoutes/> }>
          <Route path="/" element={ <Home/> }/>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
