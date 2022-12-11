import { Route, Routes } from "react-router-dom"
import { Basket } from "../pages/basket/Basket"
import { DetailProduct } from "../pages/detail-product/DetailProduct"
import { Home } from "../pages/home/Home"

export const Router = () => {
    return (
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<DetailProduct />} path="/detail/product/:id" />
            <Route element={<Basket />} path="/basket" />
            <Route element={<Home />} path="*" />
        </Routes>
    )
}