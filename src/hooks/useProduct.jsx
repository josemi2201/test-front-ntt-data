import { testApi } from "../api/testApi";
import { TIME_OPERATOR, TIME_TO_UPDATE } from "../global/vars";
import { formatProduct } from "../helpers/format";
import { getLocalStorage, setLocalStorage } from "../helpers/localStorage";
import { getDiffBetweenDates } from "../helpers/time";

export const useProduct = () => {

  const getProduct = async (id) => {

    const {
      productsDetails: productsDetailsLocal = {}
    } = getLocalStorage("vm-productsDetails", true);

    const product = productsDetailsLocal[id];
    const updateAt = product
      ? product.updateAt
      : null;

    const diffHours = getDiffBetweenDates(
      updateAt,
      new Date(),
      TIME_OPERATOR
    );

    const isExpiredDate =
      diffHours >= TIME_TO_UPDATE ||
      !updateAt ||
      !productsDetailsLocal[id];

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

      return productsDetailsLocal[id];

    }

    return product
      ? formatProduct(product)
      : {};

  };

  return {
    getProduct
  };

};
