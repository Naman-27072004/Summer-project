import "../Styles/navbar.css";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

function Navbar() {
  return (
    <div className="navbar">
      <navbar>
        <nav>
          <div></div>
          <div className="nav-bar">
          <img src="assets/Tech_Bazar_wh.png" alt=""/>
            <div>
              <a href="/">Home</a>
            </div>
            <div>
              <a href="/contact">Contact</a>
            </div>
            <div>
              <a href="/about">About</a>
            </div>
            <div>
              <a href="/signup">Sign Up</a>
            </div>
            <div className="search-bar">
            <input
              type="text"
              placeholder="What are you looking for?"
              size="30"
            />
            <button>
              <a>
              <CiSearch size={25}/>
              </a>
            </button>
            </div>
            <button>
              <a href="/wishlist">
                <CiHeart size={25}/>
              </a>
            </button>
            <button>
              <a href="/cart">
                <CiShoppingCart size={25}/>
              </a>
            </button>
            <button>
              <a href="/account">
                <CiUser size={25}/>
              </a>
            </button>
          </div>
        </nav>
      </navbar>
    </div>
  );
}
export default Navbar;
