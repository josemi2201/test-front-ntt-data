import PropTypes from "prop-types";
import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {

  const [product, setProduct] = useState();

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );

};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired
};
