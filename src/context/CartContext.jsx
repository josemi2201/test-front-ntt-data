import PropTypes from 'prop-types'
import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {

  const [cartNumber, setCartNumber] = useState(0)

  return (
    <CartContext.Provider
      value={{
        cartNumber,
        setCartNumber,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}