import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../features/authentication/context/index.jsx';
import { useContext } from 'react';
import { WalletProvider } from '../features/wallet/context/index.jsx';
import { Loader } from '../components/Loader/index.jsx';


export const PrivateRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated === null) return (
    <Loader/>
  );

  return isAuthenticated ? (
    <WalletProvider>
      <Outlet/>
    </WalletProvider>
  ) : (
    <Navigate to="/authentication"/>
  );
};