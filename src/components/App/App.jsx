import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';
import RestrictedRoute from 'components/RestrictedRoute/';
import PrivateRoute from 'components/PrivateRoute/';

const HomePage = lazy(() => import('../../page/Home'));
const RegisterPage = lazy(() => import('../../page/Register'));
const LoginPage = lazy(() => import('../../page/Login'));
const ContactsPage = lazy(() => import('../../page/Contacts'));
const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Fetching...</div>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={RegisterPage}
              redirectTo={'/contacts'}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo={'/contacts'} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={ContactsPage} redirectTo={'/login'} />
          }
        />
      </Route>
    </Routes>
  );
};
export default App;
