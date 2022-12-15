import { useContext } from "react"
import { Button } from "../../components/button/Button"
import { Context } from "../../context/Context"
import "./Basket.css"

export const Basket = () => {
    const { valueBasket, setValueBasket } = useContext(Context)

    const deleteProduct = (index) => {
        valueBasket?.splice(index, 1)
        setValueBasket([...valueBasket])
        // const results = valueBasket.filter((product, i) => {
        //     if (index !== i) {
        //         return product
        //     }
        // })

        // setValueBasket(results)
    }

    return (
        <div className="basket">
            {valueBasket?.length ? valueBasket?.map((product, index) => {
                return (
                    <div className="basket-card" key={product?.id + index}>
                        <img className="basket-image" src={product?.image} />
                        <h1 className="basket-title">{product?.title?.slice(0, 18)}</h1>
                        <Button title="DELETE" myClick={() => deleteProduct(index)} />
                    </div>
                )
            }) : <h1 className="error-message">No product in basket...</h1>}
        </div>
    )
}