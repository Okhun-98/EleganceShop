import { Button } from "../../components/button/Button"
import bannerImg from "../../images/muslim1.jpeg"
import "./Banner.css"

export const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-data">
                <h1 className="banner-title">Make Your Orders</h1>
                <p className="banner-paragraph">You can increase the ovary or reduce or pay</p>
                <Button url="/basket" title="Go to basket" myStyle={{ marginLeft: "25px", width: "140px", height: "40px" }} />
            </div>
            <img className="banner-img" src={bannerImg} alt="Img of banner" />
        </div>
    )
}