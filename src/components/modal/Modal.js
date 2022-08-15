import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../redux/modal/modalSlice';
import { clearCart } from '../../redux/cart/cartSlice';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import './modal.css';

const ModalNotification = () => {
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const confirmRemoving = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };

  const handleClose = () => {
    dispatch(closeModal())
  };
  
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal">
          <h4>remove all item from shopping cart?</h4>
          <div className="btnContainer">
            <Button variant="outlined" onClick={confirmRemoving}>
              confirm
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => dispatch(closeModal())}
            >
              cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalNotification;