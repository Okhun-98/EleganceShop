import { Link } from "react-router-dom"
import "./Button.css"

export const Button = ({ title, myStyle, url, myClick }) => {
    return <Link onClick={myClick ? myClick : ""} to={url ? url : ""} style={myStyle} className="btn">{title}</Link>
}