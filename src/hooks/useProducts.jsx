import { useEffect, useRef, useState } from "react";
import { testApi } from "../api/testApi";
import { EMPTY } from "../global/vars";
import { validateExpiredDate } from "../helpers/expiredDate";
import { formatProduct } from "../helpers/format";
import { getLocalStorage, setLocalStorage } from "../helpers/localStorage";
import { showToast } from "../helpers/toast";

export const useProducts = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [errorProducts, setErrorProducts] = useState({
    isError: false,
    message: ""
  });

  const isFirstRender = useRef(true);

  useEffect(() => {

    getProducts().
      catch((error) => {

        setIsLoading(false);

        setErrorProducts({
          isError: true,
          message: error.message
        });

      });

  }, []);

  useEffect(() => {

    if (errorProducts.isError) {

      showToast(errorProducts.message);

    }

  }, [errorProducts]);

  const getProducts = async (filterFunction) => {

    setIsLoading(true);

    isFirstRender.current = false;

    const productsLocalObject = getLocalStorage("vm-products", true);

    const {
      products: productsLocal = []
    } = productsLocalObject;

    const isExpiredDate = validateExpiredDate(
      productsLocalObject,
      productsLocal.length === EMPTY
    );

    if (isExpiredDate) {

      const {data} = await testApi.get("/product");
      let productsFormat = data.map(formatProduct);

      if (filterFunction) {

        productsFormat = productsFormat.filter(filterFunction);

      }

      setLocalStorage("vm-products",
        {
          products: productsFormat,
          updateAt: new Date()
        },
        true
      );

      setProducts(productsFormat);
      setIsLoading(false);

      return productsFormat;

    }

    let productsLocalFormat = productsLocal.map(formatProduct);

    if (filterFunction) {

      productsLocalFormat = productsLocalFormat.filter(filterFunction);

    }

    setProducts(productsLocalFormat);
    setIsLoading(false);

    return productsLocalFormat;

  };

  return {
    errorProducts,
    getProducts,
    isFirstRender,
    isLoading,
    products,
    setProducts
  };

};
