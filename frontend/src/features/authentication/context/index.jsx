import { createContext, useEffect, useState } from 'react';
import { authAPI } from '../services/auth.js';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userCreated, setUserCreated] = useState(false);


  const verifyStorage = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    if (accessToken && refreshToken) {
      const verify = await verifyJWT(accessToken);
      if (verify) {
        authAPI.defaults.headers['Authorization'] = `JWT ${ accessToken }`;
        setIsAuthenticated(true);
        await getCurrentUser();
      } else {
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  };

  const verifyJWT = async (jwt) => {
    try {
      const resp = await authAPI.post('/jwt/verify', {
        token: jwt,
      });
      if (resp.status === 200) {
        return true;
      }
    } catch (err) {
      return false;
    }
  };

  const getCurrentUser = async () => {
    try {
      const resp = await authAPI.get('/users/me/');
      if (resp.status === 200) {
        const user = resp.data;
        setCurrentUser(user);
      }
    } catch (err) {
      setCurrentUser(null);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const resp = await authAPI.post('/jwt/create/', { email, password });
      if (resp.status === 200) {
        const accessToken = resp.data.access;
        const refreshToken = resp.data.refresh;
        const verify = await verifyJWT(accessToken);
        if (verify) {
          authAPI.defaults.headers['Authorization'] = `JWT ${ accessToken }`;
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          await getCurrentUser();
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          return 'Token inválido';
        }
      }
    } catch (err) {
      setIsAuthenticated(false);
      return 'Usuário ou senha inválidos';
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
        return 'Usuário criado com sucesso';
      } else {
        setUserCreated(false);
        return resp.data.code;
      }
    } catch (err) {
      setUserCreated(false);
    }
  };

  const handleLogout = async () => {
    try {
      await authAPI.post('/jwt/blacklist/', { refresh: localStorage.getItem('refreshToken') });
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
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
  };

  useEffect(() => {
    verifyStorage();
  }, []);

  return (
    <AuthContext.Provider value={ values }>
      { children }
    </AuthContext.Provider>
  );
};