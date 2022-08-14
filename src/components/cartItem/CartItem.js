import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './cartItem.css';

const CartItem = (props) => {
  const {id, img, title, price, amount } = props;

  return (
    <div className="cartItem">
      <div className='cartItemInfo'>
        <img src={img} alt={title} />
        <div className="cartInfo">
          <h4>{title}</h4>
          <h4>${price}</h4>
          <Button>remove</Button>
        </div>
      </div>

      <div className='changeAmount'>
        <IconButton aria-label="add" size="small">
          <ExpandLessIcon fontSize="inherit" />
        </IconButton>
        <p>{amount}</p>
        <IconButton aria-label="add" size="small">
          <ExpandMoreIcon fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  );
}

export default CartItem