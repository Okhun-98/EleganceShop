import "./FormAddress.css"

export const FormAddress = () => {
    const send = (event) => {
        event.preventdefault()
        console.log("sends")
    }
    return (
        <div className="box-form-address">
            <form className="form-address">
                <h1 className="form-title">Shipping Address</h1>
                <label className="form-label">Your name</label>
                <input type="text" className="form-input" placeholder="Enter your name" required />

                <label className="form-label">Your phone</label>
                <input type="phone" className="form-input" placeholder="Enter your phone" required />

                <label className="form-label">Your address</label>
                <input type="text" className="form-input" placeholder="Enter your address" required />
                <button type="submit" className="form-btn" onClick={send}>Send</button>
            </form>
        </div>
    )

}