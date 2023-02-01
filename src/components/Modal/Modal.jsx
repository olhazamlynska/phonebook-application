import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { ModalDiv, Overlay } from 'components/Modal/Modal.styled';
import { createPortal } from 'react-dom';
import { PhonebookForm } from 'components/PhonebookForm/PhonebookForm';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ onClose }) {
  const closeByBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const closeByEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', closeByEsc);

    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [onClose]);

  return createPortal(
    <Overlay onClick={closeByBackdrop}>
      <ModalDiv>
        <PhonebookForm />
      </ModalDiv>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
