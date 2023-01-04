import { useState } from "react"
import "./FormAddress.css"

export const FormAddress = ({ valueBasket }) => {
    const [form, setform] = useState({ userName: "", phone: "", address: "" })
    const tokenBot = "5951566489:AAGA6-XnulzlgG1eukRTn2NSm5hvvI-6KZ4"
    const url = "https://api.telegram.org/bot" + tokenBot + "/sendMessage"

    const send = async (event) => {
        event.preventDefault()
        console.log(form)
        console.log(valueBasket)
        const message = `<b>Hello world</b>`
        await fetch(url,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    text: message,
                    chat_id: "-1001431452062",
                    parse_mode: "html"
                })
            })
    }

    const handleChange = event => {
        setform({ ...form, [event.target.name]: event.target.value })
    };

    return (
        <div className="box-form-address">
            <form className="form-address">
                <h1 className="form-title">Shipping Address</h1>
                <label className="form-label">Your name</label>
                <input type="text" className="form-input" placeholder="Enter your name" required onChange={handleChange} name="userName" />

                <label className="form-label">Your phone</label>
                <input type="phone" className="form-input" placeholder="Enter your phone" required onChange={handleChange} name="phone" />

                <label className="form-label">Your address</label>
                <input type="text" className="form-input" placeholder="Enter your address" required onChange={handleChange} name="address" />
                <button type="submit" className="form-btn" onClick={send}>Send</button>
            </form>
        </div>
    )

}