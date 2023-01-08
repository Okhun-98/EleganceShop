import { useContext, useState } from "react"
import { Button } from "../../components/button/Button"
import { FormAddress } from "../../containers/form-address/FormAddress"
import { Context } from "../../context/Context"
import "./Basket.css"

export const Basket = () => {
    const { valueBasket, setValueBasket } = useContext(Context)
    const [isOpenForm, setIsOpenForm] = useState(false)

    const deleteProduct = (index) => {
        valueBasket?.splice(index, 1)
        setValueBasket([...valueBasket])
    }

    return (
        <div className="basket">
            {valueBasket?.length ? valueBasket?.map((product, index) => {
                return (
                    <div className="basket-card" key={product?.id + index}>
                        <img className="basket-image" src={product?.image} />
                        <div className="basket-data">
                            <h1 className="basket-title">{product?.title?.slice(0, 18)}</h1>
                            <Button title="DELETE" myClick={() => deleteProduct(index)} myStyle={{ width: "140px", height: "40px" }} />
                        </div>
                    </div>
                )
            }) : <h1 className="error-message">No product in basket...</h1>}
            {isOpenForm && <FormAddress setIsOpenForm={setIsOpenForm} />}
            {valueBasket?.length && <div className="btn-buy">
                <Button title="TO BUY" myClick={() => setIsOpenForm(true)} myStyle={{ backgroundColor: "green", width: "100px", height: "30px" }} />
            </div>}
        </div>
    )
}