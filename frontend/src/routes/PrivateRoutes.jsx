import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../features/authentication/context/index.jsx';
import { useContext } from 'react';
import { WalletProvider } from '../features/wallet/context/index.jsx';


export const PrivateRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated === null) return (
    <div>
      Loading...
    </div>
  );

  return isAuthenticated ? (
    <WalletProvider>
      <Outlet/>
    </WalletProvider>
  ) : (
    <Navigate to="/authentication"/>
  );
};