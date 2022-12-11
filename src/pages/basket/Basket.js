import { useContext } from "react"
import { Context } from "../../context/Context"
import "./Basket.css"

export const Basket = () => {
    const { valueBasket, setValueBasket } = useContext(Context)

    return (
        <div>
            {valueBasket?.map((product) => {
                return (
                    <div>
                        <h1>{product?.title}</h1>
                    </div>
                )
            })}
        </div>
    )
}