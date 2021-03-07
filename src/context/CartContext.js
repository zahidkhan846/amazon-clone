import React, { createContext, useContext, useReducer } from "react";

const actionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
};

const initialState = {
  cart: [],
};

export const getTotalPrice = (cart) => {
  const totalPrice = cart?.reduce((amount, item) => item.price + amount, 0);
  return totalPrice;
};

const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeCartItem: () => {},
});

export const useCart = () => useContext(CartContext);

const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload),
      };
    default:
      return state;
  }
};

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (cart) => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: cart,
    });
  };

  const removeCartItem = (id) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      payload: id,
    });
  };

  const value = {
    cart: state.cart,
    addToCart,
    removeCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
