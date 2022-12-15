import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../context/Context"
import "./Navbar.css"

export function Navbar() {
    const { valueBasket, setValueBasket } = useContext(Context)
    return (
        <div className="navbar">
            <Link className="link" to="/">Home </Link>
            <Link className="link" to="basket">Basket <span className="count-basket">{valueBasket?.length}</span></Link>
        </div>
    )
}