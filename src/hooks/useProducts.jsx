import { testApi } from "../api/testApi";
import { EMPTY, TIME_OPERATOR, TIME_TO_UPDATE } from "../global/vars";
import { formatProduct } from "../helpers/format";
import { getLocalStorage, setLocalStorage } from "../helpers/localStorage";
import { getDiffBetweenDates } from "../helpers/time";

export const useProducts = () => {

  const getProducts = async () => {

    const {
      updateAt,
      products: productsLocal = []
    } = getLocalStorage("vm-products", true);

    const diffHours = getDiffBetweenDates(
      updateAt,
      new Date(),
      TIME_OPERATOR
    );

    const isExpiredDate =
      diffHours >= TIME_TO_UPDATE ||
      !updateAt ||
      productsLocal.length === EMPTY;

    if (isExpiredDate) {

      const {data} = await testApi.get("/product");
      const products = data.map(formatProduct);

      setLocalStorage("vm-products",
        {
          products,
          updateAt: new Date()
        },
        true);

      return products;

    }

    return productsLocal.map(formatProduct);

  };

  return {
    getProducts
  };

};
