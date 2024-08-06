import '../Styles/premium.css'
function Premium() {
    return <div>
        <div className="membership-options_pp">
            <h1>Membership Options</h1>
            <p>Choose the plan thats right for you.</p>
            <div className="plans_pp">
                <div className="plan_pp">
                    <h2>Basic</h2>
                    <ul>
                        <li>✔ Feature 1</li>
                        <li>✔ Feature 2</li>
                        <li>✔ Feature 3</li>
                    </ul>
                    <p className="price_pp">$9.99<br /><span>per month</span></p>
                    <button>Subscribe Now</button>
                </div>
                <div className="plan_pp">
                    <h2>Premium</h2>
                    <ul>
                        <li>✔ Feature 1</li>
                        <li>✔ Feature 2</li>
                        <li>✔ Feature 3</li>
                        <li>✔ Feature 4</li>
                    </ul>
                    <p className="price_pp">$19.99<br /><span>per month</span></p>
                    <button>Subscribe Now</button>
                </div>
                <div className="plan_pp">
                    <h2>Unlimited</h2>
                    <ul>
                        <li>✔ Feature 1</li>
                        <li>✔ Feature 2</li>
                        <li>✔ Feature 3</li>
                        <li>✔ Feature 4</li>
                        <li>✔ Feature 5</li>
                    </ul>
                    <p className="price_pp">$29.99<br /><span>per month</span></p>
                    <button>Subscribe Now</button>
                </div>
            </div>
        </div>

    </div>
}
export default Premium