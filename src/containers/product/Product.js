import { useEffect, useState } from "react"
import { CardProduct } from "../card-product/CardProduct"
import "./Product.css"

export const Product = () => {
    const [products, setProducts] = useState([])
    useEffect(() => { getProducts() }, [])

    const getProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        setProducts(data)
    }
    return (
        <div className="products">
            {products?.map((product) => {
                return <CardProduct key={product?.id} product={product} />
            })}
        </div>
    )
}