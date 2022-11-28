import { Banner } from "../../containers/banner/Banner"
import { Product } from "../../containers/product/Product"
import "./Home.css"

export function Home() {
    return (
        <div>
            <Banner />
            <Product />
        </div>
    )
}