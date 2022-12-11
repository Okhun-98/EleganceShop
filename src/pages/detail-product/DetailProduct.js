import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Button } from "../../components/button/Button"
import "./DetailProduct.css"

export const DetailProduct = () => {
    const params = useParams()
    const [product, setProduct] = useState()

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const response = await fetch("https://fakestoreapi.com/products/" + params?.id)
        const data = await response.json()
        setProduct(data)
        console.log(data)
    }
    return (
        <div className="detail-product" >
            <img className="detail-image" src={product?.image} />
            <div className="detail-data">
                <h4 className="detail-title">{product?.title}</h4>
                <span className="detail-price">{product?.price} PLN</span>
                <p className="detail-description">{product?.description}</p>
                <Button myStyle={{ backgroundColor: "black" }} title="Add to busket" />
            </div>
        </div>
    )
}