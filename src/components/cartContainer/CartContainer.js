import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../cartItem/CartItem';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './cartContainer.css';


const CartContainer = () => {
  const { cartItems, total, amount } = useSelector(state => state.cart);

  if (amount < 1) {
    return (
      <Container maxWidth="sm">
        <div className='emptyBag' >
          <h2>your bag</h2>
          <h4>is currently empty</h4>
        </div>
      </Container>
    );
  }
  return (
    <div>
      <Container maxWidth="sm">
        <Stack spacing={2}>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </Stack>
        <footer className=''>
          <hr />
          <div className='cartTotal'>
            <h4>
              <span>total</span>
              <span>${total}</span>
            </h4>
          </div>
          <div className='btnFooter'>
          <Button variant="outlined" color="error">
            clear cart
          </Button>
          </div>
        </footer>
      </Container>
    </div>
  );
}

export default CartContainer