import '../Styles/premium_s.css'
function Premium_s() {
    return <div>
        <div className="membership-options_pp">
            <h1>Membership Option</h1>
            <p>We welcome sellers like you</p>
            <div className="plans_pp">
                {/* <div className="plan_pp">
                    <h2>Basic</h2>
                    <ul>
                        <li>✔ Feature 1</li>
                        <li>✔ Feature 2</li>
                        <li>✔ Feature 3</li><hr/>
                    </ul>
                    <p className="price_pp">₹900.99<br /><span>per month</span></p>
                    <button>Subscribe Now</button>
                </div>
                <div className="plan_pp">
                    <h2>Premium</h2>
                    <ul>
                        <li>✔ Feature 1</li>
                        <li>✔ Feature 2</li>
                        <li>✔ Feature 3</li>
                        <li>✔ Feature 4</li><hr/>
                    </ul>
                    <p className="price_pp">₹1900.99<br /><span>per month</span></p>
                    <button>Subscribe Now</button>
                </div> */}
                <div className="plan_pp">
                    <h2>Premium</h2>
                    <ul>
                        <li>✔ Sell unlimited Products</li>
                        <li>✔ Less transaction fees</li>
                        <li>✔ 24/7 support</li>
                        <li>✔ Discount codes</li>
                        <li>✔ Multiple inventory locations</li><hr/>
                    </ul>
                    <p className="price_pp">₹ 999<br /><span>per month</span></p>
                    <button><a href='/s_signup'>Subscribe Now</a></button><br/>
                    <a href='/s_p_info'>Full list of Feature</a>
                </div>
            </div>
        </div>

    </div>
}
export default Premium_s