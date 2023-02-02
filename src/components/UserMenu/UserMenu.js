import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';
import { AddModal } from 'components/AddModal/AddModal';
import { Btn, UserName, Wrapper, OutlinedName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [isShownModal, setIsShownModal] = useState(false);

  const openModal = () => {
    setIsShownModal(true);
  };

  const closeModal = () => {
    setIsShownModal(false);
  };

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <>
      <Btn onClick={openModal}>Add contact</Btn>
      {isShownModal && <AddModal closeModal={closeModal}></AddModal>}
      <Wrapper>
        <UserName>
          Welcome,<OutlinedName>{user.name}</OutlinedName>!
        </UserName>
        <Btn type="button" onClick={handleLogout}>
          Log Out
        </Btn>
      </Wrapper>
    </>
  );
};
