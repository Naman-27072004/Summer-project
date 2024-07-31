import '../Styles/footer.css'
function Footer() {
    return <div>
  <footer>
    <div className="footer">
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
            <a href="/account">My Account</a>
          </li>
          <li>
            <a href="/login">Login</a>/<a href="/signup">Register</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
          <li>
            <a href="/wishlist">Wishlist</a>
          </li>
          <li>
            <a href="/product">Shop</a>
          </li>
        </ul>
      </div>
      <div>
        <h5>Quick Link</h5>
        <ul>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/term">Terms Of Use</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
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
        <ul>
        <li>
          <a href="../../public/assets/e-commerce.png"><svg width="{24}" height="{24}">
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
      <div className='copy'>
      <p>© 2024 Company, Inc. All rights reserved.</p>
    </div>
    </div>
    
  </footer>
</div>

}
export default Footer;