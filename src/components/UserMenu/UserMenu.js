import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handkeLogout = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handkeLogout}>
        Log Out
      </button>
    </div>
  );
};
