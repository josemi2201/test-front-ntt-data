import { useContext } from "react"
import { testApi } from "../api/testApi"
import { CartContext } from "../context/CartContext"
import { getLocalStorage } from "../helpers/localStorage"
import { getDiffBetweenDates } from "../helpers/time"

const TIME_TO_UPDATE = 1
const TIME_OPERATOR = "hours" 

const formatProduct = (product) => {
  return {
    ...product,
    imgUrl: "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_960_720.jpg", // TODO: remove this line when api is ready
    description:  product.brand || product.model ? `${product.brand} ${product.model}`.trim() : "No description",
    priceDescription: product.price ? `${product.price} €` : "No price",
  }
}

export const useData = () => {

  const { setCartNumber } = useContext(CartContext)

  const getProducts = async () => {
    
    const {updateAt, products: productsLocal} = getLocalStorage("vm-products", true)
    const diffHours = getDiffBetweenDates(updateAt, new Date(), TIME_OPERATOR)
    const isExpiredDate = diffHours >= TIME_TO_UPDATE

    if(isExpiredDate){
      const response = await testApi.get("/product")
      console.log(response);
      return response.data.map(formatProduct)
    }

    return productsLocal.map(formatProduct)
  }

  const getProduct = async (id) => {

    const {updateAt, productsDetails: productsDetailsLocal} = getLocalStorage("vm-productsDetails", true)
    const diffHours = getDiffBetweenDates(updateAt, new Date(), TIME_OPERATOR)
    const isExpiredDate = diffHours >= TIME_TO_UPDATE

    if(isExpiredDate){
      const response = await testApi.get(`/product/${id}`)

      return formatProduct(response.data)
    }

    let product = productsDetailsLocal[id]

    if (!product) {
      return {}
    }
    
    return formatProduct(product)
  }

  const addCard = async (data) => {
    const { data: dataResponse } = await testApi.post("/cart", data)
    setCartNumber(dataResponse.count)
  }

  return {
    getProducts,
    getProduct,
    addCard
  }
}