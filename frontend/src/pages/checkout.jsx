import { useState } from "react";
import "../Styles/checkout.css";
// import { BsCreditCard2BackFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Payment() {
  const [name, setName] = useState();
  const [street, setStreet] = useState();
  const [floor, setFloor] = useState();
  const [city, setCity] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [c_code, setCouponCode] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/checkout", {
        name,
        street,
        floor,
        city,
        phone,
        email,
        c_code,
      })
      .then((result) => {
        console.log(result);
        navigate("/order");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="billing-container">
      <div className="billing-details">
        <div className="billing-form">
          <h1>Billing Details</h1>
          <label htmlFor="firstName">First Name*</label>
          <br />
          <input
            type="text"
            id="firstName"
            required
            size="50"
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <label htmlFor="streetAddress">Street Address*</label>
          <br />
          <textarea
            type="text"
            id="streetAddress"
            required
            onChange={(e) => setStreet(e.target.value)}
          />
          <br />

          <label htmlFor="apartment">Apartment, floor, etc. (optional)</label>
          <br />
          <textarea
            type="text"
            id="apartment"
            onChange={(e) => setFloor(e.target.value)}
          />
          <br />

          <label htmlFor="city">Town/City*</label>
          <br />
          <input
            type="text"
            id="city"
            required
            size="50"
            onChange={(e) => setCity(e.target.value)}
          />
          <br />

          <label htmlFor="phone">Phone Number*</label>
          <br />
          <input
            type="tel"
            id="phone"
            required
            size="50"
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />

          <label htmlFor="email">Email Address*</label>
          <br />
          <input
            type="email"
            id="email"
            required
            size="50"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <div className="save-info">
            <input type="checkbox" id="saveInfo" />
            <label htmlFor="saveInfo">
              Save this information for faster check-out next time
            </label>
          </div>
        </div>
        <div className="order-summary">
          <div className="summary">
            <div className="subtotal">
              <span>Subtotal:</span>
              <span>$1750</span>
              <hr />
            </div>
            <div className="shipping">
              <span>Shipping:</span>
              <span>Free</span>
              <hr />
            </div>
            <div className="total">
              <span>Total:</span>
              <span>$1750</span>
            </div>
          </div>
          <div className="payment-methods">
            <div>
              <div className="p-methods ">
                <input type="radio" id="bank" name="payment" />
                <label htmlFor="bank"> UPI</label>
              </div>

              <div>
                <div className="p_m">
                  <p>How would you like to use UPI?</p>
                  <div className="b_m">
                    <div className="b_m1">
                      <button>Qr code</button>
                    </div>
                    <div className="b_m2">
                      <button>Enter UPI ID</button>
                    </div>
                  </div>
                  <br />
                  <span>Complete your payment</span>
                  <div>
                    <label>Enter UPI ID/VPA</label>
                    <br />
                    <div className="i_m">
                      <input type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="p-methods ">
                <input type="radio" id="bank" name="payment" />
                <label htmlFor="bank"> Credit/Debit Card</label>
              </div>

              <div className="p_m">
                <div className="p_m1">
                  <label>Card number</label>
                  <br />
                  <input type="number" placeholder="Card number" />
                  <div className="c_m">
                    <div className="c_m1">
                      <label>Expiry date</label>
                      <br />
                      <input type="number" placeholder="Expiry date" />
                    </div>
                    <div className="c_m2">
                      <label>CVC/CVV</label>
                      <br />
                      <input type="number" placeholder="CVC/CVV" />
                    </div>
                  </div>
                  <label>Name on card</label>
                  <br />
                  <input type="text" placeholder="Name on card" />
                  <br />
                </div>
                <input type="checkbox" className="checkbox" />
                <label>Securely save this card for my later purchase</label>
              </div>
            </div>
            <div>
              <div className="p-methods ">
                <input type="radio" id="bank" name="payment" />
                <label htmlFor="bank"> Net Banking</label>
              </div>

              <div className="p_m">
                <p>
                  In order to complete your transaction, we will transfer you
                  over to Adyens secure servers.
                </p>
                <select>
                  <option value="Select your bank">Select your bank</option>
                  <option value="SBI">SBI</option>
                  <option value="PNB">PNB</option>
                  <option value="HDFC">HDFC</option>
                  <option value="ICICI">ICICI</option>
                  <option value="AXIS">AXIS</option>
                  <option value="YES">YES</option>
                  <option value="IDFC">IDFC</option>
                  <option value="FEDERAL">FEDERAL</option>
                  <option value="CANARA">CANARA</option>
                  <option value="BANK OF BARODA ">BANK OF BARODA </option>
                  <option value="UNION BANK OF INDIA">
                    UNION BANK OF INDIA
                  </option>
                  <option value="INDIAN BANK">INDIAN BANK</option>
                  <option value="BANK OF INDIA">BANK OF INDIA</option>
                  <option value="CENTRAL BANK OF INDIA">
                    CENTRAL BANK OF INDIA
                  </option>
                  <option value="CENTRAL BANK OF INDIA">
                    CENTRAL BANK OF INDIA
                  </option>
                  <option value="BANK OF MAHARASHTRA ">
                    BANK OF MAHARASHTRA{" "}
                  </option>
                  <option value="KOTAK MAHINDRA">KOTAK MAHINDRA</option>
                  <option value="INDUSLND">INDUSLND</option>
                  <option value="TAMIL NADU ">TAMIL NADU </option>
                  <option value="AU SMALL FINANCE">AU SMALL FINANCE</option>
                </select>
              </div>
            </div>
            <div>
              <div className="p-methods ">
                <input type="radio" id="cod" name="payment" defaultChecked />
                <label htmlFor="cod"> Cash on delivery</label>
              </div>
            </div>
          </div>
          <div className="coupon">
            <input
              type="text"
              placeholder="Coupon Code"
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button>Apply Coupon</button>
          </div>
          <button className="place-order" onClick={handleSubmit}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
export default Payment;
{
  /* <img src='../../public/assets/UPI.png'/>
<img src='../../public/assets/visa.png'/>
<img src='../../public/assets/Amex.png'/>
<img src='../../public/assets/net_b.png'/> */
}