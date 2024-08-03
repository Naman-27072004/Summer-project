import "../Styles/footer.css";
import { LuSendHorizonal } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
function Footer() {
  return (
    <div>
      <footer>
        <div className="footer">
          <div>
            <h5>Support</h5>
            <ul>
              <li>Remote</li>
              <li>techbazaar2025@gmail.com</li>
              <li>+91 9999999999 </li>
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
                <a href="/refund">Refund Policy</a>
              </li>
              <li>
                <a href="/shipping">Shipping Policy</a>
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
              <div className="send-bar">
                <input
                  id="newsletter1"
                  type="text"
                  placeholder="Enter Your Email"
                  className="send-email"
                />
                <button type="button">
                  <LuSendHorizonal size={20} />
                </button>
              </div>
            </form>
            <div >
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com/share/77wPKKHPbhiJtyMi/?mibextid=qi2Omg" target="_blank">
                    <FaFacebookF size={25} />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/TechBazaar2025?t=WkQZy0CHM7ImWD2YAU7Daw&s=08" target="_blank">
                    <CiTwitter size={25} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/techbazaar2025?igsh=cGc3aGRmMzRyc25t" target="_blank">
                    <FaInstagram size={25} />
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com/@techbazaar2025?si=6YhKNWAoVp62zLZ_" target="_blank">
                  <CiYoutube size={25} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copy">
            <p>© 2024 Company, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
