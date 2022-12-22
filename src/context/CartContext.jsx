import PropTypes from "prop-types";
import React, { createContext, useState } from "react";

const DEFAULT_CART = 0;

export const CartContext = createContext();

export const CartProvider = ({children}) => {

  const [cartNumber, setCartNumber] = useState(DEFAULT_CART);

  return (
    <CartContext.Provider
      value={{
        cartNumber,
        setCartNumber
      }}
    >
      {children}
    </CartContext.Provider>
  );

};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
};
