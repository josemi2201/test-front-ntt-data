import { useContext } from "react"
import { testApi } from "../api/testApi"
import { CartContext } from "../context/CartContext"
import { getLocalStorage, setLocalStorage } from "../helpers/localStorage"
import { getDiffBetweenDates } from "../helpers/time"

const TIME_TO_UPDATE = 1
const TIME_OPERATOR = "hours" 

const formatProduct = (product) => {
  return {
    ...product,
    description:  product.brand || product.model ? `${product.brand} ${product.model}`.trim() : "No description",
    priceDescription: product.price ? `${product.price} €` : "No price",
  }
}

export const useData = () => {

  const { setCartNumber } = useContext(CartContext)

  const getProducts = async () => {
    const {
      updateAt, 
      products: productsLocal = []
    } = getLocalStorage("vm-products", true)
    const diffHours = getDiffBetweenDates(updateAt, new Date(), TIME_OPERATOR)
    const isExpiredDate = diffHours >= TIME_TO_UPDATE || !updateAt || productsLocal.length === 0

    if(isExpiredDate){
      const {data} = await testApi.get("/product")
      const products = data.map(formatProduct)

      setLocalStorage("vm-products", {
        updateAt: new Date(),
        products
      }, true)
      
      return products
    }

    return productsLocal.map(formatProduct)
  }

  const getProduct = async (id) => {

    const {
      productsDetails: productsDetailsLocal = {}
    } = getLocalStorage("vm-productsDetails", true)
    
    let product = productsDetailsLocal[id]
    let updateAt = product ? product.updateAt : null

    const diffHours = getDiffBetweenDates(updateAt, new Date(), TIME_OPERATOR)
    const isExpiredDate = diffHours >= TIME_TO_UPDATE || !updateAt || !productsDetailsLocal[id]

    if(isExpiredDate){
      const { data } = await testApi.get(`/product/${id}`)

      const product = {
        ...formatProduct(data),
        updateAt: new Date()
      }

      productsDetailsLocal[id] = product

      setLocalStorage("vm-productsDetails", {
        productsDetails: productsDetailsLocal
      }, true)

      return product
    }


    if (!product) {
      return {}
    }
    
    return formatProduct(product)
  }

  const addCart = async (data) => {
    const { data: dataResponse } = await testApi.post("/cart", data)
    setCartNumber(dataResponse.count)
  }

  return {
    getProducts,
    getProduct,
    addCart
  }
}