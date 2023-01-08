import { useContext, useState } from "react"
import { Context } from "../../context/Context"
import "./FormAddress.css"

export const FormAddress = ({ setIsOpenForm }) => {
    const { valueBasket, setValueBasket } = useContext(Context)
    const [form, setform] = useState({ userName: "", phone: "", address: "" })
    const tokenBot = "5951566489:AAGA6-XnulzlgG1eukRTn2NSm5hvvI-6KZ4"
    const url = "https://api.telegram.org/bot" + tokenBot + "/sendMessage"

    const send = async (event) => {
        event.preventDefault()
        const message = `
        <b>Data Client</b>
        Name: ${form?.userName}
        Phone: ${form?.phone}
        Address: ${form?.address}
 <b>Purches</b>
        ${valueBasket?.map((item, index) => {
            return `${index + 1}: ${item?.title}\n`
        }).join(" ")}
        `
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

        setTimeout(() => {
            setValueBasket([])
            window.location.href = "/"
        }, 2000)
    }

    const handleChange = event => {
        setform({ ...form, [event.target.name]: event.target.value })
    };

    return (
        <div className="box-form-address">
            <form className="form-address">
                <h1 className="form-title">Shipping Address</h1>
                <h3 className="form-close-modal" onClick={() => setIsOpenForm(false)}>+</h3>
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