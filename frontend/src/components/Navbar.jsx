import "../Styles/navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <navbar>
        <nav>
          <div></div>
          <div className="nav-bar">
            <span className="bold-nav">Exclusive</span>
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
                <img src="../../public/assets/search.png" alt="search logo" className="search-logo" />
              </a>
            </button>
            </div>
            <button>
              <a href="/wishlist">
                <img
                  src="../../public/assets/e-commerce.png"
                  alt="wishlist logo"
                />
              </a>
            </button>
            <button>
              <a href="/cart">
                <img
                  src="../../public/assets/shopping-cart.png"
                  alt="shopping cart logo"
                />
              </a>
            </button>
            <button>
              <a href="/account">
                <img src="../../public/assets/user.png" alt="user logo" />
              </a>
            </button>
          </div>
        </nav>
      </navbar>
    </div>
  );
}
export default Navbar;
