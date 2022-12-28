import { useContext, useEffect, useState } from "react";
import { testApi } from "../api/testApi";
import { ProductContext } from "../context/ProductContext";
import { validateExpiredDate } from "../helpers/expiredDate";
import { formatProduct } from "../helpers/format";
import { getLocalStorage, setLocalStorage } from "../helpers/localStorage";
import { showToast } from "../helpers/toast";

export const useProduct = (idProduct) => {

  const {product, setProduct} = useContext(ProductContext);
  const [isLoading, setIsLoading] = useState(true);

  const [errorProduct, setErrorProduct] = useState({
    isError: false,
    message: ""
  });

  useEffect(() => {

    if (!idProduct) {

      return;

    }

    getProduct(idProduct).
      catch((error) => {

        setIsLoading(false);

        setErrorProduct({
          isError: true,
          message: error.message
        });

      });

  }, []);

  useEffect(() => {

    if (errorProduct.isError) {

      showToast(errorProduct.message);

    }

  }, [errorProduct]);

  const getProduct = async (id) => {

    const {
      productsDetails: productsDetailsLocal = {}
    } = getLocalStorage("vm-productsDetails", true);

    const productLocal = productsDetailsLocal[id];
    const isExpiredDate = validateExpiredDate(productLocal);

    if (isExpiredDate) {

      const { data } = await testApi.get(`/product/${id}`);

      productsDetailsLocal[id] = {
        ...formatProduct(data),
        updateAt: new Date()
      };

      setLocalStorage("vm-productsDetails",
        { productsDetails: productsDetailsLocal},
        true
      );

      setProduct(productsDetailsLocal[id]);
      setIsLoading(false);

      return productsDetailsLocal[id];

    }

    const productFormat = formatProduct(productLocal);

    setProduct(formatProduct(productFormat));
    setIsLoading(false);

    return productFormat;

  };

  return {
    isLoading,
    product
  };

};
