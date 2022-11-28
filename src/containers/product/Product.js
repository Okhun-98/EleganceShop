import { useEffect } from "react"
import "./Product.css"

export const Product = () => {
    useEffect(() => getProducts(), [])

    const getProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        console.log(data)
    }
    return (
        <div className="product">
            <h1>Hello product</h1>
        </div>
    )
}