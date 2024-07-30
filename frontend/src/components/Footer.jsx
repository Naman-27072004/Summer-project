function Footer() {
    return <div>
  <footer>
    <div>
      <div>
        <h5>Support</h5>
        <ul>
          <li>address</li>
          <li>email</li>
          <li>phone. number.</li>
        </ul>
      </div>
      <div>
        <h5>Account</h5>
        <ul>
          <li>
            <a href="../pages/account.jsx">My Account</a>
          </li>
          <li>
            <a href="../pages/login.jsx">Login</a>/<a href="../pages/signup.jsx">Register</a>
          </li>
          <li>
            <a href="../pages/cart.jsx">Cart</a>
          </li>
          <li>
            <a href="../pages/wishlist.jsx">Wishlist</a>
          </li>
          <li>
            <a href="../pages/product.jsx">Shop</a>
          </li>
        </ul>
      </div>
      <div>
        <h5>Quick Link</h5>
        <ul>
          <li>
            <a href="../pages/privacy.jsx">Privacy Policy</a>
          </li>
          <li>
            <a href="../pages/term.jsx">Terms Of Use</a>
          </li>
          <li>
            <a href="../pages/faq.jsx">FAQ</a>
          </li>
          <li>
            <a href="../pages/contact.jsx">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <form>
          <h5>Subscribe</h5>
          <p>Get 10% off your first order</p>
          <div>
            <input id="newsletter1" type="text" placeholder="Enter Your Email" />
            <button type="button"><i></i></button>
          </div>
        </form>
      </div>
    </div>
    <div>
      <p>© 2024 Company, Inc. All rights reserved.</p>
      <ul>
        <li>
          <a href="#"><svg width="{24}" height="{24}">
              <use /></svg></a>
        </li>
        <li>
          <a href="#"><svg width="{24}" height="{24}">
              <use /></svg></a>
        </li>
        <li>
          <a href="#"><svg width="{24}" height="{24}">
              <use /></svg></a>
        </li>
      </ul>
    </div>
  </footer>
</div>

}
export default Footer;