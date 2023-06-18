import { Routes, Route, useLocation } from 'react-router-dom';
import { Home, Authentication } from '../pages';
import { AuthContext } from '../features/authentication/context/index.jsx';
import { PrivateRoutes } from './PrivateRoutes.jsx';
import { useContext, useEffect } from 'react';

function App() {
  const { handleGoogleLogin, verifyStorage } = useContext(AuthContext);

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
      <Routes>
        <Route path="/authentication" element={ <Authentication/> }/>
        <Route path="/" element={ <PrivateRoutes/> }>
          <Route path="/" element={ <Home/> }/>
        </Route>
      </Routes>
  );
}

export default App;
