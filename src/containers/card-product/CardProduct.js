import "./CardProduct.css"
import { Button } from "../../components/button/Button"

export const CardProduct = ({ product }) => {
    return (
        <div className="card-product">
            <img className="card-image" src={product?.image} />
            <span className="card-price" >{product?.price} PLN </span>
            <h4 className="card-title" >{product?.title?.slice(0, 17)}</h4>
            <p className="card-description" >{product?.description?.slice(0, 60)}</p>
            <Button myStyle={{ width: "100%" }} title="Add to basket" />
        </div>
    )
}