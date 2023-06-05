import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../features/authentication/context/index.jsx';
import { useContext } from 'react';


export const PrivateRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated === null) return (
    <div>
      Loading...
    </div>
  );

  return isAuthenticated ? <Outlet/> : <Navigate to="/authentication/"/>;
};