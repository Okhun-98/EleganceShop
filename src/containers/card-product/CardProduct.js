import "./CardProduct.css"
import { Button } from "../../components/button/Button"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../../context/Context"

export const CardProduct = ({ product }) => {
    const { valueBasket, setValueBasket } = useContext(Context)

    const addToBasket = (productBuy) => {
        setValueBasket([...valueBasket, productBuy])
    }
    return (
        <div className="card-product">
            <Link to={"/detail/product/" + product?.id}>
                <img className="card-image" src={product?.image} alt="this is our product card img" />
            </Link>
            <span className="card-price" >{product?.price} PLN </span>
            <h4 className="card-title" >{product?.title?.slice(0, 17)}</h4>
            <p className="card-description" >{product?.description?.slice(0, 60)}</p>
            <Button myStyle={{ width: "100%" }} title="Add to basket" myClick={() => addToBasket(product)} />
        </div>
    )
}