import '../Styles/premium_c.css'
function Premium_c(){
    return<div>
        <div className="membership-options_pp">
            <h1>Membership Option</h1>
            <p>Happy costumer</p>
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
                        <li>✔ Upto 10% extra discount on all products</li>
                        <li>✔ Daily and hourly offers for premium members</li>
                        <li>✔ Early access to all the offers and sales</li>
                        <li>✔ 24/7 support</li>
                        <li>✔ Get a cashback on every order</li><hr/>
                    </ul>
                    <p className="price_pp">₹ 499<br /><span>per month</span></p>
                    <button><a href='/checkout'>Subscribe Now</a></button>
                    
                </div>
            </div>
        </div>
    </div>
}
export default Premium_c