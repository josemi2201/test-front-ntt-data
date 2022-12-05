
import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

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