import { useContext } from "react";
import { testApi } from "../api/testApi";
import { CartContext } from "../context/CartContext";

export const useCart = () => {

  const { setCartNumber } = useContext(CartContext);

  const addCart = async (data) => {

    const { data: dataResponse } = await testApi.post("/cart", data);
    setCartNumber(dataResponse.count);

    return dataResponse;

  };

  return {
    addCart
  };

};
