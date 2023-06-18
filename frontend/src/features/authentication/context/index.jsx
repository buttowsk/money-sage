import { createContext, useState } from 'react';
import { authAPI, googleAuthAPI } from '../services/auth.js';
import { useNavigate } from 'react-router-dom';
import { transactionsApi } from '../../wallet/services/index.js';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userCreated, setUserCreated] = useState(false);
  const navigate = useNavigate();


  const verifyStorage = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    if (accessToken && refreshToken) {
      await verifyJWT(accessToken, refreshToken);
      await getCurrentUser();
    } else {
      setIsAuthenticated(false);
    }
  };

  const verifyJWT = async (accessToken, refreshToken) => {
    try {
      const resp = await authAPI.post('/jwt/verify', {
        token: accessToken,
      });
      if (resp.status === 200) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        transactionsApi.defaults.headers.common.Authorization = `JWT ${ accessToken }`;
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
      }
    } catch (err) {
      console.log(err);
      setIsAuthenticated(false);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    }
  };

  const getCurrentUser = async () => {
    if (localStorage.getItem('accessToken')) {
      try {
        const resp = await authAPI.get('/users/me/', {
          headers: {
            Authorization: `JWT ${ localStorage.getItem('accessToken') }`,
          },
        });
        if (resp.status === 200) {
          const user = resp.data;
          console.log(user)
          setCurrentUser(user);
        }
      } catch (err) {
        setIsAuthenticated(false);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        console.log(err);
      }
    }
  };

  const handleGoogleLogin = async (state, code) => {
    if (state && code && !localStorage.getItem('access')) {

      const body = new URLSearchParams();
      body.append('state', state);
      body.append('code', code);

      try {
        const resp = await googleAuthAPI.post(`/o/google-oauth2/?${ body.toString() }`);

        if (resp.status === 201) {
          console.log(resp.data);
          const accessToken = resp.data.access;
          const refreshToken = resp.data.refresh;
          await verifyJWT(accessToken, refreshToken);
          await getCurrentUser();
          navigate('/');
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
        console.log(error);
      }
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const resp = await authAPI.post('/jwt/create/', { email, password });
      if (resp.status === 200) {
        const accessToken = resp.data.access;
        const refreshToken = resp.data.refresh;
        await verifyJWT(accessToken, refreshToken);
        await getCurrentUser();
      } else {
        setIsAuthenticated(false);
        return 'Token inválido';
      }
    } catch (err) {
      console.log(err);
      setIsAuthenticated(false);
    }
  };

  const handleRegister = async (email, password, confirm_password, first_name, last_name = '') => {
    try {
      const resp = await authAPI.post('/users/', {
        'email': email,
        'password': password,
        're_password': confirm_password,
        'first_name': first_name,
        'last_name': last_name,
      });
      if (resp.status === 201) {
        setUserCreated(true);
        setTimeout(() => {
          setUserCreated(false);
        }, 3000);
        return 'Usuário criado com sucesso';
      } else {
        setUserCreated(false);
        return resp.data.code;
      }
    } catch (err) {
      console.log(err);
      setUserCreated(false);
    }
  };

  const handleLogout = async () => {
    try {
      const resp = await authAPI.post('/token/blacklist/', { refresh: localStorage.getItem('refreshToken') });
      if (resp.status === 200) {
        authAPI.defaults.headers.Authorization = null;
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setCurrentUser(null);
        setIsAuthenticated(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const values = {
    currentUser,
    isAuthenticated,
    userCreated,
    handleLogin,
    handleRegister,
    handleLogout,
    handleGoogleLogin,
    verifyStorage,
  };

  return (
    <AuthContext.Provider value={ values }>
      { children }
    </AuthContext.Provider>
  );
};