import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../features/authentication/context/index.jsx';
import { useContext } from 'react';
import { ExpensesProvider } from '../features/expenses/context/index.jsx';


export const PrivateRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated === null) return (
    <div>
      Loading...
    </div>
  );

  return isAuthenticated ? (
    <ExpensesProvider>
      <Outlet/>
    </ExpensesProvider>
  ) : (
    <Navigate to="/authentication"/>
  );
};