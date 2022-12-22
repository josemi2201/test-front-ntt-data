export const formatProduct = (product) => {

  return {
    ...product,
    description: product.brand || product.model
      ? `${product.brand} ${product.model}`.trim()
      : "No description",
    priceDescription: product.price
      ? `${product.price} €`
      : "No price"
  };

};
