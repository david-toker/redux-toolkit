import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './redux/cart/cartSlice';
import CartContainer from './components/cartContainer/CartContainer';
import Navbar from './components/navbar/Navbar';

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems])
  

  return (
    <div className="">
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
