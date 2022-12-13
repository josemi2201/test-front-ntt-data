import { useContext } from "react"
// import { testApi } from "../api/testApi"
import { CartContext } from "../context/CartContext"
import { productsDemoList } from "../data/demoData"
import { getLocalStorage, setLocalStorage } from "../helpers/localStorage"
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

const formatProductDetails = (product) => {
  return {
    ...product,
    imgUrl: "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_960_720.jpg", // TODO: remove this line when api is ready
    description:  product.brand || product.model ? `${product.brand} ${product.model}`.trim() : "No description",
    priceDescription: product.price ? `${product.price} €` : "No price",
    processor: "MediaTek MT8735",
    ram: "16GB | 32GB | 64GB",
    so: "Android 10",
    screenResolution: "1280x720",
    battery: "3.400mAh",
    cameras: "13MP | 5MP",
    dimensions: "99,8 mm / 190 mm / 8,5 mm",
    weight: "275 g",
    storages: [
      {id: '1', label: '16GB'},
      {id: '2', label: '32GB'},
      {id: '3', label: '64GB'},
      {id: '4', label: '128GB'},
    ],
    colors: [
      {id: '1', label: 'Black'},
    ],
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
      //TODO: uncomment this lines when api is ready
      // const response = await testApi.get("/product")
      // const products = response.data

      // setLocalStorage("vm-products", {
      //   updateAt: new Date(),
      //   products
      // }, true)
      
      // return products

      //TODO: remove this lines when api is ready
      const products = productsDemoList.map(formatProduct)

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
      updateAt, 
      productsDetails: productsDetailsLocal = {}
    } = getLocalStorage("vm-productsDetails", true)
    const diffHours = getDiffBetweenDates(updateAt, new Date(), TIME_OPERATOR)
    const isExpiredDate = diffHours >= TIME_TO_UPDATE || !updateAt || !productsDetailsLocal[id]

    if(isExpiredDate){
      //TODO: uncomment this lines when api is ready
      // const response = await testApi.get(`/product/${id}`)
      // const product = formatProductDetails(response.data)

      // productsDetailsLocal[id] = product

      // setLocalStorage("vm-productsDetails", {
      //   updateAt: new Date(),
      //   productsDetails: productsDetailsLocal
      // }, true)

      // return product
      
      //TODO: remove this lines when api is ready
      const product = formatProductDetails(productsDemoList.filter((product) => product.id === id)[0])

      productsDetailsLocal[id] = product

      setLocalStorage("vm-productsDetails", {
        updateAt: new Date(),
        productsDetails: productsDetailsLocal
      }, true)

      return product
    }

    let product = productsDetailsLocal[id]

    if (!product) {
      return {}
    }
    
    return formatProductDetails(product)
  }

  const addCart = async (data) => {
    //TODO: uncomment this lines when api is ready
    // const { data: dataResponse } = await testApi.post("/cart", data) /
    // setCartNumber(dataResponse.count)

    //TODO: remove this lines when api is ready
    console.log(data)
    setCartNumber((number) => number + 1 )
  }

  return {
    getProducts,
    getProduct,
    addCart
  }
}