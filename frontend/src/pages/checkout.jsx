import '../Styles/checkout.css'
// import { BsCreditCard2BackFill } from "react-icons/bs";
function Payment() {
    return <div className="billing-container">
        <div className="billing-details">
            <h1>Billing Details</h1>
            <form className="billing-form">
                <label htmlFor="firstName">First Name*</label><br />
                <input type="text" id="firstName" required size="50"/><br />

                <label htmlFor="streetAddress">Street Address*</label><br />
                <textarea type="text" id="streetAddress" required /><br />

                <label htmlFor="apartment">Apartment, floor, etc. (optional)</label><br />
                <textarea type="text" id="apartment" /><br />

                <label htmlFor="city">Town/City*</label><br />
                <input type="text" id="city" required size="50"/><br />

                <label htmlFor="phone">Phone Number*</label><br />
                <input type="tel" id="phone" required size="50"/><br />

                <label htmlFor="email">Email Address*</label><br />
                <input type="email" id="email" required size="50"/><br />

                <div className="save-info">
                    <input type="checkbox" id="saveInfo" />
                    <label htmlFor="saveInfo">
                        Save this information for faster check-out next time
                    </label>
                </div>
            </form>
        </div>

        <div className="order-summary">

            <div className="summary">
                <div className="subtotal">
                    <span>Subtotal:</span>
                    <span>$1750</span><hr />
                </div>
                <div className="shipping">
                    <span>Shipping:</span>
                    <span>Free</span><hr />
                </div>
                <div className="total">
                    <span>Total:</span>
                    <span>$1750</span>
                </div>
            </div>
            <div className="payment-methods">
                <div>
                    <input type="radio" id="bank" name="payment" />
                    <label htmlFor="bank"> UPI</label>
                </div>
                <div>
                    <input type="radio" id="bank" name="payment" />
                    <label htmlFor="bank"> Credit/Debit Card</label>
                </div>
                <div>
                    <input type="radio" id="bank" name="payment" />
                    <label htmlFor="bank"> Net Banking</label>
                </div>
                <div>
                    <input type="radio" id="cod" name="payment" defaultChecked />
                    <label htmlFor="cod"> Cash on delivery</label>
                </div>
            </div>
            <div className="coupon">
                <input type="text" placeholder="Coupon Code" />
                <button>Apply Coupon</button>
            </div>
            <button className="place-order">Place Order</button>
        </div>
    </div>
}
export default Payment;
{/* <img src='../../public/assets/UPI.png'/>
<img src='../../public/assets/visa.png'/>
<img src='../../public/assets/Amex.png'/>
<img src='../../public/assets/netb.png'/> */}