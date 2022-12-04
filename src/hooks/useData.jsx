import { productsDemoList } from "../data/demoData"

export const useData = () => {

  const getProducts = () => {
    let products = productsDemoList.map(product => {
      return {
        ...product,
        imgUrl: "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_960_720.jpg", // TODO: remove this line when api is ready
        description:  product.brand || product.model ? `${product.brand} ${product.model}`.trim() : "No description",
        priceDescription: product.price ? `${product.price} €` : "No price",
      }
    })

    return products
  }

  const getProduct = (id) => {
    let product = productsDemoList.find(product => product.id === id)

    if (!product) {
      alert(`Product with id ${id} not found`)
      return {}
    }

    product = {
      ...product,
      imgUrl: "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_960_720.jpg", // TODO: remove this line when api is ready
      description:  product.brand || product.model ? `${product.brand} ${product.model}`.trim() : "No description",
      priceDescription: product.price ? `${product.price} €` : "No price",
    }
    
    return product
  }

  const addCard = (data) => {
    console.info(data)
  }


  return {
    getProducts,
    getProduct,
    addCard
  }
}