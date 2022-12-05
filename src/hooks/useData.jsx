import { useContext } from "react"
import { testApi } from "../api/testApi"
import { CartContext } from "../context/CartContext"
import { productsDemoList } from "../data/demoData"


export const useData = () => {

  const { setCartNumber } = useContext(CartContext)

  const getProducts = async () => {
    
    const isExpiredDate = false

    if(isExpiredDate){
      const response = await testApi.get("/product")
      console.log(response);
      return response.data
    }

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

  const getProduct = async (id) => {

    const isExpiredDate = false

    if(isExpiredDate){
      const response = await testApi.get(`/product/${id}`)
      console.log(response);
      return response.data
    }

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

  const addCard = async (data) => {

    // const { data } = await testApi.post("/cart", data)
    // setCartNumber(data.count)
    console.log(data)
    setCartNumber(num => num + 1)
  }


  return {
    getProducts,
    getProduct,
    addCard
  }
}