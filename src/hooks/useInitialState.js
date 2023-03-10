import { useState } from 'react';

const initialState = {
  cart: [],
};
const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (indexValue) => {
    setState({
      ...state,
      cart: state.cart.filter((items, index) => index !== indexValue),
    });
  };
  console.log('====================================');
  console.log(state);
  console.log('====================================');
  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export default useInitialState;
