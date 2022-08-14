import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../redux/cart/cartSlice';
import CartItem from '../cartItem/CartItem';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './cartContainer.css';


const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector(state => state.cart);

  if (amount < 1) {
    return (
      <Container maxWidth="sm">
        <header className='cartHeader' >
          <h2>your bag</h2>
          <h4>is currently empty</h4>
        </header>
      </Container>
    );
  }
  return (
    <div>
      <Container maxWidth="sm">
        <header className='cartHeader'>
          <h2>your bag</h2>
        </header>
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
              <span>${total.toFixed(2)}</span>
            </h4>
          </div>
          <div className='btnFooter'>
          <Button variant="outlined" color="error" onClick={()=>dispatch(clearCart())}>
            clear cart
          </Button>
          </div>
        </footer>
      </Container>
    </div>
  );
}

export default CartContainer