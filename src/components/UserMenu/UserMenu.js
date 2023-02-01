import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';
import { Modal } from 'components/Modal/Modal';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const toogleModal = () => {
    setShowModal(prevState => !prevState);
  };
  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <>
      <button onClick={toogleModal}>Add contact</button>
      {showModal && <Modal onClose={toogleModal}></Modal>}
      <div>
        <p>Welcome, {user.name}</p>
        <button type="button" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </>
  );
};
