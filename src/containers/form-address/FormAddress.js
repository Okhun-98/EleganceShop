import { useState } from "react"
import "./FormAddress.css"

export const FormAddress = () => {
    const [form, setform] = useState({ clientName: "", phone: "", address: "" })

    const send = (event) => {
        event.preventDefault()
        console.log(form)
    }

    const handleChange = event => {
        setform({ ...form, [event.target.name]: event.target.value })
    };

    return (
        <div className="box-form-address">
            <form className="form-address">
                <h1 className="form-title">Shipping Address</h1>
                <label className="form-label">Your name</label>
                <input type="text" className="form-input" placeholder="Enter your name" required onChange={handleChange} name="clientName" />

                <label className="form-label">Your phone</label>
                <input type="phone" className="form-input" placeholder="Enter your phone" required onChange={handleChange} name="phone" />

                <label className="form-label">Your address</label>
                <input type="text" className="form-input" placeholder="Enter your address" required onChange={handleChange} name="address" />
                <button type="submit" className="form-btn" onClick={send}>Send</button>
            </form>
        </div>
    )

}