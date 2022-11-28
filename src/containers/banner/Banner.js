import { useState } from "react"
import { Button } from "../../components/button/Button"
import image from "../../images/muslim1.jpeg"
import "./Banner.css"

export const Banner = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="banner">
            <div className="banner-data">
                <h1 className="banner-title">Make Your Orders {count}</h1>
                <p className="banner-paragraph">You can increase the ovary or reduce or pay</p>
                <Button url="/basket" title="Go to basket" myStyle={{ marginLeft: "25px" }} />
                <Button title="Minus" myClick={() => setCount(count - 1)} myStyle={{ marginLeft: "25px", backgroundColor: "red", marginTop: "10px" }} />
                <Button title="Plus" myClick={() => setCount(count + 1)} myStyle={{ marginLeft: "25px", backgroundColor: "green", marginTop: "10px" }} />

            </div>
            <img className="banner-img" src={image} />
        </div>
    )
}