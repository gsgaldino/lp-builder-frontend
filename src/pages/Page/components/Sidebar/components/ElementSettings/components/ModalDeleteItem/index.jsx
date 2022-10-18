import React from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button } from 'components';

import { deleteElement } from 'store/modules/page/slice';
import PropTypes from 'prop-types';

function ModalDeleteItem({ isOpen, setIsOpen, element }) {
  const dispatch = useDispatch();
  const onClose = () => setIsOpen(false);

  const onDelete = () => {
    setIsOpen(false);
    dispatch(deleteElement(element));
  };

  return (
    <Modal isOpen={isOpen}>
      <Modal.Overlay>
        <Modal.Body>
          <Modal.Heading>
            Deletar item
          </Modal.Heading>

          <p>Deseja mesmo deletar o item?</p>

          <Modal.Footer>
            <Button onClick={onDelete}>Deletar</Button>
            <Button onClick={onClose}>Cancelar</Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal.Overlay>
    </Modal>
  );
}

ModalDeleteItem.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  element: PropTypes.object.isRequired,
};

export default ModalDeleteItem;
